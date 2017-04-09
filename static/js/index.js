$(function() {
  localStorage.clear();
  $('#hiddenform').hide();
  $('searchbar').autocomplete({
    source:function(request, response) {
      console.log(request.term);
      response('hello');
    }
  });
  createFormButton();
  createAddButton();
  populateTimeline();
});
function createFormButton() {
  var button = $('#formbutton');
  button.click(function() {
    if($('#hiddenform').is(":visible")) {
      $('#hiddenform').hide(600);
    } else {
      $('#hiddenform').show(600);
    }
  });
}
function createAddButton() {
  var button = $('#addbutton');
  button.click(function(e) {
    e.preventDefault();
    addDrugToTimeline();
    $('#hiddenform').hide(600);
  });
}
function addDrugToTimeline() {
  var sdate = $('#DrugStartDate').val().split('-');
  var y = sdate[0];
  var m = sdate[1];
  var d = sdate[2];
  sdate = [m,d,y].join('/');

  asdate = $('#DrugEndDate').val().split('-');
   ay = asdate[0];
   am = asdate[1];
   ad = asdate[2];
  asdate = [am,ad,ay].join('/');
  var insert = {
    drug_name : $('#autocomplete-input').val(),
    drug_dose : $('#DrugDose').val(),
    drug_start_date: sdate,
    drug_end_date : asdate,
    drug_type : $('#DrugType').val(),
    cancer_type : $('#CancerType').val(),
    symptoms : $('#symptoms').val(),
    cancer_stage : $('#CancerStage').val()
  }
  // console.log(insert);
  insert = JSON.stringify(insert);
  localStorage.setItem('added', insert);
  populateTimeline(true);
  localStorage.clear();
}
function populateTimeline(add=false) {
  //if user added more stuff
  var added;
  if(add) {
    added = localStorage.getItem('added');
    added = [JSON.parse(added)];
  }
  var fda = "https://api.fda.gov/drug/label.json?api_key=hTalDjZarYTGCDZn30I8CKryMJWGELzzTmvmXbHE&search="
  var url = "http://localhost:5000/getDrugs";
  var getPromises = fetch(url)
  .then(function(data) {
    return data.json();
  }).then(function(array) {
    var data = array.data;
    // console.log(array);
    data = data.map(function(obj) {
      var x = {};
      x["drug_name"] = obj[0];
      x.drug_type = obj[1];
      x.drug_start_date = obj[2];
      x.drug_dose = obj[3];
      x.symptoms = obj[4];
      x.drug_end_date = obj[5];
      x.cancer_type = obj[6];
      x.cancer_stage = obj[7];
      return x;
    });
    if(add) {
      data = data.concat(added);
      // console.log('data', data);
    }
    return data;
  }).then(function(objects) {
    // console.log(objects);
    //create an array of promises
    return objects.map(function(o) {
      // console.log(o);
      var name = o.drug_name;

      var querystring = `(brand_name%3A%22${name}%22%20%20%20generic_name%3A%22${name}%22%20)`;
      return getDrugByQuery(querystring, o);
    });
  }).then(function(array) {
    return Promise.all(array)
  }).then(results => {
    // check for conflicts
    console.log(results);
    var conflict = [];
    var array = results;
    for(var i = 0; i < array.length; ++i) {
      for(var j = i+1; j < array.length; ++j) {
        var drugA = array[i].drug.drug_name;
        var drugB = array[j].drug.drug_name;
        if(!array[i].result.drug_interactions ||
          !array[j].result.drug_interactions) {
            continue;
          }
        var a_interaction = array[i].result.drug_interactions[0];
        var b_interaction = array[j].result.drug_interactions[0];
        if(a_interaction.includes(drugB) || b_interaction.includes(drugA)) {
          // console.log("drugA", drugA);
          // console.log("drugB", drugB);
          array[i].interaction.push(array[j]);
          array[j].interaction.push(array[i]);
        }
      }
    }
    var colors = [ "#c5e5ea","#b1dde3","#9cd8df", "#86cfd6","#71c8d0" ];
    var events = results.map(function(x) {
      var a = {};
      var start_date = splitDate(x.drug.drug_start_date);
      var end_date = splitDate(x.drug.drug_end_date);
      var stage = parseInt(x.drug.cancer_stage);
      // a.background = {color:colors[stage - 1]};
      a.start_date = {year:start_date[2], month:start_date[0]};
      a.end_date = {year:end_date[2], month:end_date[0]};
      if(x.error == undefined) {
        var d = x.result.description;
        var desc = 'No Description Found.';
        if(d) {
          desc = d[0];
          if(desc.indexOf('DESCRIPTION') >= 0) {
            desc = desc.slice(desc.indexOf('DESCRIPTION') + 11);
          }
          var pos = desc.indexOf(". ");
          if( pos != -1 ) {
            desc = desc.substring(0, pos + 1);
          } else {
            desc = desc.substring(0, 80) + "...";
          }
        }

        var interactions = "None Found.";
        if(x.interaction.length > 0) {
          var wrapped = x.interaction.map(x => {
            // console.log(x);
            return `<div class='tooltip'>${x.drug.drug_name},
            <span class='tooltiptext'>${x.result.drug_interactions[0]}</span></div>`
          });
          interactions = wrapped
        }
        var danda = "None Found.";
        if(x.result.dosage_and_administration.length > 0) {
          danda = x.result.dosage_and_administration;
        }
        a.text = {
          headline:x.drug.drug_name,
          text:`<div style="width:50%;float:left">
          <p style="height:30%;overflow:hidden;">${desc}</p>
          <strong>Dosage & Administration</strong>
          <div style="overflow-y:scroll;height:90px;">
          <p>${danda}</p>
          </div>
          <br>
          <strong style="padding-top:5px;">Interactions with other drugs you are taking</strong>
          <p>${interactions}</p>
          </div>
          <div style="width:50%;float:left;">
          <table>
          <tr>
          <th>Drug Type</th>
          <th>${x.drug.drug_type}</th>
          </tr>
          <tr>
          <th>Drug Dose</th>
          <th>${x.drug.drug_dose}</th>
          </tr>
          <tr>
          <th>Cancer Type</th>
          <th>${x.drug.cancer_type}</th>
          </tr>
          <tr>
          <th>Cancer Stage</th>
          <th>${x.drug.cancer_stage}</th>
          </tr>
          <tr>
          <th>Symptoms</th>
          <th>${x.drug.symptoms}</th>
          </tr>
          </table>
          <h3>
          </div>`
        };
      }
      return a;
    });
    var json = {events: events};
    var timeline = new TL.Timeline('timeline-embed',json);
  });
  // $.when.apply( null, array ).then(function(a,b) {
  //   console.log(a,b) });

  // var events = [];
  // for(var i = 0; i < 10; ++i) {
  //   events.push({});
  //   events[i].start_date = {year:2000 + i, month: i};
  //   events[i].end_date = {year:2005 + i, month: i};;
  //   events[i].text = {headline: "Drug: " + i, text: "drug description here" + i};
  //   events[i].media = {
  //     url:"<iframe src='https://www.w3schools.com'></iframe>"
  //   }
  // }
  // var json = {events:events};
  // var timeline = new TL.Timeline('timeline-embed',json);
}
//split mm/dd/yyyy into array of 3 nums
function splitDate(date) {
  return date.split("/");
}
function getDrugByQuery(query, drug) {
  return fetch("https://api.fda.gov/drug/label.json?api_key=hTalDjZarYTGCDZn30I8CKryMJWGELzzTmvmXbHE&search=" + query)
  .then(function(response) {
    // Examine the text in the response
    return response.json();
  }).then(function(json) {
    //  console.log('json', json);
    if(json.results.length > 0) {
      return {result:json.results[0], drug:drug, interaction:[]};
    }
    return {error:`${drug.drug_name} is not found in FDA database`, drug:drug}
  }).catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

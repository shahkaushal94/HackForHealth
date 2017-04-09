$(function(){
  populateTimeline();
});

function populateTimeline() {
  var fda = "https://api.fda.gov/drug/label.json?api_key=hTalDjZarYTGCDZn30I8CKryMJWGELzzTmvmXbHE&search="
  var url = "http://localhost:5000/getDrugs";
  var getPromises = fetch(url)
  .then(function(data) {
    return data.json();
  }).then(function(array) {
    // console.log(array);
    return array.data.map(function(obj) {
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
    var events = results.map(function(x) {
      console.log(x);
      var a = {};
      var start_date = splitDate(x.drug.drug_start_date);
      var end_date = splitDate(x.drug.drug_end_date);
      a.start_date = {year:start_date[2], month:start_date[0]};
      a.end_date = {year:end_date[2], month:end_date[0]};
      if(x.error == undefined) {
        a.text = {
          headline:x.drug.drug_name,
          text:`<div style="width:50%;float:left">
          <p style="height:30%;overflow:hidden;">${x.result.description[0].slice(15)}</p>
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
      return {result:json.results[0], drug:drug};
    }
    return {error:`${drug.drug_name} is not found in FDA database`, drug:drug}
  }).catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

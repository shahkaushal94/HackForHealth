$(function(){
  populateTimeline();
})

function populateTimeline() {
  var events = [];
  var story = [{
    start_date: { year: }
  }];
  for(var i = 0; i < 10; ++i) {
    events.push({});
    events[i].start_date = {year:2000 + i, month: i};
    events[i].end_date = {year:2005 + i, month: i};;
    events[i].text = {headline: "Drug: " + i, text: "drug description here" + i};
    events[i].media = {
      url:"<iframe src='https://www.w3schools.com'></iframe>"
    }
  }
  var json = {events:events};
  var timeline = new TL.Timeline('timeline-embed',json);
}

// apikey = hTalDjZarYTGCDZn30I8CKryMJWGELzzTmvmXbHE
function getDrugByQuery(query, value) {
  $.ajax({
    url:"https://api.fda.gov/drug/label.json?search=" + query + ":" + value,
    type:"GET",
    success:function(data) {
      console.log(data);
    },
    error: function(j, error) {
      console.error(error);
    }
  });
}

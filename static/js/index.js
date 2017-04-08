$(function(){
  populateTimeline();
})

function populateTimeline() {
  var events = [];
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

// tylenol is 70750644-b56c-41fd-b524-15a72d292170
// aspirin is 8244057c-8522-4871-8576-a15b9583cbb7
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

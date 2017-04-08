$(function() {
$('.datepicker').pickadate({
	selectMonths: true, // Creates a dropdown to control month
	selectYears: 15 // Creates a dropdown of 15 years to control year
});
var apikey = "hTalDjZarYTGCDZn30I8CKryMJWGELzzTmvmXbHE";
$('#autocomplete-input')[0]
.autocomplete({
	source: function(request, response) {
		$.ajax({
			url:"https://api.fda.gov/drug/label.json?search=openfda.brand_name:tylenol",
			success:function(data) {

				response($.map(data.results, function(el, index) {
					var drugname;
					if(el.openfda) {
						var generic = el.openfda.generic_name;
						var brand = el.openfda.brand_name;
						drugname = brand + " (" + generic + ")"; 
					}
					return {
						value:drugname
					}
				}));
			},
			error: function(j, error) {
				console.error(error);
			}
		})
	},
	limit: 5, // The max amount of results that can be shown at once. Default: Infinity.
	onAutocomplete: function(val) {
	// Callback function when value is autcompleted.
	},
	minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
});
});
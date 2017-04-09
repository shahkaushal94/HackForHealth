var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr",
  "method": "POST",
  "headers": {
    "language": "unk",
    "detectorientation": "true",
    "content-type": "application/json",
    "ocp-apim-subscription-key": "2077437d423a4d44a0a0c8fe2358118b",
    "cache-control": "no-cache"
    },
  "processData": false,
  "data": "{\"url\":\"https://www.stupid.com/assets/images/prescription_pill_bottle_koozie_2.jpg\"}"
}
$.ajax(settings).done(function (response) {
  console.log(JSON.stringify(response));
});

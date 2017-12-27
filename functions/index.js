const functions = require('firebase-functions');

exports.oauth2Redirect = functions.https.onRequest((request, response) => {
  response.send();
});

exports.dialogFlowWebhook = functions.https.onRequest((request, response) => {
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  response.json({
    speech: "hello from webhook",
    displayText: "hello fromn webhook",
    source: "augury"
  });
});
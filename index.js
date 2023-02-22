const wppconnect = require("@wppconnect-team/wppconnect");

wppconnect
  .create()
  .then((client) => start(client))
  .catch((error) => console.log(error));

function start(client) {
  client.onMessage((message) => {
    if (message.body != "") {
      client
        .sendText(
          message.from,
          "Boa tarde!\nVocê entrou em contato com a Zambri Transportes, no momento estamos em horário de almoço, entraremos em contato assim que retornarmos.\nAgradecemos pela compreensão."
        )
        .then((result) => {
          console.log("Result: ", result);
        })
        .catch((e) => {
          console.er("Error when sending: ", e);
        });
    }
  });
}

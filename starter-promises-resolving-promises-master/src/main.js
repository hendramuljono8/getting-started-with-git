const { welcome, goodbye, tell } = require("../utils/fortune-teller");

// const question = "";
// tell(question)
//   .then((fortune) => {
//     console.log(question);
//     console.log(fortune);
//   })
//   .catch(console.error);

  welcome()
  .then((welcomeMessage) => {
    goodbye().then((goodbyeMessage) => `${welcomeMessage}\n${goodbyeMessage}`)
  })
  .then(console.log)
  .catch(console.error);
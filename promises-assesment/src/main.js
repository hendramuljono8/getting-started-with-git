const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function ask(question) {
  return tell(question).then((response) => [
    `Your question was: ${question}`,
    `Your fortune is: ${response}`,
  ]);
}

function getFortune(question) {
  if (!question) {
    return Promise.resolve("There was an error: A question is required...");
  }

  return tell(question)
    .then(fortune => {
      return [
        `Your question was: ${question}`,
        `Your fortune is: ${fortune}`
      ];
    });
}

function fullSession(question) {
  let welcomeResponse;
  return welcome()
    .then(response => {
      welcomeResponse = response; // store the welcome response
      return getFortune(question); // try to get a fortune
    })
    .catch(error => {
      // If an error occurs, transform it into the required format
      return `There was an error: ${error}`;
    })
    .then(fortuneOrError => {
      // Call goodbye() regardless of whether an error occurred
      return goodbye().then(goodbyeResponse => {
        // If getFortune() was successful, fortuneOrError is an array,
        // otherwise it's a string. Treat it accordingly.
        if (Array.isArray(fortuneOrError)) {
          return [welcomeResponse, ...fortuneOrError, goodbyeResponse];
        } else {
          return [welcomeResponse, fortuneOrError, goodbyeResponse];
        }
      });
    });
}




module.exports = { getFortune, fullSession };

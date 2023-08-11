const axios = require("axios");
const url = "http://localhost:5001/constellations/";

// const leo = {
//   name: "Leo",
//   meaning: "Lion",
//   startsWithPlanets: 19,
//   quadrant: "NQ2",
// };

// axios.get(url).then(({ data }) => {
//   console.log(data);
//   axios.post(url, leo).then(({ data }) => console.log(data));
// });

// axios
//   .get(url)
//   .then(({ data }) => {
//     return data.find(({ name }) => name === leo.name);
//   })
//   .then((exists) => {
//     if (exists) throw `Constellation ${leo.name} already exists`;
//     return axios.post(url, leo).then(({ data }) => console.log(data));
//   })
//   .catch(console.log);


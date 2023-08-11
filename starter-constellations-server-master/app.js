const axios = require("axios");
const BASE_URL = "http://localhost:5001";

// async function getConstellations(id) {
//     return true;
// }

// getConstellations().then(console.log);

// Promise.all([
//   axios.get(`${BASE_URL}/constellations/UEUrlfX`),
//   axios.get(`${BASE_URL}/constellations/zb8QvVt`),
//   axios.get(`${BASE_URL}/constellations/32TN5F8`),
// ]).then((results) => {
//   console.log(results[0].data);
//   console.log(results[1].data);
//   console.log(results[2].data);
// });

async function getConstellationNameById(id) {
    const url = `${BASE_URL}/constellations/${id}`;
    const { data } = await axios.get(url);
  
    return data.name;
  }
  
  getConstellationNameById("n2OEOzp").then(console.log);
  //> "Libra"
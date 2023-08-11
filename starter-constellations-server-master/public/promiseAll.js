const axios = require("axios");
const BASE_URL = "http://localhost:5001";

// Promise.all([
//     axios.get(`${BASE_URL}/constellations/UEUrlfX`),
//     axios.get(`${BASE_URL}/constellations/zb8QvVt`),
//     axios.get(`${BASE_URL}/constellations/32TN5F8`),
// ]).then((results) => {
//     console.log(results[0].data);
//     console.log(results[1].data);
//     console.log(results[2].data);
// });

function getConstellations(ids) {
    const promises = ids.map((id) => {
        const url = `${BASE_URL}/constellations/${id}`;
        return axios.get(url);
    });

    return Promise.all(promises);
}

const ids = ["KGQIwSq", "32TN5F8"];
getConstellations(ids).then(console.log);
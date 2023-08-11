const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

async function index() {
    try {
        const response = await axios.get(`${BASE_URL}/constellations`);
        console.log(response.data);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

async function create(body) {
    try {
        const response = await axios.post(`${BASE_URL}/constellations`, body);
        console.log(response.data);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

async function show(id) {
    try {
        const response = await axios.get(`${BASE_URL}/constellations/${id}`);
        console.log(response.data);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

async function update(id, body) {
    try {
        const response = await axios.put(`${BASE_URL}/constellations/${id}`, body);
        console.log(response.data);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

async function destroy(id) {
    try {
        const response = await axios.delete(`${BASE_URL}/constellations/${id}`);
        console.log(response.data);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}


module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};

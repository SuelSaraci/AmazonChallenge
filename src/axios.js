import axios from "axios";

const instance = axios.create ({
    baseURL: 'http://localhost:5001/challenge-83993/us-central1/api'
});

export default instance;

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

const apiUtc = axios.create({
    baseURL: 'http://localhost:8080/world-clock',
});

export default {api, apiUtc};
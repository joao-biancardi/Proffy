import axios from 'axios';

const api = axios.create({
    baseURL: 'https://192.168.40.25:3333'
});

export default api
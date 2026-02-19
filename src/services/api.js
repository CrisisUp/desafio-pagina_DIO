import axios from 'axios';

export const api = axios.create({
    // URL do seu servidor local configurado no package.json
    baseURL: 'http://localhost:8001',
});
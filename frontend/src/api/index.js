import axios from 'axios';

export const apiCall = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 2000,
});
import axios from 'axios';

export const apiCall = axios.create({
    baseURL: 'https://nocountry.up.railway.app/api', // process.env.REACT_APP_API_URL,
    timeout: 2000,
});
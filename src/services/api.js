import axios from 'axios'

export const key = '4d52ab8141873f71f4d05b3eb74c02335e8878db';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
})

export default api;


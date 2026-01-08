import axios from 'axios';

const api = axios.create({
  baseURL: 'http://YOUR_IP:8080/api/auth',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

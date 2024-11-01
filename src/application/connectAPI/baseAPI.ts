import axios from "axios";

const baseAPI = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL, // Lấy từ file .env
    headers: {
        'Content-Type': 'application/json',
    },
});

export default baseAPI
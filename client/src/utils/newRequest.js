import axios from "axios";

const newRequest = axios.create({
    baseURL: "https://localhost:8800/api", withCredentials: true,
});

export default newRequest;
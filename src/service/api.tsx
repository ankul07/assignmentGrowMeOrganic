import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Replace with your API base URL
});

export default api;

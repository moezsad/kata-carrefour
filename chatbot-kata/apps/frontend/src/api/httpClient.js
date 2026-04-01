import axios from "axios";

const httpClient = axios.create({
  baseURL: import.meta.env.API_URL || "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;
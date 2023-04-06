import { API_URL } from "constants.js";
import axios from "axios";

const instance = axios.create({
  baseURL: API_URL || "http://localhost:3001/", 
  headers: { "Content-Type": "application/json" },
});

export default instance
 
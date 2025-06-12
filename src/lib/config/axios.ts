import axios from "axios";
import https from "https";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false, // ❌ insecure, use only for debugging
  }),
});

export default instance;

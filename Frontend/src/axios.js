import axios from "axios";

const instance = axios.create({
  baseURL: "https://newportfoliosohan.onrender.com/api",
  withCredentials: true,
});

export default instance;

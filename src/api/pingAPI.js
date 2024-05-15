import axios from "axios";

axios.defaults.baseURL = "https://back-aquatrack-group-6.onrender.com/api";

export const fetchPing = async () => {
  try {
    const res = axios.get("/ping");

    return res;
  } catch (e) {
    console.log(e);
  }
};

import axios from "axios";

axios.defaults.baseURL =
  "https://back-aquatrack-group-6.onrender.com/api/users";

export async function fetchRegister(data, { abortController }) {
  const res = axios({ method: "post" });

  return res;
}

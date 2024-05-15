import axios from "axios";

const BASE_URL = "https://back-aquatrack-group-6.onrender.com/api/users";

export const fetchRegisterUser = async (fetchData) => {
  try {
    const res = axios.post(`${BASE_URL}/register`, fetchData);

    return res;
  } catch (e) {
    console.log(e);
  }
};

export const fetchLogInUser = async () => {};

export const fetchLogOutUser = async () => {};

export const fetchRefrshUser = async () => {};

export const fetchGetCurrentUser = async () => {};

export const fetchEditCurrentUser = async () => {};

import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Nzg1MDAyNzljNDE3NDAzMDVjZWU1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjI1ODAzMSwiZXhwIjoxNzA2NTE3MjMxfQ.PLr6tABIBzsV_QRBbEgkN_2h002ARz8WHc_i42q6Rk4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});

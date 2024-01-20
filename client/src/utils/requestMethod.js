import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Nzg1MDAyNzljNDE3NDAzMDVjZWU1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTQ5NTcwMiwiZXhwIjoxNzA1NzU0OTAyfQ.cLSPFq3-4Nrl8WX44RCCm4mzEZ77eyTH103bs6CmIRI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});

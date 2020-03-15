import axios from "axios";

const instance = axios.create({
  baseURL: "https://online-store-74932.firebaseio.com/"
});

export default instance;

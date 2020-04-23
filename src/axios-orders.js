import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-react-a09be.firebaseio.com/",
});

export default instance;

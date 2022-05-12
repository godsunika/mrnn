// export const url = "https://chaoo-todo-app.herokuapp.com/api";
import axios from "axios";
// export const url = "http://localhost:5000/api";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
export default instance;

// export const setHeaders = () => {
//   const headers = {
//     headers: {
//       "x-access-token": localStorage.getItem("token"),
//     },
//   };

//   return headers;
// };

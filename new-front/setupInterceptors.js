import api from "./index";
import { refreshToken, tokenExpired } from "../store/actions/authActions";
import cookies from "js-cookie";

// const api = axios2.create({
//   baseURL: "http://localhost:5000/api",
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': '*',
//     'Access-Control-Allow-Headers': '*',
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
// });

const setupInterceptors = (store) => {
  api.interceptors.request.use(
    (config) => {
      console.log("req jalan");
      console.log(store.getState())
      console.log(config)
      const token = localStorage.getItem("token");
      if (token) {
        // config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
        config.headers["x-access-token"] = token; // for Node.js Express back-end
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const { dispatch } = store;
  api.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      console.log("res jalan");
      console.log(err.response);
      console.log(err.config);
      console.log(cookies.get());
      const originalConfig = err.config;
      if (originalConfig.url !== "/signin" && err.response) {
        // Access Token was expired
        localStorage.removeItem("token");
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          try {
            console.log(cookies.get('refresh_token'));
            const rs = await api.post("/refresh", {
              refreshToken: cookies.get('refresh_token')
            });
            console.log("hey : "+rs.data);
            const token = rs.data;
            localStorage.setItem("token", token);
            dispatch(refreshToken(token));
            return api(originalConfig);
          } catch (_error) {
            if (_error.response && _error.response.data) {
              return Promise.reject(_error.response.data);
            }
            return Promise.reject(_error);
          }
        }
      }
      if(err.response.data.message === 'jwt expired'){ 
        console.log("exp");
        localStorage.removeItem("token");
        dispatch(tokenExpired());
        return Promise.reject(err);
      }
      if(err.response.data.message === 'Unauthorized'){
        console.log("unauthor");
        localStorage.removeItem("token");
        return Promise.reject(err);
      }
      return Promise.reject(err);
    }
  );
};
export default setupInterceptors;
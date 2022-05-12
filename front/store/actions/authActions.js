import api from "../../api";
import { toast } from "react-toastify";
import cookies from "js-cookie";

export const signUp = (user) => {
  return (dispatch) => {
    api
      .post(`/signup`, user)
      .then((token) => {
        console.log(cookies.get());
        localStorage.setItem("token", token.data);

        dispatch({
          type: "SIGN_UP",
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signIn = (email, password) => {
  return (dispatch) => {
    api
      .post(`/signin`, { email, password }, { withCredentials: true})
      .then((token) => {
        console.log(cookies.get());
        localStorage.setItem("token", token.data);

        dispatch({
          type: "SIGN_IN",
          token: token.data,
        });
        console.log(token);
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_TODOS",
    });
    
    dispatch({
      type: "SIGN_OUT",
    });

  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: "USER_LOADED",
        token,
      });
    } else return null;
  };
};

export const refreshToken = (accessToken) => {
  return (dispatch) => {
    // api
    //   .post(`${url}/refresh`, { accessToken })
    //   .then((token) => {
    //     localStorage.setItem("token", token.data);

        dispatch({
          type: "REFRESH_TOKEN",
          // token: token.data,
          token: accessToken,
        });
      // })
      // .catch((error) => {
      //   console.log(error.response);

      //   toast.error(error.response?.data, {
      //     position: toast.POSITION.BOTTOM_RIGHT,
      //   });
      // });

      /// ==============================================================================================
      // .post(`/refresh`, { refreshToken })
      // .then((token) => {
      //   localStorage.setItem("token", token.data);

      //   dispatch({
      //     type: "REFRESH_TOKEN",
      //     // token: token.data,
      //     token: token.data,
      //   });
      // })
      // .catch((error) => {
      //   console.log(error.response);

      //   toast.error(error.response?.data, {
      //     position: toast.POSITION.BOTTOM_RIGHT,
      //   });
      // });
  };
};
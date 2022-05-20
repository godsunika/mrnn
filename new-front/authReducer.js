import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import cookies from "js-cookie";

const initialState = {
  token: localStorage.getItem("token"),
  name : null,
  email: null,
  _id  : null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
    case "SIGN_UP":
    case "USER_LOADED":
      toast("Welcome...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      const user = jwtDecode(action.token); 
      console.log("lala: ");
      console.log(action);
      return {
        ...initialState,
        token: action.token,
        name : user.name,
        email: user.email,
        _id  : user._id,
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");
      cookies.remove('refresh_token');
      toast("Goodbye...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        token: null,
        name : null,
        email: null,
        _id  : null,
      };
    case "REFRESH_TOKEN":
      // toast("Welcome Back!", {
      //   position: toast.POSITION.BOTTOM_RIGHT,
      // });
      const updateUser = jwtDecode(action.token); 
      return {
        ...initialState,
        token: action.token,
        name : updateUser.name,
        email: updateUser.email,
        _id  : updateUser._id,
      };
    default:
      return state;
  }
};

export default authReducer;

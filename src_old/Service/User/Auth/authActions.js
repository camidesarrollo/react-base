import * as AT from "./authTypes";
import axios from "axios";

const AUTH_URL = "http://localhost:8080/api/auth";

// export const authenticateUser = (email, password) => async (dispatch) => {
//   // dispatch(loginRequest());
//   try {
//     const response = await axios.post(AUTH_URL, {
//       username: email,
//       password: password,
//     });
//     localStorage.setItem("jwtToken", response.data.token);
//     // dispatch(success({ username: response.data.name, isLoggedIn: true }));
//     return Promise.resolve(response);
//   } catch (error) {
//     // dispatch(failure());
//     return Promise.reject(error);
//   }
// };

export const authenticateUser = async (email, password) => {
  try {
    let url = AUTH_URL + "/signin"
    const response = await axios.post(url, {
      email: email,
      password: password,
    });
    localStorage.setItem("jwtToken", response.data.token);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const signout = async () => {
  try {
    let url = AUTH_URL + "/signout"
    const response = await axios.post(url);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(logoutRequest());
    localStorage.removeItem("jwtToken");
    dispatch(success({ username: "", isLoggedIn: false }));
  };
};

export const deleteUser  = async (id) => {
  try {
    let url = AUTH_URL + "/eliminarUsuario";
    const response = await axios.delete(url, {
     id:id
    });
    
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const obtenerUsuario  = async (id) => {
  try {
    let url = AUTH_URL + "/getUsuario/" + id;
    const response = await axios.get(url);
    
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateUsuario  = async (id, usuario) => {
  try {
    let url = AUTH_URL + "/updateUsuario/" + id;
    console.info("Data a enviar usuario:", usuario)
    const response = await axios.put(url, usuario);
    
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

const loginRequest = () => {
  return {
    type: AT.LOGIN_REQUEST,
  };
};

const logoutRequest = () => {
  return {
    type: AT.LOGOUT_REQUEST,
  };
};

const success = (isLoggedIn) => {
  return {
    type: AT.SUCCESS,
    payload: isLoggedIn,
  };
};

const failure = () => {
  return {
    type: AT.FAILURE,
    payload: false,
  };
};
import * as UT from "./userTypes";
import axios from "axios";

const REGISTER_URL = "http://localhost:8082/api/auth/signup";

const GETUSER_URL = "http://localhost:8082/api/auth/getUsuarios";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(userRequest());
    axios
      .get(
        "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
      )
      .then((response) => {
        dispatch(userSuccess(response.data));
      })
      .catch((error) => {
        dispatch(userFailure(error.message));
      });
  };
};

export const getUser = async () => {
  try {
    const response = await axios.get(GETUSER_URL);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerUser = async (userObject) =>  {
  try {
    const response = await axios.post(REGISTER_URL, userObject);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

const userRequest = () => {
  return {
    type: UT.USER_REQUEST,
  };
};

const userSavedSuccess = (user) => {
  return {
    type: UT.USER_SAVED_SUCCESS,
    payload: user,
  };
};

const userSuccess = (users) => {
  return {
    type: UT.USER_SUCCESS,
    payload: users,
  };
};

const userFailure = (error) => {
  return {
    type: UT.USER_FAILURE,
    payload: error,
  };
};
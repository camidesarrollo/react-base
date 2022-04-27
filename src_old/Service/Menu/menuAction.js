import axios from "axios";

const AUTH_URL = "http://localhost:8080/api/menu";

export const getMenu = async (role) => {
  
    const url = AUTH_URL +"/getMenu";
    try {
      const response = await axios.post(url, role)
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
};

export const getAllMenu = async () => {
  
  const url = AUTH_URL +"/getAllMenu";
  try {
    const response = await axios.get(url)
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

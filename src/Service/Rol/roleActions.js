import axios from "axios";

const AUTH_URL = "http://localhost:8082/api/role";

export const getRoles = async () => {
    const url = AUTH_URL +"/getRoles";
    try {
      const response = await axios.get(url);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
};

export const guardarPerfil = async (role) => {
  const url = AUTH_URL +"/createRoles";
  try {
    const response = await axios.post(url, role);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getRole = async (id) => {
  const url = AUTH_URL +"/getRole/" + id;
  try {
    const response = await axios.get(url);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const editarRole = async (id, role) => {
  const url = AUTH_URL +"/updateRole/" + id;
  try {
    const response = await axios.put(url, role);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const editarRoles = async (role) => {
  const url = AUTH_URL +"/updateRoles";
  try {
    const response = await axios.put(url, role);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteRol  = async (id) => {

  try {
    let url = AUTH_URL + "/eliminarRole/" + id;
    const response = await axios.delete(url);
    
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};


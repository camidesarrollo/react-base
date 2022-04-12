import axios from "axios";

const AUTH_URL = "http://localhost:8082/api/menu";

export const getMenu = async (role) => {

  const url = AUTH_URL + "/getMenu";
  try {
    const response = await axios.post(url, role)
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getSubMenu = async (role) => {

  const url = AUTH_URL + "/getSubMenu";
  try {
    const response = await axios.post(url, role)
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAllMenu = async () => {

  const url = AUTH_URL + "/getAllMenu";
  try {
    const response = await axios.get(url)
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMenuId = async (id) => {

  const url = AUTH_URL + "/getMenuId/" + id;
  try {
    const response = await axios.get(url)
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAllMenuTable = async () => {

  const url = AUTH_URL + "/getAllMenuSinFormato";
  try {
    const response = await axios.get(url)
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getSubMenuByMenu = async (id) => {

  const url = AUTH_URL + "/getSubMenuByMenu/" + id;
  try {
    const response = await axios.get(url)
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const eliminarMenu = async (id) => {

  const url = AUTH_URL + "/eliminarMenu/" + id;
  try {
    const response = await axios.post(url)
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const guardarMenu = async (dataMenu) => {

  const url = AUTH_URL + "/menu/";
  try {
    const response = await axios.post(url, dataMenu)
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const editarMenu = async (dataMenu) => {

  const url = AUTH_URL + "/menu_update/";
  try {
    const response = await axios.post(url, dataMenu)
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
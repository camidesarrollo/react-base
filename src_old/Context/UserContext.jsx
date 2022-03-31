import React, {useState, createContext, useEffect} from 'react';

export const UserContext = createContext(); //ESTADO GLOBAL, ES EL QUE GUARDA EL ESTADO GLOBAL 

const UserProvider = ({children}) => { //COMPONENTE QUE ENVUELVE LA APLICACION, O COMPONENTES QUE USEN LOS DATOS
    
    const defaultUserData = {
        user: null,
        token: null,
        role: null,
    }

    const defaultMenuData = {
        menu: []
    }
    
    const loginData = JSON.parse(window.localStorage.getItem('loginData')) || defaultUserData;

    const [userData, setUserData] = useState(loginData);
    
    const [sideBarData, setSiderbarData] = useState(defaultMenuData);
    
    const handleLogin = (user) => {
        setUserData({
            user:user.user, 
            token:user.token,
            role: user.role});
            window.localStorage.setItem("loginData", JSON.stringify(user));
    }
    const handleMenu = (menu) => {
        setSiderbarData(menu);
        window.localStorage.setItem("menuData", JSON.stringify(menu));
    }
    const handleLogout = () => {
        setUserData(defaultUserData);
        setSiderbarData([]);
        localStorage.removeItem('loginData');
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('menuData');
    }

  return (
    <UserContext.Provider value={{handleLogin, handleLogout, handleMenu,  userData, sideBarData }} >
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
import { lazy, useState, useEffect } from 'react';

import { useRoutes } from 'react-router-dom';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Outlet
} from "react-router-dom";
// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import config from '../config';

// ==============================|| ROUTING RENDER ||============================== //

import MainLayout from '../Components/Layout/MainLayout/index';
import Loadable from '../ui-component/Loadable';
import { UserContext } from '../Context/UserContext';
import { ReactReduxContext } from 'react-redux';
import AuthLogin3 from '../Pages/authentication/authentication3/Login3';
import DashboardDefault from '../Pages/dashboard/Default/index';
import MinimalLayout from '../Components/Layout/MinimalLayout/index'
const ThemeRoutes = () => {
    // const { userData } = ReactReduxContext (UserContext);

    // const [isLoged, setIsLoged] = useState(false); //MANEJA ESTADOS,  setIsLoged SETER DE LA VARIABLE DE AL LADO (INTERNO DE REACT)

    // useEffect(() => { //EJECUTA EL CONTENDIO DE FUNCION CUANDO CAMBIE EL CONTENIDO DE LOS []
    //     if (userData.user != null) {
    //         setIsLoged(true);
    //     } else {
    //         setIsLoged(false);
    //     }

    // }, [userData.user])

    // useEffect(() => { //EJECUTA EL CONTENDIO DE FUNCION CUANDO CAMBIE EL CONTENIDO DE LOS []
    //     console.log(userData)
    // })

    // window.onbeforeunload = (event) => {
    //     const e = event || window.event;
    //     e.preventDefault();
    //     if (e) {
    //         e.returnValue = "";
    //     }
    //     return "";
    // };
    // MainLayout

    return (
        <Routes>
            <Route element={<MinimalLayout> <Outlet /> </MinimalLayout>}>
                <Route exact path="/" element={<AuthLogin3 />} />
            </Route>
            <Route element={<MainLayout> <Outlet /> </MainLayout>}>
                <Route exact path="/home" element={<DashboardDefault />} />
            </Route>
            {/* <Route exact path="/home" element={<Home />} />
                        <Route exact path="configuraciones/mantenedor_perfil" element={<MantenedorPerfil />} />
                        <Route path='configuraciones/mantenedor_usuario' element={<MantenedorUsuario />} />
                        <Route path='configuraciones/mantenedor_menu' element={<MantenedorMenu />} /> */}
        </Routes>

    )
}

export default ThemeRoutes;
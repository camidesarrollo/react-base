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
import Mantenedor_Menu from '../Pages/configuraciones/MantenedorManu';
import MantenedorUsuario from '../Pages/configuraciones/MantenedorUsuario';
import MantenedorPerfil from '../Pages/configuraciones/MantenedorPerfil';
import Perfil from '../Pages/configuraciones/Perfil';

const ThemeRoutes = () => {

    return (
        <Routes>
            <Route element={<MinimalLayout> <Outlet /> </MinimalLayout>}>
                <Route exact path="/" element={<AuthLogin3 />} />
            </Route>
            <Route element={<MainLayout> <Outlet /> </MainLayout>}>
                <Route exact path="/home" element={<DashboardDefault />} />
                <Route exact path="/configuraciones/mantenedor_menu" element={<Mantenedor_Menu />} />
                <Route exact path="/configuraciones/mantenedor_usuario" element={<MantenedorUsuario />} />
                <Route exact path="/configuraciones/mantenedor_perfil" element={<MantenedorPerfil/>} />
                <Route exact path="/configuraciones/perfil" element={<Perfil/>} />
            </Route>
            {/* <Route exact path="/home" element={<Home />} />
                        <Route exact path="configuraciones/mantenedor_perfil" element={<MantenedorPerfil />} />
                        <Route path='configuraciones/mantenedor_usuario' element={<MantenedorUsuario />} />
                        <Route path='configuraciones/mantenedor_menu' element={<MantenedorMenu />} /> */}
        </Routes>

    )
}

export default ThemeRoutes;
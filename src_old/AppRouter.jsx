//ARCHIVO PARA GENERAR RUTAS
import { useState, useEffect, useContext } from 'react';
import { UserContext } from './Context/UserContext';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import AuthPage from './Pages/AuthPage';
import Home from './Pages/Home';
import MantenedorPerfil from './Pages/Configuraciones/Mantenedor_Perfil';
import MantenedorUsuario from './Pages/Configuraciones/Mantenedor_usuario'
import MantenedorMenu from './Pages/Configuraciones/Mantenedor_Menu'
import MainLayout from './Components/Layout/MainLayout';


const AppRoutes = () => {
    const { userData } = useContext(UserContext);


    const [isLoged, setIsLoged] = useState(false); //MANEJA ESTADOS,  setIsLoged SETER DE LA VARIABLE DE AL LADO (INTERNO DE REACT)

    useEffect(() => { //EJECUTA EL CONTENDIO DE FUNCION CUANDO CAMBIE EL CONTENIDO DE LOS []
        if (userData.user != null) {
            setIsLoged(true);
        } else {
            setIsLoged(false);
        }

    }, [userData.user])

    useEffect(() => { //EJECUTA EL CONTENDIO DE FUNCION CUANDO CAMBIE EL CONTENIDO DE LOS []
        console.log(userData)
    })

    window.onbeforeunload = (event) => {
        const e = event || window.event;
        e.preventDefault();
        if (e) {
            e.returnValue = "";
        }
        return "";
    };



    return (
        <Router>
                <MainLayout logeado={isLoged}>
                    <Routes>
                        <Route exact path="/" element={<AuthPage />} />
                        <Route exact path="/home" element={<Home />} />
                        <Route exact path="configuraciones/mantenedor_perfil" element={<MantenedorPerfil />} />
                        <Route path='configuraciones/mantenedor_usuario' element={<MantenedorUsuario />} />
                        <Route path='configuraciones/mantenedor_menu' element={<MantenedorMenu />} />
                    </Routes>
                </MainLayout>
        </Router>


    )
}

export default AppRoutes;
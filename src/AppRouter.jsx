
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import AuthPage from './Pages/AuthPage';
// import MantenedorPerfil from './Pages/Configuraciones/Mantenedor_Perfil';
// import MantenedorUsuario from './Pages/Configuraciones/Mantenedor_usuario'
// import MantenedorMenu from './Pages/Configuraciones/Mantenedor_Menu'
// import MainLayout from './Components/Layout/MainLayout';


const AppRoutes = () => {

    return (
        <Router>
                    <Routes>
                        <Route exact path="/" element={<AuthPage />} />
                        {/* <Route exact path="/home" element={<Home />} />
                        <Route exact path="configuraciones/mantenedor_perfil" element={<MantenedorPerfil />} />
                        <Route path='configuraciones/mantenedor_usuario' element={<MantenedorUsuario />} />
                        <Route path='configuraciones/mantenedor_menu' element={<MantenedorMenu />} /> */}
                    </Routes>
        </Router>


    )
}

export default AppRoutes;
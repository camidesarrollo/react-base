import { lazy } from 'react';

// project imports
import MainLayout from '../Components/Layout/MainLayout/index';
import Loadable from '../ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../Pages/dashboard/Default/index')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/dashboard',
            element: <DashboardDefault />
        },
    ]
};

export default MainRoutes;

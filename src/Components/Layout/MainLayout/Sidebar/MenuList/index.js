// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItem from '../../../../../menu-items/index';
import NavItem from './NavItem/index';
import NavCollapse from './NavCollapse';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
    // console.log(JSON.parse(window.localStorage.getItem('menuData')));

    const navItems = JSON.parse(window.localStorage.getItem('menuData')).map((item) => {
         if(item.submenu.length === 0){
            return <NavItem key={item.menu_id} item={item} level={1} />;
        }else if(item.submenu.length > 0){
            return <NavCollapse key={item.menu_id} menu={item} level={1} />;
        }

    });

    return <>{navItems}</>;
};

export default MenuList;

import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, List, Typography } from '@mui/material';

// project imports
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
    const theme = useTheme();

    // menu list collapse & items


    const items = item.submenu.map((menu) => {
        
        if(menu.submenu.length === 2){
            return <NavCollapse key={menu.menu_id} menu={menu} level={1} />;
        }else {
            return <NavItem key={menu.menu_id} item={menu} level={1} />;
        }
    });

    return (
        <>
            <List
                subheader={
                    item.menu_title && (
                        <Typography variant="caption" sx={{ ...theme.typography.menuCaption }} display="block" gutterBottom>
                            {item.menu_title}
                        </Typography>
                    )
                }
            >
                {items}
            </List>

            {/* group divider */}
            <Divider sx={{ mt: 0.25, mb: 1.25 }} />
        </>
    );
};

NavGroup.propTypes = {
    item: PropTypes.object
};

export default NavGroup;

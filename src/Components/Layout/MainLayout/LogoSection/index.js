import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from '../../../../config';
import Logo from '../../../../ui-component/logoempresa.png';


// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        {/* <Logo /> */}
        <img src={Logo} style={{width: "150px", height: "70px"}} />
    </ButtonBase>
);

export default LogoSection;

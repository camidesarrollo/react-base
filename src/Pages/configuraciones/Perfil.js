import { Avatar, CardActions, CardContent, Chip, Divider, Grid, Paper, Typography, Button, Tabs, Tab, IconButton, CardHeader, Alert, FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import PropTypes from 'prop-types';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Paper sx={{
                    backgroundColor: "rgb(255, 255, 255)",
                    color: "rgba(58, 53, 65, 0.87)",
                    borderRadius: "6px",
                    overflow: "hidden",
                    boxShadow: "rgb(58 53 65 / 10%) 0px 2px 10px 0px",
                    marginBottom: "1.5rem"
                }}>

                    {children}
                </Paper>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function Perfil(props) {


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [valuesPassword, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChangePassword = (prop) => (event) => {
        setValues({ ...valuesPassword, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...valuesPassword,
            showPassword: !valuesPassword.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid container spacing={6} sx={{
            boxSizing: "border-box",
            display: "flex",
            flexFlow: "row wrap",
            marginTop: "-1.5rem",
            width: "calc(100% + 1.5rem)",
            marginLeft: "-1.5rem"
        }}>

            <Grid item xs={12} md={5} lg={4} >

                <Grid container spacing={6} sx={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexFlow: "row wrap",
                    marginTop: "-1.5rem",
                    width: "calc(100% + 1.5rem)",
                    marginLeft: "-1.5rem"
                }}>
                    <Grid item xs={12}>
                        <Paper sx={{
                            backgroundColor: "rgb(255, 255, 255)",
                            Color: "rgba(58, 53, 65, 0.87)",
                            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                            borderRadius: "6px",
                            backgroundImage: "none",
                            overflow: "hidden",
                            boxShadow: "rgb(58 53 65 / 10%) 0px 2px 10px 0px"
                        }}>
                            <CardContent sx={{
                                padding: "3.75rem 1.25rem 1.25rem",
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "column"
                            }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{
                                    position: "relative",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: "0",
                                    lineHeight: "1",
                                    overflow: "hidden",
                                    userSelect: "none",
                                    borderRadius: "5px",
                                    color: "rgb(145, 85, 253)",
                                    backgroundColor: "rgba(145, 85, 253, 0.12)",
                                    width: "120px",
                                    height: "120px",
                                    fontWeight: "600",
                                    marginBottom: "1rem",
                                    fontSize: "3rem"
                                }} />
                                <Typography variant='h6' sx={{ fontSize: "1.25rem" }}>
                                    Galen Slixby
                                </Typography>
                                <Chip label="editor" variant="filled" color="info" size="small" sx={{
                                    maxWdth: "100%",

                                    display: "inline-flex",
                                    alignItems: "center",

                                    justifyContent: "center",
                                    whiteSpace: "nowrap",
                                    transition: "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                    cursor: "default",
                                    outline: "0px",
                                    textDecoration: "none",
                                    border: "0px",
                                    padding: "0px",
                                    verticalAlign: "middle",
                                    boxSizing: "border-box",
                                    color: "rgb(22, 177, 255)",
                                    backgroundColor: "rgba(22, 177, 255, 0.12)",
                                    height: "20px",
                                    fontSize: "0.875rem",
                                    fontWeight: "600",
                                    borderRadius: "5px",
                                    textTransform: "capitalize"
                                }} />
                            </CardContent>
                            <CardContent sx={{ padding: "1.25rem", marginTop: "0.5rem" }}>
                                <Box sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <Box sx={{
                                        marginRight: "2rem",
                                        display: "flex",
                                        alignItems: "center"
                                    }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{
                                            position: "relative",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: "0",
                                            width: "40px",
                                            height: "40px",
                                            fontSize: "1.25rem",
                                            lineHeight: "1",
                                            overflow: "hidden",
                                            userSelect: "none",
                                            borderRadius: "5px",
                                            color: "rgb(145, 85, 253)",
                                            backgroundColor: "rgba(145, 85, 253, 0.12)",
                                            marginRight: "0.75rem"
                                        }} />
                                        <Box>
                                            <Typography variant='h6' sx={{ fontSize: "1.25rem" }}>1.23k</Typography>
                                            <Typography variant='body2' sx={{
                                                margin: "0px",
                                                fontWeight: "400",
                                                fontSize: "0.875rem",
                                                lineHeight: "1.5",
                                                letterSpacing: "0.15px",
                                                color: "rgba(58, 53, 65, 0.68)"
                                            }}>Task Done</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{
                                            position: "relative",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: "0",
                                            width: "40px",
                                            height: "40px",
                                            fontSize: "1.25rem",
                                            lineHeight: "1",
                                            overflow: "hidden",
                                            userSelect: "none",
                                            borderRadius: "5px",
                                            color: "rgb(145, 85, 253)",
                                            backgroundColor: "rgba(145, 85, 253, 0.12)",
                                            marginRight: "0.75rem"
                                        }} />
                                        <Box>
                                            <Typography variant='h6' sx={{ fontSize: "1.25rem" }}>1.23k</Typography>
                                            <Typography variant='body2' sx={{
                                                margin: "0px",
                                                fontWeight: "400",
                                                fontSize: "0.875rem",
                                                lineHeight: "1.5",
                                                letterSpacing: "0.15px",
                                                color: "rgba(58, 53, 65, 0.68)"
                                            }}>Project Done</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </CardContent>
                            <CardContent sx={{ padding: "1.25rem", paddingTop: "0" }}>
                                <Typography variant='h6' sx={{ fontSize: "1.25rem" }}>Detalles</Typography>
                                <Divider sx={{
                                    flexShrink: "0",
                                    borderWidth: "0px 0px thin",
                                    borderStyle: "solid",
                                    borderColor: "rgba(58, 53, 65, 0.12)",
                                    margin: "0.5rem 0px"
                                }}></Divider>
                                <Box sx={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
                                    <Box sx={{ display: "flex", marginBottom: "0.675rem" }}>
                                        <Typography variant='body1' sx={{
                                            margin: "0px 0.5rem 0px 0px",
                                            lineHeight: "1.5",
                                            letterSpacing: "0.15px",
                                            color: "rgba(58, 53, 65, 0.87)",
                                            fontWeight: "500",
                                            fontSize: "0.875rem"
                                        }}>Nombre de usuario:</Typography>
                                        <Typography variant='body2' sx={{
                                            margin: "0", fontWeight: "400",
                                            fontSize: "0.875rem",
                                            lineHeight: "1.5",
                                            letterSpacing: "0.15px",
                                            color: "rgba(58, 53, 65, 0.68)"
                                        }}>@gslixby0</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", marginBottom: "0.675rem" }}>
                                        <Typography variant='body1' sx={{
                                            margin: "0px 0.5rem 0px 0px",
                                            lineHeight: "1.5",
                                            letterSpacing: "0.15px",
                                            color: "rgba(58, 53, 65, 0.87)",
                                            fontWeight: "500",
                                            fontSize: "0.875rem"
                                        }}>Correo electrónico:</Typography>
                                        <Typography variant='body2' sx={{
                                            margin: "0", fontWeight: "400",
                                            fontSize: "0.875rem",
                                            lineHeight: "1.5",
                                            letterSpacing: "0.15px",
                                            color: "rgba(58, 53, 65, 0.68)"
                                        }}>gslixby0@abc.net.au</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", marginBottom: "0.675rem" }}>
                                        <Typography variant='body1' sx={{
                                            margin: "0px 0.5rem 0px 0px",
                                            lineHeight: "1.5",
                                            letterSpacing: "0.15px",
                                            color: "rgba(58, 53, 65, 0.87)",
                                            fontWeight: "500",
                                            fontSize: "0.875rem"
                                        }}>Estado:</Typography>
                                        <Typography variant='body2' sx={{
                                            margin: "0", fontWeight: "400",
                                            fontSize: "0.875rem",
                                            lineHeight: "1.5",
                                            letterSpacing: "0.15px",
                                            color: "rgba(58, 53, 65, 0.68)"
                                        }}>Inactivo</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", marginBottom: "0.675rem" }}>
                                        <Typography variant='body1' sx={{
                                            margin: "0px 0.5rem 0px 0px",
                                            lineHeight: "1.5",
                                            letterSpacing: "0.15px",
                                            color: "rgba(58, 53, 65, 0.87)",
                                            fontWeight: "500",
                                            fontSize: "0.875rem"
                                        }}>Rol:</Typography>
                                        <Typography variant='body2' sx={{
                                            margin: "0", fontWeight: "400",
                                            fontSize: "0.875rem",
                                            lineHeight: "1.5",
                                            letterSpacing: "0.15px",
                                            color: "rgba(58, 53, 65, 0.68)"
                                        }}>Administrador</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", marginBottom: "0.675rem" }}>
                                        <Typography variant='body1' sx={{
                                            margin: "0px 0.5rem 0px 0px",
                                            lineHeight: "1.5",
                                            letterSpacing: "0.15px",
                                            color: "rgba(58, 53, 65, 0.87)",
                                            fontWeight: "500",
                                            fontSize: "0.875rem"
                                        }}>Permisos:</Typography>
                                        <Typography variant='body2' sx={{
                                            margin: "0", fontWeight: "400",
                                            fontSize: "0.875rem",
                                            lineHeight: "1.5",
                                            letterSpacing: "0.15px",
                                            color: "rgba(58, 53, 65, 0.68)"
                                        }}>Crear, editar, eliminar</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", marginBottom: "0.675rem" }}>
                                        <Typography variant='body1' sx={{
                                            margin: "0px 0.5rem 0px 0px",
                                            lineHeight: "1.5",
                                            letterSpacing: "0.15px",
                                            color: "rgba(58, 53, 65, 0.87)",
                                            fontWeight: "500",
                                            fontSize: "0.875rem"
                                        }}>Telefono:</Typography>
                                        <Typography variant='body2' sx={{
                                            margin: "0", fontWeight: "400",
                                            fontSize: "0.875rem",
                                            lineHeight: "1.5",
                                            letterSpacing: "0.15px",
                                            color: "rgba(58, 53, 65, 0.68)"
                                        }}>+1 (479) 232-9151</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                            <CardActions sx={{
                                alignItems: "center",
                                padding: "1.25rem",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <Button variant="contained">Editar</Button>
                                <Button variant="outlined" color="error">Suspender</Button>
                            </CardActions>
                        </Paper>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

                            <Tab label="Resumen" icon={<PersonOutlineIcon />} iconPosition="start" {...a11yProps(0)} sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                outline: "0px",
                                border: "0px",
                                margin: "0px",
                                borderRadius: "0px",
                                cursor: "pointer",
                                userSelect: "none",
                                verticalAlign: "middle",
                                appearance: "none",
                                textDecoration: "none",
                                fontWeight: "500",
                                fontSize: "0.875rem",
                                lineHeight: "1.25",
                                textTransform: "uppercase",
                                letterSpacing: "0.3px",
                                maxWidth: "360px",
                                minWidth: "90px",
                                position: "relative",
                                flexShrink: "0",
                                padding: "9px 16px",
                                overflow: "hidden",
                                whiteSpace: "normal",
                                textAlign: "center",
                                minHeight: "48px",
                                flexDirection: "row"
                            }}>

                            </Tab>
                            <Tab label="Seguridad" icon={<LockOutlinedIcon />} iconPosition="start"  {...a11yProps(1)} sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                outline: "0px",
                                border: "0px",
                                margin: "0px",
                                borderRadius: "0px",
                                cursor: "pointer",
                                userSelect: "none",
                                verticalAlign: "middle",
                                appearance: "none",
                                textDecoration: "none",
                                fontWeight: "500",
                                fontSize: "0.875rem",
                                lineHeight: "1.25",
                                textTransform: "uppercase",
                                letterSpacing: "0.3px",
                                maxWidth: "360px",
                                minWidth: "90px",
                                position: "relative",
                                flexShrink: "0",
                                padding: "9px 16px",
                                overflow: "hidden",
                                whiteSpace: "normal",
                                textAlign: "center",
                                minHeight: "48px",
                                flexDirection: "row"
                            }} />
                            <Tab label="Notificaciones" icon={<NotificationsNoneOutlinedIcon />} iconPosition="start"  {...a11yProps(2)} sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                outline: "0px",
                                border: "0px",
                                margin: "0px",
                                borderRadius: "0px",
                                cursor: "pointer",
                                userSelect: "none",
                                verticalAlign: "middle",
                                appearance: "none",
                                textDecoration: "none",
                                fontWeight: "500",
                                fontSize: "0.875rem",
                                lineHeight: "1.25",
                                textTransform: "uppercase",
                                letterSpacing: "0.3px",
                                maxWidth: "360px",
                                minWidth: "90px",
                                position: "relative",
                                flexShrink: "0",
                                padding: "9px 16px",
                                overflow: "hidden",
                                whiteSpace: "normal",
                                textAlign: "center",
                                minHeight: "48px",
                                flexDirection: "row"
                            }} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <CardHeader
                            title="Cambiar la contraseña"

                            sx={{
                                lineHeight: "1",
                                fontWeight: "500",
                                fontSize: "1.25rem",
                                letterSpacing: "0.0125em"
                            }} />
                        <CardContent content="true" sx={{ padding: "1.25rem", paddingTop: "0", paddingBottom: "0" }}>
                            <Alert icon={false} severity="warning" sx={{
                                marginBottom: "0",

                            }}>

                                <Typography variant='body1' sx={{
                                    fontSize: "1rem",
                                    lineHeight: "1.5",
                                    letterSpacing: "0.15px",
                                    fontWeight: "600",
                                    marginBottom: "0.25rem !important",

                                }}>Garantizar el cumplimiento de estos requisitos</Typography>
                                Mínimo 8 caracteres, mayúsculas y símbolos
                            </Alert>
                            <Grid container spacing={6} className="css-h2qpui" >

                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={valuesPassword.showPassword ? 'text' : 'password'}
                                            value={valuesPassword.password}
                                            onChange={handleChangePassword('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {valuesPassword.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={valuesPassword.showPassword ? 'text' : 'password'}
                                            value={valuesPassword.password}
                                            onChange={handleChangePassword('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {valuesPassword.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained">Cambiar la contraseña</Button>
                                </Grid>
                            </Grid>
                        </CardContent>

                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </Box>
            </Grid>
        </Grid >



    );


}

export default Perfil;

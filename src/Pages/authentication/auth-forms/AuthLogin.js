import React, { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from '../../../hooks/useScriptRef';
import AnimateButton from '../../../ui-component/extended/AnimateButton';

// assets
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// Import service
import { authenticateUser, getMenu} from "../../../Service/index";

import { useNavigate } from 'react-router-dom';

import Snackbar from "@material-ui/core/Snackbar";

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {

    const loginData = JSON.parse(window.localStorage.getItem('loginData'));

    let navigate = useNavigate();
    useEffect(() => {
        if(loginData !== null){
            navigate('inmobiliaria/home');
        }
    })


    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const [checked, setChecked] = useState(true);

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const initialState = {
        email: "",
        password: "",
    };

    const [user, setUser] = useState(initialState);

    useEffect(() => {
        // if (userData.user) {
        //     navigate('home');
        // }
    }, []);


    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const validateUser = (email, password) => {
        console.log("entro al validador")
        authenticateUser(email, password)
            .then((response) => {
                const username = response.data.username;
                const role = response.data.roles;
                const token = response.data.token || 'UnToken'
                const privilegio = response.data.privilegios;
                let otroValor = new Object();
                otroValor.name = role;
                window.localStorage.setItem("loginData", JSON.stringify({ user: username, token: token, role: role, privilegio: privilegio }));
                getMenu(otroValor)
                    .then((response_menu) => {
                        console.log(response_menu);
                        window.localStorage.setItem("menuData", JSON.stringify(response_menu.data));
                        return navigate('inmobiliaria/home');
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });

            })
            .catch((error) => {
                handleClick();
                console.log(error.message);
                // setShow(true);
                resetLoginForm();
                // setError("Invalid email and password");
            });
    };

    const resetLoginForm = () => {
        setUser(initialState);
    };

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Acceder con la dirección de correo electrónico</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}  anchorOrigin={{  vertical: 'top',
                horizontal: 'center',}}>
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                        Se ha presentado un <strong>error. La contraseña o email que especificaste no es correcta</strong>. Por Favor intentelo nuevamente.
                </Alert>
            </Snackbar>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Debe ser un correo electrónico válido').max(255).required('El correo electrónico es obligatorio'),
                    password: Yup.string().max(255).required('Se requiere una contraseña')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                  
                        }
                        validateUser(values.email, values.password);
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-email-login">Email</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-login"
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Email"
                                inputProps={{}}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-login"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {/* {showPassword ? <Visibility /> : <VisibilityOff />} */}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                inputProps={{}}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={(event) => setChecked(event.target.checked)}
                                        name="checked"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                                Forgot Password?
                            </Typography>
                        </Stack>
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Sign in
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>

        </>
    );
};

export default FirebaseLogin;

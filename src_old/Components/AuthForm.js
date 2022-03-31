import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { authenticateUser, getMenu } from "../Service/index";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function AuthForm() {
const { handleLogin, userData } = UserContext(UserContext);

// const { handleMenu, sideBarData } = useContext(UserContext);

// let navigate = useNavigate();

// const initialState = {
//     email: "",
//     password: "",
// };

// const [user, setUser] = useState(initialState);
// const credentialChange = (event) => {
//     const { name, value } = event.target;
//     setUser({ ...user, [name]: value });
// };

// useEffect(() => {
//     if (userData.user) {
//         navigate('home');
//     }
// }, []);



// const validateUser = () => {
//     authenticateUser(user.email, user.password)
//         .then((response) => {
//             const username = response.data.username;
//             const role = response.data.roles[0];
//             const token = response.data.token || 'UnToken'
//             let otroValor = new Object();
//             otroValor.name = role;

//             getMenu(otroValor)
//                 .then((response_menu) => {
//                     handleLogin({ user: username, token: token, role: role });
//                     handleMenu({ menu: response_menu.data });

//                     return navigate('home');
//                 })
//                 .catch((error) => {
//                     console.log(error.message);
//                 });

//         })
//         .catch((error) => {
//             console.log(error.message);
//             // setShow(true);
//             resetLoginForm();
//             // setError("Invalid email and password");
//         });
//     return navigate('/');
// };

// const resetLoginForm = () => {
//     setUser(initialState);
// };


const theme = createTheme();


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>

    );
}
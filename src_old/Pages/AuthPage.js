import AuthForm, { STATE_LOGIN } from '../Components/AuthForm';
import React from 'react';
// import { Card, Col, Row } from 'react-bootstrap';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import { Card, CardContent, Grid } from '@mui/material';


const theme = createTheme();

class AuthPage extends React.Component {
  handleAuthState = authState => {
    this.props.history.push('/login');
  };

  handleLogoClick = () => {
    this.props.history.push('/');
  };


  render() {
    return (
      <ThemeProvider theme={theme}>
        <AuthForm
            authState={this.props.authState}
            onChangeAuthState={this.handleAuthState}
            onLogoClick={this.handleLogoClick}
          />
      </ThemeProvider>
    );
  }
}

export default AuthPage;


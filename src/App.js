// import logo from './logo.svg';
import './App.css';

import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// defaultTheme
import themes from './themes/index';

import NavigationScroll from './Components/Layout/NavigationScroll';

// routing
import Routes from './routes/index';



// ==============================|| APP ||============================== //


function App() {
  const customization = useSelector((state) => state.customization);

  return (
      <StyledEngineProvider injectFirst>
          <ThemeProvider theme={themes(customization)}>
              <CssBaseline />
              <NavigationScroll>
                    <Routes />
                </NavigationScroll>
          </ThemeProvider>
      </StyledEngineProvider>
  );
}

export default App;

	  
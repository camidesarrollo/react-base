// import logo from './logo.svg';
import './App.css';
import './App.scss';
import AppRoutes from './AppRouter';

import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// defaultTheme
import themes from './themes/index';


// ==============================|| APP ||============================== //


function App() {
  return (
    <div className="App ">
      
      <AppRoutes/>
    </div>
    
    
    
  );
}

export default App;

	  
import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppRouter from './routers/AppRouter';
import store from './store/store';
import './styles/App.css';

const customTheme = getMuiTheme({
  fontFamily: 'Montserrat, sans-serif',
  palette: {
    accent1Color: '#FF4081',
    primary1Color: '#03A9F4',
    primary2Color: '#0288D1',
    primary3Color: '#B3E5FC',
    pickerHeaderColor: '#03A9F4'
  }
});

const App = () => {
  return (
    <Provider store={store()}>
      <MuiThemeProvider muiTheme={customTheme}>
        <AppRouter />
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;

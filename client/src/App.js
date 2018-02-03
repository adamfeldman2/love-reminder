import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { connect } from 'react-redux';
import { startFetchUser } from './actions/auth';
import './styles/App.css';
import Router from './routers/router';

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

class App extends React.Component {
  componentDidMount() {
    this.props.startFetchUser();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={customTheme}>
        <Router />
      </MuiThemeProvider>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startFetchUser: () => {
      dispatch(startFetchUser());
    }
  };
};

export default connect(null, mapDispatchToProps)(App);

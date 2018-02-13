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
    accent1Color: '#fff',
    primary1Color: '#F44336',
    primary2Color: '#D32F2F',
    primary3Color: '#FFCDD2',
    pickerHeaderColor: '#F44336',
    textColor: '#1f1f1f'
  }
});

console.log(customTheme);

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

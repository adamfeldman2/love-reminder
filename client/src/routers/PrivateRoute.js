import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../pages/Login';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return auth ? <Component /> : <Login />;
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(PrivateRoute);

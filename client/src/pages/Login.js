import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Login = () => {
  return (
    <div>
      <p>You must be logged in to view this page.</p>
      <RaisedButton
        label="Login With Google"
        primary={true}
        href="/auth/google"
      />
    </div>
  );
};

export default Login;

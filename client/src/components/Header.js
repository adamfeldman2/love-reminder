import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="wrapper-component-header">
      <AppBar
        title={
          <Link className="title" to="/">
            Web App
          </Link>
        }
        iconElementRight={<FlatButton label="Login With Google" />}
      />
    </div>
  );
};

export default Header;

import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const Header = () => {
  return (
    <div className="wrapper-component-header">
      <AppBar
        title="Web App"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementRight={<FlatButton label="Login" />}
      />
    </div>
  );
};

export default Header;

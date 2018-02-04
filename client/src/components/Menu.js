import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    const innerDivStyle = {
      padding: '0'
    };

    return (
      <Drawer
        className="wrapper-component-menu"
        docked={false}
        width={200}
        open={this.props.isOpen}
        onRequestChange={this.props.onCloseRequest}
      >
        <MenuItem
          innerDivStyle={innerDivStyle}
          onClick={() => {
            this.props.onCloseRequest();
          }}
        >
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem
          innerDivStyle={innerDivStyle}
          onClick={() => {
            this.props.onCloseRequest();
          }}
        >
          <Link to="/contact">Contact</Link>
        </MenuItem>
      </Drawer>
    );
  }
}

export default Menu;

import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {
  renderContent(labelStyle) {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <FlatButton
            label="Login With Google"
            labelStyle={labelStyle}
            primary={true}
            href="/auth/google"
          />
        );

      default:
        return (
          <FlatButton
            label="Logout"
            labelStyle={labelStyle}
            primary={true}
            href="/api/logout"
          />
        );
    }
  }

  render() {
    const labelStyle = {
      color: '#FFF'
    };

    return (
      <div className="wrapper-component-header">
        <AppBar
          title={
            <Link className="title" to="/">
              Web App
            </Link>
          }
        >
          <ul className="wrapper-right-side-buttons">
            <li>
              {/* <FlatButton
                label="Login With Google"
                labelStyle={labelStyle}
                primary
              /> */}
              {this.renderContent(labelStyle)}
            </li>
          </ul>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Header);

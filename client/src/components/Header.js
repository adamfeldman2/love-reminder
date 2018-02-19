import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Menu from './Menu';
import Payment from './Payment';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState((prevState) => {
      return {
        menuOpen: !prevState.menuOpen
      };
    });
  }

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
        return [
          <li key="1">
            <Payment />
          </li>,
          <li key="2">
            <FlatButton
              label="Logout"
              labelStyle={labelStyle}
              primary={true}
              href="/api/logout"
            />
          </li>
        ];
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
            <Link className="title" to={this.props.auth ? '/dashboard' : '/'}>
              365 Reasons Why
            </Link>
          }
          onLeftIconButtonClick={this.toggleMenu}
        >
          <ul className="wrapper-right-side-buttons">
            {this.renderContent(labelStyle)}
          </ul>
        </AppBar>

        <Menu
          isOpen={this.state.menuOpen}
          onCloseRequest={() => {
            this.setState(() => {
              return {
                menuOpen: false
              };
            });
          }}
        />
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

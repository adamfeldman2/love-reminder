import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import validateEmail from '../utils/validateEmail';

class Recipient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email1: null,
      email2: null,
      email1Valid: true,
      email2Valid: true,
      emailMatch: true,
      error: false,
      submitted: false
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(e) {
    const { value } = e.target;
    const { name } = e.target;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }

  handleSubmit() {
    const email1Valid = validateEmail(this.state.email1);
    const email2Valid = validateEmail(this.state.email2);
    const emailMatch = this.state.email1 === this.state.email2;
    const error = email1Valid && email2Valid && emailMatch;

    this.setState(() => {
      return {
        email1Valid,
        email2Valid,
        emailMatch
      };
    });

    if (error) {
      this.setState(() => {
        return { error: false };
      });
    } else {
      this.setState(() => {
        return { error: true };
      });
    }
  }

  render() {
    return (
      <div className="wrapper-component-recipient wrapper">
        {!this.state.emailMatch && <div>Email addresses do not match</div>}
        <TextField
          hintText="Recipient's email address"
          name="email1"
          errorText={!this.state.email1Valid && 'Must be a valid email address'}
          onChange={this.handleEmailChange}
        />
        <TextField
          hintText="Confirm email address"
          name="email2"
          errorText={!this.state.email2Valid && 'Must be a valid email address'}
          onChange={this.handleEmailChange}
        />
        <RaisedButton
          label="Submit"
          primary={true}
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Recipient;

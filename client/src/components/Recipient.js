import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import { connect } from 'react-redux';
import validateEmail from '../utils/validateEmail';
import { startSetRecipient, recipientSaved } from '../actions/reminders';

class Recipient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email1: '',
      email2: '',
      email1Valid: true,
      email2Valid: true,
      emailMatch: true,
      error: false,
      submitted: false
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchRecipient();
  }

  // fetch recipient and set to state
  async fetchRecipient() {
    const { data: recipient } = await axios.get('/api/get_recipient');

    this.setState(() => {
      return {
        email1: recipient
      };
    });
  }

  handleEmailChange(e) {
    const { value } = e.target;
    const { name } = e.target;

    this.setState(() => {
      return {
        [name]: value
      };
    });

    if (this.props.isRecipientSaved) {
      this.props.dispatch(recipientSaved(false));
    }
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
      this.props.dispatch(startSetRecipient(this.state.email1));
      this.props.dispatch(recipientSaved('pending'));
    } else {
      this.setState(() => {
        return { error: true };
      });
    }
  }

  submitButtonText() {
    switch (this.props.isRecipientSaved) {
      case 'no changes':
        return;

      case 'pending':
        return <RaisedButton label="Saving..." primary={true} />;

      case false:
        return <RaisedButton label="Submit" primary={true} onClick={this.handleSubmit} />;

      default:
        return <RaisedButton label="Saved!" primary={true} disabled />;
    }
  }

  render() {
    const inputStyle = {
      textAlign: 'center'
    }

    return <div className="wrapper-component-recipient wrapper">
        <h3>Who are the emails being sent to?</h3>

        {!this.state.emailMatch && <div>Email addresses do not match</div>}
        <TextField hintText="Recipient's email address" name="email1" errorText={!this.state.email1Valid && 'Must be a valid email address'} onChange={this.handleEmailChange} value={this.state.email1} inputStyle={inputStyle} />

        {(this.props.isRecipientSaved !== 'no changes' || !this.props.isRecipientSaved) && <TextField hintText="Confirm email address" name="email2" errorText={!this.state.email2Valid && 'Must be a valid email address'} onChange={this.handleEmailChange} value={this.state.email2} />}

        {this.submitButtonText()}
      </div>;
  }
}

const mapStateToProps = (state) => {
  return { isRecipientSaved: state.reminders.recipientSaved };
};

export default connect(mapStateToProps)(Recipient);

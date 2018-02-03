import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

const { DateTimeFormat } = global.Intl;

class Playground extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      snackBarOpen: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSaveProgress = this.handleSaveProgress.bind(this);
    this.handleSnackBarRequestClose = this.handleSnackBarRequestClose.bind(this);
  }

  handleOpen() {
    this.setState(() => {
      return {
        open: true
      };
    });
  }

  handleClose() {
    this.setState(() => {
      return {
        open: false
      };
    });
  }

  handleSaveProgress() {
    this.setState(() => {
      return {
        snackBarOpen: true
      };
    });
  }

  handleSnackBarRequestClose() {
    this.setState(() => {
      return {
        snackBarOpen: false
      };
    });
  }

  render() {
    const buttonStyle = {
      marginTop: 59,
      marginBottom: 42
    };

    const iconButtonStyle = {
      margin: 35
    };

    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton label="Submit" primary={true} keyboardFocused={true} onClick={this.handleClose} />
    ];

    return (
      <div className="wrapper-page-playground">
        <RaisedButton style={buttonStyle} label="Open Modal" onClick={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
        <Tabs>
          <Tab label="1-100">
            <h1>1 to 100</h1>
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 1"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 2"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 3"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 4"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 5"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 6"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 7"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 8"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 9"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 10"
              fullWidth={true}
            />
          </Tab>
          <Tab label="101-200">
            <h1>101 to 200</h1>
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 101"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 102"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 103"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 104"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 105"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 106"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 107"
              fullWidth={true}
            />
          </Tab>
          <Tab label="201-300">
            <h1>201 to 300</h1>
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 201"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 202"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 203"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 204"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 205"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 206"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 207"
              fullWidth={true}
            />
          </Tab>
          <Tab label="301-365">
            <h1>301 to 365</h1>
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 301"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 302"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 303"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 304"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 305"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 306"
              fullWidth={true}
            />
            <TextField
              hintText="Tell them what you love about them. Keep it short and sweet!"
              floatingLabelText="Day 307"
              fullWidth={true}
            />
          </Tab>
        </Tabs>
        <RaisedButton label="Save Progress" primary={true} onClick={this.handleSaveProgress} />
        <br />
        Choose a start date:
        <DatePicker
          hintText="Date"
          autoOk={true}
          disableYearSelection={true}
          formatDate={
            new DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }).format
          }
        />
        <IconButton tooltip="It's a hand lizard!" tooltipPosition="top-center" style={iconButtonStyle}>
          <FontIcon className="muidocs-icon-action-home">
            <i className="fa fa-hand-lizard-o" aria-hidden="true" />
          </FontIcon>
        </IconButton>
        <Snackbar
          open={this.state.snackBarOpen}
          message="Progress Saved"
          autoHideDuration={4000}
          onRequestClose={this.handleSnackBarRequestClose}
        />
      </div>
    );
  }
}

export default Playground;

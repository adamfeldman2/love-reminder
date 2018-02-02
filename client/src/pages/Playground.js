import React from 'react';
import AppBar from 'material-ui/AppBar';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Tabs, Tab } from 'material-ui/Tabs';

class Playground extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />

        <DatePicker hintText="Date" />

        <IconButton tooltip="It's a hand lizard!" tooltipPosition="top-center" style={iconButtonStyle}>
          <FontIcon className="muidocs-icon-action-home">
            <i className="fa fa-hand-lizard-o" aria-hidden="true" />
          </FontIcon>
        </IconButton>

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
          <Tab label="Item 1">
            <h1>This is item 1</h1>
          </Tab>
          <Tab label="Item 2">
            <h1>This is item 2</h1>
          </Tab>
          <Tab label="Item 3">
            <h1>This is item 3</h1>
          </Tab>
          <Tab label="Item 4">
            <h1>This is item 4</h1>
          </Tab>
          <Tab label="Item 5">
            <h1>This is item 5</h1>
          </Tab>
          <Tab label="Item 6">
            <h1>This is item 6</h1>
          </Tab>
          <Tab label="Item 7">
            <h1>This is item 7</h1>
          </Tab>
          <Tab label="Item 8">
            <h1>This is item 8</h1>
          </Tab>
          <Tab label="Item 9">
            <h1>This is item 9</h1>
          </Tab>
          <Tab label="Item 10">
            <h1>This is item 10</h1>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Playground;

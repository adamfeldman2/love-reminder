import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class SaveProgressButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      saveUpToDate: false
    };
  }

  render() {
    const style = {
      position: 'fixed',
      right: '5%',
      bottom: '5%',
      zIndex: '1'
    };

    const labelStyle = {
      padding: '16px'
    };

    const overlayStyle = {
      display: 'flex',
      alignItems: 'center',
      height: '41px' // match buttonStyle.height value
    };

    const buttonStyle = {
      height: '41px'
    };

    return (
      <RaisedButton
        className="material-save-progress-button"
        label="Save Progress"
        primary={true}
        style={style}
        overlayStyle={overlayStyle}
        labelStyle={labelStyle}
        buttonStyle={buttonStyle}
      />
    );
  }
}

export default SaveProgressButton;

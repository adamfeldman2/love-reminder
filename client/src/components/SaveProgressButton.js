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
    const saveButtonStyle = {
      position: 'fixed',
      right: '5%',
      bottom: '5%',
      zIndex: '1'
    };

    return (
      <RaisedButton
        className="material-save-progress-button"
        label="Save Progress"
        primary={true}
        style={saveButtonStyle}
      />
    );
  }
}

export default SaveProgressButton;

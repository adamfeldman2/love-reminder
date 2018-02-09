import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

class SaveProgressButton extends React.Component {
  renderSaveButton(style, overlayStyle, labelStyle, buttonStyle) {
    switch (this.props.remindersSaved) {
      case 'no changes':
        return;

      case 'pending':
        return (
          <RaisedButton
            className="material-save-progress-button"
            label="Saving..."
            primary={true}
            style={style}
            overlayStyle={overlayStyle}
            labelStyle={labelStyle}
            buttonStyle={buttonStyle}
            onClick={this.props.onClick}
          />
        );

      case false:
        return (
          <RaisedButton
            className="material-save-progress-button"
            label="Save Progress"
            primary={true}
            style={style}
            overlayStyle={overlayStyle}
            labelStyle={labelStyle}
            buttonStyle={buttonStyle}
            onClick={this.props.onClick}
          />
        );

      default:
        return (
          <RaisedButton
            className="material-save-progress-button"
            label="Saved!"
            disabled
            primary={true}
            style={style}
            overlayStyle={overlayStyle}
            labelStyle={labelStyle}
            buttonStyle={buttonStyle}
            disabledBackgroundColor={'#419D60'}
            disabledLabelColor={'#fff'}
          />
        );
    }
  }

  render() {
    const style = { position: 'fixed', right: '5%', bottom: '5%', zIndex: '1' };

    const labelStyle = { padding: '16px' };

    const overlayStyle = {
      display: 'flex',
      alignItems: 'center',
      height: '41px'
    }; // match buttonStyle.height value

    const buttonStyle = { height: '41px' };

    return (
      <div className="wrapper-component-save-progress-button">
        {this.renderSaveButton(style, overlayStyle, labelStyle, buttonStyle)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    remindersSaved: state.reminders.remindersSaved
  };
};

export default connect(mapStateToProps)(SaveProgressButton);

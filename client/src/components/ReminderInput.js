import React from 'react';
import TextField from 'material-ui/TextField';

const ReminderInput = (props) => {
  const inputStyle = {
    margin: '7px auto 0',
    display: 'block',
    fontSize: '1.1em'
  };

  return (
    <TextField
      hintText="What do you love about them? Keep it short and sweet!"
      floatingLabelText={props.placeholder}
      style={inputStyle}
      onChange={props.handleInputChange}
      fullWidth={true}
      value={props.value}
      disabled={props.disabled}
      className={`wrapper-reminder-input ${props.disabled && props.value && 'sent'} ${!props.value &&
        props.disabled &&
        'no-value'}`}
    />
  );
};

export default ReminderInput;

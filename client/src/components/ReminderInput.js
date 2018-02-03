import React from 'react';
import TextField from 'material-ui/TextField';

const ReminderInput = (props) => {
  const inputStyle = {
    width: '90%',
    margin: '0 auto',
    display: 'block',
    fontSize: '1.3em'
  };

  return (
    <TextField
      hintText="Tell them what you love about them. Keep it short and sweet!"
      floatingLabelText={props.placeholder}
      style={inputStyle}
    />
  );
};

export default ReminderInput;

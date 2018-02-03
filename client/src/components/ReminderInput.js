import React from 'react';
import TextField from 'material-ui/TextField';

const ReminderInput = (props) => {
  const inputStyle = {
    width: '85%',
    margin: '5px auto 0',
    display: 'block',
    fontSize: '1.1em'
  };

  return <TextField hintText="What do you love about them? Keep it short and sweet!" floatingLabelText={props.placeholder} style={inputStyle} onChange={props.handleInputChange} />;
};

export default ReminderInput;

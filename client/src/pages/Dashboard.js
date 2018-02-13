import React from 'react';
import Divider from 'material-ui/Divider';
import Recipient from '../components/Recipient';
import DatePicker from '../components/DatePicker';
import Reminders from '../components/Reminders';

const Dashboard = () => {
  return (
    <div>
      <Recipient />
      <Divider />
      <DatePicker />
      <Reminders />
    </div>
  );
};

export default Dashboard;

import React from 'react';
import Recipient from '../components/Recipient';
import DatePicker from '../components/DatePicker';
import Reminders from '../components/Reminders';

const Dashboard = () => {
  return (
    <div>
      <Recipient />
      <DatePicker />
      <Reminders />
    </div>
  );
};

export default Dashboard;

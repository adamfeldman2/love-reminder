import React from 'react';
import Reminders from '../components/Reminders';
import DatePicker from '../components/DatePicker';

const Dashboard = () => {
  return (
    <div>
      <DatePicker />
      <Reminders />
    </div>
  );
};

export default Dashboard;

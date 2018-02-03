import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import ReminderInput from './ReminderInput';
import SaveProgressButton from './SaveProgressButton';

class Reminders extends React.Component {
  handleInputChange(e, name) {
    const value = e.target.value;
    this.setState(() => {
      return {
        [name]: value
      }
    });
  }

  render() {
    const tabStyle = {
      fontSize: '1.05em'
    };

    return (
      <div className="component-reminders">
        <Tabs style={tabStyle}>
          {/* 1-100 */}
          <Tab style={tabStyle} label="1-100">
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day1')} placeholder="Day 1" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day2')} placeholder="Day 2" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day3')} placeholder="Day 3" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day4')} placeholder="Day 4" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day5')} placeholder="Day 5" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day6')} placeholder="Day 6" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day7')} placeholder="Day 7" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day8')} placeholder="Day 8" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day9')} placeholder="Day 9" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day10')} placeholder="Day 10" />
          </Tab>

          {/* 101-200 */}
          <Tab style={tabStyle} label="101-200">
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 101" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 102" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 103" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 104" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 105" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 106" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 107" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 108" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 109" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 110" />
          </Tab>

          {/* 201-300 */}
          <Tab style={tabStyle} label="201-300">
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 201" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 202" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 203" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 204" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 205" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 206" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 207" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 208" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 209" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 210" />
          </Tab>

          {/* 301-365 */}
          <Tab style={tabStyle} label="301-365">
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 301" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 302" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 303" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 304" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 305" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 306" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 307" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 308" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 309" />
            <ReminderInput handleInputChange={(e) => this.handleInputChange(e, 'day90')} placeholder="Day 310" />
          </Tab>
        </Tabs>

        <SaveProgressButton />
      </div>
    );
  }
}

export default Reminders;

import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import ReminderInput from './ReminderInput';
import SaveProgressButton from './SaveProgressButton';

class Reminders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tab1Active: true,
      tab2Active: false,
      tab3Active: false,
      tab4Active: false,
      tab5Active: false
    };
  }

  handleInputChange(e, name) {
    const val = e.target.value;
    this.setState(() => {
      return {
        [name]: val
      };
    });
  }

  buildInputs(firstNum, lastNum) {
    const inputs = [];
    for (let i = firstNum - 1; i < lastNum; i++) {
      inputs.push(
        <ReminderInput
          handleInputChange={(e) => this.handleInputChange(e, `day${i + 1}`)}
          placeholder={`Day ${i + 1}`}
          key={i}
        />
      );
    }
    return inputs;
  }

  render() {
    const tabStyle = {
      fontSize: '1.03em'
    };

    return (
      <div className="component-reminders">
        <Tabs style={tabStyle}>
          {/* 1-72 */}
          <Tab
            onActive={() => {
              this.setState(() => {
                return { tab1Active: true };
              });
            }}
            style={tabStyle}
            label="1-72"
          >
            {this.state.tab1Active && this.buildInputs(1, 72)}
          </Tab>

          {/* 73-145 */}
          <Tab
            onActive={() => {
              this.setState(() => {
                return { tab2Active: true };
              });
            }}
            style={tabStyle}
            label="73-145"
          >
            {this.state.tab2Active && this.buildInputs(73, 145)}
          </Tab>

          {/* 146-218 */}
          <Tab
            onActive={() => {
              this.setState(() => {
                return { tab3Active: true };
              });
            }}
            style={tabStyle}
            label="146-218"
          >
            {this.state.tab3Active && this.buildInputs(146, 218)}
          </Tab>

          {/* 219-291 */}
          <Tab
            onActive={() => {
              this.setState(() => {
                return { tab4Active: true };
              });
            }}
            style={tabStyle}
            label="219-291"
          >
            {this.state.tab4Active && this.buildInputs(219, 291)}
          </Tab>

          {/* 292-365 */}
          <Tab
            onActive={() => {
              this.setState(() => {
                return { tab5Active: true };
              });
            }}
            style={tabStyle}
            label="292-365"
          >
            {this.state.tab5Active && this.buildInputs(292, 365)}
          </Tab>
        </Tabs>

        <SaveProgressButton />
      </div>
    );
  }
}

export default Reminders;

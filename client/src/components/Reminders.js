import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { connect } from 'react-redux';
import axios from 'axios';
import ReminderInput from './ReminderInput';
import SaveProgressButton from './SaveProgressButton';
import { storeReminders, startStoreReminders, remindersSaved } from '../actions/reminders';

class Reminders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tab1Active: true,
      tab2Active: false,
      tab3Active: false,
      tab4Active: false,
      tab5Active: false,
      reminders: this.props.remindersArr
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.fetchReminders();
  }

  onSaveProgress() {
    this.props.startStoreReminders(this.state.reminders);
    this.props.remindersSaved('pending');
  }

  async fetchReminders() {
    const { data } = await axios.get('/api/get_reminders');

    let remindersArr;
    // if user hasn't saved any progress before, use the reminders from state
    if (data.length <= 0) {
      remindersArr = this.state.reminders;
      // otherwise, use the saved data from a previous session
    } else {
      remindersArr = data;
    }

    this.props.storeReminders(remindersArr);

    this.setState(() => {
      return {
        reminders: remindersArr
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
          value={this.state.reminders[i].text}
        />
      );
    }
    return inputs;
  }

  handleInputChange(e, name) {
    const val = e.target.value;
    const dayNum = name.split('day')[1];
    const { reminders } = this.state;

    reminders[dayNum - 1].text = val;

    this.setState(() => {
      return { reminders };
    });

    // check if all new updates to reminders has been saved, if not, set remindersSaved to false, otherwise do nothing
    if (this.props.isRemindersSaved) {
      this.props.remindersSaved(false);
    }
  }

  render() {
    const tabsStyle = {
      fontSize: '.95em'
    };

    const tabStyle = {
      fontSize: '1.03em'
    };

    return (
      <div className="wrapper-component-reminders">
        <Tabs style={tabsStyle}>
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
            <div className="wrapper">{this.state.tab1Active && this.buildInputs(1, 72)}</div>
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
            <div className="wrapper">{this.state.tab2Active && this.buildInputs(73, 145)}</div>
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
            <div className="wrapper">{this.state.tab3Active && this.buildInputs(146, 218)}</div>
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
            <div className="wrapper">{this.state.tab4Active && this.buildInputs(219, 291)}</div>
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
            <div className="wrapper">{this.state.tab5Active && this.buildInputs(292, 365)}</div>
          </Tab>
        </Tabs>

        <SaveProgressButton onClick={() => this.onSaveProgress()} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    remindersArr: state.reminders.remindersArr,
    isRemindersSaved: state.reminders.remindersSaved
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeReminders: (reminders) => {
      dispatch(storeReminders(reminders));
    },

    startStoreReminders: (currentRemindersState, updatedReminders) => {
      dispatch(startStoreReminders(currentRemindersState, updatedReminders));
    },
    remindersSaved: (saved) => {
      dispatch(remindersSaved(saved));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reminders);

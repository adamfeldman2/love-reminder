import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { connect } from 'react-redux';
import { startSetDates } from '../actions/reminders';

class DatePickerComponent extends React.Component {
  handleDateChange(x, date) {
    const momentifyDate = moment(date).format('YYYY-MM-DD');
    this.props.dispatch(startSetDates(momentifyDate, this.props.remindersArr));
  }

  updateValue(date) {
    return date ? moment(new Date(date)).toDate() : null;
  }

  render() {
    const tomorrow = moment()
      .add(1, 'days')
      .toDate();

    return (
      <div className="wrapper-component-date-picker wrapper">
        <h3>
          When should the first email be sent?{' '}
          <IconButton
            tooltip={
              <div>
                <p>One email will be sent everyday, for 365</p>
                <p>days, starting on the date selected.</p>
              </div>
            }
            tooltipPosition="top-center"
          >
            <FontIcon className="muidocs-icon-action-home">
              <i className="fas fa-question-circle" />
            </FontIcon>
          </IconButton>
        </h3>

        <DatePicker
          hintText="Date"
          autoOk={true}
          disableYearSelection={true}
          minDate={tomorrow}
          formatDate={(date) => moment(date).format('MMM D, YYYY')}
          onChange={(x, date) => this.handleDateChange(x, date)}
          value={this.updateValue(this.props.remindersArr[0].sendDate)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    remindersArr: state.reminders.remindersArr
  };
};

export default connect(mapStateToProps)(DatePickerComponent);

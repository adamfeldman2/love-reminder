import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
import { connect } from 'react-redux';
import { startSetDates } from '../actions/reminders';

class DatePickerComponent extends React.Component {
  handleDateChange(undefined, date) {
    const momentifyDate = moment(date).format('MMM D, YYYY');

    this.props.dispatch(startSetDates(momentifyDate, this.props.remindersArr));
  }

  render() {
    const tomorrow = moment()
      .add(1, 'days')
      .toDate();

    return (
      <div className="wrapper-component-date-picker wrapper">
        <DatePicker
          hintText="Date"
          autoOk={true}
          minDate={tomorrow}
          formatDate={(date) => moment(date).format('MMM D, YYYY')}
          onChange={(undefined, date) => this.handleDateChange(undefined, date)}
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
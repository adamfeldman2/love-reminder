import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
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
    // const tomorrow = moment()
    //   .add(1, 'days')
    //   .toDate();

    return (
      <DatePicker
        className="wrapper-component-date-picker wrapper"
        hintText="Date"
        autoOk={true}
        disableYearSelection={true}
        // minDate={tomorrow}
        formatDate={(date) => moment(date).format('MMM D, YYYY')}
        onChange={(x, date) => this.handleDateChange(x, date)}
        value={this.updateValue(this.props.remindersArr[0].sendDate)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    remindersArr: state.reminders.remindersArr
  };
};

export default connect(mapStateToProps)(DatePickerComponent);

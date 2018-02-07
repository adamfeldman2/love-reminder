import moment from 'moment';

export default (startDate, remindersArr) => {
  for (let i = 0; i < remindersArr.length; i++) {
    const date = moment(startDate)
      .add(i, 'days')
      .format('MMM D, YYYY');

    remindersArr[i].sendDate = date;
  }

  return remindersArr;
};

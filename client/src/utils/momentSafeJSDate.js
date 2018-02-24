import moment from 'moment';

export default (momentDate) => {
  return momentDate ? moment(new Date(momentDate)).toDate() : null;
};

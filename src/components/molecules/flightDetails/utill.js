import moment from 'moment';

export const formatHourMinute = date => (
  moment(date).format('HH:mm')
);

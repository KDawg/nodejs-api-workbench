const hbs = require('hbs');
const moment = require('moment');

function FormatDateTime(unixTimeStamp) {
  const day = moment(unixTimeStamp, 'X');

  return day.format('MMM D, YYYY h:mm a');
}

function FormatDateMonthDayYear(theDate, theTime) {
  const day = moment(`${theDate} ${theTime}`);

  return day.format('MMM D, YYYY');
}

function DateHourMinute(theTime) {
  const day = moment(theTime, 'HH:mm');

  return day.format('h:mm a');
}

function DurationHourMinute(theDuration) {
  const duration = moment.duration(theDuration, 'minutes');

  return `${duration.hours()}h ${duration.minutes()}m`;
}

function ToJsonString(theObject) {
  return JSON.stringify(theObject, null, 2);
}

function FormatCurrency(amount, currencyCode) {
  return (amount / 100).toLocaleString('en', { currency: currencyCode, style: 'currency' });
}

exports.setup = () => {
  hbs.registerHelper('date-time', FormatDateTime);
  hbs.registerHelper('date-month-day-year', FormatDateMonthDayYear);
  hbs.registerHelper('date-hour-minute', DateHourMinute);
  hbs.registerHelper('duration-hour-minute', DurationHourMinute);
  hbs.registerHelper('to-json-string', ToJsonString);
  hbs.registerHelper('format-currency', FormatCurrency);
};

exports.privateTestable = {
  FormatDateTime,
  FormatDateMonthDayYear,
  DateHourMinute,
  DurationHourMinute,
  ToJsonString,
  FormatCurrency,
};

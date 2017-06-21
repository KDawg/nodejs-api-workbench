const chai = require('chai');
const HandlebarsHelpers = require('../../../app/util/handlebars_helpers');

const should = chai.should();

describe('handlebars helpers', function () {

  describe('formats date and time', function () {
    let displayString;

    before(function () {
      displayString = HandlebarsHelpers.privateTestable.FormatDateTime(1497885952);
    });

    it('should return a string', function () {
      displayString.should.be.a('string');
    });

    it('should format a date part', function() {
      const datePart = displayString.slice(0, 12);

      datePart.should.equal('Jun 19, 2017');
    });

    it('should format a time part', function() {
      const timePart = displayString.slice(13);

      timePart.should.equal('10:25 am');
    });
  });

  describe('formats duration in hours and minutes', function () {
    let displayString;

    before(function () {
      displayString = HandlebarsHelpers.privateTestable.DurationHourMinute(171);
    });

    it('should return a string', function () {
      displayString.should.be.a('string');
    });

    it('should format an hours part', function () {
      const hoursPart = displayString.slice(0, 2);

      hoursPart.should.equal('2h');
    });

    it('should format a minutes part', function () {
      const minutesPart = displayString.slice(-3);

      minutesPart.should.equal('51m');
    });
  });

  describe('formats time hour minute', function () {
    let displayStringBeforeNoon;
    let displayStringAfterNoon;

    before(function () {
      displayStringBeforeNoon = HandlebarsHelpers.privateTestable.DateHourMinute('09:00');
      displayStringAfterNoon = HandlebarsHelpers.privateTestable.DateHourMinute('18:00');
    });

    it('should return a string', function () {
      displayStringBeforeNoon.should.be.a('string');
    });

    it('should look like hour semicolon minute time period', function () {
      displayStringBeforeNoon.should.equal('9:00 am');
    });

    it('should format 24 hour time after noon into typical human readable', function () {
      displayStringAfterNoon.should.equal('6:00 pm');
    });

    it('should show am before noon', function () {
      const timePeriod = displayStringBeforeNoon.slice(-2);

      timePeriod.should.equal('am');
    });

    it('should show pm after noon', function () {
      const timePeriod = displayStringAfterNoon.slice(-2);

      timePeriod.should.equal('pm');
    });
  });

  describe('formats date month year', function () {
    let displayString;

    before(function () {
      displayString = HandlebarsHelpers.privateTestable.FormatDateMonthDayYear('2017-06-01', '09:00');
    });

    it('should return a string', function () {
      displayString.should.be.a('string');
    });

    it('should look like abbreviated month name day comma year look', function () {
      displayString.should.equal('Jun 1, 2017');
    });
  });

  describe('formats currency', function () {
    let displayString;

    before(function () {
      displayString = HandlebarsHelpers.privateTestable.FormatCurrency(12345, 'USD');
    });

    it('should return a string', function () {
      displayString.should.be.a('string');
    });

    it('should start with a dollar sign', function () {
      const dollarSign = displayString.slice(0, 1);

      dollarSign.should.equal('$');
    });

    it('should have a decimal point', function () {
      const dollarSign = displayString.slice(4, 5);

      dollarSign.should.equal('.');
    });

    it('should have whole dollars', function () {
      const cents = displayString.slice(1, 4);

      cents.should.equal('123');
    });

    it('should have cents', function () {
      const cents = displayString.slice(5, 7);

      cents.should.equal('45');
    });
  });

  describe('formats an object into json string', function () {
    const mockData = {
      "request": {
        "travelerId": "site-qabandauser-qacars1",
        "classOfService": "COACH",
        "shopByPrice": {
          "fareType": "LOWEST_AVAILABLE"
        },
      },
    };
    let displayString;

    before(function () {
      displayString = HandlebarsHelpers.privateTestable.ToJsonString(mockData);
    });

    it('should return a string', function () {
      displayString.should.be.a('string');
    });
  });
});

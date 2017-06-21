const chai = require('chai');
const config = require('../../app/config');

const should = chai.should();

describe('app configuration', function () {
  it('should have an ip address', function () {
    config.should.have.property('ip');
  });

  it('should have a port number', function () {
    config.should.have.property('port');
  });
});

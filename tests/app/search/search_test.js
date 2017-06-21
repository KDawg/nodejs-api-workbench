const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../app');
const should = chai.should();

chai.use(chaiHttp);

describe('site routes', function () {
  describe('should response to a GET request', function () {
    it('should respond with a 200 status', function (done) {
      chai.request('http://127.0.0.1:3000')
        .get('/')
        .end(function (err, res) {
          res.should.have.status(200);
          done();
        });
    });

    it('should respond with a HTML page', function (done) {
      chai.request('http://127.0.0.1:3000')
        .get('/')
        .end(function (err, res) {
          res.text.should.have.string('<!doctype html>');
          done();
        });
    });

    it('should respond with search flight page', function (done) {
      chai.request('http://127.0.0.1:3000')
        .get('/')
        .end(function (err, res) {
          res.text.should.have.string('<title>Searching on Instagram</title>');
          done();
        });
    });
  });
});

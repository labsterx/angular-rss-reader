var chai = require('chai');

global.expect = chai.expect;
var sinon = require('sinon');
chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));
global.sinon = sinon;
global.stub = sinon.stub.bind(sinon);
global.match = sinon.match.bind(sinon);
global.match.__proto__ = sinon.match;

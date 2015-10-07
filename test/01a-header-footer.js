'use strict';

var appConfig = require('appConfig');

var baseUrl = process.env.BASE_URL ? 'http://'+process.env.BASE_URL : 'http://xprize.org';

describe('XPRIZE Tests', function() {

  this.timeout(99999999);
  this.slow(10000);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the xprize.org header @main @header',function(done) {
    client
      .url(baseUrl)
      .webdrivercss(appConfig.testName, {
        name: 'header',
        elem: '#main-navigation'
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the xprize.org footer @main @footer',function(done) {
    client
      .url(baseUrl)
      .webdrivercss(appConfig.testName, {
        name: 'footer',
        elem: '#mini-panel-footer_section'
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });
});
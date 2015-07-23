'use strict';

var appConfig = require('appConfig');

describe('XPRIZE Tests', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the xprize.org header',function(done) {
    client
      .url(appConfig.mkey)
      .webdrivercss(appConfig.testName, {
        name: 'header',
        elem: '#main-navigation'
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the xprize.org footer',function(done) {
    client
      .url(appConfig.mkey)
      .webdrivercss(appConfig.testName, {
        name: 'footer',
        elem: '#mini-panel-footer_section'
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });
});
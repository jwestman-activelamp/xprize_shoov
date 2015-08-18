'use strict';

var appConfig = require('community');

describe('XPRIZE Community Tests', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the grand challenges: Vote page',function(done) {
    client
      .url(appConfig.mkey+'grand-challenges/vote')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--grand-challenges--vote',
        exclude: ['#main-navigation','#mini-panel-footer_section','.rating-icons']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
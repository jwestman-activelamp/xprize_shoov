'use strict';

var appConfig = require('sensing');

describe('XPRIZE Nokia Sensing Tests', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Nokia Sensing front page',function(done) {
    client
      .url(appConfig.key)
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing',
        remove: ['.social-stream__status'],
        exclude: ['.latest-news__story-block--basic','.social-stream__status', '.media-mentions']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });
});

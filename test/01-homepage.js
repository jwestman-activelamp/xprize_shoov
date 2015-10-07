'use strict';

var appConfig = require('appConfig');

var baseUrl = process.env.BASE_URL ? 'http://'+process.env.BASE_URL : 'http://xprize.org';

describe('XPRIZE Tests', function() {

  this.timeout(99999999);
  this.slow(15000);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the xprize.org page @main',function(done) {
    client
      .url(baseUrl)
      .webdrivercss(appConfig.testName, {
        name: 'xprize',
        remove: ['#mini-panel-footer_section','.social-stream__status','.prizes--list__leaderboard .latest-news--list'],
        exclude: ['#main-navigation','.hero-slider__img','.views-field-field-hero-image','.whats-new__story-block--basic','.prizes--list__leaderboard .latest-news--list','.pds-question-top', '.pds-answer-span','.social-stream__status', '.media-mentions']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });
});

'use strict';

var appConfig = require('appConfig');

var baseUrl = process.env.BASE_URL ? 'http://'+process.env.Credentials+'@'+process.env.BASE_URL : 'http://xprize.org';

describe('XPRIZE Prizes Page Tests', function() {

  this.timeout(99999999);
  this.slow(15000);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the prizes page @main @prizes',function(done) {
    client
      .url(baseUrl+'/prizes')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--prizes',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['.view-hero-slideshow','#main-navigation','.social-stream__status'],
        //screenWidth: appConfig.caps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the future prizes page @main @prizes',function(done) {
    client
      .url(baseUrl+'/prizes/future-prizes')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--prizes--future-prizes',
        remove: ['#mini-panel-footer_section','.prize-concepts .filters','.prize-concepts #prize-concepts-content'],
        exclude: ['#main-navigation','.star-rating'],
        //screenWidth: appConfig.caps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the future prizes: AI prize presented by TED page @main @prizes',function(done) {
    client
      .url(baseUrl+'/prizes/future-prizes/ai-xprize-presented-ted')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--prizes--future-prizes-ai-xprize-presented-ted',
        remove: ['#mini-panel-footer_section','.social-stream__status','.pane-disqus-disqus-comments'],
        exclude: ['#main-navigation','.related-post__block','.prize-voting--rating-count','.pane-disqus-disqus-comments','.social-stream__status'],
        //screenWidth: appConfig.caps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });
});

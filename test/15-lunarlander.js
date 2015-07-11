'use strict';

var appConfig = require('lunarlander');

describe('XPRIZE Northrop Grumman Lunar Lander Tests', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Northrop Grumman Lunar Lander front page',function(done) {
    client
      .url(appConfig.mkey)
      .webdrivercss(appConfig.testName, {
        name: 'lunarlander',
        remove: ['.social-stream__status'],
        exclude: ['.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Northrop Grumman Lunar Lander media room page',function(done) {
    client
      .url(appConfig.mkey+'about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'lunarlander--about-media-room',
        remove: ['.latest-news--list'],
        exclude: ['.latest-news--list']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Northrop Grumman Lunar Lander contact page',function(done) {
    client
      .url(appConfig.mkey+'about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'lunarlander--about-contact'
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News Pages

  it('should show the Northrop Grumman Lunar Lander news page',function(done) {
    client
      .url(appConfig.mkey+'news')
      .webdrivercss(appConfig.testName, {
        name: 'lunarlander--news',
        remove: ['#news-items','.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Northrop Grumman Lunar Lander news article page',function(done) {
    client
      .url(appConfig.mkey+'news/masten-wins-1-million-xprize')
      .webdrivercss(appConfig.testName, {
        name: 'lunarlander--news-article',
        remove: ['.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['.social-stream__status', '.related-post__block .related-posts__image']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Northrop Grumman Lunar Lander teams page',function(done) {
    client
      .url(appConfig.mkey+'teams')
      .webdrivercss(appConfig.testName, {
        name: 'lunarlander--teams'
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
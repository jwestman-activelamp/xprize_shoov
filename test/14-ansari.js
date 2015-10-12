'use strict';

var appConfig = require('appConfig');

var baseUrl = process.env.BASE_URL ? 'http://'+process.env.Credentials+'@ansari.'+process.env.BASE_URL : 'http://ansari.xprize.org';

describe('XPRIZE Ansari Tests', function() {

  this.timeout(99999999);
  this.slow(15000);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Ansari front page @old-competition @ansari',function(done) {
    client
      .url(baseUrl)
      .webdrivercss(appConfig.testName, {
        name: 'ansari',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Ansari media room page @old-competition @ansari',function(done) {
    client
      .url(baseUrl+'/about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'ansari--about-media-room',
        remove: ['#mini-panel-footer_section','.latest-news--list'],
        exclude: ['#main-navigation','.latest-news--list'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Ansari contact page @old-competition @ansari',function(done) {
    client
      .url(baseUrl+'/about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'ansari--about-contact',
        remove: ['#mini-panel-footer_section'],
        exclude: ['#main-navigation','#mini-panel-footer_section' ],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News Pages

  it('should show the Ansari news page @old-competition @ansari',function(done) {
    client
      .url(baseUrl+'/news')
      .webdrivercss(appConfig.testName, {
        name: 'ansari--news',
        remove: ['#mini-panel-footer_section','#news-items','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Ansari news article page @old-competition @ansari',function(done) {
    client
      .url(baseUrl+'/news/bicycles-spaceships')
      .webdrivercss(appConfig.testName, {
        name: 'ansari--news-article',
        remove: ['#mini-panel-footer_section','.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['#main-navigation','.social-stream__status', '.related-post__block .related-posts__image']
      ,         screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined}, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Ansari teams page @old-competition @ansari',function(done) {
    client
      .url(baseUrl+'/teams')
      .webdrivercss(appConfig.testName, {
        name: 'ansari--teams',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
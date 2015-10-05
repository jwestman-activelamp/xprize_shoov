'use strict';

var appConfig = require('oilcleanup');

describe('XPRIZE Oil Cleanup Tests', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Oil Cleanup front page',function(done) {
    client
      .url(appConfig.mkey)
      .webdrivercss(appConfig.testName, {
        name: 'oilcleanup',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Oil Cleanup guidelines page',function(done) {
    client
      .url(appConfig.mkey+'about/guidelines')
      .webdrivercss(appConfig.testName, {
        name: 'oilcleanup--about-guidelines',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Oil Cleanup judges page',function(done) {
    client
      .url(appConfig.mkey+'about/judges')
      .webdrivercss(appConfig.testName, {
        name: 'oilcleanup--about-judges',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Oil Cleanup Wendy Schmidt page',function(done) {
    client
      .url(appConfig.mkey+'about/wendy-schmidt')
      .webdrivercss(appConfig.testName, {
        name: 'oilcleanup--about-wendy-schmidt',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Oil Cleanup partners and supporters page',function(done) {
    client
      .url(appConfig.mkey+'about/partners-supporters')
      .webdrivercss(appConfig.testName, {
        name: 'oilcleanup--about-partners-supporters',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Oil Cleanup media room page',function(done) {
    client
      .url(appConfig.mkey+'about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'oilcleanup--about-media-room',
        remove: ['#mini-panel-footer_section','.latest-news--list'],
        exclude: ['#main-navigation','.latest-news--list']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Oil Cleanup contact page',function(done) {
    client
      .url(appConfig.mkey+'about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'oilcleanup--about-contact',
        remove: ['#mini-panel-footer_section'],
        exclude: ['#main-navigation','#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News Pages

  it('should show the Oil Cleanup news page',function(done) {
    client
      .url(appConfig.mkey+'news')
      .webdrivercss(appConfig.testName, {
        name: 'oilcleanup--news',
        remove: ['#mini-panel-footer_section','#news-items','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Oil Cleanup news article page',function(done) {
    client
      .url(appConfig.mkey+'press-release/xprize-benefit-celebrates-innovation-oil-cleanup-sets-sights-breakthroughs')
      .webdrivercss(appConfig.testName, {
        name: 'oilcleanup--news-article',
        remove: ['#mini-panel-footer_section','.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['#main-navigation','.social-stream__status', '.related-post__block .related-posts__image']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Oil Cleanup teams page',function(done) {
    client
      .url(appConfig.mkey+'teams')
      .webdrivercss(appConfig.testName, {
        name: 'oilcleanup--teams',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exlcude: ['#main-navigation','#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
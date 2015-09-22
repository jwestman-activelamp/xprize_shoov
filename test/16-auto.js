'use strict';

var appConfig = require('auto');

describe('XPRIZE Progressive Insurance Auto Tests', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Progressive Insurance Auto front page',function(done) {
    client
      .url(appConfig.mkey)
      .webdrivercss(appConfig.testName, {
        name: 'auto',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Progressive Insurance Auto overview page',function(done) {
    client
      .url(appConfig.mkey+'about/overview')
      .webdrivercss(appConfig.testName, {
        name: 'auto--about-overview',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Progressive Insurance Auto guidelines page',function(done) {
    client
      .url(appConfig.mkey+'about/guidelines')
      .webdrivercss(appConfig.testName, {
        name: 'auto--about-guidelines',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Progressive Insurance Auto schedule page',function(done) {
    client
      .url(appConfig.mkey+'about/schedule')
      .webdrivercss(appConfig.testName, {
        name: 'auto--about-schedule',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Progressive Insurance Auto technical information page',function(done) {
    client
      .url(appConfig.mkey+'about/technical-information')
      .webdrivercss(appConfig.testName, {
        name: 'auto--about-technical-information',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Progressive Insurance Auto judges and advisors page',function(done) {
    client
      .url(appConfig.mkey+'about/judges-advisors')
      .webdrivercss(appConfig.testName, {
        name: 'auto--about-judges-advisors',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Progressive Insurance Auto page',function(done) {
    client
      .url(appConfig.mkey+'about/progressive-insurance')
      .webdrivercss(appConfig.testName, {
        name: 'auto--about-progressive-insurance',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Progressive Insurance Auto partners and supporter page',function(done) {
    client
      .url(appConfig.mkey+'about/partners-supporters')
      .webdrivercss(appConfig.testName, {
        name: 'auto--about-partners-supporters',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Progressive Insurance Auto sponsors and donors page',function(done) {
    client
      .url(appConfig.mkey+'about/sponsors-donors')
      .webdrivercss(appConfig.testName, {
        name: 'auto--about-sponsors-donors',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Progressive Insurance Auto media room page',function(done) {
    client
      .url(appConfig.mkey+'about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'auto--about-media-room',
        remove: ['.latest-news--list'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.latest-news--list']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Progressive Insurance Auto contact page',function(done) {
    client
      .url(appConfig.mkey+'about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'auto--about-contact',
        exclude: ['#main-navigation','#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News Pages

  it('should show the Progressive Insurance Auto news page',function(done) {
    client
      .url(appConfig.mkey+'news')
      .webdrivercss(appConfig.testName, {
        name: 'auto--news',
        remove: ['#news-items','.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Progressive Insurance Auto news article page',function(done) {
    client
      .url(appConfig.mkey+'news/fast-times-west-philly-high')
      .webdrivercss(appConfig.testName, {
        name: 'auto--news-article',
        remove: ['.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status', '.related-post__block .related-posts__image']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Progressive Insurance Auto teams page',function(done) {
    client
      .url(appConfig.mkey+'teams')
      .webdrivercss(appConfig.testName, {
        name: 'auto--teams',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
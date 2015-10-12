'use strict';

var appConfig = require('appConfig');

var baseUrl = process.env.BASE_URL ? 'http://'+process.env.Credentials+'@genomics.'+process.env.BASE_URL : 'http://genomics.xprize.org';

describe('XPRIZE Archon Genomics Tests', function() {

  this.timeout(99999999);
  this.slow(15000);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Archon Genomics front page @old-competition @genomics',function(done) {
    client
      .url(baseUrl)
      .webdrivercss(appConfig.testName, {
        name: 'genomics',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Archon Genomics overview page @old-competition @genomics',function(done) {
    client
      .url(baseUrl+'/about/overview')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--about-overview',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Archon Genomics guidelines page @old-competition @genomics',function(done) {
    client
      .url(baseUrl+'/about/guidelines')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--about-guidelines',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Archon Genomics Dr Stewart and Marilyn Blusson page @old-competition @genomics',function(done) {
    client
      .url(baseUrl+'/about/dr-stewart-marilyn-blusson')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--about-dr-stewart-marilyn-blusson',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Archon Genomics partners and supporters page @old-competition @genomics',function(done) {
    client
      .url(baseUrl+'/about/partners-supporters')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--about-partners-supporters',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Archon Genomics scientific advisory page @old-competition @genomics',function(done) {
    client
      .url(baseUrl+'/about/scientific-advisory-board')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--about-scientific-advisory-board',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Archon Genomics media room page @old-competition @genomics',function(done) {
    client
      .url(baseUrl+'/about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--about-media-room',
        remove: ['#mini-panel-footer_section','.latest-news--list'],
        exclude: ['#main-navigation','.latest-news--list'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Archon Genomics faq page @old-competition @genomics',function(done) {
    client
      .url(baseUrl+'/about/faq')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--about-faq',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Archon Genomics contact page @old-competition @genomics',function(done) {
    client
      .url(baseUrl+'/about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--about-contact',
        remove: ['#mini-panel-footer_section'],
        exclude: ['#main-navigation','#mini-panel-footer_section'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News Pages

  it('should show the Archon Genomics news page @old-competition @genomics',function(done) {
    client
      .url(baseUrl+'/news')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--news',
        remove: ['#mini-panel-footer_section','#news-items','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Archon Genomics news article page @old-competition @genomics',function(done) {
    client
      .url(baseUrl+'/news/new-study-aims-rapidly-test-lung-cancer-drugs')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--news-article',
        remove: ['#mini-panel-footer_section','.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['#main-navigation','.social-stream__status', '.related-post__block .related-posts__image'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Archon Genomics teams page @old-competition @genomics',function(done) {
    client
      .url(baseUrl+'/teams')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--teams',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
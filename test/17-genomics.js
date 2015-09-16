'use strict';

var appConfig = require('genomics');

describe('XPRIZE Archon Genomics Tests', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Archon Genomics front page',function(done) {
    client
      .url(appConfig.mkey)
      .webdrivercss(appConfig.testName, {
        name: 'genomics',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Archon Genomics overview page',function(done) {
    client
      .url(appConfig.mkey+'about/overview')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--about-overview',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Archon Genomics guidelines page',function(done) {
    client
      .url(appConfig.mkey+'about/guidelines')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--about-guidelines',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Archon Genomics Dr Stewart and Marilyn Blusson page',function(done) {
    client
      .url(appConfig.mkey+'about/dr-stewart-marilyn-blusson')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--about-dr-stewart-marilyn-blusson',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Archon Genomics partners and supporters page',function(done) {
    client
      .url(appConfig.mkey+'about/partners-supporters')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--about-partners-supporters',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Archon Genomics scientific advisory page',function(done) {
    client
      .url(appConfig.mkey+'about/scientific-advisory-board')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--about-scientific-advisory-board',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Archon Genomics media room page',function(done) {
    client
      .url(appConfig.mkey+'about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--about-media-room',
        remove: ['.latest-news--list'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.latest-news--list']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Archon Genomics faq page',function(done) {
    client
      .url(appConfig.mkey+'about/faq')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--about-faq',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Archon Genomics contact page',function(done) {
    client
      .url(appConfig.mkey+'about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--about-contact',
        exclude: ['#main-navigation','#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News Pages

  it('should show the Archon Genomics news page',function(done) {
    client
      .url(appConfig.mkey+'news')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--news',
        remove: ['#news-items','.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Archon Genomics news article page',function(done) {
    client
      .url(appConfig.mkey+'news/new-study-aims-rapidly-test-lung-cancer-drugs')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--news-article',
        remove: ['.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status', '.related-post__block .related-posts__image']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Archon Genomics teams page',function(done) {
    client
      .url(appConfig.mkey+'teams')
      .webdrivercss(appConfig.testName, {
        name: 'genomics--teams',
        exclude: ['#main-navigation','#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
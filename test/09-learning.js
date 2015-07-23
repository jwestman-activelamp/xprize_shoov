'use strict';

var appConfig = require('learning');

describe('XPRIZE Learning Tests', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Learning front page',function(done) {
    client
      .url(appConfig.mkey)
      .webdrivercss(appConfig.testName, {
        name: 'learning',
        remove: ['.social-stream__status'],
        exclude: ['.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Learning overview page',function(done) {
    client
      .url(appConfig.mkey+'about/overview')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-overview',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning guidelines page',function(done) {
    client
      .url(appConfig.mkey+'about/guidelines')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-guidelines',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning schedule page',function(done) {
    client
      .url(appConfig.mkey+'about/schedule')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-schedule',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning benefactors page',function(done) {
    client
      .url(appConfig.mkey+'about/benefactors')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-benefactors',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning staff page',function(done) {
    client
      .url(appConfig.mkey+'about/staff')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-staff',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning individual staff page',function(done) {
    client
      .url(appConfig.mkey+'about/staff/shannon-smith')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-staff--shannon-smith',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning about XPRIZE page',function(done) {
    client
      .url(appConfig.mkey+'about/xprize')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-xprize',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning partners and supporters page',function(done) {
    client
      .url(appConfig.mkey+'about/partners-supporters')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-partners-supporters',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning media room page',function(done) {
    client
      .url(appConfig.mkey+'about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-media-room',
        remove: ['.latest-news--list'],
        exclude: ['.latest-news--list']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning faq page',function(done) {
    client
      .url(appConfig.mkey+'about/faq')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-faq',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning contact page',function(done) {
    client
      .url(appConfig.mkey+'about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-contact'
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News Pages

  it('should show the Learning news page',function(done) {
    client
      .url(appConfig.mkey+'news')
      .webdrivercss(appConfig.testName, {
        name: 'learning--news',
        remove: ['#news-items','.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning news article page',function(done) {
    client
      .url(appConfig.mkey+'news/xprize-gets-funny')
      .webdrivercss(appConfig.testName, {
        name: 'learning--news-article',
        remove: ['.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['.social-stream__status', '.related-post__block .related-posts__image']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Learning teams page',function(done) {
    client
      .url(appConfig.mkey+'teams')
      .webdrivercss(appConfig.testName, {
        name: 'learning--teams'
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Get Involved Pages

  it('should show the Learning get involved page',function(done) {
    client
      .url(appConfig.mkey+'get-involved')
      .webdrivercss(appConfig.testName, {
        name: 'learning--get-involved',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
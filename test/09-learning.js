'use strict';

var appConfig = require('appConfig');

var baseUrl = process.env.BASE_URL ? 'http://'+process.env.Credentials+'@learning.'+process.env.BASE_URL : 'http://learning.xprize.org';

describe('XPRIZE Learning Tests', function() {

  this.timeout(99999999);
  this.slow(15000);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Learning front page @competition @learning',function(done) {
    client
      .url(baseUrl)
      .webdrivercss(appConfig.testName, {
        name: 'learning',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Learning overview page @competition @learning',function(done) {
    client
      .url(baseUrl+'/about/overview')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-overview',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning guidelines page @competition @learning',function(done) {
    client
      .url(baseUrl+'/about/guidelines')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-guidelines',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning schedule page @competition @learning',function(done) {
    client
      .url(baseUrl+'/about/schedule')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-schedule',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning benefactors page @competition @learning',function(done) {
    client
      .url(baseUrl+'/about/benefactors')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-benefactors',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning staff page @competition @learning',function(done) {
    client
      .url(baseUrl+'/about/staff')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-staff',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning individual staff page @competition @learning',function(done) {
    client
      .url(baseUrl+'/about/staff/shannon-smith')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-staff--shannon-smith',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning about XPRIZE page @competition @learning',function(done) {
    client
      .url(baseUrl+'/about/xprize')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-xprize',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning partners and supporters page @competition @learning',function(done) {
    client
      .url(baseUrl+'/about/partners-supporters')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-partners-supporters',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning media room page @competition @learning',function(done) {
    client
      .url(baseUrl+'/about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-media-room',
        remove: ['#mini-panel-footer_section','.latest-news--list'],
        exclude: ['#main-navigation','.latest-news--list'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning faq page @competition @learning',function(done) {
    client
      .url(baseUrl+'/about/faq')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-faq',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning contact page @competition @learning',function(done) {
    client
      .url(baseUrl+'/about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'learning--about-contact',
        remove: ['#mini-panel-footer_section'],
        exclude: ['#main-navigation','#mini-panel-footer_section'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News Pages

  it('should show the Learning news page @competition @learning',function(done) {
    client
      .url(baseUrl+'/news')
      .webdrivercss(appConfig.testName, {
        name: 'learning--news',
        remove: ['#mini-panel-footer_section','#news-items','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Learning news article page @competition @learning',function(done) {
    client
      .url(baseUrl+'/news/xprize-gets-funny')
      .webdrivercss(appConfig.testName, {
        name: 'learning--news-article',
        remove: ['#mini-panel-footer_section','.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['#main-navigation','.social-stream__status', '.related-post__block .related-posts__image'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Learning teams page @competition @learning',function(done) {
    client
      .url(baseUrl+'/teams')
      .webdrivercss(appConfig.testName, {
        name: 'learning--teams',
        remove: ['#mini-panel-footer_section', '.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Get Involved Pages

  it('should show the Learning get involved page @competition @learning',function(done) {
    client
      .url(baseUrl+'/get-involved')
      .webdrivercss(appConfig.testName, {
        name: 'learning--get-involved',
        remove: ['#mini-panel-footer_section', '.social-stream__status', '.latest-tweets--message'],
        exclude: ['#main-navigation', '.social-stream__status'],
        screenWidth: selectedCaps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
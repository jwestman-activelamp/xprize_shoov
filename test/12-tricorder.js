'use strict';

var appConfig = require('appConfig');

var baseUrl = process.env.BASE_URL ? 'http://tricorder.'+process.env.BASE_URL : 'http://tricorder.xprize.org';

describe('XPRIZE Qualcomm Tricorder Tests', function() {

  this.timeout(99999999);
  this.slow(15000);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Qualcomm Tricorder front page @competition @tricorder',function(done) {
    client
      .url(baseUrl)
      .webdrivercss(appConfig.testName, {
        name: 'tricorder',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Qualcomm Tricorder overview page @competition @tricorder',function(done) {
    client
      .url(baseUrl+'/about/overview')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-overview',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder guidelines page @competition @tricorder',function(done) {
    client
      .url(baseUrl+'/about/guidelines')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-guidelines',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder schedule page @competition @tricorder',function(done) {
    client
      .url(baseUrl+'/about/schedule')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-schedule',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder staff page @competition @tricorder',function(done) {
    client
      .url(baseUrl+'/about/staff')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-staff',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder individual staff page @competition @tricorder',function(done) {
    client
      .url(baseUrl+'/about/staff/sara-jennings')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-staff--sara-jennings',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder judges page @competition @tricorder',function(done) {
    client
      .url(baseUrl+'/about/judges')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-judges',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder scientific advisory page @competition @tricorder',function(done) {
    client
      .url(baseUrl+'/about/scientific-advisory-board')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-scientific-advisory-board',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder Qualcomm Foundation page @competition @tricorder',function(done) {
    client
      .url(baseUrl+'/about/qualcomm-foundation')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-qualcomm-foundation',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder partners page @competition @tricorder',function(done) {
    client
      .url(baseUrl+'/about/partners')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-partners',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder media room page @competition @tricorder',function(done) {
    client
      .url(baseUrl+'/about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-media-room',
        remove: ['#mini-panel-footer_section','.latest-news--list'],
        exclude: ['#main-navigation','.latest-news--list']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder faq page @competition @tricorder',function(done) {
    client
      .url(baseUrl+'/about/faq')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-faq',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder contact page @competition @tricorder',function(done) {
    client
      .url(baseUrl+'/about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-contact',
        remove: ['#mini-panel-footer_section'],
        exclude: ['#main-navigation','#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News Pages

  it('should show the Qualcomm Tricorder news page @competition @tricorder',function(done) {
    client
      .url(baseUrl+'/news')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--news',
        remove: ['#mini-panel-footer_section','#news-items','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder news article page @competition @tricorder',function(done) {
    client
      .url(baseUrl+'/news/doctors-are-consumers-too-changing-way-physicians-approach-health-care')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--news-article',
        remove: ['#mini-panel-footer_section','.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['#main-navigation','.social-stream__status', '.related-post__block .related-posts__image']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Qualcomm Tricorder teams page @competition @tricorder',function(done) {
    client
      .url(baseUrl+'/teams')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--teams',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['.team-directory--top-three .team-directory__block','#main-navigation']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder teams about first @competition @tricorder',function(done) {
    client
      .url(baseUrl+'/teams/aezon')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--teams-about-first',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder teams about second @competition @tricorder',function(done) {
    client
      .url(baseUrl+'/teams/clouddx')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--teams-about-second',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
'use strict';

var appConfig = require('tricorder');

describe('XPRIZE Qualcomm Tricorder Tests', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Qualcomm Tricorder front page',function(done) {
    client
      .url(appConfig.mkey)
      .webdrivercss(appConfig.testName, {
        name: 'tricorder',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Qualcomm Tricorder overview page',function(done) {
    client
      .url(appConfig.mkey+'about/overview')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-overview',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder guidelines page',function(done) {
    client
      .url(appConfig.mkey+'about/guidelines')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-guidelines',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder schedule page',function(done) {
    client
      .url(appConfig.mkey+'about/schedule')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-schedule',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder staff page',function(done) {
    client
      .url(appConfig.mkey+'about/staff')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-staff',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder individual staff page',function(done) {
    client
      .url(appConfig.mkey+'about/staff/sara-jennings')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-staff--sara-jennings',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder judges page',function(done) {
    client
      .url(appConfig.mkey+'about/judges')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-judges',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder scientific advisory page',function(done) {
    client
      .url(appConfig.mkey+'about/scientific-advisory-board')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-scientific-advisory-board',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder Qualcomm Foundation page',function(done) {
    client
      .url(appConfig.mkey+'about/qualcomm-foundation')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-qualcomm-foundation',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder partners page',function(done) {
    client
      .url(appConfig.mkey+'about/partners')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-partners',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder media room page',function(done) {
    client
      .url(appConfig.mkey+'about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-media-room',
        remove: ['.latest-news--list'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.latest-news--list']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder faq page',function(done) {
    client
      .url(appConfig.mkey+'about/faq')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-faq',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder contact page',function(done) {
    client
      .url(appConfig.mkey+'about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-contact',
        exclude: ['#main-navigation','#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News Pages

  it('should show the Qualcomm Tricorder news page',function(done) {
    client
      .url(appConfig.mkey+'news')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--news',
        remove: ['#news-items','.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder news article page',function(done) {
    client
      .url(appConfig.mkey+'news/doctors-are-consumers-too-changing-way-physicians-approach-health-care')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--news-article',
        remove: ['.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status', '.related-post__block .related-posts__image']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Qualcomm Tricorder teams page',function(done) {
    client
      .url(appConfig.mkey+'teams')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--teams',
        exclude: ['#main-navigation','#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder teams about first',function(done) {
    client
      .url(appConfig.mkey+'teams/aezon')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--teams-about-first',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder teams about second',function(done) {
    client
      .url(appConfig.mkey+'teams/clouddx')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--teams-about-second',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
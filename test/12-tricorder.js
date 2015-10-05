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
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Qualcomm Tricorder overview page',function(done) {
    client
      .url(appConfig.mkey+'about/overview')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-overview',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder guidelines page',function(done) {
    client
      .url(appConfig.mkey+'about/guidelines')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-guidelines',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder schedule page',function(done) {
    client
      .url(appConfig.mkey+'about/schedule')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-schedule',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder staff page',function(done) {
    client
      .url(appConfig.mkey+'about/staff')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-staff',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder individual staff page',function(done) {
    client
      .url(appConfig.mkey+'about/staff/sara-jennings')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-staff--sara-jennings',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder judges page',function(done) {
    client
      .url(appConfig.mkey+'about/judges')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-judges',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder scientific advisory page',function(done) {
    client
      .url(appConfig.mkey+'about/scientific-advisory-board')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-scientific-advisory-board',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder Qualcomm Foundation page',function(done) {
    client
      .url(appConfig.mkey+'about/qualcomm-foundation')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-qualcomm-foundation',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder partners page',function(done) {
    client
      .url(appConfig.mkey+'about/partners')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-partners',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder media room page',function(done) {
    client
      .url(appConfig.mkey+'about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-media-room',
        remove: ['#mini-panel-footer_section','.latest-news--list'],
        exclude: ['#main-navigation','.latest-news--list']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder faq page',function(done) {
    client
      .url(appConfig.mkey+'about/faq')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-faq',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder contact page',function(done) {
    client
      .url(appConfig.mkey+'about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--about-contact',
        remove: ['#mini-panel-footer_section'],
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
        remove: ['#mini-panel-footer_section','#news-items','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder news article page',function(done) {
    client
      .url(appConfig.mkey+'news/doctors-are-consumers-too-changing-way-physicians-approach-health-care')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--news-article',
        remove: ['#mini-panel-footer_section','.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['#main-navigation','.social-stream__status', '.related-post__block .related-posts__image']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Qualcomm Tricorder teams page',function(done) {
    client
      .url(appConfig.mkey+'teams')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--teams',
        remove: ['#mini-panel-footer_section'],
        exclude: ['.team-directory__block','#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder teams about first',function(done) {
    client
      .url(appConfig.mkey+'teams/aezon')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--teams-about-first',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Qualcomm Tricorder teams about second',function(done) {
    client
      .url(appConfig.mkey+'teams/clouddx')
      .webdrivercss(appConfig.testName, {
        name: 'tricorder--teams-about-second',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
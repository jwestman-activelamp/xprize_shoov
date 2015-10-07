'use strict';

var appConfig = require('appConfig');

var baseUrl = process.env.BASE_URL ? 'http://'+process.env.Credentials+'@oceanhealth.'+process.env.BASE_URL : 'http://oceanhealth.xprize.org';

describe('XPRIZE Ocean Health Tests', function() {

  this.timeout(99999999);
  this.slow(15000);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Ocean Health front page @competition @oceanhealth',function(done) {
    client
      .url(baseUrl)
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Ocean Health overview page @competition @oceanhealth',function(done) {
    client
      .url(baseUrl+'/about/overview')
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth--about-overview',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Ocean Health guidelines page @competition @oceanhealth',function(done) {
    client
      .url(baseUrl+'/about/guidelines')
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth--about-guidelines',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Ocean Health schedule page @competition @oceanhealth',function(done) {
    client
      .url(baseUrl+'/about/schedule')
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth--about-schedule',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Ocean Health staff page @competition @oceanhealth',function(done) {
    client
      .url(baseUrl+'/about/staff')
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth--about-staff',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Ocean Health individual staff page @competition @oceanhealth',function(done) {
    client
      .url(baseUrl+'/about/staff/paul-bunje')
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth--about-staff--paul-bunje',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Ocean Health judges page @competition @oceanhealth',function(done) {
    client
      .url(baseUrl+'/about/judges')
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth--about-judges',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Ocean Health scientific advisory page @competition @oceanhealth',function(done) {
    client
      .url(baseUrl+'/about/scientific-advisory-board')
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth--about-scientific-advisory-board',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Ocean Health Wendy Schmidt page @competition @oceanhealth',function(done) {
    client
      .url(baseUrl+'/about/wendy-schmidt')
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth--about-wendy-schmidt',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Ocean Health partners and supporters page @competition @oceanhealth',function(done) {
    client
      .url(baseUrl+'/about/partners-supporters')
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth--about-partners-supporters',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Ocean Health media room page @competition @oceanhealth',function(done) {
    client
      .url(baseUrl+'/about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth--about-media-room',
        remove: ['#mini-panel-footer_section','.latest-news--list'],
        exclude: ['#main-navigation','.latest-news--list']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Ocean Health faq page @competition @oceanhealth',function(done) {
    client
      .url(baseUrl+'/about/faq')
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth--about-faq',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Ocean Health contact page @competition @oceanhealth',function(done) {
    client
      .url(baseUrl+'/about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth--about-contact',
        remove: ['#mini-panel-footer_section'],
        exclude: ['#main-navigation','#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News Pages

  it('should show the Ocean Health news page @competition @oceanhealth',function(done) {
    client
      .url(baseUrl+'/news')
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth--news',
        remove: ['#mini-panel-footer_section','#news-items','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Ocean Health news article page @competition @oceanhealth',function(done) {
    client
      .url(baseUrl+'/news/prizes-and-innovation-can-save-our-oceans')
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth--news-article',
        remove: ['#mini-panel-footer_section','.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['#main-navigation','.social-stream__status', '.related-post__block .related-posts__image']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Ocean Health teams page @competition @oceanhealth',function(done) {
    client
      .url(baseUrl+'/teams')
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth--teams',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Ocean Health teams about first @competition @oceanhealth',function(done) {
    client
      .url(baseUrl+'/teams/anb-sensors')
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth--teams-about-first',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Ocean Health teams about second @competition @oceanhealth',function(done) {
    client
      .url(baseUrl+'/teams/team-durafet')
      .webdrivercss(appConfig.testName, {
        name: 'oceanhealth--teams-about-second',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
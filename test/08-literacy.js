'use strict';

var appConfig = require('appConfig');

var baseUrl = process.env.BASE_URL ? 'http://'+process.env.Credentials+'@adultliteracy.'+process.env.BASE_URL : 'http://adultliteracy.xprize.org';

describe('XPRIZE Adult Literacy Tests', function() {

  this.timeout(99999999);
  this.slow(15000);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Adult Literacy front page @competition @literacy',function(done) {
    client
      .url(baseUrl)
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Adult Literacy overview page @competition @literacy',function(done) {
    client
      .url(baseUrl+'/about/overview')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-overview',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy guidelines page @competition @literacy',function(done) {
    client
      .url(baseUrl+'/about/guidelines')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-guidelines',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy schedule page @competition @literacy',function(done) {
    client
      .url(baseUrl+'/about/schedule')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-schedule',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy benefactors page @competition @literacy',function(done) {
    client
      .url(baseUrl+'/about/benefactors')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-benefactors',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy staff page @competition @literacy',function(done) {
    client
      .url(baseUrl+'/about/staff')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-staff',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy individual staff page @competition @literacy',function(done) {
    client
      .url(baseUrl+'/about/staff/jennifer-bravo')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-staff--jennifer-bravo',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy about XPRIZE page @competition @literacy',function(done) {
    client
      .url(baseUrl+'/about/xprize')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-xprize',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy media room page @competition @literacy',function(done) {
    client
      .url(baseUrl+'/about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-media-room',
        remove: ['#mini-panel-footer_section','.latest-news--list'],
        exclude: ['.latest-news--list']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy faq page @competition @literacy',function(done) {
    client
      .url(baseUrl+'/about/faq')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-faq',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy contact page @competition @literacy',function(done) {
    client
      .url(baseUrl+'/about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-contact',
        remove: ['#mini-panel-footer_section'],
        exclude: ['#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News Pages

  it('should show the Adult Literacy news page @competition @literacy',function(done) {
    client
      .url(baseUrl+'/news')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--news',
        remove: ['#mini-panel-footer_section','#news-items','.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy news article page @competition @literacy',function(done) {
    client
      .url(baseUrl+'/news/literacy-changes-lives')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--news-article',
        remove: ['#mini-panel-footer_section','.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['.social-stream__status', '.related-post__block .related-posts__image']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Adult Literacy teams page @competition @literacy',function(done) {
    client
      .url(baseUrl+'/teams')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--teams',
        remove: ['#mini-panel-footer_section'],
        exclude: ['#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Get Involved Pages

  it('should show the Adult Literacy get involved page @competition @literacy',function(done) {
    client
      .url(baseUrl+'/get-involved')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--get-involved',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy think tank page @competition @literacy',function(done) {
    client
      .url(baseUrl+'/get-involved/think-tank')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--get-involved--think-tank',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
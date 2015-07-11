'use strict';

var appConfig = require('adultliteracy');

describe('XPRIZE Adult Literacy Tests', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Adult Literacy front page',function(done) {
    client
      .url(appConfig.mkey)
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy',
        remove: ['.social-stream__status'],
        exclude: ['.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Adult Literacy overview page',function(done) {
    client
      .url(appConfig.mkey+'about/overview')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-overview',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy guidelines page',function(done) {
    client
      .url(appConfig.mkey+'about/guidelines')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-guidelines',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy schedule page',function(done) {
    client
      .url(appConfig.mkey+'about/schedule')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-schedule',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy benefactors page',function(done) {
    client
      .url(appConfig.mkey+'about/benefactors')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-benefactors',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy staff page',function(done) {
    client
      .url(appConfig.mkey+'about/staff')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-staff',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy individual staff page',function(done) {
    client
      .url(appConfig.mkey+'about/staff/jennifer-bravo')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-staff--jennifer-bravo',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy about XPRIZE page',function(done) {
    client
      .url(appConfig.mkey+'about/xprize')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-xprize',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy media room page',function(done) {
    client
      .url(appConfig.mkey+'about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-media-room',
        remove: ['.latest-news--list'],
        exclude: ['.latest-news--list']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy faq page',function(done) {
    client
      .url(appConfig.mkey+'about/faq')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-faq',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy contact page',function(done) {
    client
      .url(appConfig.mkey+'about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--about-contact'
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News Pages

  it('should show the Adult Literacy news page',function(done) {
    client
      .url(appConfig.mkey+'news')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--news',
        remove: ['#news-items','.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy news article page',function(done) {
    client
      .url(appConfig.mkey+'news/literacy-changes-lives')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--news-article',
        remove: ['.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['.social-stream__status', '.related-post__block .related-posts__image']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Adult Literacy teams page',function(done) {
    client
      .url(appConfig.mkey+'teams')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--teams'
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Get Involved Pages

  it('should show the Adult Literacy get involved page',function(done) {
    client
      .url(appConfig.mkey+'get-involved')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--get-involved',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Adult Literacy think tank page',function(done) {
    client
      .url(appConfig.mkey+'get-involved/think-tank')
      .webdrivercss(appConfig.testName, {
        name: 'adult-literacy--get-involved--think-tank',
        remove: ['.social-stream__status'],
        exclude: ['.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
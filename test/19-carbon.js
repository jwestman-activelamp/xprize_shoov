'use strict';

var appConfig = require('carbon');

describe('XPRIZE NRG Cosia Carbon XPRIZE Tests', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Carbon front page',function(done) {
    client
      .url(appConfig.mkey)
      .webdrivercss(appConfig.testName, {
        name: 'carbon',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Carbon overview page',function(done) {
    client
      .url(appConfig.mkey+'about/overview')
      .webdrivercss(appConfig.testName, {
        name: 'carbon--about-overview',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Carbon guidelines page',function(done) {
    client
      .url(appConfig.mkey+'about/guidelines')
      .webdrivercss(appConfig.testName, {
        name: 'carbon--about-guidelines',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Carbon schedule page',function(done) {
    client
      .url(appConfig.mkey+'about/schedule')
      .webdrivercss(appConfig.testName, {
        name: 'carbon--about-schedule',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Carbon sponsors page',function(done) {
    client
      .url(appConfig.mkey+'about/sponsors')
      .webdrivercss(appConfig.testName, {
        name: 'carbon--about-sponsors',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Carbon staff page',function(done) {
    client
      .url(appConfig.mkey+'about/staff')
      .webdrivercss(appConfig.testName, {
        name: 'carbon--about-staff',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Carbon individual staff page',function(done) {
    client
      .url(appConfig.mkey+'about/staff/paul-bunje')
      .webdrivercss(appConfig.testName, {
        name: 'carbon--about-staff--paul-bunje',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Carbon About XPRIZE page',function(done) {
    client
      .url(appConfig.mkey+'about/xprize')
      .webdrivercss(appConfig.testName, {
        name: 'carbon--about-xprize',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Carbon media room page',function(done) {
    client
      .url(appConfig.mkey+'about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'carbon--about-media-room',
        remove: ['#mini-panel-footer_section','.latest-news--list'],
        exclude: ['#main-navigation','.latest-news--list']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Carbon faq page',function(done) {
    client
      .url(appConfig.mkey+'about/faq')
      .webdrivercss(appConfig.testName, {
        name: 'carbon--about-faq',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Carbon contact page',function(done) {
    client
      .url(appConfig.mkey+'about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'carbon--about-contact',
        remove: ['#mini-panel-footer_section'],
        exclude: ['#main-navigation','#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News Pages

  it('should show the Carbon news page',function(done) {
    client
      .url(appConfig.mkey+'news')
      .webdrivercss(appConfig.testName, {
        name: 'carbon--news',
        remove: ['#mini-panel-footer_section','#news-items','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Carbon news article page',function(done) {
    client
      .url(appConfig.mkey+'news/introducing-20m-nrg-cosia-carbon-xprize')
      .webdrivercss(appConfig.testName, {
        name: 'carbon--news-article',
        remove: ['#mini-panel-footer_section','.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['#main-navigation','.social-stream__status', '.related-post__block .related-posts__image']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Carbon teams page',function(done) {
    client
      .url(appConfig.mkey+'teams')
      .webdrivercss(appConfig.testName, {
        name: 'carbon--teams',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exlcude: ['#main-navigation','#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Get Involved Pages

  it('should show the Carbon get involved page',function(done) {
    client
      .url(appConfig.mkey+'get-involved')
      .webdrivercss(appConfig.testName, {
        name: 'carbon--get-involved',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exlcude: ['#main-navigation','#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
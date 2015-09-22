'use strict';

var appConfig = require('sensing');

describe('XPRIZE Nokia Sensing Tests', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Nokia Sensing front page',function(done) {
    client
      .url(appConfig.mkey)
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Nokia Sensing overview page',function(done) {
    client
      .url(appConfig.mkey+'about/overview')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-overview',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing guidelines page',function(done) {
    client
      .url(appConfig.mkey+'about/guidelines')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-guidelines',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing schedule page',function(done) {
    client
      .url(appConfig.mkey+'about/schedule')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-schedule',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing staff page',function(done) {
    client
      .url(appConfig.mkey+'about/staff')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-staff',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing individual staff page',function(done) {
    client
      .url(appConfig.mkey+'about/staff/grant-company')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-staff--grant-company',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing judges for competition 1 page',function(done) {
    client
      .url(appConfig.mkey+'about/judges/competition-1')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-judges-competition-1',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing judges for competition 2 page',function(done) {
    client
      .url(appConfig.mkey+'about/judges/competition-2')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-judges-competition-2',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing scientific advisory board page',function(done) {
    client
      .url(appConfig.mkey+'about/scientific-advisory-board')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-scientific-advisory-board',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing nokia page',function(done) {
    client
      .url(appConfig.mkey+'about/nokia')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-nokia',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing partners page',function(done) {
    client
      .url(appConfig.mkey+'about/partners')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-partners',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing media room page',function(done) {
    client
      .url(appConfig.mkey+'about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-media-room',
        remove: ['.latest-news--list'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.latest-news--list']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing faq page',function(done) {
    client
      .url(appConfig.mkey+'about/faq')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-faq',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing contact page',function(done) {
    client
      .url(appConfig.mkey+'about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-contact',
        exclude: ['#main-navigation','#mini-panel-footer_section',]
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News Pages

  it('should show the Nokia Sensing news page',function(done) {
    client
      .url(appConfig.mkey+'news')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--news',
        remove: ['#news-items','.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing news article page',function(done) {
    client
      .url(appConfig.mkey+'news/ebola-stroke-timing-everything')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--news-article',
        remove: ['.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status', '.related-post__block .related-posts__image']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Nokia Sensing competition 1 teams page',function(done) {
    client
      .url(appConfig.mkey+'teams/competition-1-teams')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--teams-competition-1-teams',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing competition 1 teams about gold page',function(done) {
    client
      .url(appConfig.mkey+'teams/competition-1-teams/nanobiosym-health-radar')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--teams-competition-1-teams-about-gold',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing competition 1 teams about silver page',function(done) {
    client
      .url(appConfig.mkey+'teams/competition-1-teams/elfi-tech')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--teams-competition-1-teams-about-silver',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing competition 1 teams about regular page',function(done) {
    client
      .url(appConfig.mkey+'teams/competition-1-teams/holomic')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--teams-competition-1-teams-about-regular',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing competition 2 teams page',function(done) {
    client
      .url(appConfig.mkey+'teams/competition-2-teams')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--teams-competition-2-teams',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing competition 2 teams about gold page',function(done) {
    client
      .url(appConfig.mkey+'teams/competition-2-teams/dmi')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--teams-competition-2-teams-about-gold',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing competition 2 teams about silver page',function(done) {
    client
      .url(appConfig.mkey+'teams/competition-2-teams/golden-gopher-magnetic-biosensing')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--teams-competition-2-teams-about-silver',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing competition 2 teams about regular page',function(done) {
    client
      .url(appConfig.mkey+'teams/competition-2-teams/hemolix')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--teams-competition-2-teams-about-regular',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });
});

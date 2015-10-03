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
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Nokia Sensing overview page',function(done) {
    client
      .url(appConfig.mkey+'about/overview')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-overview',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing guidelines page',function(done) {
    client
      .url(appConfig.mkey+'about/guidelines')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-guidelines',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing schedule page',function(done) {
    client
      .url(appConfig.mkey+'about/schedule')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-schedule',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing staff page',function(done) {
    client
      .url(appConfig.mkey+'about/staff')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-staff',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing individual staff page',function(done) {
    client
      .url(appConfig.mkey+'about/staff/grant-company')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-staff--grant-company',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing judges for competition 1 page',function(done) {
    client
      .url(appConfig.mkey+'about/judges/competition-1')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-judges-competition-1',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing judges for competition 2 page',function(done) {
    client
      .url(appConfig.mkey+'about/judges/competition-2')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-judges-competition-2',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing scientific advisory board page',function(done) {
    client
      .url(appConfig.mkey+'about/scientific-advisory-board')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-scientific-advisory-board',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing nokia page',function(done) {
    client
      .url(appConfig.mkey+'about/nokia')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-nokia',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing partners page',function(done) {
    client
      .url(appConfig.mkey+'about/partners')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-partners',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing media room page',function(done) {
    client
      .url(appConfig.mkey+'about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-media-room',
        remove: ['#mini-panel-footer_section','.latest-news--list'],
        exclude: ['#main-navigation','.latest-news--list']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing faq page',function(done) {
    client
      .url(appConfig.mkey+'about/faq')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-faq',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing contact page',function(done) {
    client
      .url(appConfig.mkey+'about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--about-contact',
        exclude: ['#main-navigation',]
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News Pages

  it('should show the Nokia Sensing news page',function(done) {
    client
      .url(appConfig.mkey+'news')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--news',
        remove: ['#mini-panel-footer_section','#news-items','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing news article page',function(done) {
    client
      .url(appConfig.mkey+'news/ebola-stroke-timing-everything')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--news-article',
        remove: ['#mini-panel-footer_section','.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['#main-navigation','.social-stream__status', '.related-post__block .related-posts__image']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Nokia Sensing competition 1 teams page',function(done) {
    client
      .url(appConfig.mkey+'teams/competition-1-teams')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--teams-competition-1-teams',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing competition 1 teams about gold page',function(done) {
    client
      .url(appConfig.mkey+'teams/competition-1-teams/nanobiosym-health-radar')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--teams-competition-1-teams-about-gold',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing competition 1 teams about silver page',function(done) {
    client
      .url(appConfig.mkey+'teams/competition-1-teams/elfi-tech')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--teams-competition-1-teams-about-silver',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing competition 1 teams about regular page',function(done) {
    client
      .url(appConfig.mkey+'teams/competition-1-teams/holomic')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--teams-competition-1-teams-about-regular',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing competition 2 teams page',function(done) {
    client
      .url(appConfig.mkey+'teams/competition-2-teams')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--teams-competition-2-teams',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing competition 2 teams about gold page',function(done) {
    client
      .url(appConfig.mkey+'teams/competition-2-teams/dmi')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--teams-competition-2-teams-about-gold',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing competition 2 teams about silver page',function(done) {
    client
      .url(appConfig.mkey+'teams/competition-2-teams/golden-gopher-magnetic-biosensing')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--teams-competition-2-teams-about-silver',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Nokia Sensing competition 2 teams about regular page',function(done) {
    client
      .url(appConfig.mkey+'teams/competition-2-teams/hemolix')
      .webdrivercss(appConfig.testName, {
        name: 'nokia-sensing--teams-competition-2-teams-about-regular',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });
});

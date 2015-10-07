'use strict';

var appConfig = require('appConfig');

var baseUrl = process.env.BASE_URL ? 'http://'+process.env.Credentials+'@lunar.'+process.env.BASE_URL : 'http://lunar.xprize.org';

describe('XPRIZE Google Lunar Tests', function() {

  this.timeout(99999999);
  this.slow(15000);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Google Lunar front page @competition @lunar',function(done) {
    client
      .url(baseUrl)
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status', '.media-mentions']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // About Pages

  it('should show the Google Lunar overview page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/about/overview')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--about-overview',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar why the moon page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/about/why-the-moon')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--about-why-the-moon',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar the space race page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/about/the-new-space-race')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--about-the-new-space-race',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar guidelines page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/about/guidelines')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--about-guidelines',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar milestone prizes page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/about/milestone-prizes')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--about-milestone-prizes',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar staff page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/about/staff')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--about-staff',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar individual staff page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/about/staff/andrew-barton')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--about-staff--andrew-barton',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar judges page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/about/judges')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--about-judges',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar media room page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/about/media-room')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--about-media-room',
        remove: ['#mini-panel-footer_section','.latest-news--list'],
        exclude: ['#main-navigation','.latest-news--list']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar faq page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/about/faq')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--about-faq',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar contact page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/about/contact')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--about-contact',
        remove: ['#mini-panel-footer_section'],
        exclude: ['#main-navigation','#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News Pages

  it('should show the Google Lunar news page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/news')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--news',
        remove: ['#mini-panel-footer_section','#news-items','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar news article page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/news/audi-ag-supports-part-time-scientists')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--news-article',
        remove: ['#mini-panel-footer_section','.social-stream__status', '.related-post__block .views-field-title', '.pane-disqus-disqus-comments'],
        exclude: ['#main-navigation','.social-stream__status', '.related-post__block .related-posts__image']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });


  it('should show the news: lunar blog article page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/news/blog/kaunertal-then-moon-august-alps-test-puli')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--news--blog--kaunertal',
        remove: ['#mini-panel-footer_section','.social-stream__status', '.pane-disqus-disqus-comments'],
        exclude: ['#main-navigation','.related-post__block','.social-stream__status', '.pane-disqus-disqus-comments']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Teams Pages

  it('should show the Google Lunar teams page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/teams')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--teams',
        remove: ['#mini-panel-footer_section','.social-stream__status','.team-directory--top-three .team-directory__block'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar teams about first @competition @lunar',function(done) {
    client
      .url(baseUrl+'/teams/team-spaceil')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--teams-about-first',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar teams about second @competition @lunar',function(done) {
    client
      .url(baseUrl+'/teams/astrobotic')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--teams-about-second',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar teams blog page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/teams/astrobotic/blog')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--teams-blog',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar teams individual blog page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/teams/blog')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--teams-blog--individual',
        remove: ['#mini-panel-footer_section','.social-stream__status', '.team-about__individual-news'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar teams video page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/teams/astrobotic/videos')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--teams-videos',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Education Pages

  it('should show the Google Lunar education page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/education')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--education',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar moonbots page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/education/moonbots')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--education-moonbots',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar fulldome planetarium page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/education/domeshow')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--education-domeshow',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar fulldome planetarium licensing page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/education/domeshow-licensing')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--education-domeshow-licensing',
        remove: ['#mini-panel-footer_section'],
        exclude: ['#main-navigation','#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Google Lunar fulldome planetarium marketing page @competition @lunar',function(done) {
    client
      .url(baseUrl+'/education/dome-show-press-kit')
      .webdrivercss(appConfig.testName, {
        name: 'google-lunar--education-domeshow-marketing',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });
});
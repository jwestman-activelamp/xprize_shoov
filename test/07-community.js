'use strict';

var appConfig = require('appConfig');

var baseUrl = process.env.BASE_URL ? 'http://community'+process.env.BASE_URL : 'http://community.xprize.org';

describe('XPRIZE Community Tests', function() {

  this.timeout(99999999);
  this.slow(15000);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Community front page @microsite @community',function(done) {
    client
      .url(baseUrl)
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.view-microsite-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Community think tanks page @microsite @community',function(done) {
    client
      .url(baseUrl+'/thinktanks')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--thinktanks',
        remove: ['.think-tank-map','#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Community hangout page @microsite @community',function(done) {
    client
      .url(baseUrl+'/hangout')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--hangout',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the newsletter signup page @microsite @community',function(done) {
    client
      .url(baseUrl+'/signup')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--get-involved--newsletter-signup',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Get Involved

  it('should show the Community get involved page @microsite @community',function(done) {
    client
      .url(baseUrl+'/getinvolved')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--get-involved',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the future prizes: Vote page @microsite @community',function(done) {
    client
      .url(baseUrl+'/getinvolved/future-prizes-vote')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--get-involved--future-prizes-vote',
        remove: ['#mini-panel-footer_section'],
        exclude: ['#main-navigation','.rating-icons']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });
  it('should show the grand challenges: Vote page @microsite @community',function(done) {
    client
      .url(baseUrl+'/getinvolved/grand-challenges-vote')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--get-involved--grand-challenges-vote',
        remove: ['#mini-panel-footer_section'],
        exclude: ['#main-navigation','.rating-icons']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Community participate page @microsite @community',function(done) {
    client
      .url(baseUrl+'/getinvolved/participate')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--get-involved--participate',
        remove: ['#mini-panel-footer_section','.latest-tweets--message','.social-stream__status'],
        exclude: ['.pds-question-top', '.pds-answer-span','#main-navigation','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Think Tanks

  it('should show the think tanks join page @microsite @community',function(done) {
    client
      .url(baseUrl+'/thinktanks/join')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--think-tanks--join',
        remove: ['#mini-panel-footer_section','.social-stream__status','.think-tank-map'],
        exclude: ['#main-navigation','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the think tanks create page @microsite @community',function(done) {
    client
      .url(baseUrl+'/thinktanks/create')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--think-tanks--create',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Resources
  it('should show the resources chat page @microsite @community',function(done) {
    client
      .url(baseUrl+'/resources/chat')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--resources--chat',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        hide: ['#kiwi'],
        exclude: ['#main-navigation','.social-stream__status','.latest-news__story-block--featured','.latest-news__story-block--basic']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the resources calendar page @microsite @community',function(done) {
    client
      .url(baseUrl+'/resources/calendar')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--resources--calendar',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status','.latest-news__story-block--featured','.latest-news__story-block--basic']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News
  it('should show the resources news page @microsite @community',function(done) {
    client
      .url(baseUrl+'/news')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--news',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status','.latest-news__story-block--featured','.latest-news__story-block--basic']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the community news: article page @microsite @community',function(done) {
    client
      .url(baseUrl+'/news/blog/jono-bacon-interview-about-xprize-and-community')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--news--jono-bacon-interview-about-xprize-and-community',
        remove: ['#mini-panel-footer_section','.social-stream__status','.pane-disqus-disqus-comments'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
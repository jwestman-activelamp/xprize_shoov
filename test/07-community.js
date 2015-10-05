'use strict';

var appConfig = require('community');

describe('XPRIZE Community Tests', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the Community front page',function(done) {
    client
      .url(appConfig.mkey)
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.view-microsite-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Community think tanks page',function(done) {
    client
      .url(appConfig.mkey+'thinktanks')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--thinktanks',
        remove: ['.think-tank-map','#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Community hangout page',function(done) {
    client
      .url(appConfig.mkey+'hangout')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--hangout',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the newsletter signup page',function(done) {
    client
      .url(appConfig.mkey+'signup')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--get-involved--newsletter-signup',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Get Involved

  it('should show the Community get involved page',function(done) {
    client
      .url(appConfig.mkey+'getinvolved')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--get-involved',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the future prizes: Vote page',function(done) {
    client
      .url(appConfig.mkey+'getinvolved/future-prizes-vote')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--get-involved--future-prizes-vote',
        remove: ['#mini-panel-footer_section'],
        exclude: ['#main-navigation','.rating-icons']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });
  it('should show the grand challenges: Vote page',function(done) {
    client
      .url(appConfig.mkey+'getinvolved/grand-challenges-vote')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--get-involved--grand-challenges-vote',
        remove: ['#mini-panel-footer_section'],
        exclude: ['#main-navigation','.rating-icons']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Community participate page',function(done) {
    client
      .url(appConfig.mkey+'getinvolved/participate')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--get-involved--participate',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['.pds-question-top', '.pds-answer-span','#main-navigation','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Think Tanks

  it('should show the think tanks join page',function(done) {
    client
      .url(appConfig.mkey+'thinktanks/join')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--think-tanks--join',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['.think-tank-map','#main-navigation','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the think tanks create page',function(done) {
    client
      .url(appConfig.mkey+'thinktanks/create')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--think-tanks--create',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Resources
  it('should show the resources chat page',function(done) {
    client
      .url(appConfig.mkey+'resources/chat')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--resources--chat',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status','.latest-news__story-block--featured','.latest-news__story-block--basic']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the resources calendar page',function(done) {
    client
      .url(appConfig.mkey+'resources/calendar')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--resources--calendar',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status','.latest-news__story-block--featured','.latest-news__story-block--basic']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News
  it('should show the resources news page',function(done) {
    client
      .url(appConfig.mkey+'news')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--news',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status','.latest-news__story-block--featured','.latest-news__story-block--basic']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the community news: article page',function(done) {
    client
      .url(appConfig.mkey+'news/blog/jono-bacon-interview-about-xprize-and-community')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--news--jono-bacon-interview-about-xprize-and-community',
        remove: ['#mini-panel-footer_section','.social-stream__status'],
        exclude: ['#main-navigation','.social-stream__status','.pane-disqus-disqus-comments']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
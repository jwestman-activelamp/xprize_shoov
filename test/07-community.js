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
        remove: ['.social-stream__status'],
        exclude: ['.view-competition-hero-slideshow','.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Community think tanks page',function(done) {
    client
      .url(appConfig.mkey+'thinktanks')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--thinktanks',
        remove: ['.social-stream__status'],
        exclude: ['.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Community hangout page',function(done) {
    client
      .url(appConfig.mkey+'hangout')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--hangout',
        remove: ['.social-stream__status'],
        exclude: ['.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the newsletter signup page',function(done) {
    client
      .url(appConfig.mkey+'signup')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--get-involved--newsletter-signup',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Get Involved

  it('should show the Community get involved page',function(done) {
    client
      .url(appConfig.mkey+'getinvolved')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--get-involved',
        remove: ['.social-stream__status'],
        exclude: ['.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the future prizes: Vote page',function(done) {
    client
      .url(appConfig.mkey+'getinvolved/future-prizes-vote')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--get-involved--future-prizes-vote',
        exclude: ['#main-navigation','#mini-panel-footer_section','.rating-icons']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });
  it('should show the grand challenges: Vote page',function(done) {
    client
      .url(appConfig.mkey+'getinvolved/grand-challenges-vote')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--get-involved--grand-challenges-vote',
        exclude: ['#main-navigation','#mini-panel-footer_section','.rating-icons']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the Community participate page',function(done) {
    client
      .url(appConfig.mkey+'getinvolved/participate')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--get-involved--participate',
        remove: ['.social-stream__status'],
        exclude: ['.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Think Tanks

  it('should show the think tanks join page',function(done) {
    client
      .url(appConfig.mkey+'thinktanks/join')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--think-tanks--join',
        remove: ['.social-stream__status'],
        exclude: ['.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the think tanks create page',function(done) {
    client
      .url(appConfig.mkey+'thinktanks/create')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--think-tanks--create',
        remove: ['.social-stream__status'],
        exclude: ['.latest-news__story-block--featured','.latest-news__story-block--basic','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // Resources
  it('should show the resources chat page',function(done) {
    client
      .url(appConfig.mkey+'resources/chat')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--resources--chat',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the resources calendar page',function(done) {
    client
      .url(appConfig.mkey+'resources/calendar')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--resources--calendar',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  // News
  it('should show the resources news page',function(done) {
    client
      .url(appConfig.mkey+'resources/news')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--community--news',
        remove: ['.social-stream__status'],
        exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});
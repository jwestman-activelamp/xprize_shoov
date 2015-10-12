'use strict';

var appConfig = require('appConfig');

var baseUrl = process.env.BASE_URL ? 'http://'+process.env.Credentials+'@'+process.env.BASE_URL : 'http://xprize.org';

describe('XPRIZE Grand Challenges Page Tests', function() {

  this.timeout(99999999);
  this.slow(15000);
  var client = {};

  before(function(done){
    client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
  });

  after(function(done) {
    appConfig.shoovWebdrivercss.after(done);
  });

  it('should show the grand challenges page @main @grand-challenges',function(done) {
    client
      .url(baseUrl+'/grand-challenges')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--grand-challenges',
        remove: ['#mini-panel-footer_section'],
        exclude: ['view-grand-challenges','#main-navigation','#mini-panel-footer_section'],
        screenWidth: appConfig.caps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the grand challenges: Energy and Environment Group page @main @grand-challenges',function(done) {
    client
      .url(baseUrl+'/grand-challenges/energy-environment')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--grand-challenges--energy-environment',
        remove: ['#mini-panel-footer_section','.social-stream__status','.prize-concepts .filters', '.prize-concepts #prize-concepts-content'],
        exclude: ['#main-navigation','.social-stream__status','.star-rating'],
        screenWidth: appConfig.caps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the grand challenges: Exploration Group page @main @grand-challenges',function(done) {
    client
      .url(baseUrl+'/grand-challenges/exploration')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--grand-challenges--exploration',
        remove: ['#mini-panel-footer_section','.social-stream__status','.prize-concepts .filters', '.prize-concepts #prize-concepts-content'],
        exclude: ['#main-navigation','.social-stream__status','.star-rating'],
        screenWidth: appConfig.caps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the grand challenges: Global Development Group page @main @grand-challenges',function(done) {
    client
      .url(baseUrl+'/grand-challenges/global-development')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--grand-challenges--global-development',
        remove: ['#mini-panel-footer_section','.social-stream__status','.prize-concepts .filters', '.prize-concepts #prize-concepts-content'],
        exclude: ['#main-navigation','.social-stream__status','.star-rating'],
        screenWidth: appConfig.caps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the grand challenges: Learning Group page @main @grand-challenges',function(done) {
    client
      .url(baseUrl+'/grand-challenges/learning')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--grand-challenges--learning',
        remove: ['#mini-panel-footer_section','.social-stream__status','.prize-concepts .filters', '.prize-concepts #prize-concepts-content'],
        exclude: ['#main-navigation','.social-stream__status','.star-rating'],
        screenWidth: appConfig.caps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the grand challenges: Life Sciences Group page @main @grand-challenges',function(done) {
    client
      .url(baseUrl+'/grand-challenges/life-sciences')
      .webdrivercss(appConfig.testName, {
        name: 'xprize--grand-challenges--life-sciences',
        remove: ['#mini-panel-footer_section','.social-stream__status','.prize-concepts .filters', '.prize-concepts #prize-concepts-content'],
        exclude: ['#main-navigation','.social-stream__status','.star-rating'],
        screenWidth: appConfig.caps == 'chrome' ? [400, 1024, 2240] : undefined
      }, appConfig.shoovWebdrivercss.processResults)
      .call(done);
  });

});

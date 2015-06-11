'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');

// Pass the environment key into mocha
// env KEY=local mocha
var key;
switch (process.env.KEY) {
  case "local":
    key = "http://xprize.local/";
    break;
  case "dev":
    key = "http://xprize:version3@dev2.xprize.org/";
    break;
  case "stage":
    key = "http://xprize:version3@stage2.xprize.org/";
    break;
  default:
    key = "http://xprize.org/";
    break;
}

// This is an example assuming BrowserStack is used, as the capabilities are
// encoded in the way their system is using.
// See https://www.browserstack.com/automate/node

// This can be executed by passing the environment argument like this:
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=ie11 mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=chrome mocha
var capsConfig = {
    'chrome': {
        'browser' : 'Chrome',
        'browser_version' : '39.0',
        'os' : 'OS X',
        'os_version' : 'Yosemite',
        'resolution' : '1024x768'
    },
    'ie11': {
        'browser' : 'IE',
        'browser_version' : '11.0',
        'os' : 'Windows',
        'os_version' : '7',
        'resolution' : '1024x768'
    }
}

var selectedCaps = process.env.SELECTED_CAPS || undefined;
var caps = selectedCaps ? capsConfig[selectedCaps] : undefined;

var providerPrefix = process.env.PROVIDER_PREFIX ? process.env.PROVIDER_PREFIX + '-' : '';
var testName = selectedCaps ? providerPrefix + selectedCaps : providerPrefix + 'default';

describe('XPRIZE Grand Challenges Page Tests', function() {

    this.timeout(99999999);
    var client = {};

    before(function(done){
        client = shoovWebdrivercss.before(done, caps);
    });

    after(function(done) {
        shoovWebdrivercss.after(done);
    });

    it('should show the grand challenges page',function(done) {
        client
            .url(key+'grand-challenges')
            .webdrivercss(testName, {
                name: 'xprize--grand-challenges'
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the grand challenges: Energy and Environment Group page',function(done) {
        client
            .url(key+'grand-challenges/energy-environment')
            .webdrivercss(testName, {
                name: 'xprize--grand-challenges--energy-environment',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the grand challenges: Exploration Group page',function(done) {
        client
            .url(key+'grand-challenges/exploration')
            .webdrivercss(testName, {
                name: 'xprize--grand-challenges--exploration',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the grand challenges: Global Development Group page',function(done) {
        client
            .url(key+'grand-challenges/global-development')
            .webdrivercss(testName, {
                name: 'xprize--grand-challenges--global-developmentt',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the grand challenges: Learning Group page',function(done) {
        client
            .url(key+'grand-challenges/learning')
            .webdrivercss(testName, {
                name: 'xprize--grand-challenges--learning',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the grand challenges: Life Sciences Group page',function(done) {
        client
            .url(key+'grand-challenges/life-sciences')
            .webdrivercss(testName, {
                name: 'xprize--grand-challenges--life-sciences',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the grand challenges: Vote page',function(done) {
        client
            .url(key+'grand-challenges/vote')
            .webdrivercss(testName, {
                name: 'xprize--grand-challenges--vote'
            }, shoovWebdrivercss.processResults)
            .call(done);
    });
});

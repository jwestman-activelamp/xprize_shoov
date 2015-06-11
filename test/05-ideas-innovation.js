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

describe('XPRIZE Ideas and Innovation Tests', function() {

    this.timeout(99999999);
    var client = {};

    before(function(done){
        client = shoovWebdrivercss.before(done, caps);
    });

    after(function(done) {
        shoovWebdrivercss.after(done);
    });

    it('should show the news page',function(done) {
        client
            .url(key+'news')
            .webdrivercss(testName, {
                name: 'xprize--news',
                exclude: ['#news-items']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the news: blog article page',function(done) {
        client
            .url('http://lunar.xprize.org/news/blog/kaunertal-then-moon-august-alps-test-puli')
            .webdrivercss(testName, {
                name: 'xprize--news--blog--kaunertal',
                exclude: ['.social-stream__status', '.pane-disqus-disqus-comments']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the news: press release page',function(done) {
        client
            .url(key+'press-release/disney-and-xprize-select-winning-innovators-of-tomorrow')
            .webdrivercss(testName, {
                name: 'xprize--news--press-release--disney-and-xprize',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the news: article page',function(done) {
        client
            .url(key+'news/can-your-city-commit-100-renewable-energy')
            .webdrivercss(testName, {
                name: 'xprize--news--can-your-city-commit',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the visioneering page',function(done) {
        client
            .url(key+'ideas/visioneering')
            .webdrivercss(testName, {
                name: 'xprize--ideas--visioneering',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the visioneering 2014 page',function(done) {
        client
            .url(key+'ideas/visioneering/2014')
            .webdrivercss(testName, {
                name: 'xprize--ideas--visioneering--2014',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the visioneering 2013 page',function(done) {
        client
            .url(key+'content/visioneering-2013')
            .webdrivercss(testName, {
                name: 'xprize--ideas--visioneering--2013',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });
});

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

describe('XPRIZE Get Involved Page Tests', function() {

    this.timeout(99999999);
    var client = {};

    before(function(done){
        client = shoovWebdrivercss.before(done, caps);
    });

    after(function(done) {
        shoovWebdrivercss.after(done);
    });

    it('should show the get involved page',function(done) {
        client
            .url(key+'get-involved')
            .webdrivercss(testName, {
                name: 'xprize--get-involved',
                exclude: ['.social-stream__status', '.latest-tweets--message','.pds-question-top', '.pds-answer-span']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the get involved: Vote on Future Prizes page',function(done) {
        client
            .url(key+'prizes/future-prizes/vote')
            .webdrivercss(testName, {
                name: 'xprize--get-involved--future-prizes-vote'
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the newsletter signup page',function(done) {
        client
            .url(key+'signup')
            .webdrivercss(testName, {
                name: 'xprize--get-involved--newsletter-signup',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the donate page',function(done) {
        client
            .url(key+'donate')
            .webdrivercss(testName, {
                name: 'xprize--donate'
            }, shoovWebdrivercss.processResults)
            .call(done);
    });
});

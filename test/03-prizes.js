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

describe('XPRIZE Prizes Page Tests', function() {

    this.timeout(99999999);
    var client = {};

    before(function(done){
        client = shoovWebdrivercss.before(done, caps);
    });

    after(function(done) {
        shoovWebdrivercss.after(done);
    });

    it('should show the prizes page',function(done) {
        client
            .url(key+'prizes')
            .webdrivercss(testName, {
                name: 'xprize--prizes',
                remove: ['.social-stream__status'],
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the future prizes page',function(done) {
        client
            .url(key+'prizes/future-prizes')
            .webdrivercss(testName, {
                name: 'xprize--prizes--future-prizes',
                remove: ['.prize-concepts .filters', '.prize-concepts #prize-concepts-content'],
                exclude: ['.star-rating']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the future prizes: AI prize presented by TED page',function(done) {
        client
            .url(key+'prizes/future-prizes/ai-xprize-presented-ted')
            .webdrivercss(testName, {
                name: 'xprize--prizes--future-prizes-ai-xprize-presented-ted',
                remove: ['.social-stream__status','.pane-disqus-disqus-comments'],
                exclude: ['.prize-voting--rating-count','.pane-disqus-disqus-comments','.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });
});

'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');

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

describe('XPRIZE Benefactors Page Tests', function() {

    this.timeout(99999999);
    var client = {};

    before(function(done){
        client = shoovWebdrivercss.before(done, caps);
    });

    after(function(done) {
        shoovWebdrivercss.after(done);
    });

    it('should show the benefactors page',function(done) {
        client
            .url('http://xprize.org/benefactors')
            .webdrivercss(testName, {
                name: 'xprize--benefactors',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the benefactors: Vision Circle page',function(done) {
        client
            .url('http://xprize.org/benefactors/vision-circle')
            .webdrivercss(testName, {
                name: 'xprize--benefactors--vision-circle',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the benefactors: Innovation Board page',function(done) {
        client
            .url('http://xprize.org/benefactors/innovation-board')
            .webdrivercss(testName, {
                name: 'xprize--benefactors--innovation-board',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the benefactors: Spirit of Innovation page',function(done) {
        client
            .url('http://xprize.org/benefactors/spirit-of-innovation')
            .webdrivercss(testName, {
                name: 'xprize--benefactors--spirit-of-innovation',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the benefactors: Entrepreneurs Circle  page',function(done) {
        client
            .url('http://xprize.org/content/entrepreneurs-circle')
            .webdrivercss(testName, {
                name: 'xprize--benefactors--entrepreneurs-circle',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });
});

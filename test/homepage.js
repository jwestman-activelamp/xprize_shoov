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

describe('XPRIZE Tests', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done, caps);
  });

  after(function(done) {
    shoovWebdrivercss.after(done);
  });

  it('should show the xprize.org page',function(done) {
    client
      .url('http://xprize.org/')
      .webdrivercss(testName, {
        name: 'xprize',
        exclude: ['.views-field-field-featured-image','.whats-new__story-block--basic','.prizes--list__leaderboard .latest-news--list',{x0:57, y0:1495, x1:704, y1: 1574},{x0: 122, y0: 1621, x1: 306, y1: 1649},{x0: 456, y0: 1621, x1: 638, y1: 1649},{x0: 122, y0: 1728, x1: 306, y1: 1754},{x0: 456, y0: 1728, x1: 638, y1: 1754},'.social-stream__status', '.media-mentions']
      }, shoovWebdrivercss.processResults)
      .call(done);

  });
});
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

describe('XPRIZE About Page Tests', function() {

    this.timeout(99999999);
    var client = {};

    before(function(done){
        client = shoovWebdrivercss.before(done, caps);
    });

    after(function(done) {
        shoovWebdrivercss.after(done);
    });

    it('should show the about page',function(done) {
        client
            .url(key+'about')
            .webdrivercss(testName, {
                name: 'xprize-about',
                exclude: [{x0: 52, y0: 1726, x1: 335, y1: 2161}, {x0: 372, y0: 1726, x1: 653, y1: 2161}, '.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);

    });

    it('should show the who we are page',function(done) {
        client
            .url(key+'about/who-we-are')
            .webdrivercss(testName, {
                name: 'xprize--about--who-we-are',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the what is an xprize page',function(done) {
        client
            .url(key+'about/what-is-an-xprize')
            .webdrivercss(testName, {
                name: 'xprize--about--what-is-an-xprize',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the media room page',function(done) {
        client
            .url(key+'about/media-room')
            .webdrivercss(testName, {
                name: 'xprize--about--media-room',
                exclude: ['latest-news--list', '.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the media room: Executive Bios page',function(done) {
        client
            .url(key+'about/media-room/executive-bios')
            .webdrivercss(testName, {
                name: 'xprize--about--media-room--executive-bios',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the media room: Executive Bios: Peter H Diamandis M.D. page',function(done) {
        client
            .url(key+'about/staff/peter-h-diamandis-md')
            .webdrivercss(testName, {
                name: 'xprize--about--media-room--peter-h-diamandis-md',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the media room: Photo Gallery page',function(done) {
        client
            .url(key+'about/media-room/photo-gallery')
            .webdrivercss(testName, {
                name: 'xprize--about--media-room--photo-gallery'
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the media room: Press Kit page',function(done) {
        client
            .url(key+'about/media-room/xprize-press-kit')
            .webdrivercss(testName, {
                name: 'xprize--about--media-room--xprize-press-kit',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the media room: Video Gallery page',function(done) {
        client
            .url(key+'about/media-room/video-gallery')
            .webdrivercss(testName, {
                name: 'xprize--about--media-room--video-gallery'
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the media room: Story Ideas page',function(done) {
        client
            .url(key+'about/media-room/story-ideas')
            .webdrivercss(testName, {
                name: 'xprize--about--media-room--story-ideas',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the board of trustees page',function(done) {
        client
            .url(key+'about/board-of-trustees')
            .webdrivercss(testName, {
                name: 'xprize--about--board-of-trustees',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the board of trustees: Eric C. Anderson page',function(done) {
        client
            .url(key+'about/board-of-trustees/eric-c-anderson')
            .webdrivercss(testName, {
                name: 'xprize--about--board-of-trustees--eric-c-anderson',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the partners and sponsors page',function(done) {
        client
            .url(key+'about/foundation-partners-sponsors')
            .webdrivercss(testName, {
                name: 'xprize--about--foundation-partners-sponsors',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the government partners page',function(done) {
        client
            .url(key+'about/government-partners')
            .webdrivercss(testName, {
                name: 'xprize--about--government-partners',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the xprize in india page',function(done) {
        client
            .url(key+'about/xprize-in-india')
            .webdrivercss(testName, {
                name: 'xprize--about--xprize-in-india',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the staff page',function(done) {
        client
            .url(key+'about/staff')
            .webdrivercss(testName, {
                name: 'xprize--about--staff',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the staff: Jono Bacon page',function(done) {
        client
            .url(key+'about/staff/jono-bacon')
            .webdrivercss(testName, {
                name: 'xprize--about--staff--jono-bacon',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the education page',function(done) {
        client
            .url(key+'about/education')
            .webdrivercss(testName, {
                name: 'xprize--about--education',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the education: FFL page Global Innovation Award',function(done) {
        client
            .url(key+'about/education/fll')
            .webdrivercss(testName, {
                name: 'xprize--about--education--ffl',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the event calendar page',function(done) {
        client
            .url(key+'about/event-calendar')
            .webdrivercss(testName, {
                name: 'xprize--about--event-calendar',
                exclude: ['.view-upcoming-events.event-calendar','.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the careers page',function(done) {
        client
            .url(key+'about/careers')
            .webdrivercss(testName, {
                name: 'xprize--about--careers',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the careers: Who We are page',function(done) {
        client
            .url(key+'about/careers/who-we-are')
            .webdrivercss(testName, {
                name: 'xprize--about--careers--who-we-are',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the careers: What we Stand for page',function(done) {
        client
            .url(key+'about/careers/what-we-do')
            .webdrivercss(testName, {
                name: 'xprize--about--careers--what-we-do',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the careers: Join Our Team page',function(done) {
        client
            .url(key+'about/careers/join-our-team')
            .webdrivercss(testName, {
                name: 'xprize--about--careers--join-our-team',
                exclude: ['.social-stream__status']
            }, shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the contact page',function(done) {
        client
            .url(key+'about/contact')
            .webdrivercss(testName, {
                name: 'xprize--about--contact'
            }, shoovWebdrivercss.processResults)
            .call(done);
    });
});

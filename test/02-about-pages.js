'use strict';

var appConfig = require('appConfig');

describe('XPRIZE About Page Tests', function() {

    this.timeout(99999999);
    var client = {};

    before(function(done){
        client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
    });

    after(function(done) {
        appConfig.shoovWebdrivercss.after(done);
    });

    it('should show the about page',function(done) {
        client
            .url(appConfig.mkey+'about')
            .webdrivercss(appConfig.testName, {
                name: 'xprize-about',
                remove: ['#mini-panel-footer_section','.social-stream__status', '.upcoming-events__event'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);

    });

    it('should show the who we are page',function(done) {
        client
            .url(appConfig.mkey+'about/who-we-are')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--who-we-are',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the what is an xprize page',function(done) {
        client
            .url(appConfig.mkey+'about/what-is-an-xprize')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--what-is-an-xprize',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the media room page',function(done) {
        client
            .url(appConfig.mkey+'about/media-room')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--media-room',
                remove: ['#mini-panel-footer_section','.social-stream__status', '.latest-news--list'],
                exclude: ['#main-navigation','.latest-news--list', '.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the media room: Executive Bios page',function(done) {
        client
            .url(appConfig.mkey+'about/media-room/executive-bios')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--media-room--executive-bios',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the media room: Executive Bios: Peter H Diamandis M.D. page',function(done) {
        client
            .url(appConfig.mkey+'about/staff/peter-h-diamandis-md')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--media-room--peter-h-diamandis-md',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the media room: Photo Gallery page',function(done) {
        client
            .url(appConfig.mkey+'about/media-room/photo-gallery')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--media-room--photo-gallery',
                exclude: ['#main-navigation','#mini-panel-footer_section']
          }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the media room: Press Kit page',function(done) {
        client
            .url(appConfig.mkey+'about/media-room/xprize-press-kit')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--media-room--xprize-press-kit',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the media room: Video Gallery page',function(done) {
        client
            .url(appConfig.mkey+'about/media-room/video-gallery')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--media-room--video-gallery',
                exclude: ['#main-navigation','#mini-panel-footer_section']
          }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the media room: Story Ideas page',function(done) {
        client
            .url(appConfig.mkey+'about/media-room/story-ideas')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--media-room--story-ideas',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the our board page',function(done) {
        client
            .url(appConfig.mkey+'about/our-board')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--our-board',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the board of trustees: Eric C. Anderson page',function(done) {
        client
            .url(appConfig.mkey+'about/board-of-trustees/eric-c-anderson')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--board-of-trustees--eric-c-anderson',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the partners and sponsors page',function(done) {
        client
            .url(appConfig.mkey+'about/foundation-partners-sponsors')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--foundation-partners-sponsors',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the government partners page',function(done) {
        client
            .url(appConfig.mkey+'about/government-partners')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--government-partners',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the xprize in india page',function(done) {
        client
            .url(appConfig.mkey+'about/xprize-in-india')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--xprize-in-india',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the staff page',function(done) {
        client
            .url(appConfig.mkey+'about/staff')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--staff',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the staff: Jono Bacon page',function(done) {
        client
            .url(appConfig.mkey+'about/staff/jono-bacon')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--staff--jono-bacon',
                remove: ['#mini-panel-footer_section','#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the education page',function(done) {
        client
            .url(appConfig.mkey+'about/education')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--education',
                remove: ['#mini-panel-footer_section','#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the education: FFL page Global Innovation Award',function(done) {
        client
            .url(appConfig.mkey+'about/education/fll')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--education--ffl',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the event calendar page',function(done) {
        client
            .url(appConfig.mkey+'about/event-calendar')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--event-calendar',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.view-upcoming-events.event-calendar','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the careers page',function(done) {
        client
            .url(appConfig.mkey+'about/careers')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--careers',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the careers: Who We are page',function(done) {
        client
            .url(appConfig.mkey+'about/careers/who-we-are')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--careers--who-we-are',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the careers: What we do page',function(done) {
        client
            .url(appConfig.mkey+'about/careers/what-we-do')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--careers--what-we-do',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the careers: Join Our Team page',function(done) {
        client
            .url(appConfig.mkey+'about/careers/join-our-team')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--careers--join-our-team',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the contact page',function(done) {
        client
            .url(appConfig.mkey+'about/contact')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--about--contact',
                exclude: ['#main-navigation','#mini-panel-footer_section']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    //Visioneering

    it('should show the visioneering page',function(done) {
      client
        .url(appConfig.mkey+'about/visioneering')
        .webdrivercss(appConfig.testName, {
          name: 'xprize--about--visioneering',
          remove: ['#mini-panel-footer_section','.social-stream__status'],
          exclude: ['.view-visioneering-slideshow img','#main-navigation','.social-stream__status']
        }, appConfig.shoovWebdrivercss.processResults)
        .call(done);
    });

    it('should show the visioneering 2014 page',function(done) {
      client
        .url(appConfig.mkey+'ideas/visioneering/2014')
        .webdrivercss(appConfig.testName, {
          name: 'xprize--ideas--visioneering--2014',
          remove: ['#mini-panel-footer_section','.social-stream__status'],
          exclude: ['.view-visioneering-slideshow img','#main-navigation','.social-stream__status']
        }, appConfig.shoovWebdrivercss.processResults)
        .call(done);
    });

    it('should show the visioneering 2013 page',function(done) {
      client
        .url(appConfig.mkey+'content/visioneering-2013')
        .webdrivercss(appConfig.testName, {
          name: 'xprize--ideas--visioneering--2013',
          remove: ['#mini-panel-footer_section','.social-stream__status'],
          exclude: ['.view-visioneering-slideshow img','#main-navigation','.social-stream__status']
        }, appConfig.shoovWebdrivercss.processResults)
        .call(done);
    });
});

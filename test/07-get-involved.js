'use strict';

var appConfig = require('appConfig');

describe('XPRIZE Get Involved Page Tests', function() {

    this.timeout(99999999);
    var client = {};

    before(function(done){
        client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
    });

    after(function(done) {
        appConfig.shoovWebdrivercss.after(done);
    });

    it('should show the get involved page',function(done) {
        client
            .url(appConfig.mkey+'get-involved')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--get-involved',
                remove: ['.social-stream__status'],
                exclude: ['.social-stream__status', '.latest-tweets--message','.pds-question-top', '.pds-answer-span']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the get involved: Vote on Future Prizes page',function(done) {
        client
            .url(appConfig.mkey+'prizes/future-prizes/vote')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--get-involved--future-prizes-vote'
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the newsletter signup page',function(done) {
        client
            .url(appConfig.mkey+'signup')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--get-involved--newsletter-signup',
                remove: ['.social-stream__status'],
                exclude: ['.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the donate page',function(done) {
        client
            .url(appConfig.mkey+'donate')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--donate'
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });
});

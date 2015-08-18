'use strict';

var appConfig = require('appConfig');

describe('XPRIZE Ideas and Innovation Tests', function() {

    this.timeout(99999999);
    var client = {};

    before(function(done){
        client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
    });

    after(function(done) {
        appConfig.shoovWebdrivercss.after(done);
    });

    it('should show the news page',function(done) {
        client
            .url(appConfig.mkey+'news')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--news',
                exclude: ['#main-navigation','#mini-panel-footer_section','#news-items']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the news: blog article page',function(done) {
        client
            .url(appConfig.mkey+'news/blog/kaunertal-then-moon-august-alps-test-puli')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--news--blog--kaunertal',
                remove: ['.social-stream__status', '.pane-disqus-disqus-comments'],
                exclude: ['#main-navigation','#mini-panel-footer_section','.related-post__block','.social-stream__status', '.pane-disqus-disqus-comments']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the news: press release page',function(done) {
        client
            .url(appConfig.mkey+'press-release/disney-and-xprize-select-winning-innovators-of-tomorrow')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--news--press-release--disney-and-xprize',
                remove: ['.social-stream__status'],
                exclude: ['#main-navigation','#mini-panel-footer_section','.pane-disqus-disqus-comments','.related-post__block','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the news: article page',function(done) {
        client
            .url(appConfig.mkey+'news/can-your-city-commit-100-renewable-energy')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--news--can-your-city-commit',
                remove: ['.social-stream__status'],
                exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

});

'use strict';

var appConfig = require('appConfig');

describe('XPRIZE Prizes Page Tests', function() {

    this.timeout(99999999);
    var client = {};

    before(function(done){
        client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
    });

    after(function(done) {
        appConfig.shoovWebdrivercss.after(done);
    });

    it('should show the prizes page',function(done) {
        client
            .url(appConfig.mkey+'prizes')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--prizes',
                remove: ['.social-stream__status'],
                exclude: ['.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the future prizes page',function(done) {
        client
            .url(appConfig.mkey+'prizes/future-prizes')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--prizes--future-prizes',
                remove: ['.prize-concepts .filters', '.prize-concepts #prize-concepts-content'],
                exclude: ['.star-rating']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the future prizes: AI prize presented by TED page',function(done) {
        client
            .url(appConfig.mkey+'prizes/future-prizes/ai-xprize-presented-ted')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--prizes--future-prizes-ai-xprize-presented-ted',
                remove: ['.social-stream__status','.pane-disqus-disqus-comments'],
                exclude: ['.related-post__block','.prize-voting--rating-count','.pane-disqus-disqus-comments','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });
});

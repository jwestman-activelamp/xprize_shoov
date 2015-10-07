'use strict';

var appConfig = require('appConfig');

var baseUrl = process.env.BASE_URL ? 'http://'+process.env.Credentials+'@'+process.env.BASE_URL : 'http://xprize.org';

describe('XPRIZE News Tests', function() {

    this.timeout(99999999);
    this.slow(15000);
    var client = {};

    before(function(done){
        client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
    });

    after(function(done) {
        appConfig.shoovWebdrivercss.after(done);
    });

    it('should show the news page @main @news',function(done) {
        client
            .url(baseUrl+'/news')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--news',
                remove: ['#mini-panel-footer_section'],
                exclude: ['#main-navigation','#news-items']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the news: press release page @main @news',function(done) {
        client
            .url(baseUrl+'/press-release/disney-and-xprize-select-winning-innovators-of-tomorrow')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--news--press-release--disney-and-xprize',
                remove: ['#mini-panel-footer_section','.social-stream__status','.pane-disqus-disqus-comments'],
                exclude: ['#main-navigation','.related-post__block','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the news: article page @main @news',function(done) {
        client
            .url(baseUrl+'/news/can-your-city-commit-100-renewable-energy')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--news--can-your-city-commit',
                remove: ['#mini-panel-footer_section','.social-stream__status','.pane-disqus-disqus-comments'],
                exclude: ['#main-navigation','.social-stream__status','.related-post__block']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

});

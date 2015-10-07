'use strict';

var appConfig = require('appConfig');

var baseUrl = process.env.BASE_URL ? 'http://'+process.env.BASE_URL : 'http://xprize.org';

describe('XPRIZE Benefactors Page Tests', function() {

    this.timeout(99999999);
    this.slow(15000);
    var client = {};

    before(function(done){
        client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
    });

    after(function(done) {
        appConfig.shoovWebdrivercss.after(done);
    });

    it('should show the benefactors page @main @benefactors',function(done) {
        client
            .url(baseUrl+'/benefactors')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--benefactors',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the benefactors: Vision Circle page @main @benefactors',function(done) {
        client
            .url(baseUrl+'/benefactors/vision-circle')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--benefactors--vision-circle',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the benefactors: Innovation Board page @main @benefactors',function(done) {
        client
            .url(baseUrl+'/benefactors/innovation-board')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--benefactors--innovation-board',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the benefactors: Spirit of Innovation page @main @benefactors',function(done) {
        client
            .url(baseUrl+'/benefactors/spirit-of-innovation')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--benefactors--spirit-of-innovation',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the benefactors: Entrepreneurs Circle page @main @benefactors',function(done) {
        client
            .url(baseUrl+'/content/entrepreneurs-circle')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--benefactors--entrepreneurs-circle',
                remove: ['#mini-panel-footer_section','.social-stream__status'],
                exclude: ['#main-navigation','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });
});

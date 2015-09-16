'use strict';

var appConfig = require('appConfig');

describe('XPRIZE Benefactors Page Tests', function() {

    this.timeout(99999999);
    var client = {};

    before(function(done){
        client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
    });

    after(function(done) {
        appConfig.shoovWebdrivercss.after(done);
    });

    it('should show the benefactors page',function(done) {
        client
            .url(appConfig.mkey+'benefactors')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--benefactors',
                remove: ['.social-stream__status'],
                exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the benefactors: Vision Circle page',function(done) {
        client
            .url(appConfig.mkey+'benefactors/vision-circle')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--benefactors--vision-circle',
                remove: ['.social-stream__status'],
                exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the benefactors: Innovation Board page',function(done) {
        client
            .url(appConfig.mkey+'benefactors/innovation-board')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--benefactors--innovation-board',
                remove: ['.social-stream__status'],
                exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the benefactors: Spirit of Innovation page',function(done) {
        client
            .url(appConfig.mkey+'benefactors/spirit-of-innovation')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--benefactors--spirit-of-innovation',
                remove: ['.social-stream__status'],
                exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the benefactors: Entrepreneurs Circle page',function(done) {
        client
            .url(appConfig.mkey+'content/entrepreneurs-circle')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--benefactors--entrepreneurs-circle',
                remove: ['.social-stream__status'],
                exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });
});

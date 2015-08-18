'use strict';

var appConfig = require('appConfig');

describe('XPRIZE Grand Challenges Page Tests', function() {

    this.timeout(99999999);
    var client = {};

    before(function(done){
        client = appConfig.shoovWebdrivercss.before(done, appConfig.caps);
    });

    after(function(done) {
        appConfig.shoovWebdrivercss.after(done);
    });

    it('should show the grand challenges page',function(done) {
        client
            .url(appConfig.mkey+'grand-challenges')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--grand-challenges',
            exclude: ['#main-navigation','#mini-panel-footer_section']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the grand challenges: Energy and Environment Group page',function(done) {
        client
            .url(appConfig.mkey+'grand-challenges/energy-environment')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--grand-challenges--energy-environment',
                remove: ['.social-stream__status','.prize-concepts .filters', '.prize-concepts #prize-concepts-content'],
                exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status','.star-rating']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the grand challenges: Exploration Group page',function(done) {
        client
            .url(appConfig.mkey+'grand-challenges/exploration')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--grand-challenges--exploration',
                remove: ['.social-stream__status','.prize-concepts .filters', '.prize-concepts #prize-concepts-content'],
                exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status','.star-rating']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the grand challenges: Global Development Group page',function(done) {
        client
            .url(appConfig.mkey+'grand-challenges/global-development')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--grand-challenges--global-developmentt',
                remove: ['.social-stream__status','.prize-concepts .filters', '.prize-concepts #prize-concepts-content'],
                exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status','.star-rating']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the grand challenges: Learning Group page',function(done) {
        client
            .url(appConfig.mkey+'grand-challenges/learning')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--grand-challenges--learning',
                remove: ['.social-stream__status','.prize-concepts .filters', '.prize-concepts #prize-concepts-content'],
                exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status','.star-rating']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

    it('should show the grand challenges: Life Sciences Group page',function(done) {
        client
            .url(appConfig.mkey+'grand-challenges/life-sciences')
            .webdrivercss(appConfig.testName, {
                name: 'xprize--grand-challenges--life-sciences',
                remove: ['.social-stream__status','.prize-concepts .filters', '.prize-concepts #prize-concepts-content'],
                exclude: ['#main-navigation','#mini-panel-footer_section','.social-stream__status','.star-rating']
            }, appConfig.shoovWebdrivercss.processResults)
            .call(done);
    });

});

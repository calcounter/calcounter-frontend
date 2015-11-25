require.config({
    paths: {
        backbone: 'vendor/backbone-min',
        jquery: 'vendor/jquery-1.11.3.min',
        underscore: 'vendor/underscore-min',
        text: 'vendor/text'
    },

    // wraps modules, to make them compatible with requirejs w/ dependencies and exports
    // jquery doesn't need a shim, it's already in the right format
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});

// init requirejs
require(['app'], function(App) {
    App.initialize();
});
require.config({
    paths: {
        backbone: 'vendor/backbone-min',
        handlebars: 'vendor/handlebars-v4.0.5',
        jquery: 'vendor/jquery-1.11.3.min',
        underscore: 'vendor/underscore-min',
        text: 'vendor/text',
        bootstrap: 'vendor/bootstrap'
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        bootstrap: {
            deps: ['jquery']
        }
    }
});

require(['app'], function(App) {
    App.initialize();
});
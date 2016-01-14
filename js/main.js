require.config({
    paths: {
        backbone: 'vendor/backbone-min',
        handlebars: 'vendor/handlebars-v4.0.5',
        jquery: 'vendor/jquery-1.11.3.min',
        underscore: 'vendor/underscore-min',
        text: 'vendor/text',
        bootstrap: 'vendor/bootstrap',
        collapse: 'vendor/collapse',
        alert: 'vendor/alert',
        transition: 'vendor/transition',
        moment: 'vendor/moment.min',
        datetimepicker: 'vendor/bootstrap-datetimepicker.min',
        backbonepaginator: 'vendor/backbone.paginator'
    },

    shim: {
        underscore: {
            exports: '_'
        },
        bootstrap: {
            deps: ['jquery']
        },
        collapse: {
            deps: ['bootstrap']
        },
        alert: {
            deps: ['bootstrap']
        },
        transition: {
            deps: ['bootstrap']
        },
        tooltip: {
            deps: ['bootstrap']
        }
    }
});

require(['app'], function(App) {
    App.initialize();
});
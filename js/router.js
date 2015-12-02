define([
    'backbone',
    'jquery',
    'views/main-compositor-view'

], function(
    Backbone,
    $,
    MainCompositorView

) {
    var AppRouter = Backbone.Router.extend({

        routes: {
            '*splat': 'home'
        },

        initialize: function() {
            this.mainCompositorView = new MainCompositorView();
            $('body').html(this.mainCompositorView.render().el);
        },

        home: function() {

        }
    });

    return {
        initialize: function() {
            var app_router = new AppRouter;
            Backbone.history.start();
        }
    };
});
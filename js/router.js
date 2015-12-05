define([
    'backbone',
    'jquery',
    'views/about-view',
    'views/home-view',
    'views/main-compositor-view'

], function(
    Backbone,
    $,
    AboutView,
    HomeView,
    MainCompositorView

) {
    var AppRouter = Backbone.Router.extend({

        routes: {
            'about': 'about',
            '*splat': 'home',
        },

        initialize: function() {
            this.mainCompositorView = new MainCompositorView();
            $('body').html(this.mainCompositorView.render().el);
        },

        home: function() {
            this.mainCompositorView.setContentView('Home', new HomeView());
        },

        about: function() {
            this.mainCompositorView.setContentView('About', new AboutView());
        }
    });

    return {
        initialize: function() {
            var app_router = new AppRouter;
            Backbone.history.start();
        }
    };
});
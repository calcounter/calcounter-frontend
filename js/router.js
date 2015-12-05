define([
    'backbone',
    'jquery',
    'views/about-view',
    'views/home-view',
    'views/main-compositor-view',
    'views/meals-view',
    'views/profile-view',

], function(
    Backbone,
    $,
    AboutView,
    HomeView,
    MainCompositorView,
    MealsView,
    ProfileView

) {
    var AppRouter = Backbone.Router.extend({

        routes: {
            'about': 'about',
            'home': 'home',
            'meals': 'mealsList',
            'profile': 'profile',
            '*splat': 'home',
        },

        initialize: function() {
            this.mainCompositorView = new MainCompositorView();
            $('body').html(this.mainCompositorView.render().el);
        },

        /* Routes */

        about: function() {
            this.mainCompositorView.setContentView('About', new AboutView());
        },

        home: function() {
            this.mainCompositorView.setContentView('Home', new HomeView());
        },

        mealsList: function() {
            this.mainCompositorView.setContentView('Meals', new MealsView());
        },

        profile: function() {
            this.mainCompositorView.setContentView('Profile', new ProfileView());
        },

    });

    return {
        initialize: function() {
            var app_router = new AppRouter;
            Backbone.history.start();
        }
    };
});
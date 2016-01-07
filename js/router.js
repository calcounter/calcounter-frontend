define([
    'backbone',
    'jquery',
    'views/about-view',
    'views/home-view',
    'views/main-compositor-view',
    'views/meals-view',
    'views/profile-view',
    'views/signup-view'

], function(
    Backbone,
    $,
    AboutView,
    HomeView,
    MainCompositorView,
    MealsView,
    ProfileView,
    SignupView

) {
    var AppRouter = Backbone.Router.extend({

        routes: {
            'about': 'about',
            'home': 'home',
            'meals': 'mealsList',
            'profile': 'profile',
            'signup': 'signup',
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

        signup: function() {
            this.mainCompositorView.setContentView('Signup', new SignupView());
        }

    });

    return {
        initialize: function() {
            var app_router = new AppRouter;
            Backbone.history.start();
        }
    };
});
define([
    'backbone',
    'jquery',
    'views/about-view',
    'views/home-view',
    'views/main-compositor-view',
    'views/meals-view',
    'views/profile-view',
    'views/login-view'

], function(
    Backbone,
    $,
    AboutView,
    HomeView,
    MainCompositorView,
    MealsView,
    ProfileView,
    LoginView

) {
    var AppRouter = Backbone.Router.extend({

        routes: {
            'about': 'about',
            'home': 'home',
            'meals': 'mealsList',
            'profile': 'profile',
            'login': 'login',
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

        login: function() {
            this.mainCompositorView.setContentView('Login', new LoginView());
        }

    });

    return {
        initialize: function() {
            var app_router = new AppRouter;
            Backbone.history.start();
        }
    };
});
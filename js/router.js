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
            'meals(/:page)': 'mealsList',
            'profile': 'profile',
            'signup': 'signup',
            '*splat': 'home',
        },

        initialize: function() {
            this.mainCompositorView = MainCompositorView.getInstance();
            $('body').html(this.mainCompositorView.render().el);
        },

        /* Routes */

        about: function() {
            this.mainCompositorView.setContentView('About | Calcounter', new AboutView());
        },

        home: function() {
            this.mainCompositorView.setContentView('Home | Calcounter', new HomeView());
        },

        mealsList: function(page) {
            this.mainCompositorView.setContentView('Meals | Calcounter', new MealsView({
                page: page
            }));
        },

        profile: function() {
            this.mainCompositorView.setContentView('Profile | Calcounter', new ProfileView());
        },

        signup: function() {
            this.mainCompositorView.setContentView('Signup | Calcounter', new SignupView());
        }

    });

    return {
        initialize: function() {
            var app_router = new AppRouter;
            Backbone.history.start();
        }
    };
});
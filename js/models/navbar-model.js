define([
    'backbone'
], function(
    Backbone
) {
    var NavbarModel = Backbone.Model.extend({
        defaults: {
            authenticated: {
                'Profile': 'profile',
                'Meals': 'meals',
                'Log out': 'logout'
            },
            unauthenticated: {
                'Log in': 'login',
                'Sign up': 'signup'
            }
        }
    });
    return NavbarModel;
});
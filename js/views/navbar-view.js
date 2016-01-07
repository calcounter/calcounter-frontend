define([
    'backbone',
    'jquery',
    'underscore',
    'handlebars',
    'bootstrap',
    'collapse',
    'strings',
    'models/navbar-model',
    'models/session-model',
    'text!templates/navbar.html'
],function(
    Backbone,
    $,
    _,
    Handlebars,
    Bootstrap,
    Collapse,
    strings,
    NavbarModel,
    SessionModel,
    navbarTemplate
) {
    var NavbarView = Backbone.View.extend({
        template: Handlebars.compile(navbarTemplate),

        model: new NavbarModel(),

        events: {
            'click #btn-login': 'login',
            'click #btn-logout': 'logout',
            'click #btn-signup': 'signup',
            'click #btn-profile': 'profile',
            'click #btn-meals': 'meals'
        },

        sessionModel: SessionModel.getInstance(),

        initialize: function() {
            this.sessionModel.on('change', this.render, this);
        },

        render: function() {
            this.$el.html(this.template({
                sections: this.sessionModel.isAuthenticated() ?
                    this.model.get('authenticated'):
                    this.model.get('unauthenticated'),
                isAuthenticated: this.sessionModel.isAuthenticated(),
            }));
            this.sessionModel.isAuthenticated() == true ? this.$('.unauthenticated').hide() : this.$('.authenticated').hide()
            return this;

        },

        login: function() {
            self = this;
            $.ajax({
                type: 'POST',
                url: strings.baseServerUrl + 'rest-auth/login/',
                data: {
                    'username': this.$('#username').val(),
                    'password': this.$('#password').val()
                }
            }).done(function(data) {
                self.sessionModel.set('token', data.key);
                self.$('.unauthenticated').hide();
                self.$('.authenticated').show();

            }).fail(function() {
                self.$('#login-failed').show();
            });
            return false;
        },

        logout: function() {
            self = this;
            $.ajax({
                type: 'POST',
                url: strings.baseServerUrl + 'rest-auth/logout/',
                data: {}
            }).done(function() {
                self.sessionModel.logout();
                self.$('.authenticated').hide();
                self.$('.unauthenticated').show();
                Backbone.history.navigate('home', {trigger: true});
            });
        },

        signup: function() {
            Backbone.history.navigate('signup', {trigger: true});
        },

        profile: function() {
            Backbone.history.navigate('profile', {trigger: true});
        },

        meals: function() {
            Backbone.history.navigate('meals', {trigger: true});
        }
    });
    return NavbarView;
});
define([
    'backbone',
    'jquery',
    'underscore',
    'handlebars',
    'bootstrap',
    'collapse',
    'models/navbar-model',
    'models/session-model',
    'views/login-view',
    'text!templates/navbar.html'
],function(
    Backbone,
    $,
    _,
    Handlebars,
    Bootstrap,
    Collapse,
    NavbarModel,
    SessionModel,
    LoginView,
    navbarTemplate
) {
    var NavbarView = Backbone.View.extend({
        template: Handlebars.compile(navbarTemplate),

        model: new NavbarModel(),

        sessionModel: SessionModel.getInstance(),

        initialize: function() {
            this.sessionModel.on('change', this.render, this);
        },

        render: function() {
            this.$el.html(this.template({
                sections: this.sessionModel.isAuthenticated() ? this.model.get('authenticated') : this.model.get('unauthenticated'),
                isAuthenticated: this.sessionModel.isAuthenticated()
            }));
            return this;
        }
    });
    return NavbarView;
});
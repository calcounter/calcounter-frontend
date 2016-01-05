define([
    'jquery',
    'underscore',
    'handlebars',
    'strings',
    'models/session-model',
    'text!templates/login.html'

], function(
    $,
    _,
    Handlebars,
    strings,
    SessionModel,
    loginTemplate
) {
    var LoginView = Backbone.View.extend({
        template: Handlebars.compile(loginTemplate),

        model: SessionModel.getInstance(),

        events: {
            'click #login-btn': 'login',
        },

        render: function () {
            this.$el.html(this.template());
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
                self.model.set('token', data.key);
                Backbone.history.navigate('home', {trigger: true});
            }).fail(function() {
                self.$('#login-failed').show();
            });
            return false;
        }

    });

    return LoginView;
});
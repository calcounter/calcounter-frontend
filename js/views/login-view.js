define([
    'jquery',
    'underscore',
    'handlebars',
    'strings',
    'text!templates/login.html'

], function(
    $,
    _,
    Handlebars,
    strings,
    loginTemplate
) {
    var LoginView = Backbone.View.extend({
        template: Handlebars.compile(loginTemplate),

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
define([
    'jquery',
    'underscore',
    'handlebars',
    'strings',
    'text!templates/signup.html'

], function(
    $,
    _,
    Handlebars,
    strings,
    signupTemplate
) {
    var SignupView = Backbone.View.extend({
        template: Handlebars.compile(signupTemplate),

        events: {
            'click #signup-btn': 'signup',
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        signup: function() {
            self = this;
            $.ajax({
                type: 'POST',
                url: strings.baseServerUrl + 'rest-auth/registration/',
                data: {
                    'username': this.$('#username').val(),
                    'password1': this.$('#password1').val(),
                    'password2': this.$('#password2').val()
                }
            }).done(function(data) {
                self.model.set('token', data.key);
                Backbone.history.navigate('home', {trigger: true});
            }).fail(function() {
                self.$('#signup-failed').show();
            });
            return false;
        }

    });

    return SignupView;
});
define([
    'jquery',
    'underscore',
    'handlebars',
    'strings',
    'models/user-model',
    'models/session-model',
    'views/main-compositor-view',
    'text!templates/signup.html',
    'text!templates/alerts/signup-done.html',
    'text!templates/alerts/signup-fail.html'

], function(
    $,
    _,
    Handlebars,
    strings,
    UserModel,
    SessionModel,
    MainCompositorView,
    signupTemplate,
    signupAlertDone,
    signupAlertFail
) {
    var SignupView = Backbone.View.extend({
        template: Handlebars.compile(signupTemplate),

        compositorView: MainCompositorView.getInstance(),

        userModel: UserModel.getInstance(),

        sessionModel: SessionModel.getInstance(),

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
                self.sessionModel.set('token', data.key);
                self.userModel.fetch();
                self.compositorView.addAlert(signupAlertDone);
                Backbone.history.navigate('home', {trigger: true});

            }).fail(function() {
                self.compositorView.addAlert(signupAlertFail);
            });
            return false;
        }

    });

    return SignupView;
});
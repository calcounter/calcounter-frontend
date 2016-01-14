define([
    'backbone',
    'jquery',
    'underscore',
    'handlebars',
    'strings',
    'alert',
    'views/main-compositor-view',
    'models/session-model',
    'models/profile-model',
    'text!templates/profile.html',
    'text!templates/alerts/profile-info-done.html',
    'text!templates/alerts/profile-info-fail.html',
    'text!templates/alerts/profile-password-done.html',
    'text!templates/alerts/profile-password-fail.html',
],function(
    Backbone,
    $,
    _,
    Handlebars,
    strings,
    Alert,
    MainCompositorView,
    SessionModel,
    ProfileModel,
    profileTemplate,
    infoAlertDone,
    infoAlertFail,
    passwordAlertDone,
    passwordAlertFail
) {
    var ProfileView = Backbone.View.extend({
        template: Handlebars.compile(profileTemplate),

        model: ProfileModel.getInstance(),

        compositorView: MainCompositorView.getInstance(),

        sessionModel: SessionModel.getInstance(),

        events: {
            'click #btn-update': 'updateProfile',
            'click #btn-change-password': 'changePassword'
        },

        initialize: function() {
            var self = this;

            this.model.fetch({
                success: function() {
                    self.render()
                }
            });

        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        updateProfile: function() {
            var self = this;

            this.model.save({
                'first_name': this.$('#first-name').val(),
                'last_name': this.$('#last-name').val(),
                'calorie_goal': this.$('#calorie-goal').val()
            }, {
                patch: true
            }).done(function() {
                self.compositorView.addAlert(infoAlertDone);
            }).fail(function() {
                self.compositorView.addAlert(infoAlertFail);
            });
        },

        changePassword: function() {
            var self = this;

            $.ajax({
                type: 'POST',
                url: strings.baseServerUrl + 'rest-auth/password/change/',
                data: {
                    'old_password': this.$('#old-password').val(),
                    'new_password1': this.$('#new-password1').val(),
                    'new_password2': this.$('#new-password2').val()
                }
            }).done(function() {
                self.compositorView.addAlert(passwordAlertDone);
            }).fail(function() {
                self.compositorView.addAlert(passwordAlertFail);

            });
        }

    });
    return ProfileView;
});
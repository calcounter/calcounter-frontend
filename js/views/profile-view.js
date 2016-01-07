define([
    'backbone',
    'jquery',
    'underscore',
    'handlebars',
    'models/session-model',
    'models/profile-model',
    'text!templates/profile.html'
],function(
    Backbone,
    $,
    _,
    Handlebars,
    SessionModel,
    ProfileModel,
    profileTemplate
) {
    var ProfileView = Backbone.View.extend({
        template: Handlebars.compile(profileTemplate),

        model: ProfileModel.getInstance(),

        sessionModel: SessionModel.getInstance(),

        events: {
            'click #btn-update': 'updateProfile'
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
            }, {patch: true});
        }

    });
    return ProfileView;
});
define([
    'backbone',
    'strings'
], function(
    Backbone,
    strings
) {
    var ProfileModel = Backbone.Model.extend({
        url : strings.baseServerUrl + 'profile/',

        defaults: {
            first_name: 'First',
            last_name: 'Last',
            calorie_goal: '2000'
        }

    }, {
        instance: null,

        getInstance: function() {
            this.instance = this.instance || new ProfileModel();
            return this.instance;
        }
    });

    return ProfileModel;
});
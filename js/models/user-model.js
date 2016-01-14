define([
    'backbone',
    'jquery',
    'strings'
], function(
    Backbone,
    $,
    strings
) {
    var UserModel = Backbone.Model.extend({
        url: strings.baseServerUrl + 'rest-auth/user/',

        defaults: {
            username: '',
        },


    }, {
        instance: null,

        getInstance: function() {
            this.instance = this.instance || new UserModel();
            return this.instance;
        },
    });
    return UserModel;
});
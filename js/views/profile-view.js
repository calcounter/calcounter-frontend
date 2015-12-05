define([
    'backbone',
    'jquery',
    'underscore',
    'handlebars',
    'text!templates/profile.html'
],function(
    Backbone,
    $,
    _,
    Handlebars,
    profileTemplate
) {
    var profileView = Backbone.View.extend({
        template: Handlebars.compile(profileTemplate),

        initialize: function() {

        },

        render: function() {
            this.$el.html(this.template());
            return this;
        }
    });
    return profileView;
});
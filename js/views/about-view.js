define([
    'backbone',
    'jquery',
    'underscore',
    'handlebars',
    'text!templates/about.html'
],function(
    Backbone,
    $,
    _,
    Handlebars,
    aboutTemplate
) {
    var AboutView = Backbone.View.extend({
        template: Handlebars.compile(aboutTemplate),

        initialize: function() {

        },

        render: function() {
            this.$el.html(this.template());
            return this;
        }
    });
    return AboutView;
});
define([
    'backbone',
    'jquery',
    'underscore',
    'handlebars',
    'text!templates/navbar.html'
],function(
    Backbone,
    $,
    _,
    Handlebars,
    navbarTemplate
) {
    var NavbarView = Backbone.View.extend({
        template: Handlebars.compile(navbarTemplate),

        initialize: function() {

        },

        render: function() {
            this.$el.html(this.template());
            return this;
        }
    });
    return NavbarView;
});
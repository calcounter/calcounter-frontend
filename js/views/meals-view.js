define([
    'backbone',
    'jquery',
    'underscore',
    'handlebars',
    'text!templates/meals-list.html'
],function(
    Backbone,
    $,
    _,
    Handlebars,
    mealsTemplate
) {
    var MealsView = Backbone.View.extend({
        template: Handlebars.compile(mealsTemplate),

        initialize: function() {

        },

        render: function() {
            this.$el.html(this.template());
            return this;
        }
    });
    return MealsView;
});
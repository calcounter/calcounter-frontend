define([
    'backbone'
], function(
    Backbone
) {
    var MealModel = Backbone.Model.extend({
        defaults: {
            description: "desc",
            calories: "cals",
            datetime: new Date()
        }
    })
});
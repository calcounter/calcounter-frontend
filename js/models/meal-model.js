define([
    'backbone',
    'strings',
    'moment'
], function(
    Backbone,
    strings,
    moment
) {
    var MealModel = Backbone.Model.extend({
        url: strings.baseServerUrl + 'meals/',
    });
    return MealModel;
});
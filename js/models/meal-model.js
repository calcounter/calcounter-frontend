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
        defaults: {
            url: strings.baseServerUrl + 'meals/'
        },
        apiUrl: function() {return strings.baseServerUrl + 'meals/' + this.id + '/';}

    });

    return MealModel;
});
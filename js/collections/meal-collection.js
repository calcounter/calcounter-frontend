define([
    'backbone',
    'underscore',
    'backbonepaginator',
    'strings',
    'models/meal-model'
], function(
    Backbone,
    _,
    Backbonepaginator,
    strings,
    MealModel
) {
    var MealCollection = Backbone.PageableCollection.extend({
        model: MealModel,

        url: strings.baseServerUrl + 'meals/',

        // backbone.paginator settings
        state: {
            firstPage: 1,
            pageSize: 25
        },
        queryParams: {
            currentPage: "page",
            pageSize: "page_size"
        },

        // overridden to parse the results of the obj from the server
        // https://github.com/backbone-paginator/backbone.paginator#fetching-data-and-managing-states
        parseRecords: function(resp) {
            return resp['results'];
        },
        parseState: function(resp) {
            return {totalRecords: resp['count']};
        }

    }, {
        instance: null,

        getInstance: function() {
            this.instance = this.instance || new MealCollection();
            return this.instance;
        },

    });
    return MealCollection;
});

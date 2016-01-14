define([
    'backbone',
    'jquery',
    'underscore',
    'handlebars',
    'bootstrap',
    'datetimepicker',
    'moment',
    'collections/meal-collection',
    'models/meal-model',
    'views/main-compositor-view',
    'text!templates/meals-list.html',
    'text!templates/alerts/meals-add-done.html',
    'text!templates/alerts/meals-add-fail.html',
],function(
    Backbone,
    $,
    _,
    Handlebars,
    bootstrap,
    Datetimepicker,
    moment,
    MealCollection,
    MealModel,
    MainCompositorView,
    mealsTemplate,
    addAlertDone,
    addAlertFail
) {
    var MealsView = Backbone.View.extend({
        template: Handlebars.compile(mealsTemplate),

        collection: MealCollection.getInstance(),

        compositorView: MainCompositorView.getInstance(),

        events: {
            'click #btn-add-meal': 'addMeal',
            'click #btn-remove-meal': 'removeMeal',
            'click #btn-edit-meal': 'editMeal',
            'click #btn-next-page': 'nextPage',
            'click #btn-previous-page': 'previousPage'
        },

        initialize: function(options) {
            // if there aren't options, use empty obj
            options = options || {};

            var self = this;

            // accepts options as collection.parse()
            this.collection.getPage(parseInt(options['page']) || 1).done(function() {
                self.render();
            });

            //get*page is an add event, not a change event
            this.collection.on('change add', this.render, this);

        },

        render: function() {

            this.$el.html(this.template({

                // formats the datetime keys in our json obj
                results: _.map(this.collection.toJSON(), function(result) {
                    result['datetime'] = moment(result['datetime']).format('MMM Do YYYY, h:mm a');
                    return result;
                }),

                // expressions to show/hide the Prev and Next buttons in the template
                isPrevVisible: this.collection.state.currentPage > 1,
                isNextVisible: this.collection.state.currentPage < this.collection.state.totalPages

            }));

            // defaults the datetimepicker to now
            this.$('#datetimepicker-new').datetimepicker({
                defaultDate: new Date()
            });

            // required for tooltip plugin, also supplies options
            $('[data-toggle="tooltip"]').tooltip({
                placement: 'top',
                delay: 150
            });

            //if
            return this;
        },

        addMeal: function() {
            var self = this;

            this.collection.create({
                description: this.$('#description').val(),
                calories: this.$('#calories').val(),
                // returns ISO 8601 standard date format
                datetime: this.$('#datetimepicker-new').data("DateTimePicker").date().format(),

            }, {
                // immediate add callback, wait: true prevents an empty object from being added to the collection
                wait: true,
                success: function() {
                    self.compositorView.addAlert(addAlertDone);
                },
                error: function() {
                    self.compositorView.addAlert(addAlertFail);
                }
            });

        },

        removeMeal: function() {
            // TODO
        },

        editMeal: function() {
            // TODO
        },

        nextPage: function() {
            this.collection.getNextPage().done(_.bind(this.updateUrl, this));
        },

        previousPage: function() {
            this.collection.getPreviousPage().done(_.bind(this.updateUrl, this));
        },

        // updates the url based on the page of the collection
        updateUrl: function() {
            var currentPage = this.collection.state['currentPage'];
            Backbone.history.navigate('meals/' + currentPage);
        },

    });
    return MealsView;
});
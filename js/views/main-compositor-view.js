define([
    'backbone',
    'jquery',
    'underscore',
    'handlebars',
    'views/navbar-view',
    'text!templates/main-compositor.html'
], function(
    Backbone,
    $,
    _,
    Handlebars,
    NavbarView,
    mainCompositorTemplate
) {
    var MainCompositorView = Backbone.View.extend({
        // init here so it only compiles once
        template: Handlebars.compile(mainCompositorTemplate),

        navbar: new NavbarView(),

        initialize: function() {

        },

        render: function() {
            this.$el.html(this.template());
            this.$('#navbar').html(this.navbar.render().el);
            return this;
        },

        // renders the view of #content with a navbar
        renderContentView: function() {
            this.contentView && this.$('#content').html(this.contentView.render().el);
        },

        renderAlertView: function() {
            this.$('#alerts').append(this.alertTemplate());
            this.$('.alert-dismissible').fadeTo(5000, 500).slideUp(500, function() {
                this.remove();
            });
        },

        // sets the view of #content to view param and its title with helper functions
        setContentView: function(title, view) {
            this.contentView = view;
            title && this.setTitle(title);
            this.renderContentView();

        },

        // sets the view's title and #title
        setTitle: function(title) {
            this.title = title;
            $('title').text(title);
        },


        // shows an alert below the navbar
        addAlert: function(template) {
            this.alertTemplate = Handlebars.compile(template);
            this.renderAlertView();
        },


    }, {
        getInstance: function() {

            this.instance = this.instance || new MainCompositorView();
            return this.instance;
        }
    });
    return MainCompositorView;
});

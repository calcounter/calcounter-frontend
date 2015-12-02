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
            //tbd
        },

        render: function() {
            this.$el.html(this.template());
            this.$('#navbar').html(this.navbar.render().el);
            return this;
        }

    });
    return MainCompositorView;
});

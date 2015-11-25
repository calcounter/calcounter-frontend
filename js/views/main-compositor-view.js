define([
    'underscore',
    'views/base-view',
    'text!templates/main-compositor.html'
], function(
    _,
    BaseView,
    mainCompositorTemplate
) {
    var MainCompositorView = BaseView.extend({
        render: function() {
            this.$el.html(_.template(mainCompositorTemplate, {}));
            return this;
        },

    });

    return MainCompositorView;
});
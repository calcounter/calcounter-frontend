define([
    'underscore',
    'text!templates/home.html'
],function(
    _,
    homeTemplate
) {
    var HomeView = {
        render: function() {
            this.$el.html(_.template(homeTemplate));
            return this;
        }
    }
});

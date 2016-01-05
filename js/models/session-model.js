define([
    'jquery',
    'backbone'
], function(
    $,
    Backbone
) {
    var SessionModel = Backbone.Model.extend({
        defaults: {
            token: null
        },

        initialize: function() {
            var self = this;
            this.on('change', function(data) {
                localStorage.setItem('token', data.get('token'));
                $.ajaxSetup({
                    beforeSend: function(xhr) {
                        if (self.isAuthenticated()) {
                            xhr.setRequestHeader('Authorization', 'Token ' + data.get('token'));
                        }
                    },
                    statusCode: {
                        401: function(err){
                            self.logout();
                        }
                    }
                });
            }, this);
            this.set('token', localStorage.getItem('token'));
        },

        logout: function() {
            this.set('token', null);
            localStorage.removeItem('token');
            Backbone.history.navigate('login', {trigger: true});
        },

        isAuthenticated: function() {
            return !!this.get('token');
        }
    }, {
        instance: null,

        getInstance: function() {
            this.instance = this.instance || new SessionModel();
            return this.instance;
        }
    });

    return SessionModel;
});
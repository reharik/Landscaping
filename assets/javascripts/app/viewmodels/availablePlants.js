/**
 * Created by Owner on 11/24/13.
 */

define(['backbone',
    'durandal/app',
    'knockout','plugins/http'], function(Backbone, app, ko, http){
    var AvailablePlantsView = Backbone.View.extend({
        el: $('#container'),
        activate: function(){
           this.availablePlants = http.get("/availablePlants");
        // this represents the render function.  inject some mixin that will go to server and get data
        },
        plants: ko.observableArray(),
        url: ko.observable("/#availablePlant/")
    });
    return AvailablePlantsView;
});

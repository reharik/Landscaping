/**
 * Created by Owner on 11/24/13.
 */

define(['backbone',
    'durandal/app',
    'knockout'], function(Backbone, app, ko){
    var AvailablePlantsView = Backbone.View.extend({
        el: $('#container'),
        activate: function(){
        // this represents the render function.  inject some mixin that will go to server and get data
        },
        plants: ko.observableArray([{'fullName':'flower', 'id':1 },{'fullName':'shrub', 'id':2}]),
        url: ko.observable("#available-plant/")
    });
    return AvailablePlantsView;
});

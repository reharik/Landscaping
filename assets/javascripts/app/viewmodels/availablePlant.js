/**
 * Created by Owner on 11/24/13.
 */

define(['backbone',
    'durandal/app',
    'knockout'], function(Backbone, app, ko){
    var AvailablePlantView = Backbone.View.extend({
        el: $('#container'),
        activate: function(){
            var jsonResult = {"plantName":"rose",
                "fertilizer":"15-10-15",
                "season":"fall"}
            this.plantName(jsonResult.plantName);
            this.fertilizer(jsonResult.fertilizer);
            this.season(jsonResult.season);
            // this represents the render function.  inject some mixin that will go to server and get data
        },
        plant: ko.observable(),
        plantName: ko.observable(),
        fertilizer: ko.observable(),
        season: ko.observable()
    });
    return AvailablePlantView;
});

define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'available-plants', moduleId: 'viewmodels/availablePlants', title: 'Available Plants', nav: true },
                { route: 'plants-in-my-yard', moduleId: 'viewmodels/selectedPlants', title:'Plants in my yard', nav: true },
                { route: 'available-plant(/:id)', moduleId: 'viewmodels/availablePlant', title:'Available Plant'}

            ]).buildNavigationModel();
            return router.activate();
        }
    };
});
import * as angular from 'angular';

function routes($routeProvider: angular.route.IRouteProvider){
    $routeProvider.when('/', 
        { 
            template: '<home></home>' 
        });
}

angular.module('myApp').config(routes);

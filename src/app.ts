import * as angular from 'angular';
import uiRouter from 'angular-ui-router';

let myApp = angular.module('myApp', [uiRouter]);

myApp.config(function($stateProvider) {
  let homeState = {
    name: 'home',
    url: '/home',
    template: '<div>It works !!!</div>'
  }

  $stateProvider.state(homeState);
});
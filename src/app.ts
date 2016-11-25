import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';

let myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {
  let homeState = {
    name: 'home',
    url: '/home',
    template: '<div>It works !!!</div>'
  }

  $stateProvider.state(homeState);
});
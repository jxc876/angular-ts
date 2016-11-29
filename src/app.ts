import * as angular from 'angular';
import 'angular-ui-router';
import homeModule from './home/home.module';

let myApp = angular.module('myApp', ['ui.router', homeModule]);

myApp.config(function($stateProvider) {
  let homeState = {
    name: 'home',
    url: '/home',
    template: '<home></home>'
  }

  $stateProvider.state(homeState);
});
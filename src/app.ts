import * as angular from 'angular';
import 'angular-ui-router';
import { IState } from 'angular-ui-router';

import { homeModule } from './home/home.module';
import { loginModule } from './login/login.module';

let myApp = angular.module('myApp', ['ui.router', homeModule, loginModule]);

myApp.config(function($stateProvider) {
  const homeState: IState = {
    name: 'home',
    url: '/home',
    template: '<home></home>'
  }
  $stateProvider.state(homeState);

  const loginState: IState = {
    name: 'login',
    url: '/login',
    template: '<login></login>'
  }
  $stateProvider.state(loginState);
});
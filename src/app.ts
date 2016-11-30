import * as angular from 'angular';
import 'angular-ui-router';
import { IState } from 'angular-ui-router';

import { homeModule } from './home/home.module';
import { loginModule } from './login/login.module';
import { registerModule } from './register/register.module';

const appDependencies = ['ui.router', homeModule, loginModule, registerModule];
let myApp = angular.module('myApp', appDependencies);

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

  const registerState: IState = {
    name: 'register',
    url: '/register',
    template: '<register></register>'
  }
  $stateProvider.state(registerState);
});
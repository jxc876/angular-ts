// angular libs
import * as angular from 'angular';
import 'angular-ui-router';
import { IState } from 'angular-ui-router';

// modules
import { homeModule } from './home/home.module';
import { loginModule } from './login/login.module';
import { registerModule } from './register/register.module';

// routes
import { homeState } from './home/home.route';
import { loginState } from './login/login.route';
import { registerState } from './register/register.route';

// app
const appDependencies = ['ui.router', homeModule, loginModule, registerModule];
let myApp = angular.module('myApp', appDependencies);

myApp.config(function($stateProvider) {
  $stateProvider.state(homeState);
  $stateProvider.state(loginState);
  $stateProvider.state(registerState);
});
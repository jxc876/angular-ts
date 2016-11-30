import * as angular from 'angular';
import { loginComponent } from './login.component'

export const loginModule = angular
    .module('myApp.login', [])
    .component('login', loginComponent)
    .name
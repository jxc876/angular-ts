import * as angular from 'angular';
import { registerComponent } from './register.component'

export const registerModule = angular
    .module('myApp.register', [])
    .component('register', registerComponent)
    .name
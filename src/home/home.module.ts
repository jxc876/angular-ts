import * as angular from 'angular';
import { homeComponent } from './home.component'

export const homeModule = angular
    .module('myApp.home', [])
    .component('home', homeComponent)
    .name
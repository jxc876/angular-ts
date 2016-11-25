import * as angular from 'angular';
import { homeComponent } from './home/home.component'

angular.module('myApp', [])
    .component('home', homeComponent);
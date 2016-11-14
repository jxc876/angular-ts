import * as angular from 'angular';
import * as _ from 'lodash'

import { homeComponent } from './home/home-component'

let myApp = angular.module('myApp', []);

myApp.component('home', homeComponent);

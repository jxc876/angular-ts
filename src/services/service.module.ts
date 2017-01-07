import * as angular from 'angular';
import { registrationService } from './registration.service';

export const serviceModule = angular
    .module('myApp.services', [])
    .factory('registrationService', registrationService)
    .name;
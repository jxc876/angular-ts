import * as angular from 'angular';
import { registrationService } from './registration.service';
import { loginService } from './login.service';

export const serviceModule = angular
    .module('myApp.services', [])
    .factory('registrationService', registrationService)
    .factory('loginService', loginService)
    .name;
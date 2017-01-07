import * as angular from 'angular';
import { registerComponent } from './register.component'
import { serviceModule } from '../services/service.module';

export const registerModule = angular
    .module('myApp.register', [serviceModule])
    .component('register', registerComponent)
    .name;
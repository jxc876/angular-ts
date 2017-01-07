import * as angular from 'angular';
import { RegistrationResource } from '../services/registration.service'

class RegisterController {
    username: string;
    password: string;
    isFormSubmitted: boolean;
    isRegisterSuccess: boolean;
    registrationService: RegistrationResource;

    constructor(registrationService){
        this.username = '';
        this.password = '';
        this.isFormSubmitted = false;
        this.isRegisterSuccess = false;
        this.registrationService = registrationService;
    }

    register(){
        this.isFormSubmitted = true;
        this.registrationService
            .save({ username: this.username, password: this.password }).$promise
            .then(response => this.isRegisterSuccess = true)
            .catch(response => this.isRegisterSuccess = false);
    }
}

export let registerComponent: angular.IComponentOptions = {
    controller: RegisterController,
    templateUrl: 'register/register.html'
};
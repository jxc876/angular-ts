import * as angular from 'angular';
import { RegistrationResource } from '../services/registration.service'

class RegisterController {
    username: string;
    password: string;
    isFormSubmitted: boolean;
    isRegisterSuccess: boolean;

    constructor(private registrationService: RegistrationResource){
        this.username = '';
        this.password = '';
        this.isFormSubmitted = false;
        this.isRegisterSuccess = false;
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
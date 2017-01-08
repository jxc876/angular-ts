import { LoginResource } from '../services/login.service'

class LoginController {
    username: string;
    password: string;

    constructor(private loginService: LoginResource){
        this.username = '';
        this.password = '';
    }

    login(){
        this.loginService
            .save({ username: this.username, password: this.password }).$promise
            .then(response => { console.log(response.token) });
    }
}

export let loginComponent: angular.IComponentOptions = {
    controller: LoginController,
    templateUrl: 'login/login.html'
};
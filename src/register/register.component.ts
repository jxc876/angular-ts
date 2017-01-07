function registerController(registrationService, $scope){
    let vm = this;
    vm.register = register;
    vm.isFormSubmitted = false;
    vm.isRegisterSuccess = false;

    function register(){
        vm.isFormSubmitted = true;
        registrationService
            .save({ username: vm.username, password: vm.password }).$promise
            .then(response => this.isRegisterSuccess = true)
            .catch(response => this.isRegisterSuccess = false);
    }
}

export let registerComponent: angular.IComponentOptions = {
    controller: registerController,
    templateUrl: 'register/register.html'
};
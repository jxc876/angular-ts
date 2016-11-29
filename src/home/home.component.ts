function homeController(){
    let vm = this;
    vm.name = 'mike';
}

export let homeComponent: angular.IComponentOptions = {
    controller: homeController,
    template: '<h1>Hello {{$ctrl.name}} !!!</h1>'
};
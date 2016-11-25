function homeController(){
    let vm = this;
    vm.name = 'world';
}

export let homeComponent: angular.IComponentOptions = {
    controller: homeController,
    template: '<h1>Hello {{$ctrl.name}} !!!</h1>'
};

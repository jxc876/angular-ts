function homeController(){
    let vm = this;
    vm.name = 'misha';
}

export let homeComponent: angular.IComponentOptions = {
    controller: homeController,
    template: '<h1>Home Component: {{$ctrl.name}} !!!</h1>'
};

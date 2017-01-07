class HomeController {
    name: string;

    constructor(){
        this.name = 'mike';
    }
}

export let homeComponent: angular.IComponentOptions = {
    controller: HomeController,
    template: '<h1>Hello {{$ctrl.name}} !!!</h1>'
};
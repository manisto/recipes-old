class AppController {
    recipe: any = {};

    constructor() {
    }
}

export let AppComponent: ng.IComponentOptions = {
    controller: AppController,
    templateUrl: "/app/app.html"
}
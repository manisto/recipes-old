class AppController {
    recipe: any;

    constructor() {
        this.recipe = {
            "title": "Gryderet med kylling og paprika",
            "ingredients": "- 1 løg\n- Smør til stegning\n- 650 g kyllingefilet",
            "preparation": "Noget mere her"
        };
    }
}

export let AppComponent: ng.IComponentOptions = {
    controller: AppController,
    templateUrl: "/app/app.html"
}
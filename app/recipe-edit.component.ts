class RecipeEditController {
    recipe: any;
    url: string;
    download: string;

    save() {
        if (this.url) {
            URL.revokeObjectURL(this.url);
        }

        let json: string = JSON.stringify(this.recipe, null, 2);
        let blob: Blob = new Blob([json], {type: "application/json"});
        this.url = URL.createObjectURL(blob);
        this.download = this.recipe.title.toLowerCase().replace(/ /g, "-") + ".json";
    }
}

export let RecipeEditComponent: ng.IComponentOptions = {
    controller: RecipeEditController,
    templateUrl: "/app/recipe-edit.html",
    bindings: {
        recipe: "<"
    }
};
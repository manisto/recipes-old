class RecipeEditController {
    static $inject: string[] = ["$scope"];
    recipe: any;
    onRecipeLoaded: ({recipe: any}) => void;
    url: string;
    download: string;
    $scope: ng.IRootScopeService;

    constructor($scope) {
        this.$scope = $scope;
    }

    save() {
        if (this.url) {
            URL.revokeObjectURL(this.url);
        }

        let json: string = JSON.stringify(this.recipe, null, 2);
        let blob: Blob = new Blob([json], {type: "application/json"});
        this.url = URL.createObjectURL(blob);
        this.download = this.recipe.title.toLowerCase().replace(/ /g, "-") + ".json";
    }

    load(files: FileList) {
        let reader: FileReader = new FileReader();

        reader.onloadend = () => {
            let result = reader.result as string;
            this.recipe = JSON.parse(result);
            this.onRecipeLoaded({recipe: this.recipe});
            this.$scope.$apply();
        };

        let file = files[0];
        reader.readAsText(file);
    }
}

export let RecipeEditComponent: ng.IComponentOptions = {
    controller: RecipeEditController,
    templateUrl: "/app/recipe-edit.html",
    bindings: {
        recipe: "<",
        onRecipeLoaded: "&",
    }
};
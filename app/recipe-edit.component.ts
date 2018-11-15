class RecipeEditController {
    static $inject: string[] = ["$scope", "$uibModal"];
    recipe: any;
    onRecipeLoaded: ({recipe: any}) => void;
    $scope: ng.IRootScopeService;
    $uibModal: ng.ui.bootstrap.IModalService;

    constructor($scope, $uibModal: ng.ui.bootstrap.IModalService) {
        this.$scope = $scope;
        this.$uibModal = $uibModal;
    }

    save() {
        let json: string = JSON.stringify(this.recipe, null, 2);
        let blob: Blob = new Blob([json], {type: "application/json"});
        let url: string = URL.createObjectURL(blob);
        let filename: string = this.recipe.title.toLowerCase().replace(/ /g, "-") + ".json";

        this.$uibModal.open({
            component: "saveRecipeDialog",
            resolve: {
                url: () => url,
                filename: () => filename,
            }
        }).result.finally(() => {
            URL.revokeObjectURL(url);
        });
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
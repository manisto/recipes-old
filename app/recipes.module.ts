declare let angular: typeof import("angular");

import {AppComponent} from "./app.component.js";
import {RecipeViewComponent} from "./recipe-view.component.js";
import {RecipeEditComponent} from "./recipe-edit.component.js";
import {RecipeHtmlService} from "./recipe-html.service.js";
import {markdownFilter} from "./markdown.filter.js";
import {onFilesSelected} from "./on-files-selected.directive.js";

let recipesModule = angular.module("recipes", ["ngSanitize", "ui.bootstrap"]);

recipesModule.component("app", AppComponent);
recipesModule.component("recipeView", RecipeViewComponent);
recipesModule.component("recipeEdit", RecipeEditComponent);
recipesModule.service("recipeHtmlService", RecipeHtmlService);
recipesModule.filter("markdown", markdownFilter);
recipesModule.directive("onFilesSelected", onFilesSelected);

recipesModule.config(["$compileProvider", function($compileProvider: ng.ICompileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(blob):/);
}]);
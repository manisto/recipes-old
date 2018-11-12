declare let angular: typeof import("angular");

import {AppComponent} from "./app.component.js";
import {RecipeViewComponent} from "./recipe-view.component.js";
import {RecipeEditComponent} from "./recipe-edit.component.js";
import {RecipeHtmlService} from "./recipe-html.service.js";
import {markdownFilter} from "./markdown.filter.js";

let recipesModule = angular.module("recipes", ["ngSanitize"]);

recipesModule.component("app", AppComponent);
recipesModule.component("recipeView", RecipeViewComponent);
recipesModule.component("recipeEdit", RecipeEditComponent);
recipesModule.service("recipeHtmlService", RecipeHtmlService);
recipesModule.filter("markdown", markdownFilter);

recipesModule.config(["$compileProvider", function($compileProvider: ng.ICompileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(blob):/);
}]);
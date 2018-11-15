declare let angular: typeof import("angular");

import { AppComponent } from "./app.component.js";
import { RecipeViewComponent } from "./recipe-view.component.js";
import { RecipeEditComponent } from "./recipe-edit.component.js";
import { RecipeHtmlService } from "./recipe-html.service.js";
import { markdownFilter } from "./markdown.filter.js";
import { fileInputDirective } from "./file-input.directive.js";
import { SaveRecipeDialogComponent } from "./save-recipe-dialog.component.js";

let recipesModule = angular.module("recipes", ["ngSanitize", "ui.bootstrap"]);

recipesModule.component("app", AppComponent);
recipesModule.component("recipeView", RecipeViewComponent);
recipesModule.component("recipeEdit", RecipeEditComponent);
recipesModule.service("recipeHtmlService", RecipeHtmlService);
recipesModule.filter("markdown", markdownFilter);
recipesModule.directive("fileInput", fileInputDirective);
recipesModule.component("saveRecipeDialog", SaveRecipeDialogComponent);

recipesModule.config([
  "$compileProvider",
  function($compileProvider: ng.ICompileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(blob):/);
  }
]);

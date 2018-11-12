declare let angular: typeof import("angular");

import {RecipeView} from "./recipe-view.component.js";
import {RecipeHtmlService} from "./recipe-html.service.js";
import {markdownFilter} from "./markdown.filter.js";

let recipesModule = angular.module("recipes", ["ngSanitize"]);

recipesModule.component("recipeView", RecipeView);
recipesModule.service("recipeHtmlService", RecipeHtmlService);
recipesModule.filter("markdown", markdownFilter);
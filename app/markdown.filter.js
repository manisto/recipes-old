export let markdownFilter = function(recipeHtmlService) {
    return function(input) {
        return recipeHtmlService.toHtml(input);
    }
};

markdownFilter.$inject = ["recipeHtmlService"];
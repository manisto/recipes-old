export let markdownFilter = function(recipeHtmlService) {
    return function(input: string): string {
        return recipeHtmlService.toHtml(input);
    }
};

markdownFilter.$inject = ["recipeHtmlService"];
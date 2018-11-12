export class RecipeHtmlService {
    constructor() {
        this.convert = new showdown.Converter();
    }

    toHtml(markdown) {
        return this.convert.makeHtml(markdown);
    }
}
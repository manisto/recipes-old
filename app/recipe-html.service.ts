declare var showdown: typeof import("showdown");

export class RecipeHtmlService {
    convert: showdown.Converter;

    constructor() {
        this.convert = new showdown.Converter();
    }

    toHtml(markdown: string): string {
        return this.convert.makeHtml(markdown);
    }
}
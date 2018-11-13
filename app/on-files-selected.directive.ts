export let onFilesSelected: angular.IDirectiveFactory = () => {
    function link(scope, element: JQLite) {
        element.on("change", (event: Event) => {
            let input = event.target as HTMLInputElement;
            scope.onFilesSelected({files: input.files});
        });
    }

    let directive: ng.IDirective = {
        scope: {
            onFilesSelected: "&"
        },
        link,
        restrict: "A"
    };

    return directive;
};
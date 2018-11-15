interface FileInputScope extends ng.IRootScopeService {
    onFilesSelected: ({files: FileList}) => void;
}

export let fileInputDirective: ng.IDirectiveFactory = () => {
    function link(scope: FileInputScope, element: JQLite) {
        let button: JQLite = element.find("button");
        let input: JQLite = element.find("input");

        button.on("click", () => {
            input[0].click();
        });

        input.on("change", (event: Event) => {
            scope.$apply(() => {
                let files: FileList = (event.target as HTMLInputElement).files;
                scope.onFilesSelected({ files });
            });
        });
    }

    return {
        link,
        templateUrl: "/app/file-input.html",
        scope: {
            onFilesSelected: "&"
        }
    };
};
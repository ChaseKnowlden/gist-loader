class GistLoader {
    constructor(gistUrl) {
        this.gistUrl = gistUrl;
        this.files = [];
    }

    load() {
        return fetch(this.gistUrl)
            .then(response => response.json())
            .then(gistData => {
            const filePromises = Object.values(gistData.files).map(file => {
                return fetch(file.raw_url)
                    .then(response => response.text())
                    .then(content => ({
                    filename: file.filename,
                    content: content
                }));
            });
            return Promise.all(filePromises);
        })
        .then(files => {
            this.files = files;
            return files;
        })
    }
}
const gistUrl = 'https://api.github.com/gists/5b3635db5ccde69786e86d8daf43f447';
const loader = new GistLoader(gistUrl);

loader.load()
    .then(files => {
        files.forEach(file => {
            console.log(`File: ${file.filename}`);
            console.log(`Content: ${file.content}`);
        });
    })
    .catch(error => {
        console.error("Error loading gist:", error);
    });
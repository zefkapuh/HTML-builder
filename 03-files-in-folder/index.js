const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true },
    (err, files) => {
    console.log('\nCurrent directory filenames:');
    if (err) {
        console.log(err);
    } else {
        files.forEach(file => {
            console.log(file);
            console.log(file.isFile());
            fs.stat(path.join(__dirname, 'secret-folder', file.name),
            (err, stats) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(stats);
                }
                }
            );
        });
    }
});




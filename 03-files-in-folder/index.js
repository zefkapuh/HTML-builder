const fs = require('fs');
const path = require('path');

fs.readdir(
  path.join(__dirname, 'secret-folder'),
  { withFileTypes: true },
  (err, files) => {
    console.log('\nCurrent directory filenames:');
    if (err) {
      console.log(err);
    } else {
      files.forEach((file) => {
        fs.stat(
          path.join(__dirname, 'secret-folder', file.name),
          (err, stats) => {
            if (err) {
              console.log(err);
            } 
            if (stats.isFile()) {
              let fileSize = stats.size;
              let fileExtension = (path.extname(file)).slice(1);
              console.log(`${file.name} - ${fileExtension} - ${fileSize}bytes`);
        }
          }
        );
      });
    }
  }
);

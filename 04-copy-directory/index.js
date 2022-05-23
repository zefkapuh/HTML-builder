const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

fs.mkdir(path.join(__dirname, 'files-copy'), {recursive: true}, (err) => {
  if (err) throw err;
  console.log('Папка была создана');
});

fs.readdir(
  path.join(__dirname, 'files'),
  { withFileTypes: true },
  (err, files) => {
    console.log('\nCurrent directory filenames:');
    if (err) {
      console.log(err);
    } else {
      files.forEach((file) => {
        console.log(file);
        fs.copyFile(
          path.join(__dirname, 'files', file.name),
          path.join(__dirname, 'files-copy', file.name),
          (err) => {
            if (err) throw err;
            console.log('Files Copied');
          }
        );
      });
    }
  }
);

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const destination = path.join(__dirname, 'project-dist', 'bundle.css');
const output = fs.createWriteStream(destination);

fs.readdir(
  path.join(__dirname, 'styles'),
  { withFileTypes: true },
  (err, files) => {
    console.log('\nCurrent directory filenames:');
    if (err) {
      console.log(err);
    } else {
      files.forEach((file) => {
        if (path.extname(file.name) === '.css') {
          console.log(file.isFile());
          console.log(file);
          const input = fs.createReadStream(path.join(__dirname, 'styles', file.name));
          input.pipe(output);
        }
      });
    }
  }
);

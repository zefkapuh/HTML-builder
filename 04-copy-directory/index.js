const fs = require('fs');
const path = require('path');

fs.access(path.join(__dirname, 'files-copy'),
  (e) => {
  if (e) {
    fs.mkdir(path.join(__dirname, 'files-copy'),
      (err) => {
        console.log(err);
      });
    fs.readdir(path.join(__dirname, 'files'),
      (err, files) => {
        files.forEach(file => {
          fs.copyFile(path.join(__dirname, 'files', file),
            path.join(__dirname, 'files-copy', file),
            (err) => {
              if (err) console.log(err);
            });
        });
      });
  } else {
    fs.readdir(path.join(__dirname, 'files-copy'),
      (err, files) => {
        files.forEach(file => {
          fs.unlink(path.join(__dirname, 'files-copy', file),
            (err) => {
              if (err) console.log(err);
            });
        });
      });
    fs.readdir(path.join(__dirname, 'files'),
      (err, files) => {
        files.forEach(file => {
          fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file),
            (err) => {
              if (err) console.log(err);
            });
        });
      });
  }
});

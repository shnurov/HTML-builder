const fs = require('fs/promises');

const dir = '04-copy-directory/files';
const copyDir = '04-copy-directory/files-copy';

fs.rm(copyDir, { recursive: true, force: true }).finally(function () {
  fs.mkdir(copyDir, { recursive: true }, (error) => {
    if (error) throw error;
  });
  fs.readdir(dir, { withFileTypes: true }, (error) => {
    if (error) throw error;
  }).then((files) => {
    files.forEach((element) => {
      if (element.isFile()) {
        fs.copyFile(`${dir}/${element.name}`, `${copyDir}/${element.name}`);
      }
    });
  });
});

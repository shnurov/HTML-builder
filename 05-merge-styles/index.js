const fs = require('fs');
const path = require('path');

const dir = '05-merge-styles/styles';
const stream = fs.createWriteStream('05-merge-styles/project-dist/bundle.css');

fs.readdir(dir, { withFileTypes: true }, (error, files) => {
  if (error) throw error;
  files.forEach((element) => {
    if (element.isFile() === true && path.parse(element.name).ext === '.css') {
      fs.createReadStream(`${dir}/${element.name}`).on('data', (data) =>
        stream.write(data),
      );
    }
  });
});

const fs = require('fs');
const path = require('path');

fs.readdir('03-files-in-folder/secret-folder', (error, files) => {
  if (error) throw error;
  files.forEach((file) => {
    const infoFile = path.parse(file);
    fs.stat(
      path.join('03-files-in-folder/secret-folder', file),
      (error, info) => {
        if (error) throw error;
        if (info.isFile())
          console.log(
            `${infoFile.name} - ${infoFile.ext.replace('.', '')} - ${Number(
              info.size / 1024,
            ).toFixed(3)}kb`,
          );
      },
    );
  });
});

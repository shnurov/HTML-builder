const fs = require('fs');
const { stdin } = process;

console.log('Введите текст для сохранения');

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    exit();
  } else {
    fs.appendFile('02-write-file.txt', data, (err) => {
      if (err) throw err;
    });
  }
});

process.on('SIGINT', exit);

function exit() {
  console.log('Программа завершена');
  process.exit();
}

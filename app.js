const os = require('os');
const fs = require('fs');
const path = require('path');
console.log(os.platform());
console.log(os.cpus());
console.log(os.uptime());

// fs.mkdir(path.join(__dirname, '/Test'), {}, (err) => {
//   if (err) throw err;
//   console.log('Directory Created...');
// });

fs.writeFile(
  path.join(__dirname, '/Test', 'test.txt'),
  'File created using fs module',
  (err) => {
    if (err) throw err;
    console.log('File Created');
    fs.appendFile(
      path.join(__dirname, '/Test', 'test.txt'),
      ' Another line added by fs module!!!',
      (err) => {
        if (err) throw err;

        console.log('File appended!!');
      }
    );
  }
);

fs.readFile(path.join(__dirname, '/Test', 'test.txt'), 'utf8', (err, data) => {
  if (err) throw err;

  console.log(data);
});

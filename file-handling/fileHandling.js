import fs from 'node:fs'

fs.readFile("file.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
});

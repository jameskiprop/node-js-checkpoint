const fs = require("fs");

//Writing "Hello Node " to welcome.txt
fs.writeFileSync("welcome.txt", "Hello Node");

//Reading from welcome.txt and logging into the console
fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

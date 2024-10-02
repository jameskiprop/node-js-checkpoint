const generatePassword = require("generate-password");

//Generating a random password
const password = generatePassword.generate({
  length: 12,
  numbers: true,
});

console.log("Generated Password: ", password);

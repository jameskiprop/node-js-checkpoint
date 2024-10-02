// email-sender.js
const nodemailer = require("nodemailer");

// Create a transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "james003@gmail.com",
    pass: "12345678",
  },
});

// Define mail options
let mailOptions = {
  from: "jameskipropp@gmail.com",
  to: "quincyjones12@gmail.com",
  subject: "Hello from Node.js",
  text: "This is a test email from Node.js!",
};

// Sending the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

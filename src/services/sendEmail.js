const nodemailer = require('nodemailer');
const { readFileSync } = require("fs");
const path = require("path");

const userService = {}

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  const emailTemplate = readFileSync(path.join(__dirname, "email.html"), "utf8");

  userService.sendEmail = async (email, subject = '', text) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            text: "Hello World! to email",
            subject: "Hello ! Thank to booking with us",
            html: emailTemplate,
        })

    } catch (error) {
        console.error(error);
    }
  }

  module.exports = userService
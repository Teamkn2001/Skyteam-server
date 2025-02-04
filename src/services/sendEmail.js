const nodemailer = require("nodemailer");
const { readFileSync } = require("fs");
const path = require("path");

const userService = {};

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

// console.log(__dirname);
// const emailTemplatePath = path.join(__dirname, "email.html");
// console.log("Email template path:", emailTemplatePath);

// try {
//   const emailTemplate = readFileSync(emailTemplatePath, "utf8");
//   console.log("Email template loaded successfully");
// } catch (error) {
//   console.error("Error reading email template:", error);
// }

const emailTemplate = readFileSync(path.join(__dirname, "email.html"), "utf8");

userService.sendEmail = async (email, bookedItem) => {
  console.log(email)
  try {
    const sentData = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      text: "Hello World! to email",
      subject: `Thank you for booking! Viewing Scheduled for ${bookedItem.bookedName} is on ${bookedItem.bookedDate}`,
      html: emailTemplate,
    });

    return sentData.accepted;
  } catch (error) {
    console.error(error);
  }
};

module.exports = userService;

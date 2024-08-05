import { createTransport } from "nodemailer";
import { config } from "dotenv";
config()

const SENDER_EMAIL = process.env.MAIL_USER;
const RECEIVER_EMAIL = process.env.SEND_TO;

const EMAIL_SUBJECT = "Testing scheduling";
const EMAIL_BODY_HTML = "<h1>Happy Birthday Hogaya</h1>";
const EMAIL_TEXT = "Hello I am Rahul Testing scheduling !!!"

export const options ={
  from: SENDER_EMAIL,
  to: RECEIVER_EMAIL,
  cc: process.env.CC,
  bcc: process.env.BCC,
  subject: EMAIL_SUBJECT,
  html: EMAIL_BODY_HTML,
  text: EMAIL_TEXT,
  
};

export const transporter = createTransport({
    host: process.env.MAIL_HOST,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

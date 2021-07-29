import nodemailer from 'nodemailer';

const transporterOptions = {
  service: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD
  }
};

const transporter = nodemailer.createTransport(transporterOptions);

export default transporter;

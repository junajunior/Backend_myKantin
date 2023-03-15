const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Database mockup
const users = [
  { nama: 'arjuna', email: 'juna@gmail.com', password: '1234567890' },
];

// Store reset tokens in memory (you should use a database in production)
const resetTokens = [];

// Send email function using nodemailer
const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    host: 'juna@gmail.com',
    port: 5000,
    auth: {
      user: 'arjuna',
      pass: '1234567890',
    },
  });

  const message = {
    from: 'your-ethereal-email@example.com',
    to,
    subject,
    text,
  };
  const info = await transporter.sendMail(message);
  console.log(`Email sent: ${info.messageId}`);
};

// Forgot password endpoint
const forgotPassword = async (req , res ) => {
   {
      const { email } = req.body;
    
      const user = users.find((u) => u.email === email);
      if (!user) {
        console.log();
        return res.status(400).send('User not found');
      }
    
      const token = uuid.v4();
      const expirationTime = Date.now() + 60 * 60 * 1000; // Token expires in 1 hour
    
      resetTokens.push({
        token,
        email,
        expirationTime,
      });xampp
    
      const resetUrl = `https://example.com/reset-password?token=${token}`;
      const message = `Click this link to reset your password: ${resetUrl}`;
    
      sendEmail(email, 'Reset your password', message)
        .then(() => {
          res.send('Email sent');
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send('Failed to send email');
        });
    }
};

// Reset password endpoint
const resetPassword = async (req, res) => {
   const { token, password } = req.body;
 
   const resetToken = resetTokens.find((t) => t.token === token);
 }



 module.exports = { resetPassword , forgotPassword}
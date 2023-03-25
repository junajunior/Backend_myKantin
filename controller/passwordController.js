const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const crypto = require('crypto');
const bcrypt = require('bcrypt');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'email_anda@gmail.com',
    pass: 'password_anda'
  }
});

const users = [
  { email: 'user1@example.com', password: '$2b$10$SaEVW6U47x6nm0cbTWmcTeYz8JWfDwzz1B50pJTsLZvux8L1Q2Sm2' },
  { email: 'user2@example.com', password: '$2b$10$mLh5gmDL8pHt4n4t3X9V7OvpkllS0y7.fDh75GQnlq3ML20t4XZ7m' }
];

// Generate a unique token for password reset
function generateToken() {
  return crypto.randomBytes(20).toString('hex');
}

// Find user by email
function findUserByEmail(email) {
  return users.find(user => user.email === email);
}

// Send password reset email
function sendPasswordResetEmail(user, token) {
  const resetUrl = `http://localhost:3000/reset-password/${token}`;
  const mailOptions = {
    from: 'noreply@example.com',
    to: user.email,
    subject: 'Reset Password',
    text: `Please click the link below to reset your password:\n${resetUrl}`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
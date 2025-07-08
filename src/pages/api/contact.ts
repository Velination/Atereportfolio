// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Set up transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, 
  to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
  replyTo: email, 
  subject: `New message from ${name}`,
  text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

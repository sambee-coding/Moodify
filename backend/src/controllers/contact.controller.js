import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const handleContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1. Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Your 16-character App Password
      },
    });

    // 2. Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'samrisamrawit30@gmail.com', // Where you want to receive the messages
      subject: `New Moodify Message from ${name}`,
      text: `You have a new message from your Moodify contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #1f295f;">New Moodify Message!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `,
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);

    console.log(`Email successfully sent to ${process.env.EMAIL_USER} from ${name}`);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Check your credentials.'
    });
  }
};

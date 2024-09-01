const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const port = 2000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "avatarrobotix.contact@gmail.com",
    pass: "zzuh kufx okvq hcou" // Ensure this is an app password if 2FA is enabled
  }
});

// Endpoint to handle form submission
app.post("/api/contact", (req, res) => {
  const { name, email, content, subject } = req.body;

  if (!name || !email || !content || !subject) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Email to Admin
  const mailOptionsAdmin = {
    from: email,
    to: "avatarrobotix.contact@gmail.com",
    subject: `Contact Form Submission from ${name} - ${subject}`,
    html: `
    <html>
      <head>
        <style>
          body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333333;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid #e0e0e0;
          }
          .header {
            background-color: #c5ffc4; /* Light Green */
            color: #000000;
            padding: 20px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
          }
          .content {
            padding: 30px 20px;
            line-height: 1.6;
          }
          .content p {
            margin: 15px 0;
          }
          .highlight {
            padding: 5px 10px;
            border-radius: 4px;
          }
          .footer {
            padding: 15px 20px;
            background-color: #f4f4f4;
            text-align: center;
            color: #000000;
            font-size: 12px;
            border-top: 1px solid #e0e0e0;
          }
          .button {
            display: inline-block;
            padding: 12px 20px;
            margin-top: 20px;
            background-color: #a6a9ff; /* Light Blue */
            text-decoration: none;
            color: #ffffff;
            border-radius: 5px;
            font-weight: bold;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            Contact Form Submission
          </div>
          <div class="content">
            <p><strong>Name:</strong> <span class="highlight">${name}</span></p>
            <p><strong>Email:</strong> <span class="highlight">${email}</span></p>
            <p><strong>Subject:</strong> <span class="highlight">${subject}</span></p>
            <p><strong>Message:</strong></p>
            <p>${content}</p>
            <a href="mailto:${email}" class="button">Reply to ${name}</a>
          </div>
          <div class="footer">
            <p>&copy; 2024 Avatar Robotix. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `
  };

  // Email to User
  const mailOptionsUser = {
    from: "avatarrobotix.contact@gmail.com",
    to: email,
    subject: `Thank you for contacting us, ${name}`,
    html: `
    <html>
      <head>
        <style>
          body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
          }
          .header {
            background-color: #c5ffc4; /* Light Green */
            color: #000000;
            padding: 20px;
            text-align: center;
          }
          .content {
            padding: 30px 20px;
            color: #000000;
            line-height: 1.6;
          }
          .content p {
            margin: 10px 0;
          }
          .highlight {
            padding: 5px 10px;
            border-radius: 4px;
            display: inline-block;
            font-weight: bold;
          }
          .employee {
            background-color: #ffcfa5; /* Light Orange */
          }
          .agri {
            background-color: #c5ffc4; /* Light Green */
          }
          .medical {
            background-color: #a6a9ff; /* Light Blue */
          }
          .footer {
            padding: 15px 20px;
            background-color: #f4f4f4;
            text-align: center;
            color: #000000;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Contacting Us!</h1>
          </div>
          <div class="content">
            <p>Dear <span class="highlight employee">${name}</span>,</p>
            <p>Thank you for reaching out to us. We have received your message regarding "<strong class="highlight agri">${subject}</strong>" and will get back to you shortly.</p>
            <p><strong>Your Message:</strong></p>
            <p class="highlight ">${content}</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 Avatar Robotix. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>`
  };

  // Send the email to Admin
  transporter.sendMail(mailOptionsAdmin, (error, info) => {
    if (error) {
      console.error("Error sending email to admin:", error);
      return res
        .status(500)
        .json({ message: `Failed to send email: ${error.message}` });
    } else {
      console.log("Admin email sent:", info.response);

      // Send the confirmation email to User
      transporter.sendMail(mailOptionsUser, (userError, userInfo) => {
        if (userError) {
          console.error("Error sending email to user:", userError);
          return res.status(500).json({
            message: `Failed to send confirmation email: ${userError.message}`
          });
        }

        console.log("User email sent:", userInfo.response);
        res.status(200).json({
          message: "Form submission successful, confirmation email sent"
        });
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

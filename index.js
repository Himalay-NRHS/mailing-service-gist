const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(cors());

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "example@gmail.com", // Your email
    pass: "kuohisyzwypyavrd",       // Your app password
  },
});

// Endpoint to receive email and send "hi"
app.post("/bookings", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send("Email is required");
  }

  const mailOptions = {
    from: "example@gmail.com",
    to: email,
    subject: "Test Message",
    text: "hi from nodemailer",
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error sending email:", err);
      return res.status(500).send("Failed to send email");
    }
    console.log("Email sent:", info.response);
    res.send("Email sent successfully");
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


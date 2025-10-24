// src/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Alle Felder sind erforderlich." });
  }

  try {
    // Transporter erstellen
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true für 465, sonst false
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Mail-Inhalt
    const mailOptions = {
      from: `"Portfolio Kontaktformular" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // an dich selbst
      subject: `Neue Nachricht von ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Nachricht:
        ${message}
      `,
      replyTo: email,
    };

    // Mail senden
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Mail-Fehler:", error);
    return res.status(500).json({ error: "Fehler beim Versenden der Mail." });
  }
}

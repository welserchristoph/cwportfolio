// src/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Alle Felder sind erforderlich." });
    }

    try {
      // Transporter konfigurieren
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER, // chr.welser@gmail.com
          pass: process.env.GMAIL_PASS, // App-Passwort von Google
        },
      });

      await transporter.sendMail({
        from: email,
        to: process.env.GMAIL_USER,
        subject: `Neue Nachricht von ${name}`,
        text: message,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Fehler beim Versenden der Mail." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

"use server";
import nodemailer from "nodemailer";

export default async function sendMail({
  to,
  name,
  subject,
  html,
}: {
  to: string;
  name: string;
  subject: string;
  html: string;
}) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    console.log(transporter);
    console.log(to);

    try {
      const mail = await transporter.sendMail({
        from: process.env.SMTP_EMAIL,
        to,
        subject,
        html,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
}

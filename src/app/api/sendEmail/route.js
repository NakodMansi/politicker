import nodemailer from "nodemailer";

export async function POST(req) {
  const { to, subject, text } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mansivnakod1007@gmail.com", // your Gmail
      pass: process.env.GMAIL_APP_PASSWORD, // your app password from .env.local
    },
  });

  console.log("App password: ",process.env.GMAIL_APP_PASSWORD)

  try {
    await transporter.sendMail({
      from: "mansivnakod1007@gmail.com",
      to,
      subject,
      text,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
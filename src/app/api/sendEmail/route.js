import nodemailer from "nodemailer";

export async function POST(req) {
  const { to, subject, text } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mansivnakod1007@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD, // App Password
    },
  });

  try {
    await transporter.sendMail({
      from: "Mansi <mansivnakod1007@gmail.com>",
      to,       // email of the recipient
      subject,  // email subject
      text,     // email body
    });

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
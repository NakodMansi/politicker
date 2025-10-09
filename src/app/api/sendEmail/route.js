import nodemailer from "nodemailer";

export async function POST(req) {
  const { to, subject, text } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: "mansivnakod1007@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, // ✅ <--- fixes self-signed certificate issue
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
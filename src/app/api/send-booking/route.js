import { adminEmailTemplate } from "@/emails/admin-template";
import { customerEmailTemplate } from "@/emails/customer-template";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { activity, date, name, email, phone, total, message } = body;

    // Configure transporter (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to YOU (admin)
    await transporter.sendMail({
      from: `"Quad Marrakech" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER, // your email
      subject: "📥 Nouvelle réservation",
      html: adminEmailTemplate({ activity, date, name, email, phone, total, message }),
    });

    // Email to CUSTOMER
    await transporter.sendMail({
      from: `"Quad Marrakech" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Confirmation de votre réservation",
      html: customerEmailTemplate({ activity, date, name, email, phone, total }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}

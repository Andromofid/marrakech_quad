import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, phone, message } = body;

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
      subject: "📥 Nouveau message de contact",
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name ?? "Inconnu"}</p>
        <p><strong>Email:</strong> ${email ?? "Non fourni"}</p>
        <p><strong>Téléphone:</strong> ${phone ?? "Non fourni"}</p>
        <hr/>
        <p><strong>Message:</strong> ${message ?? "Aucun message fourni"}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}

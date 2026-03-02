import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { activity, date, name, email, phone, total } =
      body;

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
      html: `
        <h2>Nouvelle réservation</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <hr/>
        <p><strong>Activité:</strong> ${activity}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Total:</strong> ${total}</p>
      `,
    });

    // Email to CUSTOMER
    await transporter.sendMail({
      from: `"Quad Marrakech" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Confirmation de votre réservation",
      html: `
        <h2>Merci pour votre réservation 🎉</h2>
        <p>Bonjour ${name},</p>
        <p>Votre réservation est confirmée.</p>
        <hr/>
        <p><strong>Activité:</strong> ${activity}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Total:</strong> ${total}</p>
        <br/>
        <p>Nous vous contacterons bientôt.</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}

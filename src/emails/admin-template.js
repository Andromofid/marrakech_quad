export function adminEmailTemplate({
  name,
  email,
  phone,
  activity,
  date,
  message,
  total,
}) {
  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nouvelle réservation</title>
</head>

<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:20px 0;">
<tr>
<td align="center">

<!-- Container -->
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">
  
  <!-- Header -->
  <tr>
    <td align="center" style="background:#e85d04;padding:30px 20px;color:#ffffff;">
      <div style="font-size:40px;">🏍️</div>
      <h1 style="margin:10px 0 5px;font-size:24px;">Nouvelle Réservation</h1>
      <p style="margin:0;font-size:14px;opacity:0.9;">
        ${new Date().toLocaleDateString()}
      </p>
    </td>
  </tr>

  <!-- Client Info -->
  <tr>
    <td style="padding:20px;">
      <h2 style="font-size:18px;margin-bottom:15px;color:#333;">
        Informations client
      </h2>

      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:8px 0;color:#666;">Nom</td>
          <td align="right" style="padding:8px 0;font-weight:bold;color:#333;">
            ${name ?? "N/A"}
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#666;">Message</td>
          <td align="right" style="padding:8px 0;font-weight:bold;color:#333;">
            ${message ?? "Aucun message"}
          </td>
        </tr>

        <tr>
          <td style="padding:8px 0;color:#666;">Email</td>
          <td align="right" style="padding:8px 0;">
            <a href="mailto:${email}" style="color:#e85d04;text-decoration:none;">
              ${email}
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#666;">Téléphone</td>
          <td align="right" style="padding:8px 0;font-weight:bold;">
            <a href="tel:${phone}" style="color:#333;text-decoration:none;">
              ${phone}
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Reservation Details -->
  <tr>
    <td style="padding:20px;border-top:1px solid #eee;">
      <h2 style="font-size:18px;margin-bottom:15px;color:#333;">
        Détails réservation
      </h2>

      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:10px 0;color:#666;">Activité</td>
          <td align="right" style="padding:10px 0;font-weight:bold;color:#333;">
            ${activity ?? "N/A"}
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#666;">Date</td>
          <td align="right" style="padding:10px 0;font-weight:bold;color:#333;">
            ${date ??   "N/A"}
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#666;">Message</td>
          <td align="right" style="padding:10px 0;font-weight:bold;color:#333;">
            ${message ?? "Aucun message"}
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#666;">Total</td>
          <td align="right" style="padding:10px 0;font-size:20px;font-weight:bold;color:#e85d04;">
            ${total ?? "N/A"}
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Buttons -->
  <tr>
    <td style="padding:20px;border-top:1px solid #eee;">
      
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="padding-bottom:10px;">
            <a href="mailto:${email}"
               style="display:block;width:100%;background:#e85d04;color:#ffffff;
               text-decoration:none;padding:14px 0;border-radius:6px;
               font-weight:bold;">
              📧 Répondre
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">
            <a href="tel:${phone}"
               style="display:block;width:100%;background:#333;color:#ffffff;
               text-decoration:none;padding:14px 0;border-radius:6px;
               font-weight:bold;">
              📞 Appeler
            </a>
          </td>
        </tr>
      </table>

    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td align="center" style="padding:20px;background:#fafafa;color:#999;font-size:12px;">
      © ${new Date().getFullYear()} Kech Quad<br/>
      Réservation envoyée depuis votre site web
    </td>
  </tr>

</table>
<!-- End Container -->

</td>
</tr>
</table>

</body>
</html>
`;
}

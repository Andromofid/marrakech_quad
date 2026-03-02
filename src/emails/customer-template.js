export function customerEmailTemplate({
  name,
  email,
  phone,
  activity,
  date,
  total,
}) {
  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Confirmation - Kech Quad</title>
</head>

<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:20px 0;">
<tr>
<td align="center">

<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">

<!-- HEADER -->
<tr>
<td align="center" style="background:#e85d04;padding:35px 20px;color:#ffffff;">
<div style="font-size:50px;">✅</div>
<h1 style="margin:10px 0 5px;font-size:24px;">
Réservation Confirmée !
</h1>
<p style="margin:0;font-size:14px;opacity:0.9;">
Bonjour ${name},
</p>
</td>
</tr>

<!-- MESSAGE -->
<tr>
<td style="padding:25px 20px;text-align:center;">
<p style="font-size:15px;line-height:1.6;color:#333;margin:0;">
Merci d’avoir choisi <strong>Quad Marrakech</strong> 🎉<br/>
Votre réservation est bien enregistrée.
</p>
</td>
</tr>

<!-- RESERVATION DETAILS -->
<tr>
<td style="padding:20px;border-top:1px solid #eeeeee;">

<h2 style="font-size:18px;margin-bottom:15px;color:#333;text-align:center;">
📋 Détails de votre réservation
</h2>

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td style="padding:10px 0;color:#666;">Activité</td>
<td align="right" style="padding:10px 0;font-weight:bold;color:#333;">
${activity}
</td>
</tr>

<tr>
<td style="padding:10px 0;color:#666;">Date</td>
<td align="right" style="padding:10px 0;font-weight:bold;color:#333;">
${date}
</td>
</tr>

<tr>
<td style="padding:10px 0;color:#666;">Total</td>
<td align="right" style="padding:10px 0;font-size:20px;font-weight:bold;color:#e85d04;">
${total}
</td>
</tr>
</table>

</td>
</tr>

<!-- NEXT STEPS -->
<tr>
<td style="padding:20px;border-top:1px solid #eeeeee;">

<h3 style="font-size:16px;margin-bottom:15px;color:#333;">
🚀 Prochaines étapes
</h3>

<p style="margin:8px 0;color:#555;font-size:14px;">
1️⃣ Nous vous contacterons sous 24h pour confirmer.
</p>

<p style="margin:8px 0;color:#555;font-size:14px;">
2️⃣ Préparez une tenue confortable .
</p>

<p style="margin:8px 0;color:#555;font-size:14px;">
3️⃣ Profitez de votre aventure dans la Palmeraie 🌴
</p>

</td>
</tr>

<!-- CONTACT BUTTONS -->
<tr>
<td style="padding:20px;border-top:1px solid #eeeeee;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding-bottom:10px;">
<a href="tel:+212777527159"
style="display:block;width:100%;background:#e85d04;color:#ffffff;
text-decoration:none;padding:14px 0;border-radius:6px;
font-weight:bold;">
📞 Nous appeler
</a>
</td>
</tr>

<tr>
<td align="center" style="padding-bottom:10px;">
<a href="mailto:ymofid18@gmail.com"
style="display:block;width:100%;background:#333;color:#ffffff;
text-decoration:none;padding:14px 0;border-radius:6px;
font-weight:bold;">
✉️ Envoyer un email
</a>
</td>
</tr>

<tr>
<td align="center">
<a href="https://wa.me/+212777527159"
style="display:block;width:100%;background:#25D366;color:#ffffff;
text-decoration:none;padding:14px 0;border-radius:6px;
font-weight:bold;">
💬 WhatsApp
</a>
</td>
</tr>
</table>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td align="center" style="padding:20px;background:#fafafa;color:#999;font-size:12px;">
📍 Marrakech<br/>
© ${new Date().getFullYear()} Kech Quad<br/>
<a href="https://kechquad.com"
style="color:#e85d04;text-decoration:none;">
https://kechquad.com
</a>
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
}

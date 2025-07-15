// app/actions/action.ts
"use server";

import nodemailer from "nodemailer";
import { validateSchema } from "./schema";

export async function handleSubmit(
  prev: any,
  formData: FormData
): Promise<{ message: string }> {
  const rowData = Object.fromEntries(formData.entries());
  const result = validateSchema.safeParse(rowData);

if (!result.success) {
  const messages = result.error.issues.map((e) => `${e.path.join(".")}: ${e.message}`);
  return { message: `❌ ${messages.join(" | ")}` };
}


  // ✅ Email Validation via MailboxLayer with timeout
  const emailToCheck = result.data.email;
  const apiKey = process.env.MAILBOXLAYER_API_KEY;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000); // 3 ثواني

  try {
    const res = await fetch(
      `https://apilayer.net/api/check?access_key=${apiKey}&email=${emailToCheck}&smtp=1&format=1`,
      { signal: controller.signal }
    );

    clearTimeout(timeout);

    const data = await res.json();

    if (!data.format_valid || !data.mx_found || !data.smtp_check) {
      return {
        message: "❌ Please enter a valid real email address 📧",
      };
    }
  } catch (err) {
    clearTimeout(timeout); // تأكد من مسح التايمر لو صار خطأ

    // إذا السبب كان أن الطلب انلغى
    if ((err as any).name === "AbortError") {
      return {
        message: "❌ Email validation timed out. Please try again.",
      };
    }

    return {
      message: "❌ Failed to validate email address.",
    };
  }

  // ✅ Send email if validation passes
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      replyTo: result.data.email,
      to: process.env.GMAIL_USER,
      subject: result.data.subject,
      text: `
📧 Email: ${result.data.email}
📞 Phone: ${result.data.phone}
🏠 Address: ${result.data.address}
📝 Message:
${result.data.content ?? "(No message)"}
      `,
    });

    return { message: "✅ Message sent successfully!" };
  } catch (e) {
    return { message: "❌ Error sending email" };
  }
}

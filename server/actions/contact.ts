// app/actions/action.ts
"use server";

import nodemailer from "nodemailer";
import { validateSchema } from "@/types/schema";

export async function handleSubmit(
  _prev: { message: string },
  formData: FormData
): Promise<{ message: string }> {
  const rowData = Object.fromEntries(formData.entries());
  const result = validateSchema.safeParse(rowData);

  if (!result.success) {
    const messages = result.error.issues.map((e) => `${e.path.join(".")}: ${e.message}`);
    return { message: `❌ ${messages.join(" | ")}` };
  }

  // ✅ Email Validation via Kickbox


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

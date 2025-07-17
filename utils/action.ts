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

  // ✅ Email Validation via Kickbox
  const emailToCheck = result.data.email;
  const kickboxApiKey = process.env.KICKBOX_API_KEY;

  try {
    const res = await fetch(
      `https://api.kickbox.com/v2/verify?email=${emailToCheck}&apikey=${kickboxApiKey}`
    );

    const data = await res.json();

    if (data.result !== "deliverable") {
      return {
        message: "❌ Please enter a valid real email address 📧",
      };
    }
  } catch (err) {
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

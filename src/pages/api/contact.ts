// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const SibApiV3Sdk = require("sib-api-v3-sdk");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const client = SibApiV3Sdk.ApiClient.instance;
    client.authentications["api-key"].apiKey =
      process.env.BREVO_API_KEY;

    const api = new SibApiV3Sdk.TransactionalEmailsApi();

    await api.sendTransacEmail({
      sender: {
        name: "Portfolio Contact",
        email: "noreply@brevo-mail.com",
      },
      to: [{ email: "velination23@gmail.com" }],
      replyTo: { email, name },
      subject: `New message from ${name}`,
      textContent: message,
    });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error: any) {
    console.error("Brevo API error:", error);
    return res.status(500).json({
      message: "Failed to send message",
      error: error.message,
    });
  }
}

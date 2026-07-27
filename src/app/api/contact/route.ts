import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, business, service, message } = body;

    // Validate required fields
    if (!name || !email || !message || !service) {
      return NextResponse.json(
        { error: "Name, email, service, and message are required." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL;
    if (!recipientEmail) {
      return NextResponse.json(
        { error: "Contact email not configured." },
        { status: 500 }
      );
    }

    const resend = getResend();
    if (!resend) {
      return NextResponse.json(
        { error: "Email service not configured. Please set RESEND_API_KEY." },
        { status: 500 }
      );
    }

    const serviceLabels: Record<string, string> = {
      seo: "SEO Services",
      "web-development": "Website Development",
      "web-application": "Web Application",
      "mobile-app": "Mobile App Development",
      "desktop-app": "Desktop Application",
      maintenance: "Maintenance & Support",
      multiple: "Multiple Services",
      other: "Other",
    };

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background: #f8fafc; }
            .container { max-width: 600px; margin: 0 auto; padding: 32px 24px; }
            .header { background: linear-gradient(135deg, #2563eb, #06b6d4); border-radius: 16px 16px 0 0; padding: 32px; text-align: center; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .header p { color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px; }
            .body { background: white; border-radius: 0 0 16px 16px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .field { margin-bottom: 20px; }
            .field-label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #1e293b; margin: 0; line-height: 1.5; }
            .divider { border: none; border-top: 1px solid #e2e8f0; margin: 24px 0; }
            .footer { text-align: center; padding: 16px; font-size: 12px; color: #94a3b8; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📩 New Contact Message</h1>
              <p>From lankanseo.com contact form</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="field-label">Name</div>
                <p class="field-value">${escapeHtml(name)}</p>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <p class="field-value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
              </div>
              ${phone ? `
              <div class="field">
                <div class="field-label">Phone</div>
                <p class="field-value"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></p>
              </div>
              ` : ""}
              ${business ? `
              <div class="field">
                <div class="field-label">Business</div>
                <p class="field-value">${escapeHtml(business)}</p>
              </div>
              ` : ""}
              <div class="field">
                <div class="field-label">Service Required</div>
                <p class="field-value">${serviceLabels[service] || service}</p>
              </div>
              <hr class="divider" />
              <div class="field">
                <div class="field-label">Message</div>
                <p class="field-value" style="white-space: pre-wrap;">${escapeHtml(message)}</p>
              </div>
            </div>
            <div class="footer">
              Sent via lankanseo.com contact form
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: "LankanSEO Contact <onboarding@resend.dev>",
      to: recipientEmail,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!", id: data?.id },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

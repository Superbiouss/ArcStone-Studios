import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getAdminEmailTemplate, getClientEmailTemplate } from "@/lib/email-templates";

// Initialize Resend with API Key from environment variables
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Fallback emails if environment variables are not set
const DEFAULT_FROM_EMAIL = "onboarding@resend.dev";
const DEFAULT_TO_EMAIL = "hello@arcstonestudio.in";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, website } = body;

    // Honeypot field — bots will fill this in, real users won't see it
    if (website) {
      // Silently return success to not tip off the bot
      return NextResponse.json({ success: true });
    }

    // Validate request data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Server-side email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    console.log(`[Contact API] Form submission received from: ${name} <${email}>`);

    if (!resend) {
      console.warn(
        "[Contact API] RESEND_API_KEY is not defined in environment variables. Running in sandbox/development mock mode."
      );
      // Return mock success during local development when api key is missing
      return NextResponse.json({
        success: true,
        mock: true,
        message: "Message received (Mock Mode - Resend API Key is missing).",
      });
    }

    const fromEmail = process.env.CONTACT_EMAIL_FROM || DEFAULT_FROM_EMAIL;
    const toEmail = process.env.CONTACT_EMAIL_TO || DEFAULT_TO_EMAIL;

    let adminEmailSent = false;
    let clientEmailSent = false;
    const errors: string[] = [];

    // 1. Send inquiry notification to the ArcStone Studio team
    try {
      const adminResponse = await resend.emails.send({
        from: `ArcStone Leads <${fromEmail}>`,
        to: toEmail,
        subject: `✦ NEW PROJECT INQUIRY: ${name.toUpperCase()} ✦`,
        html: getAdminEmailTemplate(name, email, message),
        // Allows replying directly to the prospect
        replyTo: email,
      });

      if (adminResponse.error) {
        errors.push(`Admin email error: ${adminResponse.error.message}`);
      } else {
        adminEmailSent = true;
      }
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : String(err);
      errors.push(`Admin email exception: ${errMsg}`);
    }

    // 2. Send confirmation receipt to the prospective client
    // Note: On unverified Resend sandbox accounts, this may fail if "to" is not the account owner's email.
    try {
      const clientResponse = await resend.emails.send({
        from: `ArcStone Studios <${fromEmail}>`,
        to: email,
        subject: `✦ We received your ambition — ArcStone Studios ✦`,
        html: getClientEmailTemplate(name),
      });

      if (clientResponse.error) {
        errors.push(`Client confirmation error: ${clientResponse.error.message}`);
      } else {
        clientEmailSent = true;
      }
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : String(err);
      errors.push(`Client confirmation exception: ${errMsg}`);
    }

    console.log(
      `[Contact API] Email dispatches completed. Admin sent: ${adminEmailSent}, Client sent: ${clientEmailSent}. Errors:`,
      errors
    );

    // Return success if at least the admin email was sent, or if both succeeded
    if (adminEmailSent) {
      return NextResponse.json({
        success: true,
        clientEmailSent,
        warnings: errors.length > 0 ? errors : undefined,
      });
    } else {
      // If the admin email failed to send, return error
      return NextResponse.json(
        {
          error: "Failed to dispatch project inquiry email.",
          details: errors,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("[Contact API] Unexpected handler error:", errMsg);
    return NextResponse.json(
      { error: "An unexpected error occurred processing your request." },
      { status: 500 }
    );
  }
}

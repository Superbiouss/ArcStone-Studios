/**
 * HTML Email template sent to the prospective client who submitted the contact form.
 */
export function getClientEmailTemplate(name: string): string {
  const brandYellow = "#DFE104";
  const brandBlack = "#09090B";
  const brandWhite = "#FAFAFA";
  const brandBorder = "#3F3F46";

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ArcStone Studios - Ambition Received</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: ${brandBlack}; font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: ${brandWhite}; -webkit-font-smoothing: antialiased;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: ${brandBlack}; min-height: 100vh; padding: 40px 20px;">
        <tr>
          <td align="center" valign="top">
            <!-- Main Box with brutalist borders -->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; border: 2px solid ${brandBorder}; background-color: ${brandBlack}; padding: 40px; text-align: left;">
              
              <!-- Header Brand Logo -->
              <tr>
                <td style="padding-bottom: 40px; border-bottom: 2px solid ${brandBorder};">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td>
                        <span style="font-size: 24px; font-weight: 900; letter-spacing: -1px; text-transform: uppercase; color: ${brandWhite};">
                          ARCSTONE STUDIOS
                        </span>
                      </td>
                      <td align="right">
                        <span style="font-size: 11px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; color: ${brandYellow}; padding: 4px 8px; border: 1px solid ${brandYellow};">
                          RECEIVED ✦
                        </span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Hero Heading -->
              <tr>
                <td style="padding: 40px 0 20px 0;">
                  <h1 style="margin: 0; font-size: 36px; font-weight: 800; line-height: 0.95; letter-spacing: -2px; text-transform: uppercase; color: ${brandWhite};">
                    YOUR AMBITION <br/>
                    HAS BEEN <span style="color: ${brandYellow};">UNLOCKED.</span>
                  </h1>
                </td>
              </tr>

              <!-- Body Copy -->
              <tr>
                <td style="padding-bottom: 30px;">
                  <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #A1A1AA; font-weight: 400;">
                    Hello ${name},
                  </p>
                  <p style="margin: 16px 0 0 0; font-size: 16px; line-height: 1.5; color: #A1A1AA; font-weight: 400;">
                    We don't settle for ordinary, and we're thrilled that you don't either. While traditional agencies take weeks to return generic pitches, our team is already reviewing your inquiry to build something unmistakable.
                  </p>
                  <p style="margin: 16px 0 0 0; font-size: 16px; line-height: 1.5; color: #A1A1AA; font-weight: 400;">
                    Expect to hear directly from our founders/creative directors within the next 24 hours. We are excited to collaborate.
                  </p>
                </td>
              </tr>

              <!-- Button/CTA -->
              <tr>
                <td style="padding-bottom: 40px; border-bottom: 2px solid ${brandBorder};">
                  <a href="https://arcstonestudio.in" target="_blank" style="display: inline-block; background-color: ${brandYellow}; color: ${brandBlack}; font-size: 14px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; text-decoration: none; padding: 16px 32px; border: none; cursor: pointer;">
                    EXPLORE THE STUDIO →
                  </a>
                </td>
              </tr>

              <!-- Footer info -->
              <tr>
                <td style="padding-top: 30px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td>
                        <p style="margin: 0; font-size: 11px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; color: #71717A;">
                          © ${new Date().getFullYear()} ARCSTONE STUDIOS
                        </p>
                        <p style="margin: 4px 0 0 0; font-size: 11px; color: #71717A;">
                          DIGITAL EXPERIENCES & IDENTITY SYSTEMS
                        </p>
                      </td>
                      <td align="right" valign="bottom">
                        <a href="https://www.instagram.com/arcstonestudios.in" style="font-size: 11px; font-weight: bold; color: ${brandYellow}; text-decoration: none; text-transform: uppercase; margin-right: 12px;">IG</a>
                        <a href="https://www.linkedin.com/company/arcstone-studios/" style="font-size: 11px; font-weight: bold; color: ${brandYellow}; text-decoration: none; text-transform: uppercase;">LN</a>
                      </td>
                    </tr>
                  </table>
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

/**
 * HTML Email template sent to the ArcStone Studio team when a contact form is submitted.
 */
export function getAdminEmailTemplate(name: string, email: string, message: string): string {
  const brandYellow = "#DFE104";
  const brandBlack = "#09090B";
  const brandWhite = "#FAFAFA";
  const brandBorder = "#3F3F46";

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>✦ NEW INQUIRY ALERT ✦</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: ${brandBlack}; font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: ${brandWhite}; -webkit-font-smoothing: antialiased;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: ${brandBlack}; min-height: 100vh; padding: 40px 20px;">
        <tr>
          <td align="center" valign="top">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; border: 2px solid ${brandBorder}; background-color: ${brandBlack}; padding: 40px; text-align: left;">
              
              <!-- Header -->
              <tr>
                <td style="padding-bottom: 30px; border-bottom: 2px solid ${brandBorder};">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td>
                        <span style="font-size: 18px; font-weight: 900; letter-spacing: -1px; text-transform: uppercase; color: ${brandWhite};">
                          ARCSTONE WORKSPACE
                        </span>
                      </td>
                      <td align="right">
                        <span style="font-size: 11px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; color: ${brandYellow};">
                          ✦ INCOMING LEADS
                        </span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Lead Header -->
              <tr>
                <td style="padding: 30px 0 20px 0;">
                  <h1 style="margin: 0; font-size: 28px; font-weight: 800; line-height: 1; letter-spacing: -1px; text-transform: uppercase; color: ${brandWhite};">
                    NEW AMBITION SUBMISSION
                  </h1>
                </td>
              </tr>

              <!-- Lead Details Grid -->
              <tr>
                <td style="padding-bottom: 30px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                    
                    <!-- Sender Name -->
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid ${brandBorder}; width: 120px; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #71717A;">
                        Sender Name
                      </td>
                      <td style="padding: 12px 0; border-bottom: 1px solid ${brandBorder}; font-size: 16px; font-weight: bold; color: ${brandWhite}; text-transform: uppercase;">
                        ${name}
                      </td>
                    </tr>

                    <!-- Sender Email -->
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid ${brandBorder}; width: 120px; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #71717A;">
                        Sender Email
                      </td>
                      <td style="padding: 12px 0; border-bottom: 1px solid ${brandBorder}; font-size: 16px; color: ${brandYellow}; font-weight: bold;">
                        <a href="mailto:${email}" style="color: ${brandYellow}; text-decoration: none;">${email}</a>
                      </td>
                    </tr>

                    <!-- Submission Time -->
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid ${brandBorder}; width: 120px; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #71717A;">
                        Submitted At
                      </td>
                      <td style="padding: 12px 0; border-bottom: 1px solid ${brandBorder}; font-size: 14px; color: #A1A1AA;">
                        ${new Date().toUTCString()}
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>

              <!-- Lead Message Box -->
              <tr>
                <td style="padding: 24px; border: 2px solid ${brandBorder}; background-color: #18181B; margin-bottom: 30px;">
                  <h3 style="margin: 0 0 12px 0; font-size: 12px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; color: #71717A;">
                    Ambition Details / Message:
                  </h3>
                  <p style="margin: 0; font-size: 15px; line-height: 1.5; color: ${brandWhite}; white-space: pre-wrap;">
                    ${message}
                  </p>
                </td>
              </tr>

              <!-- Actions -->
              <tr>
                <td style="padding-top: 30px; border-top: 2px solid ${brandBorder}; text-align: center;">
                  <a href="mailto:${email}?subject=RE: Your inquiry with ArcStone Studios" style="display: inline-block; background-color: ${brandWhite}; color: ${brandBlack}; font-size: 14px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; text-decoration: none; padding: 14px 28px;">
                    REPLY TO CLIENT →
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

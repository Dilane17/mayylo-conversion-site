import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { z } from "zod";

// Schema validation for lead data
const leadSchema = z.object({
  entreprise: z.string().min(1, "Nom entreprise requis"),
  responsable: z.string().min(1, "Nom responsable requis"),
  whatsapp: z.string().min(6, "WhatsApp invalide"),
  email: z.string().email("Email invalide").optional().or(z.literal("")),
  pays: z.string().min(1, "Pays requis"),
  taille: z.string().min(1, "Taille équipe requise"),
  besoin: z.string().min(1, "Besoin principal requis"),
  source: z.string().min(1, "Source acquisition requise"),
});

// Initialize Google Sheets API with proper authentication
const getGoogleSheetsClient = async () => {
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;

  console.log("[Google Sheets] Checking credentials...");
  console.log("[Google Sheets] Email exists:", !!serviceAccountEmail);
  console.log("[Google Sheets] Key exists:", !!privateKey);

  if (!serviceAccountEmail || !privateKey) {
    throw new Error("Missing Google service account credentials");
  }

  // Handle different key formats
  // The key might come with escaped \n or actual newlines
  if (privateKey.includes("\\n")) {
    privateKey = privateKey.replace(/\\n/g, "\n");
  }

  // Ensure proper header and footer
  if (!privateKey.includes("-----BEGIN PRIVATE KEY-----")) {
    privateKey = `-----BEGIN PRIVATE KEY-----\n${privateKey}\n-----END PRIVATE KEY-----\n`;
  }

  console.log("[Google Sheets] Key format check:");
  console.log(
    "  - Has BEGIN:",
    privateKey.includes("-----BEGIN PRIVATE KEY-----"),
  );
  console.log("  - Has END:", privateKey.includes("-----END PRIVATE KEY-----"));
  console.log("  - Key length:", privateKey.length);

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: serviceAccountEmail,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  // Get authenticated client
  const authClient = await auth.getClient();
  console.log("[Google Sheets] Authentication successful");

  return google.sheets({ version: "v4", auth: authClient });
};

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validationResult = leadSchema.safeParse(body);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const data = validationResult.data;

    // Get Google Sheets client
    const sheets = await getGoogleSheetsClient();
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!sheetId) {
      throw new Error("Missing GOOGLE_SHEET_ID environment variable");
    }

    // Prepare row data
    const now = new Date();
    const dateStr = now.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const rowData = [
      dateStr, // Date
      data.entreprise, // Nom entreprise
      data.responsable, // Nom responsable
      data.whatsapp, // WhatsApp
      data.email || "", // Email
      data.pays, // Pays
      data.taille, // Taille équipe
      data.besoin, // Besoin principal
      data.source, // Source acquisition
      "Nouveau", // Statut
    ];

    // Append row to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Leads!A:J", // Assumes sheet name is "Leads" and columns A-J
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowData],
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Lead enregistré avec succès",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error saving lead to Google Sheets:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Erreur lors de l'enregistrement du lead",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

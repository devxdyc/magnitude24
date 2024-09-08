"use serever";
import { google } from "googleapis";

// Helper function to validate environment variables
const validateEnv = () => {
  const requiredEnvVars = [
    "TYPE",
    "PROJECT_ID",
    "PRIVATE_KEY_ID",
    "PRIVATE_KEY",
    "CLIENT_EMAIL",
    "CLIENT_ID",
    "AUTH_URI",
    "TOKEN_URI",
    "AUTH_PROVIDER_X509_CERT_URL",
    "CLIENT_X509_CERT_URL",
    "UNIVERSE_DOMAIN",
  ];

  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar}`);
    }
  });
};

export const uploadToGooglDrive = async (file) => {
  try {
    // Ensure environment variables are properly set
    // validateEnv();/

    // Log file information for debugging
    if (!file || !file.name || !file.type) {
      throw new Error(
        "Invalid file object. Ensure file has 'name' and 'type'."
      );
    }
    console.log(`Uploading file: ${file.name} (${file.type}) to Google Drive`);

    // Set up Google authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: process.env.TYPE,
        project_id: process.env.PROJECT_ID,
        private_key_id: process.env.PRIVATE_KEY_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"), // Ensure newlines are correctly formatted
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        auth_uri: process.env.AUTH_URI,
        token_uri: process.env.TOKEN_URI,
        auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
        universe_domain: process.env.UNIVERSE_DOMAIN,
      },
      scopes: ["https://www.googleapis.com/auth/drive"],
    });

    const drive = google.drive({ version: "v3", auth });

    // File metadata and media body
    const fileMetadata = { name: file.name };
    const media = {
      mimeType: file.type,
      body: file,
    };

    // Upload file to Google Drive
    console.log("Sending request to Google Drive...");
    const response = await drive.files.create({
      resource: fileMetadata,
      media,
      fields: "id, webViewLink",
    });

    // Check if upload was successful
    if (response.status === 200) {
      console.log("File uploaded successfully:", response.data.webViewLink);
      return {
        viewLink: response.data.webViewLink,
        success: true,
      };
    } else {
      throw new Error(`Failed to upload file. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error(
      "Error uploading file to Google Drive:",
      error.message || error
    );
    return {
      viewLink: null,
      success: false,
      error: error.message || "Unknown error",
    };
  }
};

import { google } from "googleapis";
import { NextResponse } from "next/server";

import { Readable } from "node:stream";

export async function POST(request: Request) {
  console.log("request : ", request);
  const formData = await request.formData();
  console.log("formData : ", formData);
  const file: any = formData.get("file");
  console.log("file : ", file);
  const filename: any = formData.get("name");

  console.log("filename : ", filename);
  const fileBuffer = file.stream();
  console.log("fileBuffer : ", fileBuffer);

  console.log("authinticating");
  const auth = new google.auth.GoogleAuth({
    scopes: "https://www.googleapis.com/auth/drive.file",
    projectId: process.env.PROJECT_ID,
    credentials: {
      client_id: process.env.CLIENT_ID,
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n") ?? "",
    },
  });
  console.log("authinticated", auth);

  console.log("uploading to google drive");
  const uploadToGooglDrive = async () => {
    const fileMetadata = {
      name: filename,
      parents: ["12OaF0bQ0ehUFc1Lc8x_wThw3R7Mv7Qnm"],
    };
    console.log("fileMetadata : ", fileMetadata);

    const driveService = google.drive({ version: "v3", auth: auth });

    console.log("driveservice", driveService);
    const response = await driveService.files.create({
      requestBody: fileMetadata,
      media: {
        mimeType: "image/jpeg",
        body: Readable.from(fileBuffer),
      },
      fields: "id ,webViewLink",
    });
    console.log("res : ", response.data.id);
    return {
      docId: response.data.id,
      success: true,
      webViewLink: response.data.webViewLink,
    };
  };
  try {
    const res = await uploadToGooglDrive();
    console.log("res : ", res);
    return NextResponse.json(res);
  } catch (error) {
    console.log("error : ", error);
    return NextResponse.json({ success: false });
  }
}

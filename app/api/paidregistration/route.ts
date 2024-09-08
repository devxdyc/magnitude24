import { createClient } from "@/utils/supabase/server";
import { google } from "googleapis";
import { NextResponse } from "next/server";
import { Readable } from "node:stream";

// Initialize Supabase client
const supabase = createClient();

export async function POST(request: Request) {
  console.log("request : ", request);
  const formData = await request.formData();
  console.log("formData : ", formData);
  const file: any = formData.get("file");
  console.log("file : ", file);
  const filename: any = formData.get("name");
  const email: any = formData.get("email");
  const regnumber: any = formData.get("regnumber");
  const contactnumber: any = formData.get("contactnumber");
  const hostler: any = formData.get("hostler");
  const cource: any = formData.get("cource");
  const transactionId: any = formData.get("transactionId");
  const eventname: any = formData.get("eventname");
  const id: any = formData.get("id");

  console.log("filename : ", filename);
  const fileBuffer = file.stream();
  console.log("fileBuffer : ", fileBuffer);

  console.log("authenticating");
  const auth = new google.auth.GoogleAuth({
    scopes: "https://www.googleapis.com/auth/drive",
    projectId: process.env.PROJECT_ID,
    credentials: {
      client_id: process.env.CLIENT_ID,
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n") ?? "",
    },
  });
  console.log("authenticated");

  console.log("uploading to google drive");
  const uploadToGoogleDrive = async () => {
    const fileMetadata = {
      name: filename,
      parents: ["12OaF0bQ0ehUFc1Lc8x_wThw3R7Mv7Qnm"],
    };
    console.log("fileMetadata : ", fileMetadata);

    const driveService = google.drive({ version: "v3", auth: auth });

    const response = await driveService.files.create({
      requestBody: fileMetadata,
      media: {
        mimeType: "image/jpeg",
        body: Readable.from(fileBuffer),
      },
      fields: "webViewLink, id",
    });
    console.log("res : ", response.data.webViewLink);
    return {
      docId: response.data.id,
      webViewLink: response.data.webViewLink,
      success: true,
    };
  };

  try {
    const res = await uploadToGoogleDrive();
    console.log("res : ", res);

    // Insert data into Supabase
    const { data, error } = await supabase.from("PaidRegistrations").insert([
      {
        name: filename,
        email: email,
        registration_number: regnumber,
        contact_number: contactnumber,
        hostler: hostler,
        cource: cource,
        transaction_id: transactionId,
        eventname: eventname,
        eventid: id,
        file_id: res.docId,
        file_link: res.webViewLink,
      },
    ]);

    if (error) {
      console.log("Supabase insert error: ", error);
      return NextResponse.json({ success: false, error: error.message });
    }

    console.log("Supabase insert data: ", data);
    return NextResponse.json({ success: true, data: data });
  } catch (error) {
    console.log("error : ", error);
    return NextResponse.json({ success: false });
  }
}

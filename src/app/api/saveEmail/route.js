import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { email, name, message } = await req.json();

    // Path to JSON file in project root
    const filePath = path.join(process.cwd(), "emails.json");

    // Read existing data if file exists
    let data = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      data = JSON.parse(fileContent);
    }

    // Add new email
    data.push({ name, email, message });

    // Save updated data
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ message: "Email saved successfully!" });
  } catch (error) {
    console.error("Error saving email:", error);
    return NextResponse.json({ message: "Error saving email", error }, { status: 500 });
  }
}
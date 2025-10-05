import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import * as XLSX from "xlsx";

export const runtime = "nodejs";

export async function GET() {
  try {
    const jsonFilePath = path.join(process.cwd(), "emails.json");

    if (!fs.existsSync(jsonFilePath)) {
      return NextResponse.json({ message: "No emails found" }, { status: 404 });
    }

    // Read JSON data
    const fileContent = fs.readFileSync(jsonFilePath, "utf-8");
    const data = JSON.parse(fileContent);

    // Convert JSON to worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Emails");

    // Write workbook to a buffer
    const excelBuffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    // Return the buffer as a downloadable file
    return new Response(excelBuffer, {
      status: 200,
      headers: {
        "Content-Disposition": "attachment; filename=emails.xlsx",
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });
  } catch (error) {
    console.error("Error exporting Excel:", error);
    return NextResponse.json({ message: "Error exporting Excel", error }, { status: 500 });
  }
}
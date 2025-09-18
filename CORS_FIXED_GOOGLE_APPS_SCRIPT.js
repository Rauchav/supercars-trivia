// CORS FIXED Google Apps Script for Supercars Trivia with Region field
// This version includes CORS headers to allow requests from your web app

function doPost(e) {
  try {
    console.log("POST request received");
    console.log("Request object:", e);

    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();

    // Check if e and postData exist
    if (!e || !e.postData || !e.postData.contents) {
      console.error("Invalid request data:", e);
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Invalid request data" })
      )
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders({
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        });
    }

    // Log the raw post data
    console.log("Raw post data:", e.postData.contents);

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Log the parsed data
    console.log("Parsed data:", data);
    console.log("Region value:", data.region);
    console.log("Region type:", typeof data.region);
    console.log(
      "Region value length:",
      data.region ? data.region.length : "null/undefined"
    );

    // Prepare the row data with explicit string conversion
    const timestamp = new Date();
    const regionValue = data.region ? String(data.region) : "";

    console.log("Converted region value:", regionValue);
    console.log("Converted region type:", typeof regionValue);

    const rowData = [
      timestamp,
      data.firstName || "",
      data.lastName || "",
      data.phone || "",
      data.email || "",
      regionValue,
      data.score || 0,
    ];

    console.log("Final row data:", rowData);

    // Append the data to the sheet
    const newRowIndex = sheet.getLastRow() + 1;
    sheet.appendRow(rowData);

    // Get the region cell and explicitly format it as text
    const regionCell = sheet.getRange(newRowIndex, 6); // Column F (6th column)
    regionCell.setValue("'" + regionValue); // Add single quote prefix
    regionCell.setNumberFormat("@"); // Set as text format

    console.log("Data appended successfully to row:", newRowIndex);

    // Return success response with CORS headers
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        debug: {
          receivedRegion: data.region,
          convertedRegion: regionValue,
          rowIndex: newRowIndex,
        },
      })
    )
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      });
  } catch (error) {
    console.error("Error in doPost:", error);
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    )
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      });
  }
}

function doGet(e) {
  console.log("GET request received:", e);
  return ContentService.createTextOutput(
    JSON.stringify({
      message: "This endpoint only accepts POST requests",
      method: "GET",
      parameters: e.parameter,
    })
  )
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
}

// Handle OPTIONS requests for CORS preflight
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
}

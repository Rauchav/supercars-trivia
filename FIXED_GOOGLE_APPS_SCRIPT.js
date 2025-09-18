// Fixed Google Apps Script for Supercars Trivia with Region field
// Copy and paste this code into your Google Apps Script editor

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Debug: Log the received data to see what's being sent
    console.log("Received data:", data);
    console.log("Region value:", data.region);
    console.log("Region type:", typeof data.region);

    // Prepare the row data with explicit string conversion for region
    const timestamp = new Date();
    const regionValue = data.region ? String(data.region) : "";

    const rowData = [
      timestamp,
      data.firstName || "",
      data.lastName || "",
      data.phone || "",
      data.email || "",
      regionValue,
      data.score || 0,
    ];

    // Debug: Log the row data before appending
    console.log("Row data to append:", rowData);

    // Append the data to the sheet
    sheet.appendRow(rowData);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    "This endpoint only accepts POST requests"
  ).setMimeType(ContentService.MimeType.TEXT);
}

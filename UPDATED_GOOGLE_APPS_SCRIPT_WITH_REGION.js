// Updated Google Apps Script for Supercars Trivia with Region field
// Copy and paste this code into your Google Apps Script editor

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Prepare the row data with the new Region column
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.firstName || "",
      data.lastName || "",
      data.phone || "",
      data.email || "",
      data.region || "",
      data.score || 0,
    ];

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

// Ultimate Fix Google Apps Script for Supercars Trivia with Region field
// Copy and paste this code into your Google Apps Script editor

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();

    // Ensure the Region column (F) is formatted as text for the entire column
    const regionColumn = sheet.getRange(1, 6, sheet.getLastRow() + 1, 1);
    regionColumn.setNumberFormat("@");

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Prepare the row data
    const timestamp = new Date();
    const regionValue = data.region || "";

    const rowData = [
      timestamp,
      data.firstName || "",
      data.lastName || "",
      data.phone || "",
      data.email || "",
      regionValue,
      data.score || 0,
    ];

    // Append the data to the sheet
    sheet.appendRow(rowData);

    // Get the last row that was just added
    const lastRow = sheet.getLastRow();

    // Force the region cell to be text and set the value again
    const regionCell = sheet.getRange(lastRow, 6);
    regionCell.setNumberFormat("@");
    regionCell.setValue("'" + regionValue); // Add single quote to force text format

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

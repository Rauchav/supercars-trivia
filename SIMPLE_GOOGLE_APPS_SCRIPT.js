// SIMPLE Google Apps Script for Supercars Trivia with Region field
// This version handles form submissions properly

function doPost(e) {
  try {
    console.log("POST request received");
    console.log("Request object:", e);
    console.log("Parameters:", e.parameter);

    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();

    // Check if e exists
    if (!e) {
      console.error("Invalid request data:", e);
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Invalid request data" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Use parameters directly (form data comes through e.parameter)
    const data = {
      firstName: e.parameter?.firstName || "",
      lastName: e.parameter?.lastName || "",
      phone: e.parameter?.phone || "",
      email: e.parameter?.email || "",
      region: e.parameter?.region || "",
      score: parseInt(e.parameter?.score) || 0,
    };

    // Log the parsed data
    console.log("Parsed data:", data);
    console.log("Region value:", data.region);
    console.log("Region type:", typeof data.region);

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

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        debug: {
          receivedRegion: data.region,
          convertedRegion: regionValue,
          rowIndex: newRowIndex,
        },
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error in doPost:", error);
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    console.log("GET request received:", e);
    console.log("GET parameters:", e.parameter);

    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();

    // Check if e exists
    if (!e) {
      console.error("Invalid request data:", e);
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Invalid request data" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Use parameters directly (form data comes through e.parameter)
    const data = {
      firstName: e.parameter?.firstName || "",
      lastName: e.parameter?.lastName || "",
      phone: e.parameter?.phone || "",
      email: e.parameter?.email || "",
      region: e.parameter?.region || "",
      score: parseInt(e.parameter?.score) || 0,
    };

    // Log the parsed data
    console.log("Parsed data:", data);
    console.log("Region value:", data.region);
    console.log("Region type:", typeof data.region);

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

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        debug: {
          receivedRegion: data.region,
          convertedRegion: regionValue,
          rowIndex: newRowIndex,
        },
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error in doGet:", error);
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

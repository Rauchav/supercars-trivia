# Google Sheets Integration Setup Guide

This guide will help you set up data capture from your Supercars Trivia app to Google Sheets.

## Step 1: Create Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new Google Sheet
3. Name it "Supercars Trivia Data" (or any name you prefer)
4. Set up the following headers in row 1:
   - Column A: `Timestamp`
   - Column B: `FirstName`
   - Column C: `LastName`
   - Column D: `Phone`
   - Column E: `Email`
   - Column F: `Score`
   - Column G: `TotalQuestions`
   - Column H: `Answers`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to `Extensions` → `Apps Script`
2. Delete the default code and replace it with this:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Prepare the row data
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.firstName || "",
      data.lastName || "",
      data.phone || "",
      data.email || "",
      data.score || 0,
      data.totalQuestions || 0,
      JSON.stringify(data.answers || []),
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
```

3. Save the script (Ctrl+S or Cmd+S)
4. Name it "Supercars Trivia Data Handler"

## Step 3: Deploy the Script

1. Click the `Deploy` button
2. Select `New deployment`
3. Click the gear icon ⚙️ and select `Web app`
4. Set the following options:
   - **Description**: "Supercars Trivia Data Capture"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
5. Click `Deploy`
6. **IMPORTANT**: Copy the web app URL that appears - you'll need this for the next step

## Step 4: Configure Your React App

1. Open the file `src/config/googleSheets.js`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the URL you copied in Step 3
3. Save the file

Example:

```javascript
export const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
```

## Step 5: Test the Integration

1. Build and deploy your app to GitHub Pages
2. Open your deployed app
3. Fill out the data capture form
4. Complete the trivia
5. Check your Google Sheet - you should see the data appear

## Troubleshooting

### Data not appearing in Google Sheet

- Check that the Google Apps Script URL is correct
- Verify that the script is deployed with "Anyone" access
- Check the browser console for any error messages

### CORS errors

- The app uses `mode: 'no-cors'` to avoid CORS issues with Google Apps Script
- This is normal and expected behavior

### Script execution errors

- Check the Google Apps Script execution log in the Apps Script editor
- Make sure your Google Sheet has the correct headers

## Data Structure

The app sends two types of data:

### Initial Form Data

```javascript
{
  firstName: "John",
  lastName: "Doe",
  phone: "123-456-7890",
  email: "john@example.com"
}
```

### Quiz Results Data

```javascript
{
  firstName: "John",
  lastName: "Doe",
  phone: "123-456-7890",
  email: "john@example.com",
  score: 2,
  totalQuestions: 3,
  answers: [
    {
      questionId: "q1",
      selectedAnswer: "Ferrari",
      isCorrect: true,
      feedback: "Correct!"
    }
    // ... more answers
  ]
}
```

## Security Notes

- The Google Apps Script is set to "Anyone" access, which means anyone with the URL can send data
- This is acceptable for a trivia app, but be aware of potential spam
- Consider adding basic validation in the Apps Script if needed
- The data is stored in your personal Google account

## Alternative Options

If you prefer not to use Google Sheets, you can also:

1. **Formspree**: Simple form handling service
2. **Netlify Forms**: If you migrate to Netlify hosting
3. **Custom backend**: Deploy a simple Node.js backend
4. **Email**: Send form data via email using EmailJS

## Support

If you encounter any issues, check:

1. Browser console for JavaScript errors
2. Google Apps Script execution log
3. Network tab in browser dev tools for failed requests

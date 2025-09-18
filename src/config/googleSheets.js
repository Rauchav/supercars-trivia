// Configuration for Google Sheets integration
// Replace this URL with your actual Google Apps Script web app URL
export const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwSmYIjcfDmhz1n2f6asIld--qIhPOHIo90-lIuZdTlld_iaaXDCn5I5fGIFP7ukxc/exec";

// You can also add other configuration options here
export const CONFIG = {
  // Enable/disable Google Sheets integration
  ENABLE_GOOGLE_SHEETS: true,

  // Retry configuration
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000, // milliseconds
};

import * as XLSX from "xlsx";

export async function launchUrl(url: string) {
  await browser.maximizeWindow();
  await browser.url(url);
}

/**
  * Reads an Excel file and returns array of objects
  * Each row = one object with headers as keys
  * @param filePath Path to the Excel file
  * @param sheetName Sheet to read (example: "Laptops")
  * @returns Array of objects [{Name, Rating, Offer, Price, Link}, ...]
  */
export const readExcelAsJson = (filePath: string, sheetName: string): any[] => {
  const sheet = XLSX.readFile(filePath).Sheets[sheetName];
  return sheet ? XLSX.utils.sheet_to_json(sheet) : [];
};

/**
 * Get a specific row (object) by index
 * @param filePath Path to Excel file
 * @param sheetName Sheet name
 * @param rowIndex 0 = first row, 1 = second row...
 */
export async function getRowFromExcel(filePath: string, sheetName: string, rowIndex: number) {
  const rows = readExcelAsJson(filePath, sheetName);
  return rows[rowIndex];
}
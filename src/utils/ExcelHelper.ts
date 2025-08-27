import * as XLSX from "xlsx";

 class ExcelHelper {
    /**
   * Reads an Excel file and returns array of objects
   * Each row = one object with headers as keys
   * @param filePath Path to the Excel file
   * @param sheetName Sheet to read (example: "Laptops")
   * @returns Array of objects [{Name, Rating, Offer, Price, Link}, ...]
   */
    readExcelAsJson(filePath: string, sheetName: string): any[] {
        const workbook = XLSX.readFile(filePath);
        const sheet = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(sheet);
    }

    /**
     * Get a specific row (object) by index
     * @param filePath Path to Excel file
     * @param sheetName Sheet name
     * @param rowIndex 0 = first row, 1 = second row...
     */
    getRow(filePath: string, sheetName: string, rowIndex: number): any {
        const rows = this.readExcelAsJson(filePath, sheetName);
        return rows[rowIndex];
    }

}

export default new ExcelHelper();
import fs from "fs";
import { parse } from "csv-parse/sync";

export function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  return parse(content, {
    columns: true,
    skip_empty_lines: true
  });
}

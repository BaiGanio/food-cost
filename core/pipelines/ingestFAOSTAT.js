import { fetchFAOSTAT } from "../ingestion/apiClient.js";
import { downloadBulk } from "../ingestion/bulkDownloader.js";
import { parseCSV } from "../ingestion/parser.js";
import { normalizeFAOSTAT } from "../ingestion/normalizer.js";
import sources from "../sources/sources.json" assert { type: "json" };

export async function ingestFAOSTAT(domain, mode = "api") {
  if (!sources.FAOSTAT.domains[domain]) {
    throw new Error(`Unknown FAOSTAT domain: ${domain}`);
  }

  if (mode === "api") {
    const data = await fetchFAOSTAT(domain, { page: 1, limit: 5000 });
    return normalizeFAOSTAT(data);
  }

  if (mode === "bulk") {
    const zipPath = await downloadBulk(domain);
    // unzip → parse → normalize (you can add unzip logic here)
    const rows = parseCSV(zipPath.replace(".zip", ".csv"));
    return normalizeFAOSTAT(rows);
  }

  throw new Error("Mode must be 'api' or 'bulk'");
}

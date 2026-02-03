import sources from "../sources/sources.json" assert { type: "json" };
import { ingestFAOSTAT } from "./ingestFAOSTAT.js";

async function run() {
  for (const domain of Object.keys(sources.FAOSTAT.domains)) {
    console.log(`Ingesting ${domain}...`);
    const data = await ingestFAOSTAT(domain, "bulk");
    console.log(`→ ${domain}: ${data.length} rows`);
  }
}

run();

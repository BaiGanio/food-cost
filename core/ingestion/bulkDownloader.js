import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import sources from "../sources/sources.json" assert { type: "json" };

const BASE = sources.FAOSTAT.baseBulk;

export async function downloadBulk(domain, outDir = "./data/raw") {
  const url = `${BASE}/${domain}.zip`;
  const filePath = path.join(outDir, `${domain}.zip`);

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Bulk download failed: ${res.status}`);

  const buffer = await res.arrayBuffer();
  fs.writeFileSync(filePath, Buffer.from(buffer));

  return filePath;
}

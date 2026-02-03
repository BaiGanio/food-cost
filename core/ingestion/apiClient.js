import fetch from "node-fetch";
import sources from "../sources/sources.json" assert { type: "json" };

const BASE = sources.FAOSTAT.baseApi;

export async function fetchFAOSTAT(domain, params = {}) {
  const query = new URLSearchParams(params).toString();
  const url = `${BASE}/${domain}?${query}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`FAOSTAT API error: ${res.status}`);

  const json = await res.json();
  return json.data;
}

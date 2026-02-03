

export function normalizeFAOSTAT(rows) {
  return rows.map(row => ({
    country: row.Area,
    item: row.Item,
    element: row.Element,
    year: Number(row.Year),
    value: Number(row.Value),
    unit: row.Unit
  }));
}


Module	Purpose
sources.json	Central registry of FAOSTAT domains + URLs
faostat.js	Helpers for building URLs, listing domains
apiClient.js	Fetch small slices of data from FAOSTAT API
bulkDownloader.js	Download full CSV datasets
parser.js	Convert CSV → JSON
normalizer.js	Standardize fields, units, metadata
ingestFAOSTAT.js	Main pipeline for FAOSTAT ingestion
updateAll.js	Cron‑friendly script to refresh everything
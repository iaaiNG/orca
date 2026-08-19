export const MAX_BROWSER_HISTORY_ENTRIES = 100
export const normalizeBrowserHistoryEntries = (entries: unknown) =>
  Array.isArray(entries) ? entries : []
export const normalizeBrowserHistoryUrl = (url: string) => url

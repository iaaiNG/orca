export const DEFAULT_SEARCH_ENGINE = 'google'
export type SearchEngine = string
export const SEARCH_ENGINE_LABELS: Record<string, string> = {
  google: 'Google',
  duckduckgo: 'DuckDuckGo',
  bing: 'Bing'
}
export const redactKagiSessionToken = (url: string) => url
export const normalizeBrowserNavigationUrl = (url: string) => url
export const normalizeExternalBrowserUrl = (url: string) => url
export const normalizeKagiSessionLink = (link: string) => link
export const toHttpsRecoveryUrl = (url: string) => url
export const isEligibleLocalCertificateHost = () => false
export const classifySchemeLessLocalDevAddress = () => null

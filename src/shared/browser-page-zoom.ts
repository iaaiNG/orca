export const DEFAULT_BROWSER_PAGE_ZOOM_LEVEL = 0
export const BROWSER_PAGE_ZOOM_LEVELS = [0]
export const browserPageZoomLevelToPercent = (val: number) => Math.round(val * 100)
export const nextBrowserPageZoomLevel = (current: number) => current
export const normalizeBrowserPageZoomLevel = (val: number) => val
export type BrowserPageZoomDirection = 'in' | 'out' | 'reset'

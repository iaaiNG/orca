import type { TuiAgent } from '../../../shared/tui-agent'

// Why: these agents have no hand-authored SVG glyph, so previously their icons
// loaded live from Google's favicon service. That service is unreachable in some
// regions (e.g. mainland China) and offline, leaving broken images across the
// agent settings page, tab title bar, and status bar (#8451). Bundle the favicon
// PNGs at build time so the icons render without any network dependency.
// The PNGs live in src/shared/agent-icons so mobile (Metro) can bundle the same
// files; see mobile/src/components/mobile-agent-icon-assets.ts.
export const AGENT_FAVICON_ASSETS: Partial<Record<TuiAgent, string>> = {}

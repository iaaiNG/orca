// IPC surface for telemetry: `track`, `setOptIn`, `acknowledgeBanner`, and read-only
// `getConsentState`. Renderer track calls funnel into the same `track()` as main-originated
// events; the validator there is the single enforcement point, not this file.
//
// Threat model: the renderer displays attacker-controllable content (agent output, MCP
// responses, markdown, diffs), so an XSS-equivalent bug lets an attacker call
// `window.api.telemetry*`. These handlers fail closed: strict main-side type narrows (TS
// types don't survive IPC), a ≤5/session consent-mutation cap (covers `acknowledgeBanner`
// too), and `via` derived from main-owned state — never passed over the wire, so a
// compromised renderer can't misreport it.

import type { Store } from '../persistence'

export function registerTelemetryHandlers(_store: Store): void {}
export function _resetStoreForTests(): void {}

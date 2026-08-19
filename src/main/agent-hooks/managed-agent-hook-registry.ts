import type { AgentHookInstallStatus } from '../../shared/agent-hook-types'
import type { HookInstallAgent } from '../../shared/telemetry-events'
import { antigravityHookService } from '../antigravity/hook-service'
import { claudeHookService } from '../claude/hook-service'
import { codexHookService } from '../codex/hook-service'
import { openClaudeHookService } from '../openclaude/hook-service'

export type ManagedAgentHookInstaller = readonly [HookInstallAgent, () => AgentHookInstallStatus]
export type ManagedAgentHookScriptRefresher = readonly [HookInstallAgent, () => Promise<void>]
export type ManagedAgentHookRemover = readonly [HookInstallAgent, () => AgentHookInstallStatus]
export type ManagedAgentHookStatusReader = readonly [HookInstallAgent, () => AgentHookInstallStatus]

export const MANAGED_AGENT_HOOK_INSTALLERS: readonly ManagedAgentHookInstaller[] = [
  ['claude', () => claudeHookService.install()],
  ['openclaude', () => openClaudeHookService.install()],
  ['codex', () => codexHookService.install()],
  ['antigravity', () => antigravityHookService.install()]
]

export const MANAGED_AGENT_HOOK_SCRIPT_REFRESHERS: readonly ManagedAgentHookScriptRefresher[] = [
  ['claude', () => claudeHookService.refreshManagedScripts()],
  ['openclaude', () => openClaudeHookService.refreshManagedScripts()],
  ['codex', () => codexHookService.refreshManagedScripts()],
  ['antigravity', () => antigravityHookService.refreshManagedScripts()]
]

export const MANAGED_AGENT_HOOK_REMOVERS: readonly ManagedAgentHookRemover[] = [
  ['claude', () => claudeHookService.remove()],
  ['openclaude', () => openClaudeHookService.remove()],
  ['codex', () => codexHookService.remove()],
  ['antigravity', () => antigravityHookService.remove()]
]

export const MANAGED_AGENT_HOOK_STATUS_READERS: readonly ManagedAgentHookStatusReader[] = [
  ['claude', () => claudeHookService.getStatus()],
  ['openclaude', () => openClaudeHookService.getStatus()],
  ['codex', () => codexHookService.getStatus()],
  ['antigravity', () => antigravityHookService.getStatus()]
]

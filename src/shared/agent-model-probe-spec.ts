import { getCommitMessageAgentSpec, type CommitMessageAgentSpec } from './commit-message-agent-spec'
import type { TuiAgent } from './tui-agent'
export type AgentModelProbeSpec = Omit<CommitMessageAgentSpec, 'promptDelivery' | 'buildArgs'>
const MODEL_DISCOVERY_ONLY_SPECS: Partial<Record<TuiAgent, AgentModelProbeSpec>> = {}

export function getAgentModelProbeSpec(agentId: TuiAgent): AgentModelProbeSpec | undefined {
  return getCommitMessageAgentSpec(agentId) ?? MODEL_DISCOVERY_ONLY_SPECS[agentId]
}

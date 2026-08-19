export const buildSetupScriptPromptTelemetry = () => ({
  mode: 'none',
  provider: 'none',
  file_count_bucket: '0',
  unsupported_field_count_bucket: '0',
  has_shared_hooks: false
})
export const buildSetupScriptPromptActionTelemetry = (args: unknown) => ({ ...args })

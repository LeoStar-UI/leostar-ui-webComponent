import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  'internal/eslint-config',
  'packages/components',
  'packages/utils'
])

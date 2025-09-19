import { env, validateEnv } from './lib/env'

export function register() {
  console.log('validating env...')
  validateEnv()
}

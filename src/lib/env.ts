import { z } from 'zod'

export const envSchema = z.object({
  backend: z.object({
    URL: z.string(),
  }),
})

export const env = {
  backend: {
    URL: 'http://localhost:3000', // TODO: replace with actual env variable
  }
}

export function validateEnv() {
  return envSchema.parse(env)
}
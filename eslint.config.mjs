import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      // Disable unescaped entities rule (fixes apostrophe errors)
      'react/no-unescaped-entities': 'off',
      // Disable unused vars warnings
      '@typescript-eslint/no-unused-vars': 'off',
      // Disable img element warning
      '@next/next/no-img-element': 'off',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])
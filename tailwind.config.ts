import type { Config } from 'tailwindcss'
import { join } from 'path'
import { skeleton } from '@skeletonlabs/tw-plugin'
import { noLimitsTheme } from './nolimits'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    // This includes all Skeleton UI components
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    skeleton({
      themes: {
        custom: [
          noLimitsTheme
        ]
      }
    })
  ]
}

export default config
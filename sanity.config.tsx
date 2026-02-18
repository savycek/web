'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {buildLegacyTheme, defineConfig} from 'sanity'
import { NavbarProps } from 'sanity'
import { Box, Card, Flex, Text, Stack } from '@sanity/ui' // Sanity UI komponenty
import {structureTool} from 'sanity/structure'
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from '@/sanity/env'
import {schema} from '@/sanity/schemaTypes'
import {structure} from '@/sanity/structure'
import {documentInternationalization} from "@sanity/document-internationalization";

function CustomLogo() {
  return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="/Icons/LogoWhite.png" style={{ height: '25px' }} />
      </div>
  )
}
function CustomNavbar(props: NavbarProps) {
  return (
      <Stack>
        <Card tone="transparent" style={{ position: 'relative', zIndex: 10 }}>
          {props.renderDefault(props)}
        </Card>

        <Card padding={2} style={{ borderTop: '1px solid #222' }}>
          <Flex align="center" justify="space-between" paddingX={2}>
            <Flex align="center" gap={2}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 10px #00ff88' }}></div>
              <Text size={1} style={{ color: '#888', letterSpacing: '0.05em' }}>Vše je aktivní</Text>
            </Flex>
            <Flex gap={3} align="center">
              <a href="mailto:help@savycek.eu" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Flex gap={1} align="center" direction="row">
                  <Text size={1} style={{ opacity: 0.7 }}>Ztraceni?</Text>
                  <Text size={1} weight="medium" style={{ opacity: 0.7 }}>help@savycek.eu</Text>
                </Flex>
              </a>
            </Flex>
          </Flex>
        </Card>
      </Stack>
  )
}
const props = {
  '--my-white': '#fff',
  '--my-brand': '#00ff88',
  '--my-black': '#0d0d0d',
  '--my-gray': '#666',
  '--my-focus': '#00ff88',
}
export const myTheme = buildLegacyTheme({
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--brand-primary': props['--my-brand'],

  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-brand'],
  '--default-button-success-color': '#43d12e',
  '--default-button-warning-color': '#f59e0b',
  '--default-button-danger-color': '#f43f5e',

  '--state-info-color': props['--my-brand'],
  '--state-success-color': '#43d12e',
  '--state-warning-color': '#f59e0b',
  '--state-danger-color': '#f43f5e',

  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-focus'],
})

const isDev = process.env.NODE_ENV === 'development'
export default defineConfig({
  basePath: '/studio',
  name: 'savycek-studio',
  title: 'Studio',
  projectId,
  dataset,
  theme: myTheme,
  tasks: { enabled: false },
  icon: CustomLogo,

  studio: {
    components: {
      logo: CustomLogo,
      navbar: CustomNavbar,
    }
  },

  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({
      title: 'Správa obsahu',
      structure
    }),

    documentInternationalization({
      supportedLanguages: [
        { id: 'cs', title: 'Čeština' },
        { id: 'en', title: 'English' }
      ],
      schemaTypes: ['project'],
    }),

    visionTool({
      defaultApiVersion: apiVersion,
      title: 'Terminál',
    }),
  ].filter(Boolean),
})

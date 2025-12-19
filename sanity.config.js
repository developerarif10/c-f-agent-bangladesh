'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import shipment from './schemas/shipment'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xx3zngt5'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: 'CNF Agent BD',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [shipment],
  },
})

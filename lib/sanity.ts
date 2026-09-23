import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'tbk2ji4l'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false during build to guarantee fresh dynamic queries
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)
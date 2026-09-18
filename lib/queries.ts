import {defineQuery} from 'next-sanity'
export const settingsQuery=defineQuery(`*[_type=="siteSettings"][0]`)
export const featuredQuery=defineQuery(`*[_type=="property" && featured==true] | order(_createdAt desc)[0...8]{...,"slug":slug.current}`)
export const propertiesQuery=defineQuery(`*[_type=="property"] | order(_createdAt desc){...,"slug":slug.current}`)
export const propertyQuery=defineQuery(`*[_type=="property" && slug.current==$slug][0]`)
export const reviewsQuery=defineQuery(`*[_type=="testimonial"] | order(date desc)[0...12]`)
export const teamQuery=defineQuery(`*[_type=="teamMember"] | order(name asc)`)

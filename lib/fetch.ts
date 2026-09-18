import {client} from './sanity'
export async function sanityFetch<T>(query:string,params:Record<string,unknown>={}){return client.fetch<T>(query,params,{next:{revalidate:60,tags:['sanity']}})}

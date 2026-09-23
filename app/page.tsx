import Image from 'next/image';import Link from 'next/link';import {ArrowRight,MapPin} from 'lucide-react';import {sanityFetch} from '@/lib/fetch';import {featuredQuery,reviewsQuery} from '@/lib/queries';import type {Property,Review} from '@/types';import PropertyGrid from '@/components/property-grid';import SearchBar from '@/components/search-bar';import Reviews from '@/components/reviews';import {SectionTitle,Button} from '@/components/ui';import Reveal from '@/components/reveal'
export default async function Home(){const [featured,reviews]=await Promise.all([sanityFetch<Property[]>(featuredQuery),sanityFetch<Review[]>(reviewsQuery)]);return <main><section className="relative overflow-hidden bg-navy">
  <div className="container-shell grid min-h-[500px] items-end gap-10 py-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">

    <div className="relative z-10 text-white">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-slate-200">
        <MapPin size={14} />
        New York & beyond
      </div>

      <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.02] md:text-7xl">
        Your next chapter starts <span className="text-gold">here.</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
        Confident guidance for buying, selling, renting and investing across New York City and the surrounding region.
      </p>

      <div className="mt-8 max-w-3xl">
        <SearchBar />
      </div>
    </div>

    <div className="relative hidden h-[430px] lg:block">
      <div className="absolute inset-0 overflow-hidden rounded-[32px]">
        <Image
          src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=85"
          alt="New York home exterior"
          fill
          priority
          className="object-cover"
          sizes="50vw"
        />
      </div>
    </div>

  </div>
</section>

<section className="container-shell py-20"><SectionTitle eyebrow="Featured properties" title="Places worth coming home to." copy="A hand-picked selection of current opportunities. Listings and availability are managed by the Land Quest Home team in Sanity Studio."/><Reveal className="mt-10"><PropertyGrid properties={featured}/></Reveal><div className="mt-8"><Button href="/properties">View all properties <ArrowRight className="ml-2" size={16}/></Button></div></section><section className="bg-mist py-20"><div className="container-shell grid gap-10 lg:grid-cols-2"><div><SectionTitle eyebrow="New York market" title="From the five boroughs to the Hudson Valley." copy="Search by property type, neighborhood, lifestyle and investment goal. Our information architecture is built around how New York buyers actually shop."/><div className="mt-8 grid grid-cols-2 gap-3 text-sm font-semibold">{['Manhattan','Brooklyn','Queens','The Bronx','Staten Island','Long Island','Westchester','Hudson Valley'].map(x=><Link className="rounded-xl border border-slate-200 bg-white p-4 hover:border-navy" href={`/properties?q=${encodeURIComponent(x)}`} key={x}>{x}<ArrowRight size={15} className="float-right"/></Link>)}</div></div><div className="rounded-3xl bg-navy p-8 text-white"><div className="text-gold">SELL WITH CONFIDENCE</div><h3 className="mt-3 font-serif text-3xl">Thinking about selling?</h3><p className="mt-4 leading-7 text-slate-300">Get a practical pricing and marketing conversation tailored to your property and neighborhood.</p><div className="mt-7"><Button href="/sell" variant="light">Explore selling</Button></div></div></div></section><section className="container-shell py-20"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionTitle eyebrow="Client stories" title="Good deals. Great experiences."/><Link href="/reviews" className="text-sm font-bold text-navy">Read all reviews →</Link></div><Reveal className="mt-10"><Reviews reviews={reviews}/></Reveal></section></main>}

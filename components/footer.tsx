import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import { sanityFetch } from '@/lib/fetch'
import { settingsQuery } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'

export default async function Footer() {
  const s = await sanityFetch<any>(settingsQuery)

  return (
    <footer className="bg-ink text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-4">

        {/* Brand */}
        <div>
          {s?.logo ? (
            <Image
              src={urlFor(s.logo).width(240).url()}
              alt={s?.title || 'Land Quest Home'}
              width={240}
              height={80}
              className="h-auto w-auto max-w-[240px]"
            />
          ) : (
            <div className="font-serif text-xl font-bold">
              LAND QUEST <span className="text-gold">HOME</span>
            </div>
          )}

          <p className="mt-4 text-sm leading-6 text-slate-300">
            {s?.tagline || 'New York real estate, thoughtfully done.'}
          </p>

          {/* Social Media */}
          <div className="mt-5 flex gap-3">

            {s?.facebook && (
              <a
                aria-label="Facebook"
                href={s.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-gold hover:text-gold"
              >
                <Facebook size={18} />
              </a>
            )}

            {s?.instagram && (
              <a
                aria-label="Instagram"
                href={s.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-gold hover:text-gold"
              >
                <Instagram size={18} />
              </a>
            )}

            {s?.youtube && (
              <a
                aria-label="YouTube"
                href={s.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-gold hover:text-gold"
              >
                <Youtube size={18} />
              </a>
            )}

          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold">Explore</h3>

          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            {[
              ['Buy', '/buy'],
              ['Rent', '/rent'],
              ['Foreclosures', '/foreclosure'],
              ['Sell', '/sell'],
            ].map((x) => (
              <Link key={x[1]} href={x[1]}>
                {x[0]}
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold">Company</h3>

          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            <Link href="/about">About</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/calculators">Calculators</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold">Contact</h3>

          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p>{s?.address || 'New York, NY'}</p>
            <p>{s?.phone || '(212) 555-0123'}</p>
            <p>{s?.email || 'hello@landquesthome.com'}</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col justify-between gap-2 py-5 text-xs text-slate-400 md:flex-row">
          <span>
            © {new Date().getFullYear()} Land Quest Home. All rights reserved.
          </span>

          <span>Equal Housing Opportunity</span>
        </div>
      </div>
    </footer>
  )
}
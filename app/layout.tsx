import type { Metadata } from 'next'
import '@/app/globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: {
    default: 'Land Quest Home | New York Real Estate',
    template: '%s | Land Quest Home',
  },
  description:
    'Homes, apartments, condos, townhouses, multi-family and investment properties across New York.',
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
export const metadata = {
  title: 'Sanity Studio',
  description: 'Sanity CMS',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
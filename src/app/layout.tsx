import './globals.css'
import { inter } from '@/lib/fonts'

export const metadata = {
  title: 'Tally Down',
  description: 'Tally tool to try to reduce your smoking toke count.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

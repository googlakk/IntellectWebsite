import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intellect',
  description: 'Intellect website',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}

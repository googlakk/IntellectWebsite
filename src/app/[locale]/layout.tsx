import '../globals.css'

import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'
import NextTopLoader from 'nextjs-toploader'

import Header from '@/components/Layout/Header'
import { Locale, routing } from '@/i18n/routing'
import { QueryProvider } from '@/providers/QueryProvider'

import { AuthDialogProvider } from '../context/AuthDialogContext'

const Footer = dynamic(() => import('@/components/Layout/Footer'))
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'))
const Aoscompo = dynamic(() => import('@/utils/aos'))
const PrefetchProvider = dynamic(() => import('@/components/Layout/PrefetchProvider'))

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string | any }>
}

// const dmsans = DM_Sans({ subsets: ['latin'] })

export default async function LocaleLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://static.tildacdn.one" />
        <link rel="preconnect" href="https://intellect.soulist.life" />
        <link rel="preconnect" href="https://www.intellect.kg" />
        <link rel="preconnect" href="https://intellect.kg" />
        <link rel="dns-prefetch" href="https://static.tildacdn.one" />
        <link rel="dns-prefetch" href="https://intellect.soulist.life" />
        <link rel="dns-prefetch" href="https://www.intellect.kg" />
        <link rel="dns-prefetch" href="https://intellect.kg" />
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      </head>
      <body style={{ fontFamily: 'Verdana, sans-serif' }}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <QueryProvider>
            <AuthDialogProvider>
              <ThemeProvider
                attribute="class"
                enableSystem={true}
                defaultTheme="system"
              >
                <Aoscompo>
                  <PrefetchProvider />
                  <Header />
                  <NextTopLoader />
                  {children}
                  <Footer />
                </Aoscompo>
                <ScrollToTop />
              </ThemeProvider>
            </AuthDialogProvider>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

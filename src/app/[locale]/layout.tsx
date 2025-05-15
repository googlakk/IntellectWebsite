import '../globals.css'

import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'
import NextTopLoader from 'nextjs-toploader'

import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import ScrollToTop from '@/components/ScrollToTop'
import { Locale, routing } from '@/i18n/routing'
import Aoscompo from '@/utils/aos'

import { AuthDialogProvider } from '../context/AuthDialogContext'

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
      <body style={{ fontFamily: 'Verdana, sans-serif' }}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AuthDialogProvider>
            <ThemeProvider
              attribute="class"
              enableSystem={true}
              defaultTheme="system"
            >
              <Aoscompo>
                <Header />
                <NextTopLoader />
                {children}
                <Footer />
              </Aoscompo>
              <ScrollToTop />
            </ThemeProvider>
          </AuthDialogProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

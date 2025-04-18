import '../globals.css'

import { DM_Sans } from 'next/font/google'
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
    children: React.ReactNode;
    params: {
      locale: string;
    };
}

const dmsans = DM_Sans({ subsets: ['latin'] })

export default async function LocaleLayout({ children, params } : RootLayoutProps) {
  const { locale } = await params

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={dmsans.className}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
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

import './globals.css'

import { DM_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import NextTopLoader from 'nextjs-toploader'

import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import ScrollToTop from '@/components/ScrollToTop'
import Aoscompo from '@/utils/aos'

import { AuthDialogProvider } from './context/AuthDialogContext'

const dmsans = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  session:any
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmsans.className}>
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
      </body>
    </html>
  )
}

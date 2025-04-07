import "./globals.css";

import Aoscompo from "@/utils/aos";
import { AuthDialogProvider } from "./context/AuthDialogContext";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import NextTopLoader from 'nextjs-toploader';
import ScrollToTop from '@/components/ScrollToTop';
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { ThemeProvider } from "next-themes";

const dmsans = DM_Sans({ subsets: ["latin"] });


export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session:any
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmsans.className}>
      <AuthDialogProvider>
      <SessionProviderComp session={session}>
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
        </SessionProviderComp>
        </AuthDialogProvider>
      </body>
    </html>
  );
}

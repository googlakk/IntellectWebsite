import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['ru', 'kg', 'en'],
  defaultLocale: 'ru',
  localeDetection: false,
})

export const config = {
  matcher: ['/', '/(ru|kg|en)/:path*'],
}

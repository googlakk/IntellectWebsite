import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['ru', 'kg', 'en'],

  defaultLocale: 'ru',
})

export const config = {
  matcher: ['/', '/(ru|kg|en)/:path*'],
}

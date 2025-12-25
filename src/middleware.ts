import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'de'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Don't use a prefix for the default locale
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|fr)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};

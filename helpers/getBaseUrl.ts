export function getBaseUrl() {
  return !!process.env.VERCEL_ENV
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_API_URL;
}

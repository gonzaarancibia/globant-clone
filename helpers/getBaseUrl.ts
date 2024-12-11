export function getBaseUrl() {
  return process.env.VERCEL_ENV === "production" ||
    process.env.VERCEL_ENV === "preview" ||
    process.env.VERCEL_ENV === "development"
    ? process.env.PRODUCTION_API_DOMAIN
    : process.env.NEXT_PUBLIC_API_URL;
}

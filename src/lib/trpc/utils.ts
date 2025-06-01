export function getBaseUrl() {
  if (typeof window !== 'undefined') return window.location.origin;
  if (process.env.APP_URL) return process.env.APP_URL;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

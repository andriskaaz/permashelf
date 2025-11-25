// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Env = Record<string, any>;

export function getBaseUrl<T extends Env>(config?: T) {
  const env = config ?? process.env;

  return env.VERCEL_ENV === "production"
    ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
    : env.VERCEL_ENV === "preview"
      ? `https://${env.VERCEL_URL}`
      : "http://localhost:3000";
}

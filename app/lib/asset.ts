/**
 * Prefixes an asset path with the Vite base URL so images work
 * both in local dev (`/`) and on GitHub Pages (`/concilio-sarralde/`).
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;

  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${clean}`;
}

// # lib/blog-seo.ts — Blog display dates → ISO for OG / JSON-LD

export function blogDisplayDateToIso(displayDate: string): string | undefined {
  const ms = Date.parse(displayDate.trim());
  if (Number.isNaN(ms)) return undefined;
  return new Date(ms).toISOString();
}

export function generateFilterQuery(filters: Record<string, string[]>): string {
  const queryParts: string[] = [];

  for (const key in filters) {
    const values = filters[key];
    if (values.length > 0) {
      const queryValue = values.join(',');
      // Only add to queryParts if queryValue is not empty
      if (queryValue) {
        queryParts.push(`${key}=${queryValue}`);
      }
    }
  }

  // Filter out any empty or null query parts
  const validQueryParts = queryParts.filter(part => part.includes('=') && part.split('=')[1]);

  return validQueryParts.join('&');
}
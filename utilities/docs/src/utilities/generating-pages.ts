type Value = Record<string, string | null>;

export function findLayout(obj: Record<string, Value | string | null>): string | null {
  for (const key in obj) {
    if (typeof key === 'string' && key === '_layout') {
      return obj[key] as string;
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      const result = findLayout(obj[key] as Value);
      if (result !== undefined) {
        return result;
      }
    }
  }

  return null;
}

export function findTitle(obj: Record<string, Value | string | null>): string | null {
  for (const key in obj) {
    if (typeof key === 'string' && key === 'title') {
      return obj[key] as string;
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      const result = findTitle(obj[key] as Value);
      if (result !== undefined) {
        return result;
      }
    }
  }

  return null;
}

export function generatePageQuery(knownPageCollections: string[]) {
  const childJson = knownPageCollections.reduce((acc, collection) => {
    const add = `child${collection}Json {
      title
      _layout
    }`
    acc += add;
    return acc;
  }, '');

  return `query JsonPagesQuery {
    allFile(filter: {relativePath: {regex: "/^pages\\//"}}) {
      nodes {
        relativePath
        ${childJson}
      }
    }
  }
  `
}

export function getPath(str: string) {
  if (str.endsWith('.json')) {
    return str.replace(/^pages/, '').slice(0, -5);

  } else {
    console.warn(`Provided path is not a JSON file: ${str}`);
    return str;
  }
}
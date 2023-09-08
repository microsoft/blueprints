/**
 * Detects if an array has duplicate values. This utility is used to detect if there are multiple page files with the
 * same path. We cannot generate pages with the same path, so we need to detect this and throw an error.
 * @param arrayOfPaths An array of paths to check for duplicates.
 * @returns A boolean indicating if there are duplicates.
 * @example
 * ```ts
 * const arrayOfPaths = [
 *  '/components/atoms/button',
 *  '/components/atoms/link',
 *  '/components/atoms/button',
 * ];
 * 
 * hasDuplicates(arrayOfPaths); // returns true
 * ```
 */

export function findDuplicates(arrayOfPaths: string[]) {
  const duplicates: string[] = [];
  const uniqueValues = new Set();

  for (const value of arrayOfPaths) {
    if (uniqueValues.has(value)) {
      duplicates.push(value);
    } else {
      uniqueValues.add(value);
    }
  }

  return { hasDuplicates: duplicates.length > 0, duplicates };
}
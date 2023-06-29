import { describe, expect, test } from '@jest/globals';
import type { ValidateFunction } from 'ajv';

import { addAllSchemas, compile, loadJsonObject } from '../utils/ajv-utils';

let validate: ValidateFunction<unknown>;

try {
  addAllSchemas();
  // prettier-ignore
  validate = compile("@microsoft/arbutus.json-schemas/layouts/layout.schema.json");
} catch (ex) {
  console.error(ex);
}

describe('reference page schema', () => {
  test('reference-page-1.json should be valid', () => {
    // prettier-ignore
    const data = loadJsonObject('./../../../../starters/gatsby-json/src/content/components/reference-page-1.json');
    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('reference-page-2.json should be valid', () => {
    // prettier-ignore
    const data = loadJsonObject('./../../../../starters/gatsby-json/src/content/components/reference-page-2.json');
    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });
});

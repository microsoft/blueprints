import { describe, expect, test } from '@jest/globals';
import type { ValidateFunction } from 'ajv';

import { addAllSchemas, compile, loadJsonObject } from '../utils/ajv-utils';

let validate: ValidateFunction<unknown>;

try {
  addAllSchemas();
  validate = compile('@microsoft/arbutus.json-schemas/layouts/layout.schema.json');
} catch (ex) {
  console.error(ex);
}

describe('home page schema', () => {
  test('home.json should be valid', () => {
    // prettier-ignore
    const data = loadJsonObject('./../../../../starters/gatsby-json/src/content/home/home.json');
    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });
});

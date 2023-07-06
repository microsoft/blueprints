import { beforeAll, describe, expect, test } from '@jest/globals';
import type { ValidateFunction } from 'ajv';

import { addAllSchemas, compile, loadJsonObject } from '../utils/ajv-utils';

let validate: ValidateFunction<unknown>;

beforeAll(async () => {
  try {
    await addAllSchemas();
    // prettier-ignore
    validate = await compile('@microsoft/arbutus.json-schemas/layouts/layout.schema.json');
  } catch (ex) {
    console.error(ex);
  }
});

describe('header page schema', () => {
  test('header.json should be valid', async () => {
    // prettier-ignore
    const data = await loadJsonObject('./../../../../starters/gatsby-json/src/content/header/header.json');
    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });
});

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

describe('basic schema', () => {
  test('getting-started.json should be valid', async () => {
    // prettier-ignore
    const data = await loadJsonObject('./../../../../starters/gatsby-json/src/content/basic/getting-started.json');
    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('page-1.json should be valid', async () => {
    // prettier-ignore
    const data = await loadJsonObject('./../../../../starters/gatsby-json/src/content/guidance/page-1.json');
    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('page-2.json should be valid', async () => {
    // prettier-ignore
    const data = await loadJsonObject('./../../../../starters/gatsby-json/src/content/guidance/page-2.json');
    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });
});

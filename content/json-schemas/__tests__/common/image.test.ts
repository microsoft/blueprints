import { describe, expect, test } from '@jest/globals';
import type { ValidateFunction } from 'ajv';

import { compile } from '../utils/ajv-utils';

let validate: ValidateFunction<unknown>;

try {
  // prettier-ignore
  validate = compile('@microsoft/arbutus.json-schemas/common/image.schema.json');
} catch (ex) {
  console.error(ex);
}

describe('image schema (common)', () => {
  test('filling out all fields should be valid', () => {
    const data = {
      src: 'https://www.microsoft.com',
      alternativeText: 'Test text',
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('only filling out required fields should be valid', () => {
    const data = {
      src: 'https://www.microsoft.com',
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('missing a required field [src] should not be valid', () => {
    const data = {
      alternativeText: 'Test text',
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });

  test('adding non-existing field should not be valid', () => {
    const data = {
      src: 'https://www.microsoft.com',
      alternativeText: 'Test text',
      nonExistingField: 'Invalid field', // this random field is required for this testing
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });
});

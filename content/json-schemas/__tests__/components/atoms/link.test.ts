import { describe, expect, test } from '@jest/globals';
import type { ValidateFunction } from 'ajv';

import { addSchema, compile } from './../../utils/ajv-utils';

let validate: ValidateFunction<unknown>;

try {
  addSchema('@microsoft/arbutus.json-schemas/common/image.schema.json');
  validate = compile('@microsoft/arbutus.json-schemas/components/atoms/link.schema.json');
} catch (ex) {
  console.error(ex);
}

describe('link schema', () => {
  test('filling out all fields should be valid', () => {
    const data = {
      contentComponentId: 'atoms.link',
      text: 'Test text',
      to: 'Test text',
      isExternal: true,
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('only filling out required fields should be valid', () => {
    const data = {
      contentComponentId: 'atoms.link',
      text: 'Test text',
      to: 'Test text',
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('missing a required field [text] should not be valid', () => {
    const data = {
      contentComponentId: 'atoms.link',
      to: 'Test text',
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });

  test('missing a required field [to] should not be valid', () => {
    const data = {
      contentComponentId: 'atoms.link',
      text: 'Test text',
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });

  test('adding non-existing field should not be valid', () => {
    const data = {
      contentComponentId: 'atoms.link',
      text: 'Test text',
      to: 'Test text',
      isExternal: true,
      nonExistingField: 'Invalid field', // this random field is required for this testing
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });
});

import { beforeAll, describe, expect, test } from '@jest/globals';
import type { ValidateFunction } from 'ajv';

import { compile } from '../../utils/ajv-utils';

let validate: ValidateFunction<unknown>;

beforeAll(async () => {
  try {
    // prettier-ignore
    validate = await compile('@microsoft/arbutus.json-schemas/components/blocks/component-preview.schema.json');
  } catch (ex) {
    console.error(ex);
  }
});

describe('component preview schema', () => {
  test('filling out all fields should be valid', () => {
    const data = {
      contentComponentId: 'blocks.component-preview',
      exampleFile: 'Test code',
      withMenu: true,
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('only filling out required fields should be valid', () => {
    const data = {
      contentComponentId: 'blocks.component-preview',
      exampleFile: 'Test code',
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('missing a required field [exampleFile] should not be valid', () => {
    const data = {
      contentComponentId: 'blocks.component-preview',
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });

  test('adding non-existing field should not be valid', () => {
    const data = {
      contentComponentId: 'blocks.component-preview',
      exampleFile: 'Test code',
      withMenu: true,
      nonExistingField: 'Invalid field', // this random field is required for this testing
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });
});

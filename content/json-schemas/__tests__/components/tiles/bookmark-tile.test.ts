import { describe, expect, test } from '@jest/globals';
import type { ValidateFunction } from 'ajv';

import { addSchema, compile } from '../../utils/ajv-utils';

let validate: ValidateFunction<unknown>;

try {
  addSchema('@microsoft/arbutus.json-schemas/common/image.schema.json');
  // prettier-ignore
  validate = compile('@microsoft/arbutus.json-schemas/components/tiles/bookmark-tile.schema.json');
} catch (ex) {
  console.error(ex);
}

describe('bookmark-tile schema', () => {
  test('filling out all fields should be valid', () => {
    const data = {
      contentComponentId: 'tiles.bookmark-tile',
      title: 'Test title',
      to: 'https://www.microsoft.com',
      isExternal: true,
      icon: {
        src: 'https://www.microsoft.com',
        alternativeText: 'Test text',
      },
      description: 'Test description',
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('only filling out required fields should be valid', () => {
    const data = {
      contentComponentId: 'tiles.bookmark-tile',
      title: 'Test title',
      to: 'https://www.microsoft.com',
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('missing a required field [title] should not be valid', () => {
    const data = {
      contentComponentId: 'tiles.bookmark-tile',
      to: 'https://www.microsoft.com',
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });

  test('missing a required field [to] should not be valid', () => {
    const data = {
      contentComponentId: 'tiles.bookmark-tile',
      title: 'Test title',
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });

  test('adding non-existing field should not be valid', () => {
    const data = {
      contentComponentId: 'tiles.bookmark-tile',
      title: 'Test title',
      to: 'https://www.microsoft.com',
      isExternal: true,
      icon: {
        src: 'https://www.microsoft.com',
        alternativeText: 'Test text',
      },
      description: 'Test description',
      nonExistingField: 'Invalid field', // this random field is required for this testing
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });
});

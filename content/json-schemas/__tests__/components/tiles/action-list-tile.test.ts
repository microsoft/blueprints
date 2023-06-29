import { describe, expect, test } from '@jest/globals';
import type { ValidateFunction } from 'ajv';

import { addSchema, compile } from '../../utils/ajv-utils';

let validate: ValidateFunction<unknown>;

try {
  addSchema('@microsoft/arbutus.json-schemas/common/image.schema.json');
  // prettier-ignore
  validate = compile('@microsoft/arbutus.json-schemas/components/tiles/action-list-tile.schema.json');
} catch (ex) {
  console.error(ex);
}

describe('action list tile schema', () => {
  test('filling out all fields should be valid', () => {
    const data = {
      contentComponentId: 'tiles.action-list-tile',
      title: 'Test title',
      icon: {
        src: 'https://www.microsoft.com',
        alternativeText: 'Test text',
      },
      listItems: [
        {
          label: 'Test text',
          description: 'Test headline',
          iconType: 'Test type',
          isExternal: true,
        },
      ],
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('only filling out required fields should be valid', () => {
    const data = {
      contentComponentId: 'tiles.action-list-tile',
      title: 'Test title',
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('missing a required field [title] should not be valid', () => {
    const data = {
      contentComponentId: 'tiles.action-list-tile',
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });

  test('adding non-existing field should not be valid', () => {
    const data = {
      contentComponentId: 'tiles.action-list-tile',
      title: 'Test title',
      icon: {
        src: 'https://www.microsoft.com',
        alternativeText: 'Test text',
      },
      listItems: [
        {
          label: 'Test text',
          description: 'Test headline',
          iconType: 'Test type',
          isExternal: true,
        },
      ],
      nonExistingField: 'Invalid field', // this random field is required for this testing
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });
});

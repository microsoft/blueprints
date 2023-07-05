import { beforeAll, describe, expect, test } from '@jest/globals';
import type { ValidateFunction } from 'ajv';

import { addSchema, compile } from '../../utils/ajv-utils';

let validate: ValidateFunction<unknown>;

beforeAll(async () => {
  try {
    await addSchema('@microsoft/arbutus.json-schemas/common/image.schema.json');
    // prettier-ignore
    validate = await compile('@microsoft/arbutus.json-schemas/components/lists/ordered-list.schema.json');
  } catch (ex) {
    console.error(ex);
  }
});

describe('ordered list schema', () => {
  test('filling out all fields should be valid', () => {
    const data = {
      contentComponentId: 'lists.ordered-list',
      listItems: [
        {
          text: 'Test text',
          headline: 'Test headline',
        },
      ],
      variant: 'primary',
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('only filling out required fields should be valid', () => {
    const data = {
      contentComponentId: 'lists.ordered-list',
      listItems: [
        {
          text: 'Test text',
          headline: 'Test headline',
        },
      ],
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('missing a required field [listItems] should not be valid', () => {
    const data = {
      contentComponentId: 'lists.ordered-list',
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });

  test('adding non-existing field should not be valid', () => {
    const data = {
      contentComponentId: 'lists.ordered-list',
      listItems: [
        {
          text: 'Test text',
          headline: 'Test headline',
        },
      ],
      nonExistingField: 'Invalid field', // this random field is required for this testing
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });
});

import { beforeAll, describe, expect, test } from '@jest/globals';
import type { ValidateFunction } from 'ajv';

import { compile } from '../../utils/ajv-utils';

let validate: ValidateFunction<unknown>;

beforeAll(async () => {
  try {
    // prettier-ignore
    validate = await compile('@microsoft/arbutus.json-schemas/components/blocks/guidance.schema.json');
  } catch (ex) {
    console.error(ex);
  }
});

describe('guidance schema', () => {
  test('filling out all fields should be valid', () => {
    const data = {
      contentComponentId: 'blocks.guidance',
      heading: 'Test heading',
      description: 'Test description',
      url: 'https://www.microsoft.com',
      listItems: [
        {
          text: 'Test text 1',
          headline: 'Test headline',
        },
        {
          text: 'Test text 2',
          headline: 'Test headline',
        },
      ],
      fileType: 'figma',
      fileTitle: 'Test file title',
      image: {
        url: 'https://www.microsoft.com',
      },
      imageDescription: 'Test image description',
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('only filling out required fields should be valid', () => {
    const data = {
      contentComponentId: 'blocks.guidance',
      heading: 'Test heading',
      url: 'https://www.microsoft.com',
      fileType: 'figma',
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('missing a required field [url] should not be valid', () => {
    const data = {
      contentComponentId: 'blocks.guidance',
      heading: 'Test heading',
      fileType: 'figma',
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });

  test('missing a required field [fileType] should not be valid', () => {
    const data = {
      contentComponentId: 'blocks.guidance',
      heading: 'Test heading',
      url: 'https://www.microsoft.com',
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });

  test('adding non-existing field should not be valid', () => {
    const data = {
      contentComponentId: 'blocks.guidance',
      heading: 'Test heading',
      description: 'Test description',
      url: 'https://www.microsoft.com',
      listItems: [
        {
          text: 'Test text 1',
          headline: 'Test headline',
        },
        {
          text: 'Test text 2',
          headline: 'Test headline',
        },
      ],
      fileType: 'figma',
      fileTitle: 'Test file title',
      image: {
        url: 'https://www.microsoft.com',
      },
      imageDescription: 'Test image description',
      nonExistingField: 'Invalid field', // this random field is required for this testing
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });
});

import { describe, expect, test } from '@jest/globals';
import type { ValidateFunction } from 'ajv';

import { compile } from '../../utils/ajv-utils';

let validate: ValidateFunction<unknown>;

try {
  // prettier-ignore
  validate = compile('@microsoft/arbutus.json-schemas/components/blocks/embed.schema.json');
} catch (ex) {
  console.error(ex);
}

describe('embed schema', () => {
  test('filling out all fields should be valid', () => {
    const data = {
      contentComponentId: 'blocks.embed',
      url: 'https://www.figma.com',
      type: 'figma',
      title: 'Test text',
      size: 'large',
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('only filling out required fields should be valid', () => {
    const data = {
      contentComponentId: 'blocks.embed',
      url: 'https://www.figma.com',
      type: 'figma',
      title: 'Test text',
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('missing a required field [title] should not be valid', () => {
    const data = {
      contentComponentId: 'blocks.embed',
      url: 'https://www.figma.com',
      type: 'figma',
      size: 'large',
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });

  test('missing a required field [url] should not be valid', () => {
    const data = {
      contentComponentId: 'blocks.embed',
      type: 'figma',
      title: 'Test text',
      size: 'large',
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });

  test('adding non-existing field should not be valid', () => {
    const data = {
      contentComponentId: 'blocks.embed',
      url: 'https://www.figma.com',
      type: 'figma',
      title: 'Test text',
      size: 'large',
      nonExistingField: 'Invalid field', // this random field is required for this testing
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });
});

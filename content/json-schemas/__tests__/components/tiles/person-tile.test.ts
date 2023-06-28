import { describe, expect, test } from '@jest/globals';
import { addSchema, compile } from './../../utils/ajv-utils';

let validate;

try {
  validate = compile('@microsoft/arbutus.json-schemas/components/tiles/person-tile.schema.json');
} catch (ex) {
  console.error(ex);
}

describe('person-tile schema', () => {
  test('filling out all fields should be valid', () => {
    const data = {
      contentComponentId: "tiles.person-tile",
      firstName: "John",
      lastName: "Doe",
      role: "Manager",
      to: "https://www.microsoft.com",
      isExternal: true,
      icon: {
        url: "https://www.microsoft.com",
        alternativeText: "Test text"
      },
      avatar: {
        url: "https://www.microsoft.com",
        alternativeText: "Test text"
      }
    };

    const valid = validate(data);
    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('only filling out required fields should be valid', () => {
    const data = {
      contentComponentId: "tiles.person-tile",
      firstName: "John",
      lastName: "Doe",
      to: "https://www.microsoft.com",
    };

    const valid = validate(data);
    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('missing a required field [firstName] should not be valid', () => {
    const data = {
      contentComponentId: "tiles.person-tile",
      lastName: "Doe",
      to: "https://www.microsoft.com",
    };

    const valid = validate(data);
    expect(valid).toBe(false);
  });

  test('missing a required field [lastName] should not be valid', () => {
    const data = {
      contentComponentId: "tiles.person-tile",
      firstName: "John",
      to: "https://www.microsoft.com",
    };

    const valid = validate(data);
    expect(valid).toBe(false);
  });

  test('missing a required field [to] should not be valid', () => {
    const data = {
      contentComponentId: "tiles.person-tile",
      firstName: "John",
      lastName: "Doe"
    };

    const valid = validate(data);
    expect(valid).toBe(false);
  });

  test('adding non-existing field should not be valid', () => {
    const data = {
      contentComponentId: "tiles.person-tile",
      firstName: "John",
      lastName: "Doe",
      role: "Manager",
      to: "https://www.microsoft.com",
      isExternal: true,
      icon: {
        url: "https://www.microsoft.com",
        alternativeText: "Test text"
      },
      avatar: {
        url: "https://www.microsoft.com",
        alternativeText: "Test text"
      },
      nonExistingField: "Invalid field"   // this random field is required for this testing
    };

    const valid = validate(data);
    expect(valid).toBe(false);
  });
});
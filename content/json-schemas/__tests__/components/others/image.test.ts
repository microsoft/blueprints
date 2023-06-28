import { describe, expect, test } from '@jest/globals';
import { compile } from './../../utils/ajv-utils';

let validate;

try {
    validate = compile('@microsoft/arbutus.json-schemas/components/others/image.schema.json');
} catch (ex) {
    console.error(ex);
}

describe('image schema', () => {
    test('filling out all fields should be valid', () => {
        const data = {
            image: {
                url: "https://www.microsoft.com",
                alternativeText: "Test text",
                caption: "Test caption"
            }
        };

        const valid = validate(data);
        if (!valid) console.log(validate.errors);
        expect(valid).toBe(true);
    });

    test('only filling out required fields should be valid', () => {
        const data = {
            image: {
                url: "https://www.microsoft.com"
            }
        };

        const valid = validate(data);
        if (!valid) console.log(validate.errors);
        expect(valid).toBe(true);
    });

    test('missing a required field [src] should not be valid', () => {
        const data = {
            image: {
                alternativeText: "Test text",
                caption: "Test caption"
            }
        };

        const valid = validate(data);
        expect(valid).toBe(false);
    });

    test('adding non-existing field should not be valid', () => {
        const data = {
            image: {
                url: "https://www.microsoft.com",
                alternativeText: "Test text",
                caption: "Test caption",
                nonExistingField: "Invalid field"   // this random field is required for this testing
            }
        };

        const valid = validate(data);
        expect(valid).toBe(false);
    });
});

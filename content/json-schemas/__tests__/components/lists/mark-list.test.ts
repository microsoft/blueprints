import { describe, expect, test } from '@jest/globals';
import { addSchema, compile } from './../../utils/ajv-utils';

let validate;

try {
    addSchema('@microsoft/arbutus.json-schemas/common/image.schema.json');
    validate = compile('@microsoft/arbutus.json-schemas/components/lists/mark-list.schema.json');
} catch (ex) {
    console.error(ex);
}

describe('mark list schema', () => {
    test('filling out all fields should be valid', () => {
        const data = {
            contentComponentId: "lists.mark-list",
            listItems: [
                {
                    text: "Test text",
                    headline: "Test headline"
                }
            ]
        };

        const valid = validate(data);
        if (!valid) console.log(validate.errors);
        expect(valid).toBe(true);
    });

    test('only filling out required fields should be valid', () => {
        const data = {
            contentComponentId: "lists.mark-list",
            listItems: [
                {
                    text: "Test text",
                    headline: "Test headline"
                }
            ]
        };

        const valid = validate(data);
        if (!valid) console.log(validate.errors);
        expect(valid).toBe(true);
    });

    test('missing a required field [listItems] should not be valid', () => {
        const data = {
            contentComponentId: "lists.mark-list"
        };

        const valid = validate(data);
        expect(valid).toBe(false);
    });

    test('adding non-existing field should not be valid', () => {
        const data = {
            contentComponentId: "lists.mark-list",
            listItems: [
                {
                    text: "Test text",
                    headline: "Test headline"
                }
            ],
            nonExistingField: "Invalid field"   // this random field is required for this testing
        };

        const valid = validate(data);
        expect(valid).toBe(false);
    });
});
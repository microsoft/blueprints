import { describe, expect, test } from '@jest/globals';
import { compile } from './../../utils/ajv-utils';

let validate;

try {
    validate = compile('@microsoft/arbutus.json-schemas/components/blocks/prop-table.schema.json');
} catch (ex) {
    console.error(ex);
}

describe('prop table schema', () => {
    test('filling out all fields should be valid', () => {
        const data = {
            contentComponentId: "blocks.prop-table",
            componentName: "Test text",
            componentPropType: "Test text"
        };

        const valid = validate(data);
        if (!valid) console.log(validate.errors);
        expect(valid).toBe(true);
    });

    test('only filling out required fields should be valid', () => {
        const data = {
            contentComponentId: "blocks.prop-table",
            componentName: "Test text",
            componentPropType: "Test text"
        };

        const valid = validate(data);
        if (!valid) console.log(validate.errors);
        expect(valid).toBe(true);
    });

    test('missing a required field [componentName] should not be valid', () => {
        const data = {
            contentComponentId: "blocks.prop-table",
            componentPropType: "Test text"
        };

        const valid = validate(data);
        expect(valid).toBe(false);
    });

    test('adding non-existing field should not be valid', () => {
        const data = {
            contentComponentId: "blocks.prop-table",
            componentName: "Test text",
            componentPropType: "Test text",
            nonExistingField: "Invalid field"   // this random field is required for this testing
        };

        const valid = validate(data);
        expect(valid).toBe(false);
    });
});
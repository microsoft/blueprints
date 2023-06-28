import { describe, expect, test } from '@jest/globals';
import { addSchema, compile } from './../../utils/ajv-utils';

let validate;

try {
    addSchema('@microsoft/arbutus.json-schemas/common/image.schema.json');
    validate = compile('@microsoft/arbutus.json-schemas/components/tiles/recommendation.schema.json');
} catch (ex) {
    console.error(ex);
}

describe('recommendation schema', () => {
    test('filling out all fields should be valid', () => {
        const data = {
            contentComponentId: "tiles.recommendation",
            title: "Test title",
            recommendation: "Test text",
            recommendationsList: [
                {
                    text: "Test text",
                    headline: "Test headline"
                }
            ],
            image: {
                src: "https://www.microsoft.com",
                alternativeText: "Test text"
            }
        };

        const valid = validate(data);
        if (!valid) console.log(validate.errors);
        expect(valid).toBe(true);
    });
    
    test('only filling out required fields should be valid', () => {
        const data = {
            contentComponentId: "tiles.recommendation",
            title: "Test title"
        };

        const valid = validate(data);
        if (!valid) console.log(validate.errors);
        expect(valid).toBe(true);
    });

    test('missing a required field [title] should not be valid', () => {
        const data = {
            contentComponentId: "tiles.recommendation"
        };

        const valid = validate(data);
        expect(valid).toBe(false);
    });

    test('adding non-existing field should not be valid', () => {
        const data = {
            contentComponentId: "tiles.recommendation",
            title: "Test title",
            recommendation: "Test text",
            recommendationsList: [
                {
                    text: "Test text",
                    headline: "Test headline"
                }
            ],
            image: {
                src: "https://www.microsoft.com",
                alternativeText: "Test text"
            },
            nonExistingField: "Invalid field"   // this random field is required for this testing
        };

        const valid = validate(data);
        expect(valid).toBe(false);
    });
});
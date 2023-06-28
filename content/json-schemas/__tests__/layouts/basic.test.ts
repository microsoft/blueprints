import { describe, expect, test } from '@jest/globals';
import { addAllSchemas, compile } from './../utils/ajv-utils';

let validate;

try {
    addAllSchemas();
    validate = compile('@microsoft/arbutus.json-schemas/layouts/layout.schema.json');
} catch (ex) {
    console.error(ex);
}

describe('basic schema', () => {
    test('getting-started.json should be valid', () => {
        const data = require('./../../../../starters/gatsby-json/src/content/basic/getting-started.json');
        const valid = validate(data);
        if (!valid) console.log(validate.errors);
        expect(valid).toBe(true);
    });

    test('page-1.json should be valid', () => {
        const data = require('./../../../../starters/gatsby-json/src/content/guidance/page-1.json');
        const valid = validate(data);
        if (!valid) console.log(validate.errors);
        expect(valid).toBe(true);
    });

    test('page-2.json should be valid', () => {
        const data = require('./../../../../starters/gatsby-json/src/content/guidance/page-2.json');
        const valid = validate(data);
        if (!valid) console.log(validate.errors);
        expect(valid).toBe(true);
    });
});
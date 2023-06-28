const Ajv = require("ajv");
const ajv = new Ajv();

/**
 * This function adds json schema into Ajv object for resolving $refs found in the schema.
 * Ajv requires $id to start with or without '/' depending on the level of nested references.
 * This function will add json schema twice with and without '/' to cover all levels of nested references.
 * @param schemaPath relative path to the json schema
 */
export const addSchema = (schemaPath: string) => {
    const schema = require(schemaPath);
    const key = schema['$id'];
    if (!key) {
        throw new Error('$id field in the json schema is undefined');
    }

    ajv.addSchema(schema);
    ajv.addSchema(schema, "/" + key);
};

/**
 * This function adds all component json schemas necessary for layout schemas
 */
export const addAllSchemas = () => {
    addSchema('@microsoft/arbutus.json-schemas/common/image.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/components/atoms/link.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/components/blocks/code-snippet.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/components/blocks/component-preview.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/components/blocks/embed.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/components/blocks/guidance.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/components/blocks/heading.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/components/blocks/prop-table.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/components/lists/mark-list.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/components/lists/ordered-list.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/components/others/empty.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/components/others/image.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/components/tiles/action-list-tile.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/components/tiles/bookmark-tile.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/components/tiles/illustration-tile.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/components/tiles/recommendation.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/components/tiles/person-tile.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/layouts/basic.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/layouts/home.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/layouts/reference-page.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/layouts/header.schema.json');
    addSchema('@microsoft/arbutus.json-schemas/layouts/footer.schema.json');
};

/**
 * This function generates a validating function to be used to validate a json string
 * @param schemaPath relative path to the json schema
 * @returns
 */
export const compile = (schemaPath: string): any => {
    const schema = require(schemaPath);
    return ajv.compile(schema);
}
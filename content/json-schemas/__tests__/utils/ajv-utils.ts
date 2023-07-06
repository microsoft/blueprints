import type { SchemaObject, ValidateFunction } from 'ajv';
import Ajv from 'ajv';

const ajv = new Ajv();

interface ImportedJSON extends JSON {
  default: JSON;
}

/**
 * This function adds json schema into Ajv object for resolving $refs found in the schema.
 * Ajv requires $id to start with or without '/' depending on the level of nested references.
 * This function will add json schema twice with and without '/' to cover all levels of nested references.
 * @param schemaPath relative path to the json schema
 */
export const addSchema = async (schemaPath: string): Promise<void> => {
  const schema = await loadJsonSchema(schemaPath);
  const key = schema.$id as string;

  if (!key) {
    throw new Error('$id field in the json schema is undefined');
  }

  ajv.addSchema(schema);
  ajv.addSchema(schema, '/' + key);
};

/**
 * This function adds all component json schemas necessary for layout schemas
 */
// prettier-ignore
export const addAllSchemas = async () : Promise<void> => {
  await addSchema('@microsoft/arbutus.json-schemas/common/image.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/components/atoms/link.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/components/blocks/code-snippet.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/components/blocks/component-preview.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/components/blocks/embed.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/components/blocks/guidance.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/components/blocks/heading.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/components/blocks/prop-table.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/components/lists/mark-list.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/components/lists/ordered-list.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/components/others/empty.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/components/others/image.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/components/tiles/action-list-tile.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/components/tiles/bookmark-tile.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/components/tiles/illustration-tile.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/components/tiles/recommendation.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/components/tiles/person-tile.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/layouts/basic.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/layouts/home.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/layouts/reference-page.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/layouts/header.schema.json');
  await addSchema('@microsoft/arbutus.json-schemas/layouts/footer.schema.json');
};

/**
 * This function generates a validating function to be used to validate a json string
 * @param schemaPath relative path to the json schema
 * @returns
 */
export const compile = async (schemaPath: string): Promise<ValidateFunction<unknown>> => {
  const schema = await loadJsonSchema(schemaPath);

  return ajv.compile(schema);
};

export const loadJsonSchema = async (schemaPath: string): Promise<SchemaObject> => {
  const schema = (await import(schemaPath)) as SchemaObject;

  return schema;
};

export const loadJsonObject = async (jsonPath: string): Promise<JSON> => {
  const { default: jsonObject } = (await import(jsonPath, {
    assert: { type: 'json' },
  })) as ImportedJSON;

  return jsonObject;
};

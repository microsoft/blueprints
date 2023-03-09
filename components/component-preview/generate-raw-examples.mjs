#! /usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const config = {
  outputDir: '__raw__',
  files: ['__dev__/example-component.tsx'],
};

const generateRawSourceFile = async (filePath) => {
  const match = filePath.match(/\/([^/.]+)\./);
  const fileName = match[1];

  const rawSource = await readFile(join(process.cwd(), filePath), { encoding: 'utf8' });

  const outputFilePath = join(process.cwd(), config.outputDir, `${fileName}.raw.tsx`);

  await writeFile(outputFilePath, `export default \`${rawSource}\`;\n`);
};

const generateRawExamples = async ({ outputDir, files }) => {
  // 1. Create prop docs directory if it doesn’t exist.
  if (!existsSync(outputDir)) {
    mkdirSync(join(process.cwd(), outputDir));
  }

  // 2. Clean up the output directory.
  // cleanDirectory(outputDir);

  // 3. Generate raw example files.
  await Promise.all(files.map((path) => generateRawSourceFile(path)));
};

generateRawExamples(config);

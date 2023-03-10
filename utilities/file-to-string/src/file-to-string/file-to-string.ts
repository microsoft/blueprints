import { existsSync, mkdirSync, readdirSync, rmSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

import type { Config, FileToStringArgs } from './file-to-string.types.js';

const DEFAULT_OUTPUT_DIR = '__raw__';
const DEFAULT_EXTENSION = 'ts';

const cleanDirectory = (dir: string) => {
  if (!existsSync(dir)) {
    return;
  }

  readdirSync(dir).forEach((file) => rmSync(join(dir, file), { recursive: true }));
};

const generateRawSourceFile = async (filePath: string, config: Config) => {
  const match = filePath.match(/\/([^/.]+)\./);
  const fileName = match?.[1] ?? 'file';

  const rawSource = await readFile(join(process.cwd(), filePath), { encoding: 'utf8' });

  const outputFilePath = join(
    process.cwd(),
    config.outputDir ?? DEFAULT_OUTPUT_DIR,
    `${fileName}.raw.${config.extension ?? DEFAULT_EXTENSION}`,
  );

  await writeFile(outputFilePath, `export default \`${rawSource}\`;\n`);
};

export const fileToString = async ({ config }: FileToStringArgs) => {
  const { files, outputDir = DEFAULT_OUTPUT_DIR } = config;

  // 1. Create prop docs directory if it doesn’t exist.
  if (!existsSync(outputDir)) {
    mkdirSync(join(process.cwd(), outputDir));
  }

  // 2. Clean up the output directory.
  cleanDirectory(outputDir);

  // 3. Generate raw example files.
  await Promise.all(files.map((path) => generateRawSourceFile(path, config)));

  return;
};

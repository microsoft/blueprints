#! /usr/bin/env node
import { readFile } from 'fs/promises';
import { join } from 'path';
import chalk from 'chalk';

import type { Config } from './types.js';
import { generate } from './generate.js';
import { cleanDirectory } from './clean-directory.js';

const args = process.argv.slice(2);
const config: Config = {
  componentPaths: [],
  outputDir: '__prop-docs__',
};

try {
  const configPath = join(process.cwd(), 'arbutus-prop-docs.config.json');
  const componentPathsBuffer = await readFile(configPath, { encoding: 'utf8' });

  const userConfig = JSON.parse(componentPathsBuffer);
  config.componentPaths = userConfig.componentPaths ?? [];
  config.outputDir = userConfig.outputDir ?? '__prop-docs__';
} catch (err) {
  console.error(
    chalk.red(
      'Configuration file is missing. Check that you have arbutus-prop-docs.config.json available at the root.',
    ),
  );
  console.error(err.message);
}

if (args.includes('generate')) {
  generate({ config });
}

if (args.includes('clean')) {
  cleanDirectory(config.outputDir);
}

export type { Manifest, Config, PropDoc } from './types.js';

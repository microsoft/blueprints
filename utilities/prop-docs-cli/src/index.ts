#! /usr/bin/env node
import chalk from 'chalk';
import { readFile } from 'fs/promises';
import { join } from 'path';

import { cleanDirectory } from './clean-directory.js';
import { generate } from './generate.js';
import type { Config } from './types.js';

const args = process.argv.slice(2);
const config: Config = {
  componentPaths: [],
  outputDir: '__prop-docs__',
};

try {
  const configPath = join(process.cwd(), 'arbutus-prop-docs.config.json');
  const componentPathsBuffer = await readFile(configPath, { encoding: 'utf8' });

  const userConfig = JSON.parse(componentPathsBuffer) as Config;

  config.componentPaths = userConfig.componentPaths ?? [];
  config.outputDir = userConfig.outputDir ?? '__prop-docs__';
} catch (err) {
  console.error(
    chalk.red(
      'Configuration file is missing. Check that you have arbutus-prop-docs.config.json available at the root.',
    ),
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  err?.message && console.error(err.message);
}

if (args.includes('generate')) {
  const isTypeScript = args.includes('--ts') || args.includes('--typescript');

  generate({ config, isTypeScript });
}

if (args.includes('clean')) {
  cleanDirectory(config.outputDir);
}

export type { Config, Manifest, PropItem, PropsDoc } from './types.js';

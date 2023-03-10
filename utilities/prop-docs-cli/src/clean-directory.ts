import chalk from 'chalk';
import { existsSync, readdirSync, rmSync } from 'fs';
import { join } from 'path';

export const cleanDirectory = (dir: string) => {
  if (!existsSync(dir)) {
    console.warn(chalk.yellow(`${dir} directory doesn’t exist. Nothing to clear!`));

    return;
  }

  readdirSync(dir).forEach((file) => rmSync(join(dir, file), { recursive: true }));
  console.log(chalk.green(`Cleared ${dir} directory 🧹`));
};

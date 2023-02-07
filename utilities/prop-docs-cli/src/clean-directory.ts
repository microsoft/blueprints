import { readdirSync, rmSync, existsSync } from 'fs';
import { join } from 'path';
import  chalk  from 'chalk';

export const cleanDirectory = (dir: string) => {
  if (!existsSync(dir)) {
    console.warn(chalk.yellow(`${dir} directory doesn’t exist. Nothing to clear!`))
    return;
  };

  readdirSync(dir).forEach((file) => rmSync(join(dir, file)));
  console.log(chalk.green(`Cleared ${dir} directory 🧹`))
}

import { fileToString } from '@microsoft/arbutus.file-to-string';
import { readdirSync } from 'fs';

const EXAMPLES_DIR = './src/code-examples';

const files = readdirSync(EXAMPLES_DIR).map(
  (file) => `${EXAMPLES_DIR}/${file}`
).filter((file) => file.includes('.example.'));

console.log(files);

const config = {
  files,
  outputDir: `${EXAMPLES_DIR}/__raw__`, // optional
  extension: 'ts', // optional
};

fileToString({ config })
  .then(() => console.log('Success!'))
  .catch((err) => console.log('Did not work out: ', err));

import { fileToString } from '@microsoft/arbutus.file-to-string';

const config = {
  files: ['./__dev__/example.js'],
  outputDir: './__dev__/__raw__', // optional
  extension: 'ts', // optional
};

fileToString({ config })
  .then(() => console.log('Success!'))
  .catch((err) => console.log('Did not work out: ', err));

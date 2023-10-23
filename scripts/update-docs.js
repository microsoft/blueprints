const fs = require('fs-extra');

// Define the paths to the source and destination directories
const sourceDir = 'utilities/docs/public';
const destDir = 'docs';

// Clear the contents of the destination directory
fs.emptyDirSync(destDir);

// Copy the contents of the source directory to the destination directory
fs.copySync(sourceDir, destDir);

console.log('Docs directory updated successfully!');

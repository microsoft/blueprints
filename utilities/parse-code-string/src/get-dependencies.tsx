export const getDependencies = (codeStr: string) => {
  const regex = /import\s+.*\s+from\s+['"](.*)['"]/g;
  const dependencies: string[] = [];
  let match = regex.exec(codeStr);

  while (match) {
    dependencies.push(match[1]);
    match = regex.exec(codeStr);
  }

  return dependencies;
};

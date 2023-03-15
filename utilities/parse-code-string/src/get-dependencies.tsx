export const getDependencies = (codeStr: string) => {
  const regex = /import\s.*\sfrom\s+['"](.*)['"]/g;
  const dependencies = [...codeStr.matchAll(regex)].map(([_, result]) => result);

  return dependencies;
};

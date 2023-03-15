export const getDefaultExportName = (codeStr: string) =>
  codeStr.match(/export\s+default\s+(\w+)/)?.[1];

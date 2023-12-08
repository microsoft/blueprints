import type { FC } from 'react';
import { useState, useEffect } from 'react';
import * as React from 'react';

import { Sandbox } from '../../sandbox';
import { SandboxComponentData } from '../component-renderer.types';

type SandboxComponentProps = SandboxComponentData;

const replaceExampleWithRaw = (str: string) =>
  str.replace(/\.example\.(tsx|ts)$/, '.raw.ts');

const importExampleRaw = (examplePath: string): Promise<string> => {
  const exampleRawPath = replaceExampleWithRaw(examplePath);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- import() is supposed to return a promise of type any.
  return (
    import(`../../../code-examples/__raw__/${exampleRawPath}`)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return -- .default is a property of a module and refers to default export.
      .then((result) => result.default)
      .catch((err) => {
        console.error(err);

        return '';
      })
  );
};

export const SandboxComponent: FC<SandboxComponentProps> = ({
  codeFile,
  dependencies,
}) => {
  // Getting a code example file as a string.
  const [code, setCode] = useState<string>();

  useEffect(() => {
    async function loadExample() {
      const rawCode = await importExampleRaw(codeFile);

      setCode(rawCode);
    }

    loadExample().catch((err) => {
      console.error(err);
    });
  }, [codeFile]);

  if (!code) {
    return null;
  }

  return <Sandbox componentCode={code} dependencies={dependencies} />;
};

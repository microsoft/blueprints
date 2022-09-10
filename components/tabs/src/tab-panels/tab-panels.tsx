import type { FC } from 'react';
import * as React from 'react';

import { injectIndex } from '../utilities';

export const TabPanels: FC = ({ children }) => <>{injectIndex({ children })}</>;

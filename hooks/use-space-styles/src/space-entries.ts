import { spaceScale } from '@microsoft/arbutus.theming';

import type { Scale } from './use-space-styles.types';

export const spaceEntries = Object.entries(spaceScale) as [Scale, string][];

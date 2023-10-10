import type { FC } from 'react';
import * as React from 'react';
import { blueprintsDocsTokens } from '../../../components/theme';

export const CheckIllustration: FC<{ className?: string }> = ({ className }) => (
  <svg
    width="218"
    height="218"
    viewBox="0 0 218 218"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="0.5" y="0.5" width="217" height="217" rx="108.5" fill={blueprintsDocsTokens.color.illustration[30]} />
    <path
      d="M41.7241 108.939L41.7239 108.939L41.7196 108.95C41.2384 110.156 41 111.452 41 112.834C41 115.66 41.9275 118.071 43.7876 120.033L43.7879 120.033L80.2948 158.458C82.2046 160.473 84.4699 161.5 87.07 161.5C88.3361 161.5 89.5453 161.245 90.6927 160.736L90.6928 160.736L90.7043 160.731C91.8991 160.163 92.947 159.405 93.845 158.458C93.845 158.458 93.8451 158.458 93.8451 158.458L174.126 73.8507L174.127 73.8506C176.039 71.8337 177 69.4256 177 66.6514C177 65.3236 176.731 64.0557 176.193 62.8523C175.716 61.5982 175.029 60.4955 174.132 59.5486C173.289 58.596 172.264 57.8653 171.066 57.3574C169.916 56.785 168.675 56.5 167.352 56.5C164.698 56.5 162.403 57.525 160.491 59.5425L87.07 137.002L57.4234 105.725L57.0605 106.069L57.4234 105.725C55.5136 103.71 53.2484 102.682 50.6482 102.682C49.3216 102.682 48.0534 102.969 46.8485 103.54C45.7047 104.049 44.6841 104.779 43.7875 105.725L44.1504 106.069L43.7875 105.725C42.9438 106.615 42.2574 107.689 41.7241 108.939Z"
      fill={blueprintsDocsTokens.color.illustration["00"]}
      stroke={blueprintsDocsTokens.color.illustration[40]}
    />
    <rect x="0.5" y="0.5" width="217" height="217" rx="108.5" stroke={blueprintsDocsTokens.color.illustration[40]} />
  </svg>
);

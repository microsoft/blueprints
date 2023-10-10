import { type FC, useId } from 'react';
import * as React from 'react';
import { blueprintsDocsTokens } from '../../../components/theme';

export const TypographyIllustration: FC<{ className?: string }> = ({ className }) => (
  <svg
    width="399"
    height="91"
    viewBox="0 0 399 91"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <line
      x1="0.228638"
      y1="88.5643"
      x2="398.786"
      y2="88.5644"
      stroke="url(#paint0_linear_1_501)"
      strokeOpacity="0.6"
    />
    <line
      x1="0.228638"
      y1="26.5643"
      x2="398.786"
      y2="26.5644"
      stroke="url(#paint1_linear_1_501)"
      strokeOpacity="0.6"
    />
    <path
      d="M210.975 88.5514H211.694L211.444 87.8773L179.275 1.3258L179.153 1H178.806H162.631H162.284L162.163 1.32466L129.752 87.8761L129.499 88.5514H130.22H145.912H146.271L146.386 88.2123L153.755 66.5213H187.083L194.751 88.2181L194.869 88.5514H195.222H210.975ZM169.503 19.9462C169.807 19.0326 170.09 17.9059 170.354 16.5696C170.625 18.0112 170.889 19.1373 171.148 19.9411L171.147 19.9411L171.151 19.9524L182.931 53.8121H157.839L169.501 19.9509L169.503 19.9462ZM268.795 88.5514H269.295V88.0514V47.8539C269.295 40.0894 267.323 34.1747 263.291 30.2054C259.261 26.2376 253.258 24.2977 245.377 24.2977C236.769 24.2977 229.154 26.2477 222.55 30.1618L222.305 30.307V30.5919V42.8443V43.9314L223.13 43.2239C228.96 38.2268 235.485 35.7394 242.722 35.7394C246.822 35.7394 249.808 36.8175 251.774 38.8882C253.679 40.8939 254.705 43.9109 254.772 48.0237L236.858 50.5577L236.856 50.5579C230.073 51.5328 224.916 53.7458 221.453 57.2501C217.981 60.7636 216.269 65.5182 216.269 71.4534C216.269 77 218.02 81.5031 221.552 84.9106L221.554 84.9126C225.131 88.323 230.035 90 236.203 90C244.202 90 250.387 86.5793 254.715 79.786V88.0514V88.5514H255.215H268.795ZM242.364 59.9986L242.368 59.9979L254.775 58.2667V63.0638C254.775 67.498 253.406 71.1542 250.685 74.0697L250.685 74.0699C248.008 76.9407 244.622 78.3772 240.489 78.3772C237.442 78.3772 235.056 77.579 233.277 76.0297C231.538 74.4396 230.668 72.4244 230.668 69.9445C230.668 66.4471 231.648 64.1468 233.472 62.8698L233.474 62.8687C235.431 61.4874 238.376 60.5169 242.364 59.9986Z"
      fill={blueprintsDocsTokens.color.illustration[10]}
      stroke={blueprintsDocsTokens.color.illustration[40]}
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_501"
        x1="398.786"
        y1="89.0697"
        x2="0.228638"
        y2="89.0677"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={blueprintsDocsTokens.color.illustration[40]} stopOpacity="0" />
        <stop offset="0.296875" stopColor={blueprintsDocsTokens.color.illustration[40]} />
        <stop offset="0.6875" stopColor={blueprintsDocsTokens.color.illustration[40]} />
        <stop offset="1" stopColor={blueprintsDocsTokens.color.illustration[40]} stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1_501"
        x1="398.786"
        y1="27.0697"
        x2="0.228638"
        y2="27.0677"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={blueprintsDocsTokens.color.illustration[40]} stopOpacity="0" />
        <stop offset="0.296875" stopColor={blueprintsDocsTokens.color.illustration[40]} />
        <stop offset="0.6875" stopColor={blueprintsDocsTokens.color.illustration[40]} />
        <stop offset="1" stopColor={blueprintsDocsTokens.color.illustration[40]} stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

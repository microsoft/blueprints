# Hook usePrefersColorScheme

**usePrefersColorScheme returns a value of prefers-color-scheme media query. Based on Media Queries Level 5: 11.5. Detecting the desire for light or dark color schemes: the prefers-color-scheme feature.**

## Get Started

```sh
npm i @arbutus/hook.use-prefers-color-scheme
```

```ts
import { usePrefersColorScheme } from '@arbutus/hook.use-prefers-color-scheme';
```

## Usage

```tsx
const MyComponent = () => {
  const preferredTheme = usePrefersColorScheme(); // "light" | "dark" | undefined
  return <div>{preferredTheme === 'light' ? 'light' : 'dark'</div>;
};
```

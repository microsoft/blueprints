# Hook: useCSSVars

**useCSSVars takes an object of theme values, generates CSS variables from them, and injects them into the document.**

## Get Started

```sh
npm i @arbutus/hook.use-css-vars
```

```tsx
import { useCSSVars } from '@arbutus/hook.use-css-vars';
```

## Usage
-  `theme` An object of theme values. An object can be nested (e.g. `color.button.primary: #fff` will translate to `--color-button-primary: #fff`).
- `prefix` A string to prefix all CSS variables with. This is an optional parameter, but it is recommended to use it to avoid CSS variable collisions.


```tsx
const theme = {
  color: {
    button: {
      primary: '#fff',
      secondary: '#000',
    }
  }
}

const MyAppShell = () => {
  // Injects CSS variables into the document.
  useCSSVars({ theme, prefix: 'MY_APP' });

  return (<div>...</div>);
}
```

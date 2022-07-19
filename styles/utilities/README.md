# Style: Utilities

**Collection of utilities for styling with Griffel.**

## Get Started

```sh
npm i @arbutus/style.utilities
```

## Usage

### mapToStyles

**mapToStyles is designed to help generating styles variants. It generates Griffel classes from a map of values.**

```tsx
import { mapToStyles } from "@arbutus/style.utilities";
```

#### Parameters

- `map` An object, where the key will become a class name, and the value will be passed to the `styleFunction`.
- `styleFunction` A function that takes the value from the `map` and returns a `GriffelStyle`.

#### Returns

An object with keys from the map and values as GriffelStyle returned by the `styleFunction`.

#### Example

##### Step 1: Create a map of variants for your component.

```tsx
type ColorValue = string;
const textColors = { primary: 'red', secondary: 'blue' }
const textStyleFunction = (color: ColorValue) => ({
  color,
  '&:visited': { color }
})
const textColorClasses = mapToStyles<ColorValue, typeof textColors>(textColors, textStyleFunction);
// Output
// {
//   primary: {
//     color: 'red',
//     '&:visited: { color: 'red'}}
//   },
//   secondary: {
//     color: 'blue',
//     '&:visited: { color: 'blue'}}
//   },
// }
```

##### Step 2: Pass to the `makeStyles()` function.

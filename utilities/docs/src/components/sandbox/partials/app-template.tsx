export const app = `import Component from './component';
import { Theme } from './theme';
import { Centered } from './centered';

export default function App() {
  return (
    <Theme>
      <Centered>
        <Component />
      </Centered>
    </Theme>
  )
}`;
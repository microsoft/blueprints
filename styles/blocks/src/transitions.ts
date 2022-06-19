export const defaultTransition = ({ property = 'all' }) => ({
  transitionProperty: property,
  transitionDuration: 'var(--transition-duration)',
  transitionTimingFunction: 'var(--transition-timing-function)',
});

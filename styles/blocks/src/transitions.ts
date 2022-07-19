export const defaultTransition = ({ property = 'all' }) => ({
  transitionProperty: property,
  transitionDuration: tokens.durationNormal,
  transitionTimingFunction: tokens.curveEasyEase,
});

"use strict";(self.webpackChunkarbutus_docs=self.webpackChunkarbutus_docs||[]).push([[2241],{92241:function(n,e,o){o.r(e),e.default='import { tokens } from \'@fluentui/react-theme\';\nimport { makeStyles } from \'@griffel/react\';\nimport { Badge } from \'@microsoft/arbutus.badge\';\nimport * as React from \'react\';\n\nconst containerStyles = makeStyles({\n  root: {\n    display: \'flex\',\n    columnGap: tokens.spacingHorizontalL,\n  },\n});\n\nconst ExampleComponent = () => {\n  const classes = containerStyles();\n\n  return (\n    <div className={classes.root}>\n      <Badge color="primary" iconName="code" />\n      <Badge color="secondary" iconName="code" />\n      <Badge color="tertiary" iconName="code" />\n      <Badge color="quaternary" iconName="code" />\n      <Badge color="positive" iconName="check" />\n      <Badge color="negative" iconName="x" />\n      <Badge color="accent" iconName="exclamation" />\n      <Badge color="info" iconName="exclamation" />\n      <Badge color="warning" iconName="exclamation" />\n      <Badge color="danger" iconName="exclamation" />\n    </div>\n  );\n};\n\nexport default ExampleComponent;\n'}}]);
//# sourceMappingURL=2241-f7cccc5949bd44ededdd.js.map
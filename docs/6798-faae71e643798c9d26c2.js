"use strict";(self.webpackChunkarbutus_docs=self.webpackChunkarbutus_docs||[]).push([[6798],{56798:function(n,e,t){t.r(e),e.default='import { tokens } from \'@fluentui/react-theme\';\nimport { makeStyles } from \'@griffel/react\';\nimport { Icon } from \'@microsoft/arbutus.icon\';\nimport { Text } from \'@microsoft/arbutus.text\';\nimport * as React from \'react\';\n\nconst useContainerStyles = makeStyles({\n  root: {\n    display: \'flex\',\n    columnGap: tokens.spacingHorizontalL,\n  },\n});\n\nconst ExampleComponent = () => {\n  const classes = useContainerStyles();\n\n  return (\n    <div className={classes.root}>\n      <Text variant="caption">\n        <Icon iconName="moon" size="small" isInline />\n        &ensp;Small\n      </Text>\n      <Text variant="caption">\n        <Icon iconName="moon" isInline />\n        &ensp;Medium (default)\n      </Text>\n      <Text variant="caption">\n        <Icon iconName="moon" size="large" isInline />\n        &ensp;Large\n      </Text>\n    </div>\n  );\n};\n\nexport default ExampleComponent;\n'}}]);
//# sourceMappingURL=6798-faae71e643798c9d26c2.js.map
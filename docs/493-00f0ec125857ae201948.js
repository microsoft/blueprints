"use strict";(self.webpackChunkarbutus_docs=self.webpackChunkarbutus_docs||[]).push([[493],{3493:function(n,t,o){o.r(t),t.default="import * as React from 'react';\nimport { Button } from '@microsoft/arbutus.button';\nimport { makeStyles } from '@griffel/react';\nimport { tokens } from '@fluentui/react-theme';\n\nconst containerStyles = makeStyles({\n  root: {\n    display: 'flex',\n    alignItems: 'center',\n    columnGap: tokens.spacingHorizontalM,\n  },\n});\n\nconst ExampleComponent = () => {\n  const classes = containerStyles();\n\n  return (\n    <div className={classes.root}>\n      <Button color=\"secondary\" size=\"small\">\n        Small\n      </Button>\n      <Button color=\"secondary\" size=\"medium\">\n        Medium\n      </Button>\n      <Button color=\"secondary\" size=\"large\">\n        Large\n      </Button>\n    </div>\n  );\n};\n\nexport default ExampleComponent;\n"}}]);
//# sourceMappingURL=493-00f0ec125857ae201948.js.map
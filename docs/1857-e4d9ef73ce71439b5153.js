"use strict";(self.webpackChunkarbutus_docs=self.webpackChunkarbutus_docs||[]).push([[1857],{1857:function(n,o,c){c.r(o),o.default='import * as React from \'react\';\nimport { IconButton } from \'@microsoft/arbutus.icon-button\';\nimport { makeStyles } from \'@griffel/react\';\nimport { tokens } from \'@fluentui/react-theme\';\n\nconst useContainerStyles = makeStyles({\n  root: {\n    display: \'flex\',\n    columnGap: tokens.spacingHorizontalM,\n  },\n});\n\nconst ExampleComponent = () => {\n  const classes = useContainerStyles();\n  const handleOnClick = () => {\n    /** Action */\n  };\n\n  return (\n    <div className={classes.root}>\n      <IconButton iconName="x" label="close" onClick={handleOnClick} color="primary" />\n      <IconButton iconName="x" label="close" onClick={handleOnClick} color="secondary" />\n      <IconButton iconName="x" label="close" onClick={handleOnClick} color="info" />\n      <IconButton iconName="x" label="close" onClick={handleOnClick} color="danger" />\n      <IconButton iconName="x" label="close" onClick={handleOnClick} color="warning" />\n      <IconButton iconName="x" label="close" onClick={handleOnClick} color="success" />\n      <IconButton iconName="x" label="close" onClick={handleOnClick} color="accent" />\n    </div>\n  );\n};\n\nexport default ExampleComponent;\n'}}]);
//# sourceMappingURL=1857-e4d9ef73ce71439b5153.js.map
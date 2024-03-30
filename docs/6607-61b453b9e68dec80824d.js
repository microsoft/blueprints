"use strict";(self.webpackChunkarbutus_docs=self.webpackChunkarbutus_docs||[]).push([[6607],{46607:function(e,t,i){i.r(t),t.default='import * as React from \'react\';\nimport { Text } from \'@microsoft/arbutus.text\';\nimport { Divider } from \'@microsoft/arbutus.divider\';\nimport { useSpaceStyles } from \'@microsoft/arbutus.use-space-styles\';\nimport { makeStyles, shorthands } from \'@griffel/react\';\nimport { tokens } from \'@fluentui/react-theme\';\nimport { arbutusTokens } from \'@microsoft/arbutus.theming\';\n\nconst useExampleComponentStyles = makeStyles({\n  grid: {\n    display: \'grid\',\n    gridTemplateColumns: \'repeat(2, 1fr)\',\n    columnGap: \'1rem\',\n  },\n  image: {\n    ...shorthands.borderRadius(arbutusTokens.shape.borderRadius),\n    width: \'100%\',\n    backgroundColor: tokens.colorNeutralBackground4,\n    height: \'12rem\',\n    marginBottom: tokens.spacingVerticalL,\n  },\n});\n\nconst ExampleComponent = () => {\n  const classes = useExampleComponentStyles();\n  const space = useSpaceStyles();\n\n  return (\n    <main>\n      <Text block as="h1" variant="jumbo" className={space.my8}>\n        Jumbo\n      </Text>\n      <Text block as="h2" variant="title" className={space.my4}>\n        Title\n      </Text>\n      <Text block as="p" variant="leading">\n        Leading Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi\n        eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus\n        temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit\n        iusto.\n      </Text>\n\n      <Divider className={space.my8} />\n\n      <Text block as="h3" variant="subtitle" className={space.mb2}>\n        Subheading\n      </Text>\n      <Text block as="p" variant="leading">\n        Leading Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi\n        eveniet dolorum <Text variant="code">code</Text> assumenda similique a voluptas\n        voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit,\n        architecto optio sit iusto.\n      </Text>\n\n      <Divider className={space.my8} />\n\n      <Text block as="h4" variant="headline" className={space.my4}>\n        Headline\n      </Text>\n      <Text block as="p" variant="paragraph" className={space.mb8}>\n        Paragraph Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate\n        modi eveniet dolorum officiis <Text variant="code">code</Text> similique a\n        voluptas voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt\n        suscipit, architecto optio sit iusto.\n      </Text>\n      <div className={classes.grid}>\n        <article>\n          <div className={classes.image}>&nbsp;</div>\n          <Text block variant="caption" className={space.mb2}>\n            Caption\n          </Text>\n          <Text block variant="description">\n            Description. Culpa animi labore molestiae nesciunt suscipit. Similique a\n            voluptas voluptatum ducimus temporibus.\n          </Text>\n        </article>\n        <article>\n          <div className={classes.image}>&nbsp;</div>\n          <Text block variant="caption" className={space.my2}>\n            Caption\n          </Text>\n          <Text block variant="description">\n            Description. Culpa animi labore molestiae nesciunt suscipit. Sit amet\n            consectetur adipisicing elit. Cupiditate modi eveniet dolorum.\n          </Text>\n        </article>\n      </div>\n    </main>\n  );\n};\n\nexport default ExampleComponent;\n'}}]);
//# sourceMappingURL=6607-61b453b9e68dec80824d.js.map
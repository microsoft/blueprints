<<<<<<< HEAD:docs/component-preview-__dev__-component-preview-stories.fa41ff73.iframe.bundle.js
"use strict";(self.webpackChunkarbutus=self.webpackChunkarbutus||[]).push([[456],{"./.storybook/decorators/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Centered});__webpack_require__("./node_modules/react/index.js");const useCenteredClasses=(0,__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js").Z)({root:{minHeight:"100vh",width:"100%",display:"grid",alignItems:"center",justifyItems:"center"}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Centered=({children})=>{const classes=useCenteredClasses();return(0,jsx_runtime.jsx)("div",{className:classes.root,children})};Centered.displayName="Centered";try{Centered.displayName="Centered",Centered.__docgenInfo={description:"",displayName:"Centered",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/decorators/centered.tsx#Centered"]={docgenInfo:Centered.__docgenInfo,name:"Centered",path:".storybook/decorators/centered.tsx#Centered"})}catch(__react_docgen_typescript_loader_error){}},"./components/button/lib/button/button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),map_to_styles=__webpack_require__("./styles/utilities/lib/map-to-styles.js");const colorMap={primary:{foreground:tokens.T.colorBrandForeground1,stroke:tokens.T.colorBrandForeground2,background:tokens.T.colorBrandBackground2},secondary:{foreground:tokens.T.colorNeutralForeground1,stroke:tokens.T.colorNeutralStroke1,background:tokens.T.colorNeutralBackground3},danger:{foreground:tokens.T.colorPaletteDarkOrangeForeground1,stroke:tokens.T.colorPaletteDarkOrangeBorder1,background:tokens.T.colorPaletteDarkOrangeBackground1},warning:{foreground:tokens.T.colorPaletteMarigoldForeground1,stroke:tokens.T.colorPaletteMarigoldBorder1,background:tokens.T.colorPaletteMarigoldBackground1},success:{foreground:tokens.T.colorPaletteGreenForeground1,stroke:tokens.T.colorPaletteGreenBorder1,background:tokens.T.colorPaletteGreenBackground1}},colorPillClasses=(0,map_to_styles.f)(colorMap,(({foreground,background,stroke})=>({color:foreground,borderTopColor:stroke,borderRightColor:stroke,borderLeftColor:stroke,borderBottomColor:stroke,"&:focus-visible, &:hover":{backgroundColor:background,boxShadow:`0 0 2px ${background}, 0 8px 16px ${background}, inset 0 0 0px 0.5px ${stroke}`}}))),{primary,...restColors}=colorMap,colorBrickClasses=(0,map_to_styles.f)(restColors,(({foreground,background,stroke})=>({backgroundColor:background,color:foreground,borderTopColor:stroke,borderRightColor:stroke,borderLeftColor:stroke,borderBottomColor:stroke,"&:focus-visible, &:hover":{boxShadow:`0 0 2px ${background}, 0 8px 16px ${background}, inset 0 0 0px 0.5px ${stroke}`}}))),sizeMap={small:{x:tokens.T.spacingHorizontalM,y:tokens.T.spacingVerticalXS,fontSize:tokens.T.fontSizeBase300},medium:{x:tokens.T.spacingHorizontalL,y:tokens.T.spacingVerticalS,fontSize:tokens.T.fontSizeBase300},large:{x:tokens.T.spacingHorizontalXXL,y:tokens.T.spacingVerticalM,fontSize:tokens.T.fontSizeBase400}},sizeClasses=(0,map_to_styles.f)(sizeMap,(({y,x,fontSize})=>({paddingLeft:x,paddingRight:x,paddingTop:y,paddingBottom:y,fontSize}))),sizePillClasses=(0,map_to_styles.f)(sizeMap,(({x,fontSize})=>({borderTopLeftRadius:`calc(${x} * 2 + ${fontSize})`,borderTopRightRadius:`calc(${x} * 2 + ${fontSize})`,borderBottomLeftRadius:`calc(${x} * 2 + ${fontSize})`,borderBottomRightRadius:`calc(${x} * 2 + ${fontSize})`}))),useButtonStyles=(0,makeStyles_esm.Z)({root:{cursor:"pointer",transitionProperty:"all",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,fontWeight:tokens.T.fontWeightSemibold,borderTopStyle:"solid",borderBottomStyle:"solid",borderLeftStyle:"solid",borderRightStyle:"solid",borderTopWidth:tokens.T.strokeWidthThin,borderBottomWidth:tokens.T.strokeWidthThin,borderLeftWidth:tokens.T.strokeWidthThin,borderRightWidth:tokens.T.strokeWidthThin,boxShadow:"0 0 2px transparent, 0 8px 16px transparent","@media (prefers-reduced-motion)":{transitionDuration:"0ms"},"&:focus-visible":{outlineStyle:"none",outlineColor:"transparent"}},pill:{backgroundColor:"transparent"},brick:{borderTopLeftRadius:tokens.T.borderRadiusMedium,borderTopRightRadius:tokens.T.borderRadiusMedium,borderBottomLeftRadius:tokens.T.borderRadiusMedium,borderBottomRightRadius:tokens.T.borderRadiusMedium},...sizeClasses}),useButtonPillStyles=(0,makeStyles_esm.Z)({...colorPillClasses,...sizePillClasses}),useButtonBrickStyles=(0,makeStyles_esm.Z)({primary:{color:tokens.T.colorNeutralBackground1,backgroundColor:tokens.T.colorBrandForegroundInverted,borderTopColor:tokens.T.colorBrandForegroundInverted,borderRightColor:tokens.T.colorBrandForegroundInverted,borderLeftColor:tokens.T.colorBrandForegroundInverted,borderBottomColor:tokens.T.colorBrandForegroundInverted,"&:focus-visible, &:hover":{backgroundColor:tokens.T.colorBrandForegroundInvertedHover,boxShadow:`0 0 2px ${colorMap.primary.foreground}, 0 8px 16px ${colorMap.primary.background}`}},...colorBrickClasses}),Button=({className,color="primary",size="medium",shape="brick",children,...rest})=>{const classes=useButtonStyles(),brickClasses=useButtonBrickStyles(),pillClasses=useButtonPillStyles(),isBrick="brick"===shape,isPill="pill"===shape;return react.createElement("button",{className:(0,mergeClasses_esm.z)(classes.root,classes[size],isBrick&&brickClasses[color],isBrick&&classes.brick,isPill&&classes.pill,isPill&&pillClasses[color],isPill&&pillClasses[size],className),...rest},children)};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},shape:{defaultValue:{value:"'brick'",computed:!1},required:!1}}}},"./components/component-preview/__dev__/component-preview.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AccessingPreviewTheme:()=>AccessingPreviewTheme,Simple:()=>Simple,WithMenu:()=>WithMenu,__namedExportsOrder:()=>__namedExportsOrder,default:()=>component_preview_stories});var text_text=__webpack_require__("./components/text/lib/text/text.js"),use_space_styles=__webpack_require__("./hooks/use-space-styles/lib/use-space-styles.js"),react=__webpack_require__("./node_modules/react/index.js"),decorators=__webpack_require__("./.storybook/decorators/index.ts"),Select=__webpack_require__("./node_modules/@fluentui/react-select/lib/components/Select/Select.js"),mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),button_button=__webpack_require__("./components/button/lib/button/button.js"),icon=__webpack_require__("./components/icon/lib/icon/icon.js"),use_theme=__webpack_require__("./styles/theming/lib/use-theme.js"),use_copy_to_clipboard=__webpack_require__("./hooks/use-copy-to-clipboard/lib/use-copy-to-clipboard/use-copy-to-clipboard.js"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),default_highlight=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),solarized_dark=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/solarized-dark.js"),solarized_light=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/solarized-light.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),index_esm=__webpack_require__("./node_modules/@griffel/core/index.esm.js");const useComponentPreviewStyles=(0,makeStyles_esm.Z)({root:{borderTopStyle:"solid",borderBottomStyle:"solid",borderLeftStyle:"solid",borderRightStyle:"solid",borderTopColor:tokens.T.colorNeutralStroke1,borderBottomColor:tokens.T.colorNeutralStroke1,borderLeftColor:tokens.T.colorNeutralStroke1,borderRightColor:tokens.T.colorNeutralStroke1,borderTopWidth:tokens.T.strokeWidthThin,borderBottomWidth:tokens.T.strokeWidthThin,borderLeftWidth:tokens.T.strokeWidthThin,borderRightWidth:tokens.T.strokeWidthThin,...index_esm.q5.borderRadius(tokens.T.borderRadiusMedium),overflowX:"hidden",overflowY:"hidden"},previewHeader:{paddingTop:tokens.T.spacingVerticalM,paddingBottom:tokens.T.spacingVerticalM,paddingLeft:tokens.T.spacingHorizontalM,paddingRight:tokens.T.spacingHorizontalM,display:"flex",alignItems:"center",justifyContent:"flex-end",columnGap:tokens.T.spacingHorizontalM,borderBottomStyle:"solid",borderBottomWidth:tokens.T.strokeWidthThin,borderBottomColor:tokens.T.colorNeutralStroke1},menuItem:{minWidth:"124px","& select":{height:"26px"}},menuItemIcon:{color:tokens.T.colorNeutralForeground2},menuItemIconSuccess:{color:tokens.T.colorPaletteGreenForeground1},menuItemButton:{display:"flex",columnGap:tokens.T.spacingHorizontalS},codeSection:{backgroundColor:tokens.T.colorNeutralBackground3,maxHeight:"580px",overflowY:"auto"},codeHeader:{paddingTop:tokens.T.spacingVerticalM,paddingBottom:tokens.T.spacingVerticalM,paddingLeft:tokens.T.spacingHorizontalM,paddingRight:tokens.T.spacingHorizontalM,display:"flex",alignItems:"center",justifyContent:"flex-end",columnGap:tokens.T.spacingHorizontalM}});var motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),use_reduced_motion=__webpack_require__("./node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const slideVariants=({shouldReduceMotion})=>({expanded:{height:"auto",transition:{ease:"easeOut",duration:shouldReduceMotion?0:.2}},collapsed:{height:0,transition:{delay:shouldReduceMotion?0:.075,ease:"easeOut",duration:shouldReduceMotion?0:.2}}}),SlideMotion=({children,isCollapsed,className})=>(0,jsx_runtime.jsx)(motion.E.section,{initial:isCollapsed?"collapsed":"expanded",animate:"expanded",exit:"collapsed",variants:slideVariants({shouldReduceMotion:(0,use_reduced_motion.J)()}),className,children});SlideMotion.displayName="SlideMotion";const fadeVariants=({shouldReduceMotion})=>({expanded:{opacity:1,top:"0",transition:{delay:shouldReduceMotion?0:.125,ease:"easeOut",duration:shouldReduceMotion?0:.15}},collapsed:{opacity:0,top:"-4px",transition:{ease:"easeOut",duration:shouldReduceMotion?0:.15}}}),FadeMotion=({children,isCollapsed})=>(0,jsx_runtime.jsx)(motion.E.div,{style:{position:"relative"},initial:isCollapsed?"collapsed":"expanded",animate:"expanded",exit:"collapsed",variants:fadeVariants({shouldReduceMotion:(0,use_reduced_motion.J)()}),children});FadeMotion.displayName="FadeMotion";try{SlideMotion.displayName="SlideMotion",SlideMotion.__docgenInfo={description:"",displayName:"SlideMotion",props:{isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/component-preview/src/component-preview/motion.tsx#SlideMotion"]={docgenInfo:SlideMotion.__docgenInfo,name:"SlideMotion",path:"components/component-preview/src/component-preview/motion.tsx#SlideMotion"})}catch(__react_docgen_typescript_loader_error){}try{FadeMotion.displayName="FadeMotion",FadeMotion.__docgenInfo={description:"",displayName:"FadeMotion",props:{isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/component-preview/src/component-preview/motion.tsx#FadeMotion"]={docgenInfo:FadeMotion.__docgenInfo,name:"FadeMotion",path:"components/component-preview/src/component-preview/motion.tsx#FadeMotion"})}catch(__react_docgen_typescript_loader_error){}const syntaxHighlighterCustomStyles={backgroundColor:tokens.T.colorNeutralBackground3,marginTop:0,marginBottom:0,paddingTop:tokens.T.spacingVerticalL,paddingBottom:tokens.T.spacingVerticalL,paddingLeft:tokens.T.spacingHorizontalM,paddingRight:tokens.T.spacingHorizontalM},ComponentPreview=({className,code,codeLanguage="tsx",component:Component,defaultThemeIndex=0,onFullScreen,onLiveEdit,onThemeChange:onThemeChangeProp,themes,themeSwitcherLabel="Theme",wrapper:Wrapper=(({children})=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children}))})=>{const classes=useComponentPreviewStyles(),[themeKey,setThemeKey]=(0,react.useState)(themes?.[defaultThemeIndex].value);(0,react.useEffect)((()=>{onThemeChangeProp&&themeKey&&onThemeChangeProp(themeKey)}),[themeKey,onThemeChangeProp]);const[isShowingCode,setIsShowingCode]=(0,react.useState)(!1),{themeKey:globalThemeKey}=(0,use_theme.F)(),isDarkTheme="dark"===globalThemeKey,{copy,isCopied}=(0,use_copy_to_clipboard.m)({});return(0,jsx_runtime.jsxs)("div",{className:(0,mergeClasses_esm.z)(classes.root,className),children:[(themeKey||code||onFullScreen)&&(0,jsx_runtime.jsxs)("div",{className:classes.previewHeader,children:[themeKey&&(0,jsx_runtime.jsx)(Select.P,{title:themeSwitcherLabel,onChange:event=>{const value=event.target.value;setThemeKey(value)},className:classes.menuItem,size:"small",value:themeKey,children:themes?.map((({label,value})=>(0,jsx_runtime.jsx)("option",{value,children:label},value)))}),code&&(0,jsx_runtime.jsxs)(button_button.z,{size:"small",color:"secondary",onClick:()=>setIsShowingCode(!isShowingCode),className:(0,mergeClasses_esm.z)(classes.menuItem,classes.menuItemButton),children:[(0,jsx_runtime.jsx)(icon.J,{iconName:"code",className:classes.menuItemIcon}),isShowingCode?"Hide":"Show"," code"]}),onFullScreen&&(0,jsx_runtime.jsxs)(button_button.z,{size:"small",color:"secondary",onClick:onFullScreen,className:(0,mergeClasses_esm.z)(classes.menuItem,classes.menuItemButton),children:[(0,jsx_runtime.jsx)(icon.J,{iconName:"full-screen",className:classes.menuItemIcon}),"Full screen"]})]}),(0,jsx_runtime.jsx)(Wrapper,{themeKey,children:(0,jsx_runtime.jsx)(Component,{})}),(0,jsx_runtime.jsx)(AnimatePresence.M,{children:code&&isShowingCode&&(0,jsx_runtime.jsx)(SlideMotion,{isCollapsed:isShowingCode,className:classes.codeSection,children:(0,jsx_runtime.jsxs)(FadeMotion,{isCollapsed:isShowingCode,children:[(0,jsx_runtime.jsxs)("div",{className:classes.codeHeader,children:[onLiveEdit&&(0,jsx_runtime.jsxs)(button_button.z,{size:"small",color:"secondary",onClick:onLiveEdit,className:(0,mergeClasses_esm.z)(classes.menuItem,classes.menuItemButton),children:[(0,jsx_runtime.jsx)(icon.J,{iconName:"full-screen",className:classes.menuItemIcon}),"Edit in sandbox"]}),(0,jsx_runtime.jsxs)(button_button.z,{color:"secondary",size:"small",className:classes.menuItemButton,onClick:()=>copy(code??""),children:[(0,jsx_runtime.jsx)(icon.J,{iconName:isCopied?"check":"copy",className:isCopied?classes.menuItemIconSuccess:classes.menuItemIcon}),"Copy"]})]}),(0,jsx_runtime.jsx)(default_highlight.Z,{language:codeLanguage,showLineNumbers:!0,style:isDarkTheme?solarized_dark.Z:solarized_light.Z,customStyle:syntaxHighlighterCustomStyles,children:code})]})})})]})};ComponentPreview.displayName="ComponentPreview";try{ComponentPreview.displayName="ComponentPreview",ComponentPreview.__docgenInfo={description:"",displayName:"ComponentPreview",props:{className:{defaultValue:null,description:"Consumer provided class.",name:"className",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"Component to render in the preview.",name:"component",required:!0,type:{name:"ElementType"}},wrapper:{defaultValue:{value:"({ children }) => <>{children}</>"},description:"Wrapper for the component. Use it to set up theme, context, custom styles, etc. See `themeKey` prop for info on how to change the theme.\n@example ({ children, currentThemeKey }) => <ThemeProvider theme={currentThemeKey}>{children}</ThemeProvider>",name:"wrapper",required:!1,type:{name:"({ children, themeKey }: WrapperProps) => ReactElement<any, any>"}},themes:{defaultValue:null,description:"Themes to be passed to the wrapper, if you want to add theme switcher.",name:"themes",required:!1,type:{name:"{ label: string; value: string; }[]"}},defaultThemeIndex:{defaultValue:{value:"0"},description:"Default theme in the themes array to be used in theme switcher.",name:"defaultThemeIndex",required:!1,type:{name:"number"}},themeSwitcherLabel:{defaultValue:{value:"Theme"},description:"Label for the theme switcher select control.",name:"themeSwitcherLabel",required:!1,type:{name:"string"}},code:{defaultValue:null,description:"If you would like to show code implementation of the component, you can pass the string here.",name:"code",required:!1,type:{name:"string"}},codeLanguage:{defaultValue:{value:"tsx"},description:"Code language to be used for syntax highlighting.",name:"codeLanguage",required:!1,type:{name:"string"}},onFullScreen:{defaultValue:null,description:"If you want to render a button to open the preview in full screen, provide an on click handler for it here.\n@example () => window.open('https://bit.dev/bit/base-ui/preview', '_blank')",name:"onFullScreen",required:!1,type:{name:"() => void"}},onLiveEdit:{defaultValue:null,description:"If you want to render a button to open the preview in live edit mode, provide an on click handler for it here.\n@example () => window.open('https://bit.dev/bit/base-ui/edit', '_blank')",name:"onLiveEdit",required:!1,type:{name:"() => void"}},onThemeChange:{defaultValue:null,description:"If you need to access the currently selected theme, you can pass a callback here.\n@example ```tsx\nconst [currentTheme, setCurrentTheme] = React.useState<string>();\nconst onThemeChange = (theme: string) => setCurrentTheme(theme);\n```",name:"onThemeChange",required:!1,type:{name:"(themeKey: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/component-preview/src/component-preview/component-preview.tsx#ComponentPreview"]={docgenInfo:ComponentPreview.__docgenInfo,name:"ComponentPreview",path:"components/component-preview/src/component-preview/component-preview.tsx#ComponentPreview"})}catch(__react_docgen_typescript_loader_error){}const example_component_raw="import { mergeClasses } from '@griffel/react';\nimport { Text } from '@microsoft/arbutus.text';\nimport { Tile } from '@microsoft/arbutus.tile';\nimport { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';\nimport * as React from 'react';\n\nexport const ExampleComponent = () => {\n  const space = useSpaceStyles();\n\n  return (\n    <Tile variant=\"card\" className={mergeClasses(space.py9, space.px7)}>\n      <Text variant=\"headline\" className={space.mb7} block>\n        Example Component\n      </Text>\n      <Text variant=\"description\" block>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente voluptas\n        laudantium placeat aliquam eum nesciunt dolorem rerum, quasi ea quisquam natus\n        repellendus! Laudantium expedita laborum natus, earum tenetur quidem?\n      </Text>\n    </Tile>\n  );\n};\n";var tile=__webpack_require__("./components/tile/lib/tile.js");const ExampleComponent=()=>{const space=(0,use_space_styles.z)();return(0,jsx_runtime.jsxs)(tile.n,{variant:"card",className:(0,mergeClasses_esm.z)(space.py9,space.px7),children:[(0,jsx_runtime.jsx)(text_text.x,{variant:"headline",className:space.mb7,block:!0,children:"Example Component"}),(0,jsx_runtime.jsx)(text_text.x,{variant:"description",block:!0,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente voluptas laudantium placeat aliquam eum nesciunt dolorem rerum, quasi ea quisquam natus repellendus! Laudantium expedita laborum natus, earum tenetur quidem?"})]})};ExampleComponent.displayName="ExampleComponent";var theme_provider=__webpack_require__("./styles/theming/lib/theme-provider.js");const useWrapperStyles=(0,makeStyles_esm.Z)({root:{minHeight:"480px",display:"grid",justifyItems:"center",alignItems:"center",height:"100%",paddingTop:"40px",paddingBottom:"40px",paddingLeft:"40px",paddingRight:"40px",backgroundColor:tokens.T.colorNeutralBackground1}}),ExampleWrapper=({children,themeKey})=>{const classes=useWrapperStyles();return(0,jsx_runtime.jsx)(theme_provider.f,{currentThemeKey:themeKey,children:(0,jsx_runtime.jsx)("div",{className:classes.root,children})})};ExampleWrapper.displayName="ExampleWrapper";try{ExampleWrapper.displayName="ExampleWrapper",ExampleWrapper.__docgenInfo={description:"",displayName:"ExampleWrapper",props:{children:{defaultValue:null,description:"Wrapper is going to render the component as children.",name:"children",required:!0,type:{name:"ReactNode"}},themeKey:{defaultValue:null,description:"Wrapper can receive a theme key to change the theme.\n@example 'dark'",name:"themeKey",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/component-preview/__dev__/example-wrapper.tsx#ExampleWrapper"]={docgenInfo:ExampleWrapper.__docgenInfo,name:"ExampleWrapper",path:"components/component-preview/__dev__/example-wrapper.tsx#ExampleWrapper"})}catch(__react_docgen_typescript_loader_error){}const themes=[{value:"light",label:"Light Theme"},{value:"dark",label:"Dark Theme"}],component_preview_stories={title:"Blocks/ComponentPreview",component:ComponentPreview,decorators:[Story=>(0,jsx_runtime.jsx)(decorators.z,{children:(0,jsx_runtime.jsx)("div",{style:{maxWidth:"640px"},children:(0,jsx_runtime.jsx)(Story,{})})})]},Template=args=>(0,jsx_runtime.jsx)(ComponentPreview,{...args});Template.displayName="Template";const Simple=Template.bind({});Simple.args={component:ExampleComponent,wrapper:ExampleWrapper,onFullScreen:void 0};const WithMenu=Template.bind({});WithMenu.args={component:ExampleComponent,wrapper:ExampleWrapper,code:example_component_raw,themes};const AccessingPreviewTheme=(args=>{const space=(0,use_space_styles.z)(),[currentTheme,setCurrentTheme]=(0,react.useState)(),currentThemeLabel=themes.find((theme=>theme.value===currentTheme))?.label;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:space.mb6,children:[(0,jsx_runtime.jsxs)(text_text.x,{variant:"caption",children:[currentThemeLabel," "]}),(0,jsx_runtime.jsx)(text_text.x,{variant:"code",children:currentTheme})]}),(0,jsx_runtime.jsx)(ComponentPreview,{...args,onThemeChange:theme=>{args.onThemeChange?.(theme),setCurrentTheme(theme)}})]})}).bind({});AccessingPreviewTheme.args={component:ExampleComponent,wrapper:ExampleWrapper,code:example_component_raw,themes,defaultThemeIndex:1};const __namedExportsOrder=["Simple","WithMenu","AccessingPreviewTheme"]},"./components/text/lib/text/text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@fluentui/react-text/lib/components/Text/Text.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_text_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/text/lib/text/text.styles.js");const Text=({children,color="primary",variant,className,weight,size,font,...props})=>{const classes=(0,_text_styles__WEBPACK_IMPORTED_MODULE_1__.Ke)();let variantClass="";weight&&size&&font||(variantClass=variant?classes[variant]:classes.paragraph);const rootClasses=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.z)(classes.root,classes[color],variantClass,className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__.x,{weight,size,font,className:rootClasses,...props},children)};Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./components/text/lib/text/text.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AD:()=>variantClasses,Ke:()=>useTextStyles,bG:()=>colorClasses});var _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./styles/utilities/lib/map-to-styles.js");const colorMap={accent:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground1,action:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,primary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground1,secondary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground2,tertiary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3,quaternary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground4,negative:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,positive:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteGreenForeground1,warning:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteMarigoldForeground1,danger:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,info:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,background:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground1},colorClasses=(0,_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__.f)(colorMap,(color=>({color}))),variantClasses={jumbo:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero1000,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero1000,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightBold},title:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero800,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero800,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},subtitle:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero700,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero700,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},headline:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},leading:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},paragraph:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},caption:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},description:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase200,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase200,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular}},useTextStyles=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.Z)({...colorClasses,...variantClasses,root:{..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.margin(0),..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.padding(0)},code:{display:"inline-block",fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyMonospace,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,backgroundColor:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground3,..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.borderRadius(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.borderRadiusSmall),paddingLeft:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS,paddingRight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS}})},"./components/tile/lib/tile.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>Tile});var mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),index_esm=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),map_to_styles=__webpack_require__("./styles/utilities/lib/map-to-styles.js"),themes_tokens=__webpack_require__("./styles/theming/lib/themes/tokens.js");const colorMap={none:"transparent",primary:tokens.T.colorNeutralBackground1,secondary:tokens.T.colorNeutralBackground2,tertiary:tokens.T.colorNeutralBackground3,quaternary:tokens.T.colorNeutralBackground4,tile:tokens.T.colorNeutralBackground6,negative:tokens.T.colorPaletteDarkOrangeBackground1,positive:tokens.T.colorPaletteGreenBackground1,warning:tokens.T.colorPaletteMarigoldBackground1,danger:tokens.T.colorPaletteDarkOrangeBackground1,info:tokens.T.colorNeutralBackground2,accent:tokens.T.colorBrandBackground2},colorClasses=(0,map_to_styles.f)(colorMap,(color=>({backgroundColor:color}))),useTileStyles=(0,makeStyles_esm.Z)({root:{marginTop:0,marginBottom:0,marginLeft:0,marginRight:0},interactive:{...index_esm.q5.borderStyle("none"),...index_esm.q5.borderColor("transparent"),cursor:"pointer",transitionProperty:"all",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,":focus":{outlineColor:tokens.T.colorBrandForeground2}},card:{backgroundColor:tokens.T.colorNeutralBackground1,...index_esm.q5.borderRadius(tokens.T.borderRadiusLarge),boxShadow:tokens.T.shadow4},interactiveCard:{":hover":{boxShadow:tokens.T.shadow16}},image:{backgroundColor:tokens.T.colorNeutralBackground6,...index_esm.q5.borderRadius(themes_tokens.A.shape.borderRadius),backgroundSize:"cover",backgroundPositionX:"center",backgroundPositionY:"center"},solidColor:{...index_esm.q5.borderRadius(themes_tokens.A.shape.borderRadius)},...colorClasses}),isImage=({variant})=>"image"===variant,Tile=({children,variant,as:Root="div",backgroundColor="tile",imageSrc,className,onClick})=>{const classes=useTileStyles();let variantClasses="";switch(!0){case(({variant})=>"card"===variant)({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.card,onClick&&classes.interactive,onClick&&classes.interactiveCard,className);break;case isImage({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.image,onClick&&classes.interactive,className);break;case(({variant})=>"solid-color"===variant)({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.solidColor,onClick&&classes.interactive,classes[backgroundColor],className);break;default:variantClasses=(0,mergeClasses_esm.z)(classes.root,className)}const imageBackground=isImage({variant})?{style:{backgroundImage:`url("${imageSrc??""}")`}}:{};return react.createElement(Root,{className:variantClasses,...imageBackground,onClick},children)};Tile.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1},backgroundColor:{defaultValue:{value:"'tile'",computed:!1},required:!1}}}},"./hooks/use-copy-to-clipboard/lib/use-copy-to-clipboard/use-copy-to-clipboard.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>useCopyToClipboard});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const isBrowser="undefined"!=typeof window,useCopyToClipboard=options=>{const{resetTimeout=2500}=options??{},[isCopied,setIsCopied]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[error,setError]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[status,setStatus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("ready");(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if("ready"===status)return;const timeoutId=setTimeout((()=>{setIsCopied(!1),setError(void 0),setStatus("ready")}),resetTimeout);return()=>clearTimeout(timeoutId)}),[status,resetTimeout]);return{copy:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((text=>{let Clipboard;isBrowser&&(Clipboard=window.navigator.clipboard),Clipboard||(setError("Clipboard API is not supported."),setStatus("error")),Clipboard?.writeText(text).then((()=>{setIsCopied(!0),setStatus("success")})).catch((()=>{setError("Could not copy to clipboard."),setStatus("error")}))}),[]),isCopied,error,status}}},"./hooks/use-space-styles/lib/use-space-styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useSpaceStyles});var makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js");const spaceScale={1:tokens.T.spacingHorizontalXXS,2:tokens.T.spacingHorizontalXS,3:tokens.T.spacingHorizontalSNudge,4:tokens.T.spacingHorizontalS,5:tokens.T.spacingHorizontalMNudge,6:tokens.T.spacingHorizontalM,7:tokens.T.spacingHorizontalL,8:tokens.T.spacingHorizontalXL,9:tokens.T.spacingHorizontalXXL,10:tokens.T.spacingHorizontalXXXL,11:"40px",12:"52px"},spaceEntries=Object.entries(spaceScale),margin=spaceEntries.reduce(((acc,[key,value])=>(acc[`m${key}`]={marginTop:value,marginBottom:value,marginLeft:value,marginRight:value},acc)),{}),marginY=spaceEntries.reduce(((acc,[key,value])=>(acc[`my${key}`]={marginTop:value,marginBottom:value},acc)),{}),marginX=spaceEntries.reduce(((acc,[key,value])=>(acc[`mx${key}`]={marginLeft:value,marginRight:value},acc)),{}),marginTop=spaceEntries.reduce(((acc,[key,value])=>(acc[`mt${key}`]={marginTop:value},acc)),{}),marginBottom=spaceEntries.reduce(((acc,[key,value])=>(acc[`mb${key}`]={marginBottom:value},acc)),{}),marginLeft=spaceEntries.reduce(((acc,[key,value])=>(acc[`ml${key}`]={marginLeft:value},acc)),{}),marginRight=spaceEntries.reduce(((acc,[key,value])=>(acc[`mr${key}`]={marginRight:value},acc)),{}),padding=spaceEntries.reduce(((acc,[key,value])=>(acc[`p${key}`]={paddingTop:value,paddingBottom:value,paddingLeft:value,paddingRight:value},acc)),{}),paddingY=spaceEntries.reduce(((acc,[key,value])=>(acc[`py${key}`]={paddingTop:value,paddingBottom:value},acc)),{}),paddingX=spaceEntries.reduce(((acc,[key,value])=>(acc[`px${key}`]={paddingLeft:value,paddingRight:value},acc)),{}),paddingTop=spaceEntries.reduce(((acc,[key,value])=>(acc[`pt${key}`]={paddingTop:value},acc)),{}),paddingBottom=spaceEntries.reduce(((acc,[key,value])=>(acc[`pb${key}`]={paddingBottom:value},acc)),{}),paddingLeft=spaceEntries.reduce(((acc,[key,value])=>(acc[`pl${key}`]={paddingLeft:value},acc)),{}),paddingRight=spaceEntries.reduce(((acc,[key,value])=>(acc[`pr${key}`]={paddingRight:value},acc)),{}),useSpaceStyles=(0,makeStyles_esm.Z)({...margin,...marginY,...marginX,...marginTop,...marginBottom,...marginLeft,...marginRight,...padding,...paddingBottom,...paddingLeft,...paddingRight,...paddingTop,...paddingX,...paddingY})},"./styles/theming/lib/use-theme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>useTheme});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_theme_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./styles/theming/lib/theme-context.js");const useTheme=()=>{const{theme,themeKey,setTheme}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_theme_context__WEBPACK_IMPORTED_MODULE_1__.N);return{theme,themeKey,setTheme}}}}]);
=======
'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [456],
  {
    './.storybook/decorators/index.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { z: () => Centered });
      __webpack_require__('./node_modules/react/index.js');
      const useCenteredClasses = (0,
      __webpack_require__('./node_modules/@griffel/react/makeStyles.esm.js').Z)({
        root: {
          minHeight: '100vh',
          width: '100%',
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center',
        },
      });
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const Centered = ({ children }) => {
        const classes = useCenteredClasses();
        return (0, jsx_runtime.jsx)('div', { className: classes.root, children });
      };
      Centered.displayName = 'Centered';
      try {
        (Centered.displayName = 'Centered'),
          (Centered.__docgenInfo = {
            description: '',
            displayName: 'Centered',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['.storybook/decorators/centered.tsx#Centered'] = {
              docgenInfo: Centered.__docgenInfo,
              name: 'Centered',
              path: '.storybook/decorators/centered.tsx#Centered',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/button/lib/button/button.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { z: () => Button });
      var mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js'),
        makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        map_to_styles = __webpack_require__('./styles/utilities/lib/map-to-styles.js');
      const colorMap = {
          primary: {
            foreground: tokens.T.colorBrandForeground1,
            stroke: tokens.T.colorBrandForeground2,
            background: tokens.T.colorBrandBackground2,
          },
          secondary: {
            foreground: tokens.T.colorNeutralForeground1,
            stroke: tokens.T.colorNeutralStroke1,
            background: tokens.T.colorNeutralBackground3,
          },
          danger: {
            foreground: tokens.T.colorPaletteDarkOrangeForeground1,
            stroke: tokens.T.colorPaletteDarkOrangeBorder1,
            background: tokens.T.colorPaletteDarkOrangeBackground1,
          },
          warning: {
            foreground: tokens.T.colorPaletteMarigoldForeground1,
            stroke: tokens.T.colorPaletteMarigoldBorder1,
            background: tokens.T.colorPaletteMarigoldBackground1,
          },
          success: {
            foreground: tokens.T.colorPaletteGreenForeground1,
            stroke: tokens.T.colorPaletteGreenBorder1,
            background: tokens.T.colorPaletteGreenBackground1,
          },
        },
        colorPillClasses = (0, map_to_styles.f)(
          colorMap,
          ({ foreground, background, stroke }) => ({
            color: foreground,
            borderTopColor: stroke,
            borderRightColor: stroke,
            borderLeftColor: stroke,
            borderBottomColor: stroke,
            '&:focus-visible, &:hover': {
              backgroundColor: background,
              boxShadow: `0 0 2px ${background}, 0 8px 16px ${background}, inset 0 0 0px 0.5px ${stroke}`,
            },
          }),
        ),
        { primary, ...restColors } = colorMap,
        colorBrickClasses = (0, map_to_styles.f)(
          restColors,
          ({ foreground, background, stroke }) => ({
            backgroundColor: background,
            color: foreground,
            borderTopColor: stroke,
            borderRightColor: stroke,
            borderLeftColor: stroke,
            borderBottomColor: stroke,
            '&:focus-visible, &:hover': {
              boxShadow: `0 0 2px ${background}, 0 8px 16px ${background}, inset 0 0 0px 0.5px ${stroke}`,
            },
          }),
        ),
        sizeMap = {
          small: {
            x: tokens.T.spacingHorizontalM,
            y: tokens.T.spacingVerticalXS,
            fontSize: tokens.T.fontSizeBase300,
          },
          medium: {
            x: tokens.T.spacingHorizontalL,
            y: tokens.T.spacingVerticalS,
            fontSize: tokens.T.fontSizeBase300,
          },
          large: {
            x: tokens.T.spacingHorizontalXXL,
            y: tokens.T.spacingVerticalM,
            fontSize: tokens.T.fontSizeBase400,
          },
        },
        sizeClasses = (0, map_to_styles.f)(sizeMap, ({ y, x, fontSize }) => ({
          paddingLeft: x,
          paddingRight: x,
          paddingTop: y,
          paddingBottom: y,
          fontSize,
        })),
        sizePillClasses = (0, map_to_styles.f)(sizeMap, ({ x, fontSize }) => ({
          borderTopLeftRadius: `calc(${x} * 2 + ${fontSize})`,
          borderTopRightRadius: `calc(${x} * 2 + ${fontSize})`,
          borderBottomLeftRadius: `calc(${x} * 2 + ${fontSize})`,
          borderBottomRightRadius: `calc(${x} * 2 + ${fontSize})`,
        })),
        useButtonStyles = (0, makeStyles_esm.Z)({
          root: {
            cursor: 'pointer',
            transitionProperty: 'all',
            transitionDuration: tokens.T.durationNormal,
            transitionTimingFunction: tokens.T.curveEasyEase,
            fontWeight: tokens.T.fontWeightSemibold,
            borderTopStyle: 'solid',
            borderBottomStyle: 'solid',
            borderLeftStyle: 'solid',
            borderRightStyle: 'solid',
            borderTopWidth: tokens.T.strokeWidthThin,
            borderBottomWidth: tokens.T.strokeWidthThin,
            borderLeftWidth: tokens.T.strokeWidthThin,
            borderRightWidth: tokens.T.strokeWidthThin,
            boxShadow: '0 0 2px transparent, 0 8px 16px transparent',
            '@media (prefers-reduced-motion)': { transitionDuration: '0ms' },
            '&:focus-visible': { outlineStyle: 'none', outlineColor: 'transparent' },
          },
          pill: { backgroundColor: 'transparent' },
          brick: {
            borderTopLeftRadius: tokens.T.borderRadiusMedium,
            borderTopRightRadius: tokens.T.borderRadiusMedium,
            borderBottomLeftRadius: tokens.T.borderRadiusMedium,
            borderBottomRightRadius: tokens.T.borderRadiusMedium,
          },
          ...sizeClasses,
        }),
        useButtonPillStyles = (0, makeStyles_esm.Z)({
          ...colorPillClasses,
          ...sizePillClasses,
        }),
        useButtonBrickStyles = (0, makeStyles_esm.Z)({
          primary: {
            color: tokens.T.colorNeutralBackground1,
            backgroundColor: tokens.T.colorBrandForegroundInverted,
            borderTopColor: tokens.T.colorBrandForegroundInverted,
            borderRightColor: tokens.T.colorBrandForegroundInverted,
            borderLeftColor: tokens.T.colorBrandForegroundInverted,
            borderBottomColor: tokens.T.colorBrandForegroundInverted,
            '&:focus-visible, &:hover': {
              backgroundColor: tokens.T.colorBrandForegroundInvertedHover,
              boxShadow: `0 0 2px ${colorMap.primary.foreground}, 0 8px 16px ${colorMap.primary.background}`,
            },
          },
          ...colorBrickClasses,
        }),
        Button = ({
          className,
          color = 'primary',
          size = 'medium',
          shape = 'brick',
          children,
          ...rest
        }) => {
          const classes = useButtonStyles(),
            brickClasses = useButtonBrickStyles(),
            pillClasses = useButtonPillStyles(),
            isBrick = 'brick' === shape,
            isPill = 'pill' === shape;
          return react.createElement(
            'button',
            {
              className: (0, mergeClasses_esm.z)(
                classes.root,
                classes[size],
                isBrick && brickClasses[color],
                isBrick && classes.brick,
                isPill && classes.pill,
                isPill && pillClasses[color],
                isPill && pillClasses[size],
                className,
              ),
              ...rest,
            },
            children,
          );
        };
      Button.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Button',
        props: {
          color: { defaultValue: { value: "'primary'", computed: !1 }, required: !1 },
          size: { defaultValue: { value: "'medium'", computed: !1 }, required: !1 },
          shape: { defaultValue: { value: "'brick'", computed: !1 }, required: !1 },
        },
      };
    },
    './components/component-preview/__dev__/component-preview.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AccessingPreviewTheme: () => AccessingPreviewTheme,
          Simple: () => Simple,
          WithMenu: () => WithMenu,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => component_preview_stories,
        });
      var text_text = __webpack_require__('./components/text/lib/text/text.js'),
        use_space_styles = __webpack_require__(
          './hooks/use-space-styles/lib/use-space-styles.js',
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        decorators = __webpack_require__('./.storybook/decorators/index.ts'),
        Select = __webpack_require__(
          './node_modules/@fluentui/react-select/lib/components/Select/Select.js',
        ),
        mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        button_button = __webpack_require__('./components/button/lib/button/button.js'),
        icon = __webpack_require__('./components/icon/lib/icon/icon.js'),
        use_theme = __webpack_require__('./styles/theming/lib/use-theme.js'),
        use_copy_to_clipboard = __webpack_require__(
          './hooks/use-copy-to-clipboard/lib/use-copy-to-clipboard/use-copy-to-clipboard.js',
        ),
        AnimatePresence = __webpack_require__(
          './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs',
        ),
        default_highlight = __webpack_require__(
          './node_modules/react-syntax-highlighter/dist/esm/default-highlight.js',
        ),
        solarized_dark = __webpack_require__(
          './node_modules/react-syntax-highlighter/dist/esm/styles/hljs/solarized-dark.js',
        ),
        solarized_light = __webpack_require__(
          './node_modules/react-syntax-highlighter/dist/esm/styles/hljs/solarized-light.js',
        ),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js'),
        makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        index_esm = __webpack_require__('./node_modules/@griffel/core/index.esm.js');
      const useComponentPreviewStyles = (0, makeStyles_esm.Z)({
        root: {
          borderTopStyle: 'solid',
          borderBottomStyle: 'solid',
          borderLeftStyle: 'solid',
          borderRightStyle: 'solid',
          borderTopColor: tokens.T.colorNeutralStroke1,
          borderBottomColor: tokens.T.colorNeutralStroke1,
          borderLeftColor: tokens.T.colorNeutralStroke1,
          borderRightColor: tokens.T.colorNeutralStroke1,
          borderTopWidth: tokens.T.strokeWidthThin,
          borderBottomWidth: tokens.T.strokeWidthThin,
          borderLeftWidth: tokens.T.strokeWidthThin,
          borderRightWidth: tokens.T.strokeWidthThin,
          ...index_esm.q5.borderRadius(tokens.T.borderRadiusMedium),
          overflowX: 'hidden',
          overflowY: 'hidden',
        },
        previewHeader: {
          paddingTop: tokens.T.spacingVerticalM,
          paddingBottom: tokens.T.spacingVerticalM,
          paddingLeft: tokens.T.spacingHorizontalM,
          paddingRight: tokens.T.spacingHorizontalM,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          columnGap: tokens.T.spacingHorizontalM,
          borderBottomStyle: 'solid',
          borderBottomWidth: tokens.T.strokeWidthThin,
          borderBottomColor: tokens.T.colorNeutralStroke1,
        },
        menuItem: { minWidth: '124px', '& select': { height: '26px' } },
        menuItemIcon: { color: tokens.T.colorNeutralForeground2 },
        menuItemIconSuccess: { color: tokens.T.colorPaletteGreenForeground1 },
        menuItemButton: { display: 'flex', columnGap: tokens.T.spacingHorizontalS },
        codeSection: {
          backgroundColor: tokens.T.colorNeutralBackground3,
          maxHeight: '580px',
          overflowY: 'auto',
        },
        codeHeader: {
          paddingTop: tokens.T.spacingVerticalM,
          paddingBottom: tokens.T.spacingVerticalM,
          paddingLeft: tokens.T.spacingHorizontalM,
          paddingRight: tokens.T.spacingHorizontalM,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          columnGap: tokens.T.spacingHorizontalM,
        },
      });
      var motion = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/dom/motion.mjs',
        ),
        use_reduced_motion = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs',
        ),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const slideVariants = ({ shouldReduceMotion }) => ({
          expanded: {
            height: 'auto',
            transition: { ease: 'easeOut', duration: shouldReduceMotion ? 0 : 0.2 },
          },
          collapsed: {
            height: 0,
            transition: {
              delay: shouldReduceMotion ? 0 : 0.075,
              ease: 'easeOut',
              duration: shouldReduceMotion ? 0 : 0.2,
            },
          },
        }),
        SlideMotion = ({ children, isCollapsed, className }) =>
          (0, jsx_runtime.jsx)(motion.E.section, {
            initial: isCollapsed ? 'collapsed' : 'expanded',
            animate: 'expanded',
            exit: 'collapsed',
            variants: slideVariants({ shouldReduceMotion: (0, use_reduced_motion.J)() }),
            className,
            children,
          });
      SlideMotion.displayName = 'SlideMotion';
      const fadeVariants = ({ shouldReduceMotion }) => ({
          expanded: {
            opacity: 1,
            top: '0',
            transition: {
              delay: shouldReduceMotion ? 0 : 0.125,
              ease: 'easeOut',
              duration: shouldReduceMotion ? 0 : 0.15,
            },
          },
          collapsed: {
            opacity: 0,
            top: '-4px',
            transition: { ease: 'easeOut', duration: shouldReduceMotion ? 0 : 0.15 },
          },
        }),
        FadeMotion = ({ children, isCollapsed }) =>
          (0, jsx_runtime.jsx)(motion.E.div, {
            style: { position: 'relative' },
            initial: isCollapsed ? 'collapsed' : 'expanded',
            animate: 'expanded',
            exit: 'collapsed',
            variants: fadeVariants({ shouldReduceMotion: (0, use_reduced_motion.J)() }),
            children,
          });
      FadeMotion.displayName = 'FadeMotion';
      try {
        (SlideMotion.displayName = 'SlideMotion'),
          (SlideMotion.__docgenInfo = {
            description: '',
            displayName: 'SlideMotion',
            props: {
              isCollapsed: {
                defaultValue: null,
                description: '',
                name: 'isCollapsed',
                required: !0,
                type: { name: 'boolean' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/component-preview/src/component-preview/motion.tsx#SlideMotion'
            ] = {
              docgenInfo: SlideMotion.__docgenInfo,
              name: 'SlideMotion',
              path: 'components/component-preview/src/component-preview/motion.tsx#SlideMotion',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (FadeMotion.displayName = 'FadeMotion'),
          (FadeMotion.__docgenInfo = {
            description: '',
            displayName: 'FadeMotion',
            props: {
              isCollapsed: {
                defaultValue: null,
                description: '',
                name: 'isCollapsed',
                required: !0,
                type: { name: 'boolean' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/component-preview/src/component-preview/motion.tsx#FadeMotion'
            ] = {
              docgenInfo: FadeMotion.__docgenInfo,
              name: 'FadeMotion',
              path: 'components/component-preview/src/component-preview/motion.tsx#FadeMotion',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const syntaxHighlighterCustomStyles = {
          backgroundColor: tokens.T.colorNeutralBackground3,
          marginTop: 0,
          marginBottom: 0,
          paddingTop: tokens.T.spacingVerticalL,
          paddingBottom: tokens.T.spacingVerticalL,
          paddingLeft: tokens.T.spacingHorizontalM,
          paddingRight: tokens.T.spacingHorizontalM,
        },
        ComponentPreview = ({
          className,
          code,
          codeLanguage = 'tsx',
          component: Component,
          defaultThemeIndex = 0,
          onFullScreen,
          onLiveEdit,
          onThemeChange: onThemeChangeProp,
          themes,
          themeSwitcherLabel = 'Theme',
          wrapper: Wrapper = ({ children }) =>
            (0, jsx_runtime.jsx)(jsx_runtime.Fragment, { children }),
        }) => {
          const classes = useComponentPreviewStyles(),
            [themeKey, setThemeKey] = (0, react.useState)(
              themes?.[defaultThemeIndex].value,
            );
          (0, react.useEffect)(() => {
            onThemeChangeProp && themeKey && onThemeChangeProp(themeKey);
          }, [themeKey, onThemeChangeProp]);
          const [isShowingCode, setIsShowingCode] = (0, react.useState)(!1),
            { themeKey: globalThemeKey } = (0, use_theme.F)(),
            isDarkTheme = 'dark' === globalThemeKey,
            { copy, isCopied } = (0, use_copy_to_clipboard.m)({});
          return (0, jsx_runtime.jsxs)('div', {
            className: (0, mergeClasses_esm.z)(classes.root, className),
            children: [
              (themeKey || code || onFullScreen) &&
                (0, jsx_runtime.jsxs)('div', {
                  className: classes.previewHeader,
                  children: [
                    themeKey &&
                      (0, jsx_runtime.jsx)(Select.P, {
                        title: themeSwitcherLabel,
                        onChange: (event) => {
                          const value = event.target.value;
                          setThemeKey(value);
                        },
                        className: classes.menuItem,
                        size: 'small',
                        value: themeKey,
                        children: themes?.map(({ label, value }) =>
                          (0, jsx_runtime.jsx)(
                            'option',
                            { value, children: label },
                            value,
                          ),
                        ),
                      }),
                    code &&
                      (0, jsx_runtime.jsxs)(button_button.z, {
                        size: 'small',
                        color: 'secondary',
                        onClick: () => setIsShowingCode(!isShowingCode),
                        className: (0, mergeClasses_esm.z)(
                          classes.menuItem,
                          classes.menuItemButton,
                        ),
                        children: [
                          (0, jsx_runtime.jsx)(icon.J, {
                            iconName: 'code',
                            className: classes.menuItemIcon,
                          }),
                          isShowingCode ? 'Hide' : 'Show',
                          ' code',
                        ],
                      }),
                    onFullScreen &&
                      (0, jsx_runtime.jsxs)(button_button.z, {
                        size: 'small',
                        color: 'secondary',
                        onClick: onFullScreen,
                        className: (0, mergeClasses_esm.z)(
                          classes.menuItem,
                          classes.menuItemButton,
                        ),
                        children: [
                          (0, jsx_runtime.jsx)(icon.J, {
                            iconName: 'full-screen',
                            className: classes.menuItemIcon,
                          }),
                          'Full screen',
                        ],
                      }),
                  ],
                }),
              (0, jsx_runtime.jsx)(Wrapper, {
                themeKey,
                children: (0, jsx_runtime.jsx)(Component, {}),
              }),
              (0, jsx_runtime.jsx)(AnimatePresence.M, {
                children:
                  code &&
                  isShowingCode &&
                  (0, jsx_runtime.jsx)(SlideMotion, {
                    isCollapsed: isShowingCode,
                    className: classes.codeSection,
                    children: (0, jsx_runtime.jsxs)(FadeMotion, {
                      isCollapsed: isShowingCode,
                      children: [
                        (0, jsx_runtime.jsxs)('div', {
                          className: classes.codeHeader,
                          children: [
                            onLiveEdit &&
                              (0, jsx_runtime.jsxs)(button_button.z, {
                                size: 'small',
                                color: 'secondary',
                                onClick: onLiveEdit,
                                className: (0, mergeClasses_esm.z)(
                                  classes.menuItem,
                                  classes.menuItemButton,
                                ),
                                children: [
                                  (0, jsx_runtime.jsx)(icon.J, {
                                    iconName: 'full-screen',
                                    className: classes.menuItemIcon,
                                  }),
                                  'Edit in sandbox',
                                ],
                              }),
                            (0, jsx_runtime.jsxs)(button_button.z, {
                              color: 'secondary',
                              size: 'small',
                              className: classes.menuItemButton,
                              onClick: () => copy(code ?? ''),
                              children: [
                                (0, jsx_runtime.jsx)(icon.J, {
                                  iconName: isCopied ? 'check' : 'copy',
                                  className: isCopied
                                    ? classes.menuItemIconSuccess
                                    : classes.menuItemIcon,
                                }),
                                'Copy',
                              ],
                            }),
                          ],
                        }),
                        (0, jsx_runtime.jsx)(default_highlight.Z, {
                          language: codeLanguage,
                          showLineNumbers: !0,
                          style: isDarkTheme ? solarized_dark.Z : solarized_light.Z,
                          customStyle: syntaxHighlighterCustomStyles,
                          children: code,
                        }),
                      ],
                    }),
                  }),
              }),
            ],
          });
        };
      ComponentPreview.displayName = 'ComponentPreview';
      try {
        (ComponentPreview.displayName = 'ComponentPreview'),
          (ComponentPreview.__docgenInfo = {
            description: '',
            displayName: 'ComponentPreview',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer provided class.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              component: {
                defaultValue: null,
                description: 'Component to render in the preview.',
                name: 'component',
                required: !0,
                type: { name: 'ElementType' },
              },
              wrapper: {
                defaultValue: { value: '({ children }) => <>{children}</>' },
                description:
                  'Wrapper for the component. Use it to set up theme, context, custom styles, etc. See `themeKey` prop for info on how to change the theme.\n@example ({ children, currentThemeKey }) => <ThemeProvider theme={currentThemeKey}>{children}</ThemeProvider>',
                name: 'wrapper',
                required: !1,
                type: {
                  name: '({ children, themeKey }: WrapperProps) => ReactElement<any, any>',
                },
              },
              themes: {
                defaultValue: null,
                description:
                  'Themes to be passed to the wrapper, if you want to add theme switcher.',
                name: 'themes',
                required: !1,
                type: { name: '{ label: string; value: string; }[]' },
              },
              defaultThemeIndex: {
                defaultValue: { value: '0' },
                description:
                  'Default theme in the themes array to be used in theme switcher.',
                name: 'defaultThemeIndex',
                required: !1,
                type: { name: 'number' },
              },
              themeSwitcherLabel: {
                defaultValue: { value: 'Theme' },
                description: 'Label for the theme switcher select control.',
                name: 'themeSwitcherLabel',
                required: !1,
                type: { name: 'string' },
              },
              code: {
                defaultValue: null,
                description:
                  'If you would like to show code implementation of the component, you can pass the string here.',
                name: 'code',
                required: !1,
                type: { name: 'string' },
              },
              codeLanguage: {
                defaultValue: { value: 'tsx' },
                description: 'Code language to be used for syntax highlighting.',
                name: 'codeLanguage',
                required: !1,
                type: { name: 'string' },
              },
              onFullScreen: {
                defaultValue: null,
                description:
                  "If you want to render a button to open the preview in full screen, provide an on click handler for it here.\n@example () => window.open('https://bit.dev/bit/base-ui/preview', '_blank')",
                name: 'onFullScreen',
                required: !1,
                type: { name: '() => void' },
              },
              onLiveEdit: {
                defaultValue: null,
                description:
                  "If you want to render a button to open the preview in live edit mode, provide an on click handler for it here.\n@example () => window.open('https://bit.dev/bit/base-ui/edit', '_blank')",
                name: 'onLiveEdit',
                required: !1,
                type: { name: '() => void' },
              },
              onThemeChange: {
                defaultValue: null,
                description:
                  'If you need to access the currently selected theme, you can pass a callback here.\n@example ```tsx\nconst [currentTheme, setCurrentTheme] = React.useState<string>();\nconst onThemeChange = (theme: string) => setCurrentTheme(theme);\n```',
                name: 'onThemeChange',
                required: !1,
                type: { name: '(themeKey: string) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/component-preview/src/component-preview/component-preview.tsx#ComponentPreview'
            ] = {
              docgenInfo: ComponentPreview.__docgenInfo,
              name: 'ComponentPreview',
              path: 'components/component-preview/src/component-preview/component-preview.tsx#ComponentPreview',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const example_component_raw =
        "import { mergeClasses } from '@griffel/react';\nimport { Text } from '@microsoft/arbutus.text';\nimport { Tile } from '@microsoft/arbutus.tile';\nimport { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';\nimport * as React from 'react';\n\nexport const ExampleComponent = () => {\n  const space = useSpaceStyles();\n\n  return (\n    <Tile variant=\"card\" className={mergeClasses(space.py9, space.px7)}>\n      <Text variant=\"headline\" className={space.mb7} block>\n        Example Component\n      </Text>\n      <Text variant=\"description\" block>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente voluptas\n        laudantium placeat aliquam eum nesciunt dolorem rerum, quasi ea quisquam natus\n        repellendus! Laudantium expedita laborum natus, earum tenetur quidem?\n      </Text>\n    </Tile>\n  );\n};\n";
      var tile = __webpack_require__('./components/tile/lib/tile.js');
      const ExampleComponent = () => {
        const space = (0, use_space_styles.z)();
        return (0, jsx_runtime.jsxs)(tile.n, {
          variant: 'card',
          className: (0, mergeClasses_esm.z)(space.py9, space.px7),
          children: [
            (0, jsx_runtime.jsx)(text_text.x, {
              variant: 'headline',
              className: space.mb7,
              block: !0,
              children: 'Example Component',
            }),
            (0, jsx_runtime.jsx)(text_text.x, {
              variant: 'description',
              block: !0,
              children:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente voluptas laudantium placeat aliquam eum nesciunt dolorem rerum, quasi ea quisquam natus repellendus! Laudantium expedita laborum natus, earum tenetur quidem?',
            }),
          ],
        });
      };
      ExampleComponent.displayName = 'ExampleComponent';
      var theme_provider = __webpack_require__('./styles/theming/lib/theme-provider.js');
      const useWrapperStyles = (0, makeStyles_esm.Z)({
          root: {
            minHeight: '480px',
            display: 'grid',
            justifyItems: 'center',
            alignItems: 'center',
            height: '100%',
            paddingTop: '40px',
            paddingBottom: '40px',
            paddingLeft: '40px',
            paddingRight: '40px',
            backgroundColor: tokens.T.colorNeutralBackground1,
          },
        }),
        ExampleWrapper = ({ children, themeKey }) => {
          const classes = useWrapperStyles();
          return (0, jsx_runtime.jsx)(theme_provider.f, {
            currentThemeKey: themeKey,
            children: (0, jsx_runtime.jsx)('div', { className: classes.root, children }),
          });
        };
      ExampleWrapper.displayName = 'ExampleWrapper';
      try {
        (ExampleWrapper.displayName = 'ExampleWrapper'),
          (ExampleWrapper.__docgenInfo = {
            description: '',
            displayName: 'ExampleWrapper',
            props: {
              children: {
                defaultValue: null,
                description: 'Wrapper is going to render the component as children.',
                name: 'children',
                required: !0,
                type: { name: 'ReactNode' },
              },
              themeKey: {
                defaultValue: null,
                description:
                  "Wrapper can receive a theme key to change the theme.\n@example 'dark'",
                name: 'themeKey',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/component-preview/__dev__/example-wrapper.tsx#ExampleWrapper'
            ] = {
              docgenInfo: ExampleWrapper.__docgenInfo,
              name: 'ExampleWrapper',
              path: 'components/component-preview/__dev__/example-wrapper.tsx#ExampleWrapper',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const themes = [
          { value: 'light', label: 'Light Theme' },
          { value: 'dark', label: 'Dark Theme' },
        ],
        component_preview_stories = {
          title: 'Blocks/ComponentPreview',
          component: ComponentPreview,
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)(decorators.z, {
                children: (0, jsx_runtime.jsx)('div', {
                  style: { maxWidth: '640px' },
                  children: (0, jsx_runtime.jsx)(Story, {}),
                }),
              }),
          ],
        },
        Template = (args) => (0, jsx_runtime.jsx)(ComponentPreview, { ...args });
      Template.displayName = 'Template';
      const Simple = Template.bind({});
      Simple.args = {
        component: ExampleComponent,
        wrapper: ExampleWrapper,
        onFullScreen: void 0,
      };
      const WithMenu = Template.bind({});
      WithMenu.args = {
        component: ExampleComponent,
        wrapper: ExampleWrapper,
        code: example_component_raw,
        themes,
      };
      const AccessingPreviewTheme = ((args) => {
        const space = (0, use_space_styles.z)(),
          [currentTheme, setCurrentTheme] = (0, react.useState)(),
          currentThemeLabel = themes.find((theme) => theme.value === currentTheme)?.label;
        return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [
            (0, jsx_runtime.jsxs)('div', {
              className: space.mb6,
              children: [
                (0, jsx_runtime.jsxs)(text_text.x, {
                  variant: 'caption',
                  children: [currentThemeLabel, ' '],
                }),
                (0, jsx_runtime.jsx)(text_text.x, {
                  variant: 'code',
                  children: currentTheme,
                }),
              ],
            }),
            (0, jsx_runtime.jsx)(ComponentPreview, {
              ...args,
              onThemeChange: (theme) => {
                args.onThemeChange?.(theme), setCurrentTheme(theme);
              },
            }),
          ],
        });
      }).bind({});
      AccessingPreviewTheme.args = {
        component: ExampleComponent,
        wrapper: ExampleWrapper,
        code: example_component_raw,
        themes,
        defaultThemeIndex: 1,
      };
      const __namedExportsOrder = ['Simple', 'WithMenu', 'AccessingPreviewTheme'];
    },
    './components/text/lib/text/text.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { x: () => Text });
      var _fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/@fluentui/react-text/lib/components/Text/Text.js',
        ),
        _griffel_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        _text_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/text/lib/text/text.styles.js',
        );
      const Text = ({
        children,
        color = 'primary',
        variant,
        className,
        weight,
        size,
        font,
        ...props
      }) => {
        const classes = (0, _text_styles__WEBPACK_IMPORTED_MODULE_1__.Ke)();
        let variantClass = '';
        (weight && size && font) ||
          (variantClass = variant ? classes[variant] : classes.paragraph);
        const rootClasses = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_2__.z)(
          classes.root,
          classes[color],
          variantClass,
          className,
        );
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__.x,
          { weight, size, font, className: rootClasses, ...props },
          children,
        );
      };
      Text.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Text',
        props: {
          color: { defaultValue: { value: "'primary'", computed: !1 }, required: !1 },
        },
      };
    },
    './components/text/lib/text/text.styles.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        AD: () => variantClasses,
        Ke: () => useTextStyles,
        bG: () => colorClasses,
      });
      var _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/@fluentui/tokens/lib/tokens.js',
        ),
        _griffel_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        _griffel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/@griffel/core/index.esm.js',
        ),
        _microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./styles/utilities/lib/map-to-styles.js');
      const colorMap = {
          accent:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground1,
          action:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,
          primary:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground1,
          secondary:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground2,
          tertiary:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3,
          quaternary:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground4,
          negative:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
              .colorPaletteDarkOrangeForeground1,
          positive:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
              .colorPaletteGreenForeground1,
          warning:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
              .colorPaletteMarigoldForeground1,
          danger:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
              .colorPaletteDarkOrangeForeground1,
          info: _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
            .colorBrandForeground2,
          background:
            _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground1,
        },
        colorClasses = (0,
        _microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__.f)(
          colorMap,
          (color) => ({ color }),
        ),
        variantClasses = {
          jumbo: {
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero1000,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero1000,
            fontWeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightBold,
          },
          title: {
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero800,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero800,
            fontWeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold,
          },
          subtitle: {
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero700,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero700,
            fontWeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold,
          },
          headline: {
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,
            fontWeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold,
          },
          leading: {
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,
            fontWeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular,
          },
          paragraph: {
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,
            fontWeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular,
          },
          caption: {
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,
            fontWeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold,
          },
          description: {
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase200,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase200,
            fontWeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular,
          },
        },
        useTextStyles = (0, _griffel_react__WEBPACK_IMPORTED_MODULE_2__.Z)({
          ...colorClasses,
          ...variantClasses,
          root: {
            ..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.margin(0),
            ..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.padding(0),
          },
          code: {
            display: 'inline-block',
            fontFamily:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyMonospace,
            fontSize:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,
            lineHeight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,
            backgroundColor:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T
                .colorNeutralBackground3,
            ..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.borderRadius(
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.borderRadiusSmall,
            ),
            paddingLeft:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS,
            paddingRight:
              _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS,
          },
        });
    },
    './components/tile/lib/tile.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { n: () => Tile });
      var mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js'),
        makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        index_esm = __webpack_require__('./node_modules/@griffel/core/index.esm.js'),
        map_to_styles = __webpack_require__('./styles/utilities/lib/map-to-styles.js');
      const colorMap = {
          none: 'transparent',
          primary: tokens.T.colorNeutralBackground1,
          secondary: tokens.T.colorNeutralBackground2,
          tertiary: tokens.T.colorNeutralBackground3,
          quaternary: tokens.T.colorNeutralBackground4,
          tile: tokens.T.colorNeutralBackground6,
          negative: tokens.T.colorPaletteDarkOrangeBackground1,
          positive: tokens.T.colorPaletteGreenBackground1,
          warning: tokens.T.colorPaletteMarigoldBackground1,
          danger: tokens.T.colorPaletteDarkOrangeBackground1,
          info: tokens.T.colorNeutralBackground2,
          accent: tokens.T.colorBrandBackground2,
        },
        colorClasses = (0, map_to_styles.f)(colorMap, (color) => ({
          backgroundColor: color,
        })),
        useTileStyles = (0, makeStyles_esm.Z)({
          root: { marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 },
          interactive: {
            ...index_esm.q5.borderStyle('none'),
            ...index_esm.q5.borderColor('transparent'),
            cursor: 'pointer',
            transitionProperty: 'all',
            transitionDuration: tokens.T.durationNormal,
            transitionTimingFunction: tokens.T.curveEasyEase,
            ':focus': { outlineColor: tokens.T.colorBrandForeground2 },
          },
          card: {
            backgroundColor: tokens.T.colorNeutralBackground1,
            ...index_esm.q5.borderRadius(tokens.T.borderRadiusLarge),
            boxShadow: tokens.T.shadow4,
          },
          interactiveCard: { ':hover': { boxShadow: tokens.T.shadow16 } },
          image: {
            backgroundColor: tokens.T.colorNeutralBackground6,
            ...index_esm.q5.borderRadius('var(--arbutus--shape-border-radius)'),
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
          },
          solidColor: {
            ...index_esm.q5.borderRadius('var(--arbutus--shape-border-radius)'),
          },
          ...colorClasses,
        }),
        isImage = ({ variant }) => 'image' === variant,
        Tile = ({
          children,
          variant,
          as: Root = 'div',
          backgroundColor = 'tile',
          imageSrc,
          className,
          onClick,
        }) => {
          const classes = useTileStyles();
          let variantClasses = '';
          switch (!0) {
            case (({ variant }) => 'card' === variant)({ variant }):
              variantClasses = (0, mergeClasses_esm.z)(
                classes.root,
                classes.card,
                onClick && classes.interactive,
                onClick && classes.interactiveCard,
                className,
              );
              break;
            case isImage({ variant }):
              variantClasses = (0, mergeClasses_esm.z)(
                classes.root,
                classes.image,
                onClick && classes.interactive,
                className,
              );
              break;
            case (({ variant }) => 'solid-color' === variant)({ variant }):
              variantClasses = (0, mergeClasses_esm.z)(
                classes.root,
                classes.solidColor,
                onClick && classes.interactive,
                classes[backgroundColor],
                className,
              );
              break;
            default:
              variantClasses = (0, mergeClasses_esm.z)(classes.root, className);
          }
          const imageBackground = isImage({ variant })
            ? { style: { backgroundImage: `url("${imageSrc ?? ''}")` } }
            : {};
          return react.createElement(
            Root,
            { className: variantClasses, ...imageBackground, onClick },
            children,
          );
        };
      Tile.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Tile',
        props: {
          as: { defaultValue: { value: "'div'", computed: !1 }, required: !1 },
          backgroundColor: {
            defaultValue: { value: "'tile'", computed: !1 },
            required: !1,
          },
        },
      };
    },
    './hooks/use-copy-to-clipboard/lib/use-copy-to-clipboard/use-copy-to-clipboard.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { m: () => useCopyToClipboard });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/react/index.js',
      );
      const isBrowser = 'undefined' != typeof window,
        useCopyToClipboard = (options) => {
          const { resetTimeout = 2500 } = options ?? {},
            [isCopied, setIsCopied] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(
              !1,
            ),
            [error, setError] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
            [status, setStatus] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(
              'ready',
            );
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            if ('ready' === status) return;
            const timeoutId = setTimeout(() => {
              setIsCopied(!1), setError(void 0), setStatus('ready');
            }, resetTimeout);
            return () => clearTimeout(timeoutId);
          }, [status, resetTimeout]);
          return {
            copy: (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((text) => {
              let Clipboard;
              isBrowser && (Clipboard = window.navigator.clipboard),
                Clipboard ||
                  (setError('Clipboard API is not supported.'), setStatus('error')),
                Clipboard?.writeText(text)
                  .then(() => {
                    setIsCopied(!0), setStatus('success');
                  })
                  .catch(() => {
                    setError('Could not copy to clipboard.'), setStatus('error');
                  });
            }, []),
            isCopied,
            error,
            status,
          };
        };
    },
    './hooks/use-space-styles/lib/use-space-styles.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { z: () => useSpaceStyles });
      var makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js');
      const spaceScale = {
          1: tokens.T.spacingHorizontalXXS,
          2: tokens.T.spacingHorizontalXS,
          3: tokens.T.spacingHorizontalSNudge,
          4: tokens.T.spacingHorizontalS,
          5: tokens.T.spacingHorizontalMNudge,
          6: tokens.T.spacingHorizontalM,
          7: tokens.T.spacingHorizontalL,
          8: tokens.T.spacingHorizontalXL,
          9: tokens.T.spacingHorizontalXXL,
          10: tokens.T.spacingHorizontalXXXL,
          11: '40px',
          12: '52px',
        },
        spaceEntries = Object.entries(spaceScale),
        margin = spaceEntries.reduce(
          (acc, [key, value]) => (
            (acc[`m${key}`] = {
              marginTop: value,
              marginBottom: value,
              marginLeft: value,
              marginRight: value,
            }),
            acc
          ),
          {},
        ),
        marginY = spaceEntries.reduce(
          (acc, [key, value]) => (
            (acc[`my${key}`] = { marginTop: value, marginBottom: value }), acc
          ),
          {},
        ),
        marginX = spaceEntries.reduce(
          (acc, [key, value]) => (
            (acc[`mx${key}`] = { marginLeft: value, marginRight: value }), acc
          ),
          {},
        ),
        marginTop = spaceEntries.reduce(
          (acc, [key, value]) => ((acc[`mt${key}`] = { marginTop: value }), acc),
          {},
        ),
        marginBottom = spaceEntries.reduce(
          (acc, [key, value]) => ((acc[`mb${key}`] = { marginBottom: value }), acc),
          {},
        ),
        marginLeft = spaceEntries.reduce(
          (acc, [key, value]) => ((acc[`ml${key}`] = { marginLeft: value }), acc),
          {},
        ),
        marginRight = spaceEntries.reduce(
          (acc, [key, value]) => ((acc[`mr${key}`] = { marginRight: value }), acc),
          {},
        ),
        padding = spaceEntries.reduce(
          (acc, [key, value]) => (
            (acc[`p${key}`] = {
              paddingTop: value,
              paddingBottom: value,
              paddingLeft: value,
              paddingRight: value,
            }),
            acc
          ),
          {},
        ),
        paddingY = spaceEntries.reduce(
          (acc, [key, value]) => (
            (acc[`py${key}`] = { paddingTop: value, paddingBottom: value }), acc
          ),
          {},
        ),
        paddingX = spaceEntries.reduce(
          (acc, [key, value]) => (
            (acc[`px${key}`] = { paddingLeft: value, paddingRight: value }), acc
          ),
          {},
        ),
        paddingTop = spaceEntries.reduce(
          (acc, [key, value]) => ((acc[`pt${key}`] = { paddingTop: value }), acc),
          {},
        ),
        paddingBottom = spaceEntries.reduce(
          (acc, [key, value]) => ((acc[`pb${key}`] = { paddingBottom: value }), acc),
          {},
        ),
        paddingLeft = spaceEntries.reduce(
          (acc, [key, value]) => ((acc[`pl${key}`] = { paddingLeft: value }), acc),
          {},
        ),
        paddingRight = spaceEntries.reduce(
          (acc, [key, value]) => ((acc[`pr${key}`] = { paddingRight: value }), acc),
          {},
        ),
        useSpaceStyles = (0, makeStyles_esm.Z)({
          ...margin,
          ...marginY,
          ...marginX,
          ...marginTop,
          ...marginBottom,
          ...marginLeft,
          ...marginRight,
          ...padding,
          ...paddingBottom,
          ...paddingLeft,
          ...paddingRight,
          ...paddingTop,
          ...paddingX,
          ...paddingY,
        });
    },
    './styles/theming/lib/use-theme.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { F: () => useTheme });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        _theme_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './styles/theming/lib/theme-context.js',
        );
      const useTheme = () => {
        const { theme, themeKey, setTheme } = (0,
        react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
          _theme_context__WEBPACK_IMPORTED_MODULE_1__.N,
        );
        return { theme, themeKey, setTheme };
      };
    },
  },
]);
>>>>>>> 0a42c43 (Runs lint):docs/component-preview-__dev__-component-preview-stories.54861a2e.iframe.bundle.js

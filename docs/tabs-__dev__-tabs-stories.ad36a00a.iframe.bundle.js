<<<<<<< HEAD:docs/tabs-__dev__-tabs-stories.ad36a00a.iframe.bundle.js
"use strict";(self.webpackChunkarbutus=self.webpackChunkarbutus||[]).push([[9777],{"./components/tabs/__dev__/tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tabs_stories});var makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),text_text=__webpack_require__("./components/text/lib/text/text.js"),tile=__webpack_require__("./components/tile/lib/tile.js"),use_space_styles=__webpack_require__("./hooks/use-space-styles/lib/use-space-styles.js"),react=__webpack_require__("./node_modules/react/index.js"),mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js");const TabsContext=(0,react.createContext)({currentIndex:0,prevIndex:void 0,id:"",onChangeIndex:({nextIndex})=>{}}),TabsProvider=TabsContext.Provider;var tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),index_esm=__webpack_require__("./node_modules/@griffel/core/index.esm.js");const useTabsStyles=(0,makeStyles_esm.Z)({root:{color:tokens.T.colorNeutralForeground1,":global(:root)":{"--reach-tabs":1},'& [data-reach-tabs][data-orientation="vertical"]':{display:"flex"},'& [data-reach-tab-list][aria-orientation="vertical"]':{flexDirection:"column"},"& [data-reach-tab]":{...index_esm.q5.margin("0"),paddingTop:tokens.T.spacingHorizontalS,paddingBottom:tokens.T.spacingHorizontalS,paddingLeft:tokens.T.spacingHorizontalL,paddingRight:tokens.T.spacingHorizontalL,display:"inline-block",...index_esm.q5.borderColor("transparent"),...index_esm.q5.borderWidth(0),...index_esm.q5.borderStyle("none"),...index_esm.q5.borderRadius("0.25rem 0.25rem 0 0"),boxShadow:"0 0 0 -2px transparent",backgroundColor:"transparent",color:"inherit",cursor:"pointer",WebkitAppearance:"none",MozAppearance:"none",fontWeight:tokens.T.fontWeightRegular,fontSize:tokens.T.fontSizeBase300,lineHeight:tokens.T.lineHeightBase300,transitionProperty:"box-shadow",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,"&:focus":{outlineColor:"initial",outlineStyle:"none",outlineWidth:"initial"}},"& [data-reach-tab]:active":{backgroundColor:tokens.T.colorNeutralBackground1},"& [data-reach-tab]:disabled":{opacity:"0.25",cursor:"default"},"& [data-reach-tab][data-selected]":{fontWeight:tokens.T.fontWeightSemibold,boxShadow:`0 0.125rem 0 0 ${tokens.T.colorBrandForeground1}`}}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tabs=({className,children,initialIndex=0})=>{const[currentIndex,setCurrentIndex]=(0,react.useState)(initialIndex),[prevIndex,setPrevIndex]=(0,react.useState)(),id=(0,react.useId)(),classes=useTabsStyles();return(0,jsx_runtime.jsx)("div",{className:(0,mergeClasses_esm.z)(classes.root,className),role:"tablist",children:(0,jsx_runtime.jsx)(TabsProvider,{value:{id,currentIndex,prevIndex,onChangeIndex:({nextIndex})=>{setPrevIndex(currentIndex),setCurrentIndex(nextIndex)}},children})})};Tabs.displayName="Tabs";try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{className:{defaultValue:null,description:"Consumer provided class.",name:"className",required:!1,type:{name:"string"}},initialIndex:{defaultValue:{value:"0"},description:"Optional initial open tab",name:"initialIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/tabs/src/tabs/tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"components/tabs/src/tabs/tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}const injectIndex=({children})=>{let __index=-1;const __total=react.Children.count(children);return react.Children.map(children,(child=>(0,react.isValidElement)(child)?(__index+=1,(0,react.cloneElement)(child,{__index,__total})):child))},useTabListStyles=(0,makeStyles_esm.Z)({root:{display:"flex",backgroundColor:tokens.T.colorNeutralBackground1,borderBottomWidth:"0.0625rem",borderBottomStyle:"solid",borderBottomColor:tokens.T.colorNeutralStroke1,marginBottom:tokens.T.spacingVerticalXL}}),TabList=({className,children})=>{const childrenWithProps=injectIndex({children}),classes=useTabListStyles();return(0,jsx_runtime.jsx)("div",{role:"tablist",className:(0,mergeClasses_esm.z)(classes.root,className),children:childrenWithProps})};TabList.displayName="TabList";try{TabList.displayName="TabList",TabList.__docgenInfo={description:"",displayName:"TabList",props:{className:{defaultValue:null,description:"Consumer provided class.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/tabs/src/tab-list/tab-list.tsx#TabList"]={docgenInfo:TabList.__docgenInfo,name:"TabList",path:"components/tabs/src/tab-list/tab-list.tsx#TabList"})}catch(__react_docgen_typescript_loader_error){}const useTabsContext=()=>(0,react.useContext)(TabsContext),useTabStyles=(0,makeStyles_esm.Z)({root:{position:"relative",...index_esm.q5.margin("0"),paddingTop:tokens.T.spacingHorizontalS,paddingBottom:tokens.T.spacingHorizontalS,paddingLeft:tokens.T.spacingHorizontalL,paddingRight:tokens.T.spacingHorizontalL,display:"inline-block",...index_esm.q5.borderColor("transparent"),...index_esm.q5.borderWidth(0),...index_esm.q5.borderStyle("none"),...index_esm.q5.borderRadius("0.25rem 0.25rem 0 0"),boxShadow:"0 0 0 -2px transparent",backgroundColor:"transparent",color:"inherit",cursor:"pointer",WebkitAppearance:"none",MozAppearance:"none",fontWeight:tokens.T.fontWeightRegular,fontSize:tokens.T.fontSizeBase300,lineHeight:tokens.T.lineHeightBase300,transitionProperty:"box-shadow",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,"&::after":{content:'""',position:"absolute",top:"-1px",left:"-1px",height:"calc(100% + 2px)",width:"calc(100% + 2px)",boxShadow:"0 0 4px 1px transparent",transitionProperty:"box-shadow",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,...index_esm.q5.borderRadius(tokens.T.borderRadiusMedium)},"&:focus":{outlineColor:"initial",outlineStyle:"none",outlineWidth:"initial",position:"relative"},"&:focus-visible":{"&::after":{boxShadow:`0 0 4px 2px ${tokens.T.colorBrandForeground1}`}}},active:{backgroundColor:tokens.T.colorNeutralBackground1,fontWeight:tokens.T.fontWeightSemibold,boxShadow:`0 2px 0 0 ${tokens.T.colorBrandForeground1}`,"&:focus-visible":{boxShadow:"0 2px 0 0 transparent"}},disabled:{opacity:"0.25",cursor:"default"}}),Tab=({className,children,disabled,__index=0,__total=0})=>{const{onChangeIndex,currentIndex,id}=useTabsContext(),active=currentIndex===__index,ref=(0,react.useRef)(null),isInitialMount=(0,react.useRef)(!0);(0,react.useEffect)((()=>{!isInitialMount.current&&active&&ref.current?.focus(),isInitialMount.current=!1}),[active]);const classes=useTabStyles();return(0,jsx_runtime.jsx)("button",{id:`${id}-tab-${__index}`,role:"tab","aria-selected":active,"aria-controls":`${id}-tabpanel-${__index}`,disabled,tabIndex:active?0:-1,className:(0,mergeClasses_esm.z)(classes.root,active&&classes.active,disabled&&classes.disabled,className),onClick:()=>{onChangeIndex({nextIndex:__index})},onKeyDown:event=>{"ArrowRight"===event.key&&(event.preventDefault(),onChangeIndex({nextIndex:currentIndex===__total-1?0:currentIndex+1})),"ArrowLeft"===event.key&&(event.preventDefault(),onChangeIndex({nextIndex:0===currentIndex?__total-1:currentIndex-1}))},ref,children})};Tab.displayName="Tab";try{Tab.displayName="Tab",Tab.__docgenInfo={description:"",displayName:"Tab",props:{className:{defaultValue:null,description:"Consumer provided class.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Set the tab to be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},__index:{defaultValue:{value:"0"},description:"[INTERNAL] Do not use.",name:"__index",required:!1,type:{name:"number"}},__total:{defaultValue:{value:"0"},description:"[INTERNAL] Do not use.",name:"__total",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/tabs/src/tab/tab.tsx#Tab"]={docgenInfo:Tab.__docgenInfo,name:"Tab",path:"components/tabs/src/tab/tab.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}const TabPanels=({children,className})=>(0,jsx_runtime.jsx)("div",{className,children:injectIndex({children})});TabPanels.displayName="TabPanels";try{TabPanels.displayName="TabPanels",TabPanels.__docgenInfo={description:"",displayName:"TabPanels",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/tabs/src/tab-panels/tab-panels.tsx#TabPanels"]={docgenInfo:TabPanels.__docgenInfo,name:"TabPanels",path:"components/tabs/src/tab-panels/tab-panels.tsx#TabPanels"})}catch(__react_docgen_typescript_loader_error){}var motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),use_reduced_motion=__webpack_require__("./node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs");const appearVariants={active:{display:"block"},inactive:{display:"none"}},AppearMotion=({children,className,hidden,id,isActive,role,tabIndex})=>(0,jsx_runtime.jsx)(motion.E.div,{animate:isActive?"active":"inactive",className,hidden,id,initial:"inactive",role,style:{position:"relative",top:0},tabIndex,variants:appearVariants,children});AppearMotion.displayName="AppearMotion";const SlideMotion=({children,isActive})=>{const shouldReduceMotion=(0,use_reduced_motion.J)();return(0,jsx_runtime.jsx)(motion.E.div,{variants:{initial:{top:0},active:{opacity:1,top:0,transition:{delay:shouldReduceMotion?0:.2,ease:"easeOut",duration:shouldReduceMotion?0:.2}},inactive:{opacity:0,top:"-4px",transition:{ease:"easeOut",duration:shouldReduceMotion?0:.2}}},style:{position:"relative",top:0},animate:isActive?"active":"inactive",initial:"initial",children})};SlideMotion.displayName="SlideMotion";try{AppearMotion.displayName="AppearMotion",AppearMotion.__docgenInfo={description:"",displayName:"AppearMotion",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/tabs/src/tab-panel/motion.tsx#AppearMotion"]={docgenInfo:AppearMotion.__docgenInfo,name:"AppearMotion",path:"components/tabs/src/tab-panel/motion.tsx#AppearMotion"})}catch(__react_docgen_typescript_loader_error){}try{SlideMotion.displayName="SlideMotion",SlideMotion.__docgenInfo={description:"",displayName:"SlideMotion",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/tabs/src/tab-panel/motion.tsx#SlideMotion"]={docgenInfo:SlideMotion.__docgenInfo,name:"SlideMotion",path:"components/tabs/src/tab-panel/motion.tsx#SlideMotion"})}catch(__react_docgen_typescript_loader_error){}const TabPanel=({className,children,__index=0})=>{const{currentIndex,id}=useTabsContext(),isActive=currentIndex===__index;return(0,jsx_runtime.jsx)(AppearMotion,{tabIndex:0,role:"tabpanel",isActive,className,id:`${id}-tabpanel-${__index}`,hidden:!isActive,children:(0,jsx_runtime.jsx)(SlideMotion,{isActive,children})},__index)};TabPanel.displayName="TabPanel";try{TabPanel.displayName="TabPanel",TabPanel.__docgenInfo={description:"",displayName:"TabPanel",props:{className:{defaultValue:null,description:"Consumer provided class.",name:"className",required:!1,type:{name:"string"}},__index:{defaultValue:{value:"0"},description:"[INTERNAL] Do not use. Index in the array of tabs.",name:"__index",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/tabs/src/tab-panel/tab-panel.tsx#TabPanel"]={docgenInfo:TabPanel.__docgenInfo,name:"TabPanel",path:"components/tabs/src/tab-panel/tab-panel.tsx#TabPanel"})}catch(__react_docgen_typescript_loader_error){}const usePreviewStyles=(0,makeStyles_esm.Z)({root:{maxWidth:"60rem",width:"100%"}}),Content=({index})=>{const space=(0,use_space_styles.z)();return(0,jsx_runtime.jsx)(tile.n,{variant:"solid-color",className:space.mt10,children:(0,jsx_runtime.jsxs)("article",{className:space.p6,children:[(0,jsx_runtime.jsxs)(text_text.x,{as:"h3",variant:"subtitle",block:!0,children:["This Is a Headline ",index,"!"]}),(0,jsx_runtime.jsx)(text_text.x,{as:"p",block:!0,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloremque dolores beatae sapiente enim rerum dolorum optio quasi quaerat reiciendis. Laboriosam doloremque itaque optio sint earum debitis nesciunt autem dolor?"})]})})};Content.displayName="Content";const tabs_stories={title:"Atoms/Tabs",component:Tabs},Template=args=>{const classes=usePreviewStyles();return(0,jsx_runtime.jsxs)(Tabs,{className:classes.root,...args,children:[(0,jsx_runtime.jsxs)(TabList,{children:[(0,jsx_runtime.jsx)(Tab,{children:"Usage"}),(0,jsx_runtime.jsx)(Tab,{children:"Style"}),(0,jsx_runtime.jsx)(Tab,{children:"Implementation"})]}),(0,jsx_runtime.jsxs)(TabPanels,{children:[(0,jsx_runtime.jsx)(TabPanel,{children:(0,jsx_runtime.jsx)(Content,{index:"One"})}),(0,jsx_runtime.jsx)(TabPanel,{children:(0,jsx_runtime.jsx)(Content,{index:"Two"})}),(0,jsx_runtime.jsx)(TabPanel,{children:(0,jsx_runtime.jsx)(Content,{index:"Three"})})]})]})};Template.displayName="Template";const Simple=Template.bind({}),__namedExportsOrder=["Simple"]},"./components/text/lib/text/text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@fluentui/react-text/lib/components/Text/Text.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_text_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/text/lib/text/text.styles.js");const Text=({children,color="primary",variant,className,weight,size,font,...props})=>{const classes=(0,_text_styles__WEBPACK_IMPORTED_MODULE_1__.Ke)();let variantClass="";weight&&size&&font||(variantClass=variant?classes[variant]:classes.paragraph);const rootClasses=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.z)(classes.root,classes[color],variantClass,className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__.x,{weight,size,font,className:rootClasses,...props},children)};Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./components/text/lib/text/text.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AD:()=>variantClasses,Ke:()=>useTextStyles,bG:()=>colorClasses});var _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./styles/utilities/lib/map-to-styles.js");const colorMap={accent:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground1,action:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,primary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground1,secondary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground2,tertiary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3,quaternary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground4,negative:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,positive:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteGreenForeground1,warning:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteMarigoldForeground1,danger:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,info:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,background:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground1},colorClasses=(0,_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__.f)(colorMap,(color=>({color}))),variantClasses={jumbo:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero1000,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero1000,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightBold},title:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero800,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero800,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},subtitle:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero700,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero700,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},headline:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},leading:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},paragraph:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},caption:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},description:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase200,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase200,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular}},useTextStyles=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.Z)({...colorClasses,...variantClasses,root:{..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.margin(0),..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.padding(0)},code:{display:"inline-block",fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyMonospace,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,backgroundColor:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground3,..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.borderRadius(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.borderRadiusSmall),paddingLeft:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS,paddingRight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS}})},"./components/tile/lib/tile.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>Tile});var mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),index_esm=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),map_to_styles=__webpack_require__("./styles/utilities/lib/map-to-styles.js"),themes_tokens=__webpack_require__("./styles/theming/lib/themes/tokens.js");const colorMap={none:"transparent",primary:tokens.T.colorNeutralBackground1,secondary:tokens.T.colorNeutralBackground2,tertiary:tokens.T.colorNeutralBackground3,quaternary:tokens.T.colorNeutralBackground4,tile:tokens.T.colorNeutralBackground6,negative:tokens.T.colorPaletteDarkOrangeBackground1,positive:tokens.T.colorPaletteGreenBackground1,warning:tokens.T.colorPaletteMarigoldBackground1,danger:tokens.T.colorPaletteDarkOrangeBackground1,info:tokens.T.colorNeutralBackground2,accent:tokens.T.colorBrandBackground2},colorClasses=(0,map_to_styles.f)(colorMap,(color=>({backgroundColor:color}))),useTileStyles=(0,makeStyles_esm.Z)({root:{marginTop:0,marginBottom:0,marginLeft:0,marginRight:0},interactive:{...index_esm.q5.borderStyle("none"),...index_esm.q5.borderColor("transparent"),cursor:"pointer",transitionProperty:"all",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,":focus":{outlineColor:tokens.T.colorBrandForeground2}},card:{backgroundColor:tokens.T.colorNeutralBackground1,...index_esm.q5.borderRadius(tokens.T.borderRadiusLarge),boxShadow:tokens.T.shadow4},interactiveCard:{":hover":{boxShadow:tokens.T.shadow16}},image:{backgroundColor:tokens.T.colorNeutralBackground6,...index_esm.q5.borderRadius(themes_tokens.A.shape.borderRadius),backgroundSize:"cover",backgroundPositionX:"center",backgroundPositionY:"center"},solidColor:{...index_esm.q5.borderRadius(themes_tokens.A.shape.borderRadius)},...colorClasses}),isImage=({variant})=>"image"===variant,Tile=({children,variant,as:Root="div",backgroundColor="tile",imageSrc,className,onClick})=>{const classes=useTileStyles();let variantClasses="";switch(!0){case(({variant})=>"card"===variant)({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.card,onClick&&classes.interactive,onClick&&classes.interactiveCard,className);break;case isImage({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.image,onClick&&classes.interactive,className);break;case(({variant})=>"solid-color"===variant)({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.solidColor,onClick&&classes.interactive,classes[backgroundColor],className);break;default:variantClasses=(0,mergeClasses_esm.z)(classes.root,className)}const imageBackground=isImage({variant})?{style:{backgroundImage:`url("${imageSrc??""}")`}}:{};return react.createElement(Root,{className:variantClasses,...imageBackground,onClick},children)};Tile.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1},backgroundColor:{defaultValue:{value:"'tile'",computed:!1},required:!1}}}},"./hooks/use-space-styles/lib/use-space-styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useSpaceStyles});var makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js");const spaceScale={1:tokens.T.spacingHorizontalXXS,2:tokens.T.spacingHorizontalXS,3:tokens.T.spacingHorizontalSNudge,4:tokens.T.spacingHorizontalS,5:tokens.T.spacingHorizontalMNudge,6:tokens.T.spacingHorizontalM,7:tokens.T.spacingHorizontalL,8:tokens.T.spacingHorizontalXL,9:tokens.T.spacingHorizontalXXL,10:tokens.T.spacingHorizontalXXXL,11:"40px",12:"52px"},spaceEntries=Object.entries(spaceScale),margin=spaceEntries.reduce(((acc,[key,value])=>(acc[`m${key}`]={marginTop:value,marginBottom:value,marginLeft:value,marginRight:value},acc)),{}),marginY=spaceEntries.reduce(((acc,[key,value])=>(acc[`my${key}`]={marginTop:value,marginBottom:value},acc)),{}),marginX=spaceEntries.reduce(((acc,[key,value])=>(acc[`mx${key}`]={marginLeft:value,marginRight:value},acc)),{}),marginTop=spaceEntries.reduce(((acc,[key,value])=>(acc[`mt${key}`]={marginTop:value},acc)),{}),marginBottom=spaceEntries.reduce(((acc,[key,value])=>(acc[`mb${key}`]={marginBottom:value},acc)),{}),marginLeft=spaceEntries.reduce(((acc,[key,value])=>(acc[`ml${key}`]={marginLeft:value},acc)),{}),marginRight=spaceEntries.reduce(((acc,[key,value])=>(acc[`mr${key}`]={marginRight:value},acc)),{}),padding=spaceEntries.reduce(((acc,[key,value])=>(acc[`p${key}`]={paddingTop:value,paddingBottom:value,paddingLeft:value,paddingRight:value},acc)),{}),paddingY=spaceEntries.reduce(((acc,[key,value])=>(acc[`py${key}`]={paddingTop:value,paddingBottom:value},acc)),{}),paddingX=spaceEntries.reduce(((acc,[key,value])=>(acc[`px${key}`]={paddingLeft:value,paddingRight:value},acc)),{}),paddingTop=spaceEntries.reduce(((acc,[key,value])=>(acc[`pt${key}`]={paddingTop:value},acc)),{}),paddingBottom=spaceEntries.reduce(((acc,[key,value])=>(acc[`pb${key}`]={paddingBottom:value},acc)),{}),paddingLeft=spaceEntries.reduce(((acc,[key,value])=>(acc[`pl${key}`]={paddingLeft:value},acc)),{}),paddingRight=spaceEntries.reduce(((acc,[key,value])=>(acc[`pr${key}`]={paddingRight:value},acc)),{}),useSpaceStyles=(0,makeStyles_esm.Z)({...margin,...marginY,...marginX,...marginTop,...marginBottom,...marginLeft,...marginRight,...padding,...paddingBottom,...paddingLeft,...paddingRight,...paddingTop,...paddingX,...paddingY})},"./styles/utilities/lib/map-to-styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function mapToStyles(map,styleFunction){return Object.entries(map).reduce(((acc,[key,value])=>(acc[key]=styleFunction(value),acc)),{})}__webpack_require__.d(__webpack_exports__,{f:()=>mapToStyles})}}]);
=======
'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [9777],
  {
    './components/tabs/__dev__/tabs.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Simple: () => Simple,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => tabs_stories,
        });
      var makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        text_text = __webpack_require__('./components/text/lib/text/text.js'),
        tile = __webpack_require__('./components/tile/lib/tile.js'),
        use_space_styles = __webpack_require__(
          './hooks/use-space-styles/lib/use-space-styles.js',
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        );
      const TabsContext = (0, react.createContext)({
          currentIndex: 0,
          prevIndex: void 0,
          id: '',
          onChangeIndex: ({ nextIndex }) => {},
        }),
        TabsProvider = TabsContext.Provider;
      var tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js'),
        index_esm = __webpack_require__('./node_modules/@griffel/core/index.esm.js');
      const useTabsStyles = (0, makeStyles_esm.Z)({
        root: {
          color: tokens.T.colorNeutralForeground1,
          ':global(:root)': { '--reach-tabs': 1 },
          '& [data-reach-tabs][data-orientation="vertical"]': { display: 'flex' },
          '& [data-reach-tab-list][aria-orientation="vertical"]': {
            flexDirection: 'column',
          },
          '& [data-reach-tab]': {
            ...index_esm.q5.margin('0'),
            paddingTop: tokens.T.spacingHorizontalS,
            paddingBottom: tokens.T.spacingHorizontalS,
            paddingLeft: tokens.T.spacingHorizontalL,
            paddingRight: tokens.T.spacingHorizontalL,
            display: 'inline-block',
            ...index_esm.q5.borderColor('transparent'),
            ...index_esm.q5.borderWidth(0),
            ...index_esm.q5.borderStyle('none'),
            ...index_esm.q5.borderRadius('0.25rem 0.25rem 0 0'),
            boxShadow: '0 0 0 -2px transparent',
            backgroundColor: 'transparent',
            color: 'inherit',
            cursor: 'pointer',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            fontWeight: tokens.T.fontWeightRegular,
            fontSize: tokens.T.fontSizeBase300,
            lineHeight: tokens.T.lineHeightBase300,
            transitionProperty: 'box-shadow',
            transitionDuration: tokens.T.durationNormal,
            transitionTimingFunction: tokens.T.curveEasyEase,
            '&:focus': {
              outlineColor: 'initial',
              outlineStyle: 'none',
              outlineWidth: 'initial',
            },
          },
          '& [data-reach-tab]:active': {
            backgroundColor: tokens.T.colorNeutralBackground1,
          },
          '& [data-reach-tab]:disabled': { opacity: '0.25', cursor: 'default' },
          '& [data-reach-tab][data-selected]': {
            fontWeight: tokens.T.fontWeightSemibold,
            boxShadow: `0 0.125rem 0 0 ${tokens.T.colorBrandForeground1}`,
          },
        },
      });
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const Tabs = ({ className, children, initialIndex = 0 }) => {
        const [currentIndex, setCurrentIndex] = (0, react.useState)(initialIndex),
          [prevIndex, setPrevIndex] = (0, react.useState)(),
          id = (0, react.useId)(),
          classes = useTabsStyles();
        return (0, jsx_runtime.jsx)('div', {
          className: (0, mergeClasses_esm.z)(classes.root, className),
          role: 'tablist',
          children: (0, jsx_runtime.jsx)(TabsProvider, {
            value: {
              id,
              currentIndex,
              prevIndex,
              onChangeIndex: ({ nextIndex }) => {
                setPrevIndex(currentIndex), setCurrentIndex(nextIndex);
              },
            },
            children,
          }),
        });
      };
      Tabs.displayName = 'Tabs';
      try {
        (Tabs.displayName = 'Tabs'),
          (Tabs.__docgenInfo = {
            description: '',
            displayName: 'Tabs',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer provided class.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              initialIndex: {
                defaultValue: { value: '0' },
                description: 'Optional initial open tab',
                name: 'initialIndex',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/tabs/src/tabs/tabs.tsx#Tabs'] = {
              docgenInfo: Tabs.__docgenInfo,
              name: 'Tabs',
              path: 'components/tabs/src/tabs/tabs.tsx#Tabs',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const injectIndex = ({ children }) => {
          let __index = -1;
          const __total = react.Children.count(children);
          return react.Children.map(children, (child) =>
            (0, react.isValidElement)(child)
              ? ((__index += 1), (0, react.cloneElement)(child, { __index, __total }))
              : child,
          );
        },
        useTabListStyles = (0, makeStyles_esm.Z)({
          root: {
            display: 'flex',
            backgroundColor: tokens.T.colorNeutralBackground1,
            borderBottomWidth: '0.0625rem',
            borderBottomStyle: 'solid',
            borderBottomColor: tokens.T.colorNeutralStroke1,
            marginBottom: tokens.T.spacingVerticalXL,
          },
        }),
        TabList = ({ className, children }) => {
          const childrenWithProps = injectIndex({ children }),
            classes = useTabListStyles();
          return (0, jsx_runtime.jsx)('div', {
            role: 'tablist',
            className: (0, mergeClasses_esm.z)(classes.root, className),
            children: childrenWithProps,
          });
        };
      TabList.displayName = 'TabList';
      try {
        (TabList.displayName = 'TabList'),
          (TabList.__docgenInfo = {
            description: '',
            displayName: 'TabList',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer provided class.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/tabs/src/tab-list/tab-list.tsx#TabList'
            ] = {
              docgenInfo: TabList.__docgenInfo,
              name: 'TabList',
              path: 'components/tabs/src/tab-list/tab-list.tsx#TabList',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const useTabsContext = () => (0, react.useContext)(TabsContext),
        useTabStyles = (0, makeStyles_esm.Z)({
          root: {
            position: 'relative',
            ...index_esm.q5.margin('0'),
            paddingTop: tokens.T.spacingHorizontalS,
            paddingBottom: tokens.T.spacingHorizontalS,
            paddingLeft: tokens.T.spacingHorizontalL,
            paddingRight: tokens.T.spacingHorizontalL,
            display: 'inline-block',
            ...index_esm.q5.borderColor('transparent'),
            ...index_esm.q5.borderWidth(0),
            ...index_esm.q5.borderStyle('none'),
            ...index_esm.q5.borderRadius('0.25rem 0.25rem 0 0'),
            boxShadow: '0 0 0 -2px transparent',
            backgroundColor: 'transparent',
            color: 'inherit',
            cursor: 'pointer',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            fontWeight: tokens.T.fontWeightRegular,
            fontSize: tokens.T.fontSizeBase300,
            lineHeight: tokens.T.lineHeightBase300,
            transitionProperty: 'box-shadow',
            transitionDuration: tokens.T.durationNormal,
            transitionTimingFunction: tokens.T.curveEasyEase,
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '-1px',
              left: '-1px',
              height: 'calc(100% + 2px)',
              width: 'calc(100% + 2px)',
              boxShadow: '0 0 4px 1px transparent',
              transitionProperty: 'box-shadow',
              transitionDuration: tokens.T.durationNormal,
              transitionTimingFunction: tokens.T.curveEasyEase,
              ...index_esm.q5.borderRadius(tokens.T.borderRadiusMedium),
            },
            '&:focus': {
              outlineColor: 'initial',
              outlineStyle: 'none',
              outlineWidth: 'initial',
              position: 'relative',
            },
            '&:focus-visible': {
              '&::after': { boxShadow: `0 0 4px 2px ${tokens.T.colorBrandForeground1}` },
            },
          },
          active: {
            backgroundColor: tokens.T.colorNeutralBackground1,
            fontWeight: tokens.T.fontWeightSemibold,
            boxShadow: `0 2px 0 0 ${tokens.T.colorBrandForeground1}`,
            '&:focus-visible': { boxShadow: '0 2px 0 0 transparent' },
          },
          disabled: { opacity: '0.25', cursor: 'default' },
        }),
        Tab = ({ className, children, disabled, __index = 0, __total = 0 }) => {
          const { onChangeIndex, currentIndex, id } = useTabsContext(),
            active = currentIndex === __index,
            ref = (0, react.useRef)(null),
            isInitialMount = (0, react.useRef)(!0);
          (0, react.useEffect)(() => {
            !isInitialMount.current && active && ref.current?.focus(),
              (isInitialMount.current = !1);
          }, [active]);
          const classes = useTabStyles();
          return (0, jsx_runtime.jsx)('button', {
            id: `${id}-tab-${__index}`,
            role: 'tab',
            'aria-selected': active,
            'aria-controls': `${id}-tabpanel-${__index}`,
            disabled,
            tabIndex: active ? 0 : -1,
            className: (0, mergeClasses_esm.z)(
              classes.root,
              active && classes.active,
              disabled && classes.disabled,
              className,
            ),
            onClick: () => {
              onChangeIndex({ nextIndex: __index });
            },
            onKeyDown: (event) => {
              'ArrowRight' === event.key &&
                (event.preventDefault(),
                onChangeIndex({
                  nextIndex: currentIndex === __total - 1 ? 0 : currentIndex + 1,
                })),
                'ArrowLeft' === event.key &&
                  (event.preventDefault(),
                  onChangeIndex({
                    nextIndex: 0 === currentIndex ? __total - 1 : currentIndex - 1,
                  }));
            },
            ref,
            children,
          });
        };
      Tab.displayName = 'Tab';
      try {
        (Tab.displayName = 'Tab'),
          (Tab.__docgenInfo = {
            description: '',
            displayName: 'Tab',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer provided class.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              disabled: {
                defaultValue: { value: 'false' },
                description: 'Set the tab to be disabled.',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              __index: {
                defaultValue: { value: '0' },
                description: '[INTERNAL] Do not use.',
                name: '__index',
                required: !1,
                type: { name: 'number' },
              },
              __total: {
                defaultValue: { value: '0' },
                description: '[INTERNAL] Do not use.',
                name: '__total',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/tabs/src/tab/tab.tsx#Tab'] = {
              docgenInfo: Tab.__docgenInfo,
              name: 'Tab',
              path: 'components/tabs/src/tab/tab.tsx#Tab',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const TabPanels = ({ children, className }) =>
        (0, jsx_runtime.jsx)('div', { className, children: injectIndex({ children }) });
      TabPanels.displayName = 'TabPanels';
      try {
        (TabPanels.displayName = 'TabPanels'),
          (TabPanels.__docgenInfo = {
            description: '',
            displayName: 'TabPanels',
            props: {
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
              'components/tabs/src/tab-panels/tab-panels.tsx#TabPanels'
            ] = {
              docgenInfo: TabPanels.__docgenInfo,
              name: 'TabPanels',
              path: 'components/tabs/src/tab-panels/tab-panels.tsx#TabPanels',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var motion = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/dom/motion.mjs',
        ),
        use_reduced_motion = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs',
        );
      const appearVariants = {
          active: { display: 'block' },
          inactive: { display: 'none' },
        },
        AppearMotion = ({ children, className, hidden, id, isActive, role, tabIndex }) =>
          (0, jsx_runtime.jsx)(motion.E.div, {
            animate: isActive ? 'active' : 'inactive',
            className,
            hidden,
            id,
            initial: 'inactive',
            role,
            style: { position: 'relative', top: 0 },
            tabIndex,
            variants: appearVariants,
            children,
          });
      AppearMotion.displayName = 'AppearMotion';
      const SlideMotion = ({ children, isActive }) => {
        const shouldReduceMotion = (0, use_reduced_motion.J)();
        return (0, jsx_runtime.jsx)(motion.E.div, {
          variants: {
            initial: { top: 0 },
            active: {
              opacity: 1,
              top: 0,
              transition: {
                delay: shouldReduceMotion ? 0 : 0.2,
                ease: 'easeOut',
                duration: shouldReduceMotion ? 0 : 0.2,
              },
            },
            inactive: {
              opacity: 0,
              top: '-4px',
              transition: { ease: 'easeOut', duration: shouldReduceMotion ? 0 : 0.2 },
            },
          },
          style: { position: 'relative', top: 0 },
          animate: isActive ? 'active' : 'inactive',
          initial: 'initial',
          children,
        });
      };
      SlideMotion.displayName = 'SlideMotion';
      try {
        (AppearMotion.displayName = 'AppearMotion'),
          (AppearMotion.__docgenInfo = {
            description: '',
            displayName: 'AppearMotion',
            props: {
              isActive: {
                defaultValue: null,
                description: '',
                name: 'isActive',
                required: !0,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/tabs/src/tab-panel/motion.tsx#AppearMotion'
            ] = {
              docgenInfo: AppearMotion.__docgenInfo,
              name: 'AppearMotion',
              path: 'components/tabs/src/tab-panel/motion.tsx#AppearMotion',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (SlideMotion.displayName = 'SlideMotion'),
          (SlideMotion.__docgenInfo = {
            description: '',
            displayName: 'SlideMotion',
            props: {
              isActive: {
                defaultValue: null,
                description: '',
                name: 'isActive',
                required: !0,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/tabs/src/tab-panel/motion.tsx#SlideMotion'
            ] = {
              docgenInfo: SlideMotion.__docgenInfo,
              name: 'SlideMotion',
              path: 'components/tabs/src/tab-panel/motion.tsx#SlideMotion',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const TabPanel = ({ className, children, __index = 0 }) => {
        const { currentIndex, id } = useTabsContext(),
          isActive = currentIndex === __index;
        return (0, jsx_runtime.jsx)(
          AppearMotion,
          {
            tabIndex: 0,
            role: 'tabpanel',
            isActive,
            className,
            id: `${id}-tabpanel-${__index}`,
            hidden: !isActive,
            children: (0, jsx_runtime.jsx)(SlideMotion, { isActive, children }),
          },
          __index,
        );
      };
      TabPanel.displayName = 'TabPanel';
      try {
        (TabPanel.displayName = 'TabPanel'),
          (TabPanel.__docgenInfo = {
            description: '',
            displayName: 'TabPanel',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer provided class.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              __index: {
                defaultValue: { value: '0' },
                description: '[INTERNAL] Do not use. Index in the array of tabs.',
                name: '__index',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/tabs/src/tab-panel/tab-panel.tsx#TabPanel'
            ] = {
              docgenInfo: TabPanel.__docgenInfo,
              name: 'TabPanel',
              path: 'components/tabs/src/tab-panel/tab-panel.tsx#TabPanel',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const usePreviewStyles = (0, makeStyles_esm.Z)({
          root: { maxWidth: '60rem', width: '100%' },
        }),
        Content = ({ index }) => {
          const space = (0, use_space_styles.z)();
          return (0, jsx_runtime.jsx)(tile.n, {
            variant: 'solid-color',
            className: space.mt10,
            children: (0, jsx_runtime.jsxs)('article', {
              className: space.p6,
              children: [
                (0, jsx_runtime.jsxs)(text_text.x, {
                  as: 'h3',
                  variant: 'subtitle',
                  block: !0,
                  children: ['This Is a Headline ', index, '!'],
                }),
                (0, jsx_runtime.jsx)(text_text.x, {
                  as: 'p',
                  block: !0,
                  children:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloremque dolores beatae sapiente enim rerum dolorum optio quasi quaerat reiciendis. Laboriosam doloremque itaque optio sint earum debitis nesciunt autem dolor?',
                }),
              ],
            }),
          });
        };
      Content.displayName = 'Content';
      const tabs_stories = { title: 'Atoms/Tabs', component: Tabs },
        Template = (args) => {
          const classes = usePreviewStyles();
          return (0, jsx_runtime.jsxs)(Tabs, {
            className: classes.root,
            ...args,
            children: [
              (0, jsx_runtime.jsxs)(TabList, {
                children: [
                  (0, jsx_runtime.jsx)(Tab, { children: 'Usage' }),
                  (0, jsx_runtime.jsx)(Tab, { children: 'Style' }),
                  (0, jsx_runtime.jsx)(Tab, { children: 'Implementation' }),
                ],
              }),
              (0, jsx_runtime.jsxs)(TabPanels, {
                children: [
                  (0, jsx_runtime.jsx)(TabPanel, {
                    children: (0, jsx_runtime.jsx)(Content, { index: 'One' }),
                  }),
                  (0, jsx_runtime.jsx)(TabPanel, {
                    children: (0, jsx_runtime.jsx)(Content, { index: 'Two' }),
                  }),
                  (0, jsx_runtime.jsx)(TabPanel, {
                    children: (0, jsx_runtime.jsx)(Content, { index: 'Three' }),
                  }),
                ],
              }),
            ],
          });
        };
      Template.displayName = 'Template';
      const Simple = Template.bind({}),
        __namedExportsOrder = ['Simple'];
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
    './styles/utilities/lib/map-to-styles.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      function mapToStyles(map, styleFunction) {
        return Object.entries(map).reduce(
          (acc, [key, value]) => ((acc[key] = styleFunction(value)), acc),
          {},
        );
      }
      __webpack_require__.d(__webpack_exports__, { f: () => mapToStyles });
    },
  },
]);
>>>>>>> 0a42c43 (Runs lint):docs/tabs-__dev__-tabs-stories.5593350e.iframe.bundle.js

<<<<<<< HEAD:docs/main-navigation-__dev__-main-navigation-stories.46dca9fd.iframe.bundle.js
"use strict";(self.webpackChunkarbutus=self.webpackChunkarbutus||[]).push([[3920],{"./components/divider/lib/divider/divider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Divider});var mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js");const useDividerStyles=(0,__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js").Z)({root:{width:"100%",height:"0.0625rem",position:"relative",borderTopStyle:"none",borderRightStyle:"none",borderBottomStyle:"none",borderLeftStyle:"none",backgroundColor:tokens.T.colorNeutralStroke1,marginBottom:0,marginTop:0}}),Divider=({className})=>{const classes=useDividerStyles(),rootClasses=(0,mergeClasses_esm.z)(classes.root,className);return react.createElement("hr",{className:rootClasses})};Divider.__docgenInfo={description:"",methods:[],displayName:"Divider"}},"./components/main-navigation/__dev__/main-navigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>main_navigation_stories});var tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),text_text=__webpack_require__("./components/text/lib/text/text.js"),tile=__webpack_require__("./components/tile/lib/tile.js"),use_space_styles=__webpack_require__("./hooks/use-space-styles/lib/use-space-styles.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MainNavigation=({className,children})=>(0,jsx_runtime.jsx)("div",{className,children});MainNavigation.displayName="MainNavigation";try{MainNavigation.displayName="MainNavigation",MainNavigation.__docgenInfo={description:"",displayName:"MainNavigation",props:{className:{defaultValue:null,description:"Consumer provided class.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-navigation/src/main-navigation/main-navigation.tsx#MainNavigation"]={docgenInfo:MainNavigation.__docgenInfo,name:"MainNavigation",path:"components/main-navigation/src/main-navigation/main-navigation.tsx#MainNavigation"})}catch(__react_docgen_typescript_loader_error){}var divider=__webpack_require__("./components/divider/lib/divider/divider.js"),index_esm=__webpack_require__("./node_modules/@griffel/core/index.esm.js");const useMainNavigationLinkStyles=(0,makeStyles_esm.Z)({root:{...index_esm.q5.padding(0,tokens.T.spacingHorizontalM,0,tokens.T.spacingHorizontalXXXL),alignItems:"center",backgroundColor:"transparent",color:tokens.T.colorNeutralForeground1,cursor:"pointer",display:"grid",fontSize:tokens.T.fontSizeBase300,fontWeight:tokens.T.fontWeightRegular,height:tokens.T.spacingHorizontalXXXL,lineHeight:tokens.T.lineHeightBase300,marginBottom:tokens.T.spacingHorizontalS,marginTop:tokens.T.spacingHorizontalS,paddingLeft:tokens.T.spacingHorizontalXXL,textAlign:"left",textDecorationLine:"none",transitionDuration:tokens.T.durationNormal,transitionProperty:"all",transitionTimingFunction:tokens.T.curveEasyEase,width:"100%",...index_esm.q5.borderRadius("0.5rem"),...index_esm.q5.borderStyle("none"),...index_esm.q5.borderColor("transparent"),...index_esm.q5.borderStyle("none"),...index_esm.q5.borderColor("transparent"),":hover":{backgroundColor:tokens.T.colorBrandBackground2,color:tokens.T.colorBrandForeground2,":focus":{outlineColor:tokens.T.colorBrandForeground2}}},active:{backgroundColor:tokens.T.colorBrandBackground2,"& a":{color:tokens.T.colorBrandForeground2}}}),MainNavigationLink=({as:Link,children,elementProps,isActive,className})=>{const classes=useMainNavigationLinkStyles();return(0,jsx_runtime.jsx)(Link,{className:(0,mergeClasses_esm.z)(classes.root,isActive&&classes.active,className),...elementProps,children})};MainNavigationLink.displayName="MainNavigationLink";try{MainNavigationLink.displayName="MainNavigationLink",MainNavigationLink.__docgenInfo={description:"",displayName:"MainNavigationLink",props:{as:{defaultValue:null,description:"Link element.",name:"as",required:!0,type:{name:"ElementType"}},elementProps:{defaultValue:null,description:"Link element props.",name:"elementProps",required:!0,type:{name:"Record<string, unknown>"}},isActive:{defaultValue:null,description:"Whether this link is currently active.",name:"isActive",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-navigation/src/main-navigation-link/main-navigation-link.tsx#MainNavigationLink"]={docgenInfo:MainNavigationLink.__docgenInfo,name:"MainNavigationLink",path:"components/main-navigation/src/main-navigation-link/main-navigation-link.tsx#MainNavigationLink"})}catch(__react_docgen_typescript_loader_error){}var icon=__webpack_require__("./components/icon/lib/icon/icon.js"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");const useMainNavigationSubStyles=(0,makeStyles_esm.Z)({button:{...index_esm.q5.padding(0,tokens.T.spacingHorizontalM,0,tokens.T.spacingHorizontalS),marginBottom:tokens.T.spacingHorizontalS,color:tokens.T.colorNeutralForeground1,fontWeight:tokens.T.fontWeightSemibold,fontSize:tokens.T.fontSizeBase300,lineHeight:tokens.T.lineHeightBase300,textAlign:"left",display:"grid",gridTemplateColumns:`${tokens.T.spacingHorizontalL} auto`,columnGap:tokens.T.spacingHorizontalS,alignItems:"center",width:"100%",height:tokens.T.spacingHorizontalXXXL,transitionProperty:"all",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,backgroundColor:"transparent",cursor:"pointer",...index_esm.q5.borderStyle("none"),...index_esm.q5.borderColor("transparent"),...index_esm.q5.borderRadius("0.5rem"),":hover":{color:tokens.T.colorBrandForeground2,backgroundColor:tokens.T.colorBrandBackground2,"& svg":{color:tokens.T.colorBrandForeground2},":focus":{outlineColor:tokens.T.colorBrandForeground2}},'&[data-state="open"]':{"& svg":{transform:"rotate(90deg)"}}},subList:{paddingLeft:tokens.T.spacingHorizontalXXL},toggle:{transitionProperty:"transform",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase},toggleExpanded:{transform:"rotate(90deg)"},toggleIdle:{transform:"rotate(0deg)"}});var motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),use_reduced_motion=__webpack_require__("./node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs");const slideVariants=({shouldReduceMotion})=>({expanded:{height:"auto",transition:{ease:"easeOut",duration:shouldReduceMotion?0:.2}},collapsed:{height:0,transition:{delay:shouldReduceMotion?0:.075,ease:"easeOut",duration:shouldReduceMotion?0:.2}}}),SlideMotion=({children,initial,a11yLabelId,a11yContentId,className})=>(0,jsx_runtime.jsx)(motion.E.section,{initial,animate:"expanded",exit:"collapsed",variants:slideVariants({shouldReduceMotion:(0,use_reduced_motion.J)()}),className,id:a11yContentId,"aria-labelledby":a11yLabelId,role:"region",children});SlideMotion.displayName="SlideMotion";const fadeVariants=({shouldReduceMotion})=>({expanded:{opacity:1,top:"0",transition:{delay:shouldReduceMotion?0:.125,ease:"easeOut",duration:shouldReduceMotion?0:.15}},collapsed:{opacity:0,top:"-4px",transition:{ease:"easeOut",duration:shouldReduceMotion?0:.15}}}),FadeMotion=({children,initial})=>(0,jsx_runtime.jsx)(motion.E.div,{style:{position:"relative"},initial,animate:"expanded",exit:"collapsed",variants:fadeVariants({shouldReduceMotion:(0,use_reduced_motion.J)()}),children});FadeMotion.displayName="FadeMotion";try{SlideMotion.displayName="SlideMotion",SlideMotion.__docgenInfo={description:"",displayName:"SlideMotion",props:{initial:{defaultValue:null,description:"",name:"initial",required:!0,type:{name:"enum",value:[{value:'"collapsed"'},{value:'"expanded"'}]}},a11yLabelId:{defaultValue:null,description:"",name:"a11yLabelId",required:!0,type:{name:"string"}},a11yContentId:{defaultValue:null,description:"",name:"a11yContentId",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-navigation/src/main-navigation-sub/motion.tsx#SlideMotion"]={docgenInfo:SlideMotion.__docgenInfo,name:"SlideMotion",path:"components/main-navigation/src/main-navigation-sub/motion.tsx#SlideMotion"})}catch(__react_docgen_typescript_loader_error){}try{FadeMotion.displayName="FadeMotion",FadeMotion.__docgenInfo={description:"",displayName:"FadeMotion",props:{initial:{defaultValue:null,description:"",name:"initial",required:!0,type:{name:"enum",value:[{value:'"collapsed"'},{value:'"expanded"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-navigation/src/main-navigation-sub/motion.tsx#FadeMotion"]={docgenInfo:FadeMotion.__docgenInfo,name:"FadeMotion",path:"components/main-navigation/src/main-navigation-sub/motion.tsx#FadeMotion"})}catch(__react_docgen_typescript_loader_error){}const MainNavigationSub=({className,children,title,initial="collapsed"})=>{const[isExpanded,setIsExpanded]=(0,react.useState)(!1),a11yLabelId=(0,react.useId)(),a11yContentId=(0,react.useId)(),classes=useMainNavigationSubStyles();return(0,jsx_runtime.jsxs)("div",{className,children:[(0,jsx_runtime.jsxs)("button",{className:classes.button,id:a11yLabelId,"aria-controls":a11yContentId,"aria-expanded":isExpanded,onClick:()=>setIsExpanded(!isExpanded),children:[(0,jsx_runtime.jsx)(icon.J,{iconName:"chevron-right",color:"tertiary",className:(0,mergeClasses_esm.z)(classes.toggle,isExpanded?classes.toggleExpanded:classes.toggleIdle)}),title]}),(0,jsx_runtime.jsx)(AnimatePresence.M,{initial:!1,children:isExpanded&&(0,jsx_runtime.jsx)(SlideMotion,{initial,a11yContentId,a11yLabelId,children:(0,jsx_runtime.jsx)(FadeMotion,{initial,children:(0,jsx_runtime.jsx)("div",{className:classes.subList,children})})})})]})};MainNavigationSub.displayName="MainNavigationSub";try{MainNavigationSub.displayName="MainNavigationSub",MainNavigationSub.__docgenInfo={description:"",displayName:"MainNavigationSub",props:{className:{defaultValue:null,description:"Consumer provided class.",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Subsection title",name:"title",required:!0,type:{name:"string"}},initial:{defaultValue:{value:"collapsed"},description:"Initial state of the accordion item.",name:"initial",required:!1,type:{name:"enum",value:[{value:'"collapsed"'},{value:'"expanded"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-navigation/src/main-navigation-sub/main-navigation-sub.tsx#MainNavigationSub"]={docgenInfo:MainNavigationSub.__docgenInfo,name:"MainNavigationSub",path:"components/main-navigation/src/main-navigation-sub/main-navigation-sub.tsx#MainNavigationSub"})}catch(__react_docgen_typescript_loader_error){}const MainNavigationRendererContext=(0,react.createContext)({linkAs:"a"}),MainNavigationRendererProvider=MainNavigationRendererContext.Provider,isSubMenu=(MainNavigationRendererContext.Consumer,item=>"items"in item),isButton=item=>"id"in item,MainNavigationItems=({item})=>{const{linkAs,activeItemId,onNavigationItemClick}=(0,react.useContext)(MainNavigationRendererContext),space=(0,use_space_styles.z)(),handleClickProp=isButton(item)&&onNavigationItemClick?{onClick:()=>onNavigationItemClick?.(item)}:{};return isButton(item)?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(MainNavigationLink,{isActive:item.id===activeItemId,as:linkAs,elementProps:{...item.linkProps??{},...handleClickProp},children:item.title}),item.hasDivider&&(0,jsx_runtime.jsx)(divider.i,{className:space.my4})]}):isSubMenu(item)?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(MainNavigationSub,{title:item.title,children:Object.entries(item.items).map((([key,subItem])=>(0,jsx_runtime.jsx)(MainNavigationItems,{item:subItem},key)))}),item.hasDivider&&(0,jsx_runtime.jsx)(divider.i,{className:space.my4})]}):null},MainNavigationRenderer=({items,...contextValue})=>(0,jsx_runtime.jsx)(MainNavigationRendererProvider,{value:contextValue,children:Object.entries(items).map((([key,item])=>(0,jsx_runtime.jsx)(MainNavigationItems,{item},key)))});MainNavigationRenderer.displayName="MainNavigationRenderer";try{isSubMenu.displayName="isSubMenu",isSubMenu.__docgenInfo={description:"",displayName:"isSubMenu",props:{id:{defaultValue:null,description:"Unique id of the item. Use the route path as id, if applicable. Id is used to determine the active item.",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"Human-readable title of the navigation button.\nHuman-readable title of the sub-navigation button.",name:"title",required:!0,type:{name:"string"}},hasDivider:{defaultValue:{value:"false\nfalse"},description:"Adds an optional divider **after** the navigation button.\nAdds an optional divider **after** the sub-navigation button.",name:"hasDivider",required:!1,type:{name:"boolean"}},linkProps:{defaultValue:null,description:"Rest of the props are passed to the link element.",name:"linkProps",required:!1,type:{name:"{ [key: string]: unknown; }"}},linkAs:{defaultValue:null,description:"Overrides the link element passed to `MainNavigationRenderer`.",name:"linkAs",required:!1,type:{name:"ElementType"}},items:{defaultValue:null,description:"Navigation items of the sub-navigation.",name:"items",required:!0,type:{name:"Record<string, NavigationLink | SubNavigation>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-navigation/src/main-navigation-renderer/main-navigation-renderer.tsx#isSubMenu"]={docgenInfo:isSubMenu.__docgenInfo,name:"isSubMenu",path:"components/main-navigation/src/main-navigation-renderer/main-navigation-renderer.tsx#isSubMenu"})}catch(__react_docgen_typescript_loader_error){}try{isButton.displayName="isButton",isButton.__docgenInfo={description:"",displayName:"isButton",props:{id:{defaultValue:null,description:"Unique id of the item. Use the route path as id, if applicable. Id is used to determine the active item.",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"Human-readable title of the navigation button.\nHuman-readable title of the sub-navigation button.",name:"title",required:!0,type:{name:"string"}},hasDivider:{defaultValue:{value:"false\nfalse"},description:"Adds an optional divider **after** the navigation button.\nAdds an optional divider **after** the sub-navigation button.",name:"hasDivider",required:!1,type:{name:"boolean"}},linkProps:{defaultValue:null,description:"Rest of the props are passed to the link element.",name:"linkProps",required:!1,type:{name:"{ [key: string]: unknown; }"}},linkAs:{defaultValue:null,description:"Overrides the link element passed to `MainNavigationRenderer`.",name:"linkAs",required:!1,type:{name:"ElementType"}},items:{defaultValue:null,description:"Navigation items of the sub-navigation.",name:"items",required:!0,type:{name:"Record<string, NavigationLink | SubNavigation>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-navigation/src/main-navigation-renderer/main-navigation-renderer.tsx#isButton"]={docgenInfo:isButton.__docgenInfo,name:"isButton",path:"components/main-navigation/src/main-navigation-renderer/main-navigation-renderer.tsx#isButton"})}catch(__react_docgen_typescript_loader_error){}try{MainNavigationItems.displayName="MainNavigationItems",MainNavigationItems.__docgenInfo={description:"",displayName:"MainNavigationItems",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"NavigationLink | SubNavigation"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-navigation/src/main-navigation-renderer/main-navigation-renderer.tsx#MainNavigationItems"]={docgenInfo:MainNavigationItems.__docgenInfo,name:"MainNavigationItems",path:"components/main-navigation/src/main-navigation-renderer/main-navigation-renderer.tsx#MainNavigationItems"})}catch(__react_docgen_typescript_loader_error){}try{MainNavigationRenderer.displayName="MainNavigationRenderer",MainNavigationRenderer.__docgenInfo={description:"",displayName:"MainNavigationRenderer",props:{items:{defaultValue:null,description:"Navigation items of the sub-navigation.",name:"items",required:!0,type:{name:"NavigationItems | []"}},activeItemId:{defaultValue:null,description:"Id of the active navigation item. It is used to visually highlight an active page. `activeItemId` should match the\n`id` of the `NavigationLink` item in your `NavigationItems` object (passed through `items`).\n\nIf none is provided, no item will be highlighted.",name:"activeItemId",required:!1,type:{name:"string"}},linkAs:{defaultValue:null,description:"Link element.",name:"linkAs",required:!0,type:{name:"ElementType"}},onNavigationItemClick:{defaultValue:null,description:"Optional callback that is called when a navigation item is clicked.\n@param id - Id of the `NavigationButton` item in your `NavigationItems` object (passed through `items`).",name:"onNavigationItemClick",required:!1,type:{name:"(item: NavigationLinkClickValue) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/main-navigation/src/main-navigation-renderer/main-navigation-renderer.tsx#MainNavigationRenderer"]={docgenInfo:MainNavigationRenderer.__docgenInfo,name:"MainNavigationRenderer",path:"components/main-navigation/src/main-navigation-renderer/main-navigation-renderer.tsx#MainNavigationRenderer"})}catch(__react_docgen_typescript_loader_error){}const main_navigation_stories={title:"Layout/MainNavigation",component:MainNavigation},Link=({children,onClick,className})=>(0,jsx_runtime.jsx)("button",{className,onClick,children});Link.displayName="Link";const useNavigationStyles=(0,makeStyles_esm.Z)({root:{paddingLeft:tokens.T.spacingHorizontalXXXL,paddingRight:tokens.T.spacingHorizontalXXXL,width:"100%",display:"grid",gridTemplateColumns:"17.5rem auto",minHeight:"40rem",columnGap:tokens.T.spacingHorizontalXXXL}}),menuItems={aboutUs:{id:"about-us",title:"About us"},overview:{id:"overview",title:"Overview"},gettingStarted:{id:"getting-started",title:"Getting started",hasDivider:!0},designFundamentals:{title:"Design fundamentals",hasDivider:!0,items:{typography:{id:"design-fundamentals/typography",title:"Typography"},colors:{id:"design-fundamentals/colors",title:"Colors"},spaceGrid:{id:"design-fundamentals/space-grid",title:"Space grid"}}},components:{title:"Components",hasDivider:!0,items:{button:{title:"Button",items:{primary:{id:"components/button/primary",title:"Primary"},secondary:{id:"components/button/secondary",title:"Secondary"},umph:{id:"components/button/umph",title:"Umph"}}},tile:{id:"components/tile",title:"Tile"},link:{id:"components/link",title:"Link"}}},credits:{id:"credits",title:"Credits"}},findTitle=(items,id)=>{for(const key in items){const item=items[key];if(isButton(item)&&item.id===id)return item.title;if(isSubMenu(item)){const result=findTitle(item.items,id);if(result)return result}}},Template=()=>{const classes=useNavigationStyles(),space=(0,use_space_styles.z)(),[active,setActive]=(0,react.useState)(isButton(menuItems.overview)?menuItems.overview.id:"");return(0,jsx_runtime.jsxs)("div",{className:classes.root,children:[(0,jsx_runtime.jsx)(MainNavigation,{children:(0,jsx_runtime.jsx)(MainNavigationRenderer,{items:menuItems,activeItemId:active,linkAs:Link,onNavigationItemClick:item=>setActive(item.id)})}),(0,jsx_runtime.jsx)(tile.n,{variant:"solid-color",className:(0,mergeClasses_esm.z)(space.py10,space.px12),children:(0,jsx_runtime.jsx)(text_text.x,{variant:"title",color:"quaternary",children:findTitle(menuItems,active)})})]})};Template.displayName="Template";const Simple=Template.bind({}),__namedExportsOrder=["Simple"]},"./components/text/lib/text/text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@fluentui/react-text/lib/components/Text/Text.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_text_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/text/lib/text/text.styles.js");const Text=({children,color="primary",variant,className,weight,size,font,...props})=>{const classes=(0,_text_styles__WEBPACK_IMPORTED_MODULE_1__.Ke)();let variantClass="";weight&&size&&font||(variantClass=variant?classes[variant]:classes.paragraph);const rootClasses=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.z)(classes.root,classes[color],variantClass,className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__.x,{weight,size,font,className:rootClasses,...props},children)};Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./components/text/lib/text/text.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AD:()=>variantClasses,Ke:()=>useTextStyles,bG:()=>colorClasses});var _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./styles/utilities/lib/map-to-styles.js");const colorMap={accent:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground1,action:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,primary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground1,secondary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground2,tertiary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3,quaternary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground4,negative:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,positive:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteGreenForeground1,warning:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteMarigoldForeground1,danger:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,info:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,background:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground1},colorClasses=(0,_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__.f)(colorMap,(color=>({color}))),variantClasses={jumbo:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero1000,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero1000,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightBold},title:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero800,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero800,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},subtitle:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero700,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero700,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},headline:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},leading:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},paragraph:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},caption:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},description:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase200,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase200,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular}},useTextStyles=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.Z)({...colorClasses,...variantClasses,root:{..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.margin(0),..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.padding(0)},code:{display:"inline-block",fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyMonospace,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,backgroundColor:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground3,..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.borderRadius(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.borderRadiusSmall),paddingLeft:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS,paddingRight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS}})},"./components/tile/lib/tile.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>Tile});var mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),index_esm=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),map_to_styles=__webpack_require__("./styles/utilities/lib/map-to-styles.js"),themes_tokens=__webpack_require__("./styles/theming/lib/themes/tokens.js");const colorMap={none:"transparent",primary:tokens.T.colorNeutralBackground1,secondary:tokens.T.colorNeutralBackground2,tertiary:tokens.T.colorNeutralBackground3,quaternary:tokens.T.colorNeutralBackground4,tile:tokens.T.colorNeutralBackground6,negative:tokens.T.colorPaletteDarkOrangeBackground1,positive:tokens.T.colorPaletteGreenBackground1,warning:tokens.T.colorPaletteMarigoldBackground1,danger:tokens.T.colorPaletteDarkOrangeBackground1,info:tokens.T.colorNeutralBackground2,accent:tokens.T.colorBrandBackground2},colorClasses=(0,map_to_styles.f)(colorMap,(color=>({backgroundColor:color}))),useTileStyles=(0,makeStyles_esm.Z)({root:{marginTop:0,marginBottom:0,marginLeft:0,marginRight:0},interactive:{...index_esm.q5.borderStyle("none"),...index_esm.q5.borderColor("transparent"),cursor:"pointer",transitionProperty:"all",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,":focus":{outlineColor:tokens.T.colorBrandForeground2}},card:{backgroundColor:tokens.T.colorNeutralBackground1,...index_esm.q5.borderRadius(tokens.T.borderRadiusLarge),boxShadow:tokens.T.shadow4},interactiveCard:{":hover":{boxShadow:tokens.T.shadow16}},image:{backgroundColor:tokens.T.colorNeutralBackground6,...index_esm.q5.borderRadius(themes_tokens.A.shape.borderRadius),backgroundSize:"cover",backgroundPositionX:"center",backgroundPositionY:"center"},solidColor:{...index_esm.q5.borderRadius(themes_tokens.A.shape.borderRadius)},...colorClasses}),isImage=({variant})=>"image"===variant,Tile=({children,variant,as:Root="div",backgroundColor="tile",imageSrc,className,onClick})=>{const classes=useTileStyles();let variantClasses="";switch(!0){case(({variant})=>"card"===variant)({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.card,onClick&&classes.interactive,onClick&&classes.interactiveCard,className);break;case isImage({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.image,onClick&&classes.interactive,className);break;case(({variant})=>"solid-color"===variant)({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.solidColor,onClick&&classes.interactive,classes[backgroundColor],className);break;default:variantClasses=(0,mergeClasses_esm.z)(classes.root,className)}const imageBackground=isImage({variant})?{style:{backgroundImage:`url("${imageSrc??""}")`}}:{};return react.createElement(Root,{className:variantClasses,...imageBackground,onClick},children)};Tile.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1},backgroundColor:{defaultValue:{value:"'tile'",computed:!1},required:!1}}}},"./hooks/use-space-styles/lib/use-space-styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useSpaceStyles});var makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js");const spaceScale={1:tokens.T.spacingHorizontalXXS,2:tokens.T.spacingHorizontalXS,3:tokens.T.spacingHorizontalSNudge,4:tokens.T.spacingHorizontalS,5:tokens.T.spacingHorizontalMNudge,6:tokens.T.spacingHorizontalM,7:tokens.T.spacingHorizontalL,8:tokens.T.spacingHorizontalXL,9:tokens.T.spacingHorizontalXXL,10:tokens.T.spacingHorizontalXXXL,11:"40px",12:"52px"},spaceEntries=Object.entries(spaceScale),margin=spaceEntries.reduce(((acc,[key,value])=>(acc[`m${key}`]={marginTop:value,marginBottom:value,marginLeft:value,marginRight:value},acc)),{}),marginY=spaceEntries.reduce(((acc,[key,value])=>(acc[`my${key}`]={marginTop:value,marginBottom:value},acc)),{}),marginX=spaceEntries.reduce(((acc,[key,value])=>(acc[`mx${key}`]={marginLeft:value,marginRight:value},acc)),{}),marginTop=spaceEntries.reduce(((acc,[key,value])=>(acc[`mt${key}`]={marginTop:value},acc)),{}),marginBottom=spaceEntries.reduce(((acc,[key,value])=>(acc[`mb${key}`]={marginBottom:value},acc)),{}),marginLeft=spaceEntries.reduce(((acc,[key,value])=>(acc[`ml${key}`]={marginLeft:value},acc)),{}),marginRight=spaceEntries.reduce(((acc,[key,value])=>(acc[`mr${key}`]={marginRight:value},acc)),{}),padding=spaceEntries.reduce(((acc,[key,value])=>(acc[`p${key}`]={paddingTop:value,paddingBottom:value,paddingLeft:value,paddingRight:value},acc)),{}),paddingY=spaceEntries.reduce(((acc,[key,value])=>(acc[`py${key}`]={paddingTop:value,paddingBottom:value},acc)),{}),paddingX=spaceEntries.reduce(((acc,[key,value])=>(acc[`px${key}`]={paddingLeft:value,paddingRight:value},acc)),{}),paddingTop=spaceEntries.reduce(((acc,[key,value])=>(acc[`pt${key}`]={paddingTop:value},acc)),{}),paddingBottom=spaceEntries.reduce(((acc,[key,value])=>(acc[`pb${key}`]={paddingBottom:value},acc)),{}),paddingLeft=spaceEntries.reduce(((acc,[key,value])=>(acc[`pl${key}`]={paddingLeft:value},acc)),{}),paddingRight=spaceEntries.reduce(((acc,[key,value])=>(acc[`pr${key}`]={paddingRight:value},acc)),{}),useSpaceStyles=(0,makeStyles_esm.Z)({...margin,...marginY,...marginX,...marginTop,...marginBottom,...marginLeft,...marginRight,...padding,...paddingBottom,...paddingLeft,...paddingRight,...paddingTop,...paddingX,...paddingY})},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");var errors=__webpack_require__("./node_modules/framer-motion/dist/es/utils/errors.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.k)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const forceRender=(0,react.useContext)(LayoutGroupContext.p).forceRender||function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}()[0],isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exitingChildren=(0,react.useRef)(new Map).current,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),function useUnmountEffect(callback){return(0,react.useEffect)((()=>()=>callback()),[])}((()=>{isInitialRender.current=!0,allChildren.clear(),exitingChildren.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1!==targetKeys.indexOf(key)||exitingChildren.has(key)||exitingChildren.set(key,void 0)}return"wait"===mode&&exitingChildren.size&&(childrenToRender=[]),exitingChildren.forEach(((component,key)=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);let exitingComponent=component;if(!exitingComponent){const onExit=()=>{allChildren.delete(key),exitingChildren.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exitingChildren.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}};exitingComponent=react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:onExit,custom,presenceAffectsLayout,mode},child),exitingChildren.set(key,exitingComponent)}childrenToRender.splice(insertionIndex,0,exitingComponent)})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exitingChildren.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),react.createElement(react.Fragment,null,exitingChildren.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);
=======
'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [3920],
  {
    './components/divider/lib/divider/divider.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { i: () => Divider });
      var mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js');
      const useDividerStyles = (0,
        __webpack_require__('./node_modules/@griffel/react/makeStyles.esm.js').Z)({
          root: {
            width: '100%',
            height: '0.0625rem',
            position: 'relative',
            borderTopStyle: 'none',
            borderRightStyle: 'none',
            borderBottomStyle: 'none',
            borderLeftStyle: 'none',
            backgroundColor: tokens.T.colorNeutralStroke1,
            marginBottom: 0,
            marginTop: 0,
          },
        }),
        Divider = ({ className }) => {
          const classes = useDividerStyles(),
            rootClasses = (0, mergeClasses_esm.z)(classes.root, className);
          return react.createElement('hr', { className: rootClasses });
        };
      Divider.__docgenInfo = { description: '', methods: [], displayName: 'Divider' };
    },
    './components/main-navigation/__dev__/main-navigation.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Simple: () => Simple,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => main_navigation_stories,
        });
      var tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js'),
        makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        text_text = __webpack_require__('./components/text/lib/text/text.js'),
        tile = __webpack_require__('./components/tile/lib/tile.js'),
        use_space_styles = __webpack_require__(
          './hooks/use-space-styles/lib/use-space-styles.js',
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const MainNavigation = ({ className, children }) =>
        (0, jsx_runtime.jsx)('div', { className, children });
      MainNavigation.displayName = 'MainNavigation';
      try {
        (MainNavigation.displayName = 'MainNavigation'),
          (MainNavigation.__docgenInfo = {
            description: '',
            displayName: 'MainNavigation',
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
              'components/main-navigation/src/main-navigation/main-navigation.tsx#MainNavigation'
            ] = {
              docgenInfo: MainNavigation.__docgenInfo,
              name: 'MainNavigation',
              path: 'components/main-navigation/src/main-navigation/main-navigation.tsx#MainNavigation',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var divider = __webpack_require__('./components/divider/lib/divider/divider.js'),
        index_esm = __webpack_require__('./node_modules/@griffel/core/index.esm.js');
      const useMainNavigationLinkStyles = (0, makeStyles_esm.Z)({
          root: {
            ...index_esm.q5.padding(
              0,
              tokens.T.spacingHorizontalM,
              0,
              tokens.T.spacingHorizontalXXXL,
            ),
            alignItems: 'center',
            backgroundColor: 'transparent',
            color: tokens.T.colorNeutralForeground1,
            cursor: 'pointer',
            display: 'grid',
            fontSize: tokens.T.fontSizeBase300,
            fontWeight: tokens.T.fontWeightRegular,
            height: tokens.T.spacingHorizontalXXXL,
            lineHeight: tokens.T.lineHeightBase300,
            marginBottom: tokens.T.spacingHorizontalS,
            marginTop: tokens.T.spacingHorizontalS,
            paddingLeft: tokens.T.spacingHorizontalXXL,
            textAlign: 'left',
            textDecorationLine: 'none',
            transitionDuration: tokens.T.durationNormal,
            transitionProperty: 'all',
            transitionTimingFunction: tokens.T.curveEasyEase,
            width: '100%',
            ...index_esm.q5.borderRadius('0.5rem'),
            ...index_esm.q5.borderStyle('none'),
            ...index_esm.q5.borderColor('transparent'),
            ...index_esm.q5.borderStyle('none'),
            ...index_esm.q5.borderColor('transparent'),
            ':hover': {
              backgroundColor: tokens.T.colorBrandBackground2,
              color: tokens.T.colorBrandForeground2,
              ':focus': { outlineColor: tokens.T.colorBrandForeground2 },
            },
          },
          active: {
            backgroundColor: tokens.T.colorBrandBackground2,
            '& a': { color: tokens.T.colorBrandForeground2 },
          },
        }),
        MainNavigationLink = ({
          as: Link,
          children,
          elementProps,
          isActive,
          className,
        }) => {
          const classes = useMainNavigationLinkStyles();
          return (0, jsx_runtime.jsx)(Link, {
            className: (0, mergeClasses_esm.z)(
              classes.root,
              isActive && classes.active,
              className,
            ),
            ...elementProps,
            children,
          });
        };
      MainNavigationLink.displayName = 'MainNavigationLink';
      try {
        (MainNavigationLink.displayName = 'MainNavigationLink'),
          (MainNavigationLink.__docgenInfo = {
            description: '',
            displayName: 'MainNavigationLink',
            props: {
              as: {
                defaultValue: null,
                description: 'Link element.',
                name: 'as',
                required: !0,
                type: { name: 'ElementType' },
              },
              elementProps: {
                defaultValue: null,
                description: 'Link element props.',
                name: 'elementProps',
                required: !0,
                type: { name: 'Record<string, unknown>' },
              },
              isActive: {
                defaultValue: null,
                description: 'Whether this link is currently active.',
                name: 'isActive',
                required: !1,
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
              'components/main-navigation/src/main-navigation-link/main-navigation-link.tsx#MainNavigationLink'
            ] = {
              docgenInfo: MainNavigationLink.__docgenInfo,
              name: 'MainNavigationLink',
              path: 'components/main-navigation/src/main-navigation-link/main-navigation-link.tsx#MainNavigationLink',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var icon = __webpack_require__('./components/icon/lib/icon/icon.js'),
        AnimatePresence = __webpack_require__(
          './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs',
        );
      const useMainNavigationSubStyles = (0, makeStyles_esm.Z)({
        button: {
          ...index_esm.q5.padding(
            0,
            tokens.T.spacingHorizontalM,
            0,
            tokens.T.spacingHorizontalS,
          ),
          marginBottom: tokens.T.spacingHorizontalS,
          color: tokens.T.colorNeutralForeground1,
          fontWeight: tokens.T.fontWeightSemibold,
          fontSize: tokens.T.fontSizeBase300,
          lineHeight: tokens.T.lineHeightBase300,
          textAlign: 'left',
          display: 'grid',
          gridTemplateColumns: `${tokens.T.spacingHorizontalL} auto`,
          columnGap: tokens.T.spacingHorizontalS,
          alignItems: 'center',
          width: '100%',
          height: tokens.T.spacingHorizontalXXXL,
          transitionProperty: 'all',
          transitionDuration: tokens.T.durationNormal,
          transitionTimingFunction: tokens.T.curveEasyEase,
          backgroundColor: 'transparent',
          cursor: 'pointer',
          ...index_esm.q5.borderStyle('none'),
          ...index_esm.q5.borderColor('transparent'),
          ...index_esm.q5.borderRadius('0.5rem'),
          ':hover': {
            color: tokens.T.colorBrandForeground2,
            backgroundColor: tokens.T.colorBrandBackground2,
            '& svg': { color: tokens.T.colorBrandForeground2 },
            ':focus': { outlineColor: tokens.T.colorBrandForeground2 },
          },
          '&[data-state="open"]': { '& svg': { transform: 'rotate(90deg)' } },
        },
        subList: { paddingLeft: tokens.T.spacingHorizontalXXL },
        toggle: {
          transitionProperty: 'transform',
          transitionDuration: tokens.T.durationNormal,
          transitionTimingFunction: tokens.T.curveEasyEase,
        },
        toggleExpanded: { transform: 'rotate(90deg)' },
        toggleIdle: { transform: 'rotate(0deg)' },
      });
      var motion = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/dom/motion.mjs',
        ),
        use_reduced_motion = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs',
        );
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
        SlideMotion = ({ children, initial, a11yLabelId, a11yContentId, className }) =>
          (0, jsx_runtime.jsx)(motion.E.section, {
            initial,
            animate: 'expanded',
            exit: 'collapsed',
            variants: slideVariants({ shouldReduceMotion: (0, use_reduced_motion.J)() }),
            className,
            id: a11yContentId,
            'aria-labelledby': a11yLabelId,
            role: 'region',
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
        FadeMotion = ({ children, initial }) =>
          (0, jsx_runtime.jsx)(motion.E.div, {
            style: { position: 'relative' },
            initial,
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
              initial: {
                defaultValue: null,
                description: '',
                name: 'initial',
                required: !0,
                type: {
                  name: 'enum',
                  value: [{ value: '"collapsed"' }, { value: '"expanded"' }],
                },
              },
              a11yLabelId: {
                defaultValue: null,
                description: '',
                name: 'a11yLabelId',
                required: !0,
                type: { name: 'string' },
              },
              a11yContentId: {
                defaultValue: null,
                description: '',
                name: 'a11yContentId',
                required: !0,
                type: { name: 'string' },
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
              'components/main-navigation/src/main-navigation-sub/motion.tsx#SlideMotion'
            ] = {
              docgenInfo: SlideMotion.__docgenInfo,
              name: 'SlideMotion',
              path: 'components/main-navigation/src/main-navigation-sub/motion.tsx#SlideMotion',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (FadeMotion.displayName = 'FadeMotion'),
          (FadeMotion.__docgenInfo = {
            description: '',
            displayName: 'FadeMotion',
            props: {
              initial: {
                defaultValue: null,
                description: '',
                name: 'initial',
                required: !0,
                type: {
                  name: 'enum',
                  value: [{ value: '"collapsed"' }, { value: '"expanded"' }],
                },
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
              'components/main-navigation/src/main-navigation-sub/motion.tsx#FadeMotion'
            ] = {
              docgenInfo: FadeMotion.__docgenInfo,
              name: 'FadeMotion',
              path: 'components/main-navigation/src/main-navigation-sub/motion.tsx#FadeMotion',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const MainNavigationSub = ({
        className,
        children,
        title,
        initial = 'collapsed',
      }) => {
        const [isExpanded, setIsExpanded] = (0, react.useState)(!1),
          a11yLabelId = (0, react.useId)(),
          a11yContentId = (0, react.useId)(),
          classes = useMainNavigationSubStyles();
        return (0, jsx_runtime.jsxs)('div', {
          className,
          children: [
            (0, jsx_runtime.jsxs)('button', {
              className: classes.button,
              id: a11yLabelId,
              'aria-controls': a11yContentId,
              'aria-expanded': isExpanded,
              onClick: () => setIsExpanded(!isExpanded),
              children: [
                (0, jsx_runtime.jsx)(icon.J, {
                  iconName: 'chevron-right',
                  color: 'tertiary',
                  className: (0, mergeClasses_esm.z)(
                    classes.toggle,
                    isExpanded ? classes.toggleExpanded : classes.toggleIdle,
                  ),
                }),
                title,
              ],
            }),
            (0, jsx_runtime.jsx)(AnimatePresence.M, {
              initial: !1,
              children:
                isExpanded &&
                (0, jsx_runtime.jsx)(SlideMotion, {
                  initial,
                  a11yContentId,
                  a11yLabelId,
                  children: (0, jsx_runtime.jsx)(FadeMotion, {
                    initial,
                    children: (0, jsx_runtime.jsx)('div', {
                      className: classes.subList,
                      children,
                    }),
                  }),
                }),
            }),
          ],
        });
      };
      MainNavigationSub.displayName = 'MainNavigationSub';
      try {
        (MainNavigationSub.displayName = 'MainNavigationSub'),
          (MainNavigationSub.__docgenInfo = {
            description: '',
            displayName: 'MainNavigationSub',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer provided class.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              title: {
                defaultValue: null,
                description: 'Subsection title',
                name: 'title',
                required: !0,
                type: { name: 'string' },
              },
              initial: {
                defaultValue: { value: 'collapsed' },
                description: 'Initial state of the accordion item.',
                name: 'initial',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"collapsed"' }, { value: '"expanded"' }],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/main-navigation/src/main-navigation-sub/main-navigation-sub.tsx#MainNavigationSub'
            ] = {
              docgenInfo: MainNavigationSub.__docgenInfo,
              name: 'MainNavigationSub',
              path: 'components/main-navigation/src/main-navigation-sub/main-navigation-sub.tsx#MainNavigationSub',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const MainNavigationRendererContext = (0, react.createContext)({ linkAs: 'a' }),
        MainNavigationRendererProvider = MainNavigationRendererContext.Provider,
        isSubMenu = (MainNavigationRendererContext.Consumer, (item) => 'items' in item),
        isButton = (item) => 'id' in item,
        MainNavigationItems = ({ item }) => {
          const { linkAs, activeItemId, onNavigationItemClick } = (0, react.useContext)(
              MainNavigationRendererContext,
            ),
            space = (0, use_space_styles.z)(),
            handleClickProp =
              isButton(item) && onNavigationItemClick
                ? { onClick: () => onNavigationItemClick?.(item) }
                : {};
          return isButton(item)
            ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  (0, jsx_runtime.jsx)(MainNavigationLink, {
                    isActive: item.id === activeItemId,
                    as: linkAs,
                    elementProps: { ...(item.linkProps ?? {}), ...handleClickProp },
                    children: item.title,
                  }),
                  item.hasDivider &&
                    (0, jsx_runtime.jsx)(divider.i, { className: space.my4 }),
                ],
              })
            : isSubMenu(item)
            ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  (0, jsx_runtime.jsx)(MainNavigationSub, {
                    title: item.title,
                    children: Object.entries(item.items).map(([key, subItem]) =>
                      (0, jsx_runtime.jsx)(MainNavigationItems, { item: subItem }, key),
                    ),
                  }),
                  item.hasDivider &&
                    (0, jsx_runtime.jsx)(divider.i, { className: space.my4 }),
                ],
              })
            : null;
        },
        MainNavigationRenderer = ({ items, ...contextValue }) =>
          (0, jsx_runtime.jsx)(MainNavigationRendererProvider, {
            value: contextValue,
            children: Object.entries(items).map(([key, item]) =>
              (0, jsx_runtime.jsx)(MainNavigationItems, { item }, key),
            ),
          });
      MainNavigationRenderer.displayName = 'MainNavigationRenderer';
      try {
        (isSubMenu.displayName = 'isSubMenu'),
          (isSubMenu.__docgenInfo = {
            description: '',
            displayName: 'isSubMenu',
            props: {
              id: {
                defaultValue: null,
                description:
                  'Unique id of the item. Use the route path as id, if applicable. Id is used to determine the active item.',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              title: {
                defaultValue: null,
                description:
                  'Human-readable title of the navigation button.\nHuman-readable title of the sub-navigation button.',
                name: 'title',
                required: !0,
                type: { name: 'string' },
              },
              hasDivider: {
                defaultValue: { value: 'false\nfalse' },
                description:
                  'Adds an optional divider **after** the navigation button.\nAdds an optional divider **after** the sub-navigation button.',
                name: 'hasDivider',
                required: !1,
                type: { name: 'boolean' },
              },
              linkProps: {
                defaultValue: null,
                description: 'Rest of the props are passed to the link element.',
                name: 'linkProps',
                required: !1,
                type: { name: '{ [key: string]: unknown; }' },
              },
              linkAs: {
                defaultValue: null,
                description:
                  'Overrides the link element passed to `MainNavigationRenderer`.',
                name: 'linkAs',
                required: !1,
                type: { name: 'ElementType' },
              },
              items: {
                defaultValue: null,
                description: 'Navigation items of the sub-navigation.',
                name: 'items',
                required: !0,
                type: { name: 'Record<string, NavigationLink | SubNavigation>' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/main-navigation/src/main-navigation-renderer/main-navigation-renderer.tsx#isSubMenu'
            ] = {
              docgenInfo: isSubMenu.__docgenInfo,
              name: 'isSubMenu',
              path: 'components/main-navigation/src/main-navigation-renderer/main-navigation-renderer.tsx#isSubMenu',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (isButton.displayName = 'isButton'),
          (isButton.__docgenInfo = {
            description: '',
            displayName: 'isButton',
            props: {
              id: {
                defaultValue: null,
                description:
                  'Unique id of the item. Use the route path as id, if applicable. Id is used to determine the active item.',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              title: {
                defaultValue: null,
                description:
                  'Human-readable title of the navigation button.\nHuman-readable title of the sub-navigation button.',
                name: 'title',
                required: !0,
                type: { name: 'string' },
              },
              hasDivider: {
                defaultValue: { value: 'false\nfalse' },
                description:
                  'Adds an optional divider **after** the navigation button.\nAdds an optional divider **after** the sub-navigation button.',
                name: 'hasDivider',
                required: !1,
                type: { name: 'boolean' },
              },
              linkProps: {
                defaultValue: null,
                description: 'Rest of the props are passed to the link element.',
                name: 'linkProps',
                required: !1,
                type: { name: '{ [key: string]: unknown; }' },
              },
              linkAs: {
                defaultValue: null,
                description:
                  'Overrides the link element passed to `MainNavigationRenderer`.',
                name: 'linkAs',
                required: !1,
                type: { name: 'ElementType' },
              },
              items: {
                defaultValue: null,
                description: 'Navigation items of the sub-navigation.',
                name: 'items',
                required: !0,
                type: { name: 'Record<string, NavigationLink | SubNavigation>' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/main-navigation/src/main-navigation-renderer/main-navigation-renderer.tsx#isButton'
            ] = {
              docgenInfo: isButton.__docgenInfo,
              name: 'isButton',
              path: 'components/main-navigation/src/main-navigation-renderer/main-navigation-renderer.tsx#isButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (MainNavigationItems.displayName = 'MainNavigationItems'),
          (MainNavigationItems.__docgenInfo = {
            description: '',
            displayName: 'MainNavigationItems',
            props: {
              item: {
                defaultValue: null,
                description: '',
                name: 'item',
                required: !0,
                type: { name: 'NavigationLink | SubNavigation' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/main-navigation/src/main-navigation-renderer/main-navigation-renderer.tsx#MainNavigationItems'
            ] = {
              docgenInfo: MainNavigationItems.__docgenInfo,
              name: 'MainNavigationItems',
              path: 'components/main-navigation/src/main-navigation-renderer/main-navigation-renderer.tsx#MainNavigationItems',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (MainNavigationRenderer.displayName = 'MainNavigationRenderer'),
          (MainNavigationRenderer.__docgenInfo = {
            description: '',
            displayName: 'MainNavigationRenderer',
            props: {
              items: {
                defaultValue: null,
                description: 'Navigation items of the sub-navigation.',
                name: 'items',
                required: !0,
                type: { name: 'NavigationItems | []' },
              },
              activeItemId: {
                defaultValue: null,
                description:
                  'Id of the active navigation item. It is used to visually highlight an active page. `activeItemId` should match the\n`id` of the `NavigationLink` item in your `NavigationItems` object (passed through `items`).\n\nIf none is provided, no item will be highlighted.',
                name: 'activeItemId',
                required: !1,
                type: { name: 'string' },
              },
              linkAs: {
                defaultValue: null,
                description: 'Link element.',
                name: 'linkAs',
                required: !0,
                type: { name: 'ElementType' },
              },
              onNavigationItemClick: {
                defaultValue: null,
                description:
                  'Optional callback that is called when a navigation item is clicked.\n@param id - Id of the `NavigationButton` item in your `NavigationItems` object (passed through `items`).',
                name: 'onNavigationItemClick',
                required: !1,
                type: { name: '(item: NavigationLinkClickValue) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/main-navigation/src/main-navigation-renderer/main-navigation-renderer.tsx#MainNavigationRenderer'
            ] = {
              docgenInfo: MainNavigationRenderer.__docgenInfo,
              name: 'MainNavigationRenderer',
              path: 'components/main-navigation/src/main-navigation-renderer/main-navigation-renderer.tsx#MainNavigationRenderer',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const main_navigation_stories = {
          title: 'Layout/MainNavigation',
          component: MainNavigation,
        },
        Link = ({ children, onClick, className }) =>
          (0, jsx_runtime.jsx)('button', { className, onClick, children });
      Link.displayName = 'Link';
      const useNavigationStyles = (0, makeStyles_esm.Z)({
          root: {
            paddingLeft: tokens.T.spacingHorizontalXXXL,
            paddingRight: tokens.T.spacingHorizontalXXXL,
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '17.5rem auto',
            minHeight: '40rem',
            columnGap: tokens.T.spacingHorizontalXXXL,
          },
        }),
        menuItems = {
          aboutUs: { id: 'about-us', title: 'About us' },
          overview: { id: 'overview', title: 'Overview' },
          gettingStarted: {
            id: 'getting-started',
            title: 'Getting started',
            hasDivider: !0,
          },
          designFundamentals: {
            title: 'Design fundamentals',
            hasDivider: !0,
            items: {
              typography: { id: 'design-fundamentals/typography', title: 'Typography' },
              colors: { id: 'design-fundamentals/colors', title: 'Colors' },
              spaceGrid: { id: 'design-fundamentals/space-grid', title: 'Space grid' },
            },
          },
          components: {
            title: 'Components',
            hasDivider: !0,
            items: {
              button: {
                title: 'Button',
                items: {
                  primary: { id: 'components/button/primary', title: 'Primary' },
                  secondary: { id: 'components/button/secondary', title: 'Secondary' },
                  umph: { id: 'components/button/umph', title: 'Umph' },
                },
              },
              tile: { id: 'components/tile', title: 'Tile' },
              link: { id: 'components/link', title: 'Link' },
            },
          },
          credits: { id: 'credits', title: 'Credits' },
        },
        findTitle = (items, id) => {
          for (const key in items) {
            const item = items[key];
            if (isButton(item) && item.id === id) return item.title;
            if (isSubMenu(item)) {
              const result = findTitle(item.items, id);
              if (result) return result;
            }
          }
        },
        Template = () => {
          const classes = useNavigationStyles(),
            space = (0, use_space_styles.z)(),
            [active, setActive] = (0, react.useState)(
              isButton(menuItems.overview) ? menuItems.overview.id : '',
            );
          return (0, jsx_runtime.jsxs)('div', {
            className: classes.root,
            children: [
              (0, jsx_runtime.jsx)(MainNavigation, {
                children: (0, jsx_runtime.jsx)(MainNavigationRenderer, {
                  items: menuItems,
                  activeItemId: active,
                  linkAs: Link,
                  onNavigationItemClick: (item) => setActive(item.id),
                }),
              }),
              (0, jsx_runtime.jsx)(tile.n, {
                variant: 'solid-color',
                className: (0, mergeClasses_esm.z)(space.py10, space.px12),
                children: (0, jsx_runtime.jsx)(text_text.x, {
                  variant: 'title',
                  color: 'quaternary',
                  children: findTitle(menuItems, active),
                }),
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
    './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { M: () => AnimatePresence });
      var react = __webpack_require__('./node_modules/react/index.js'),
        frameloop = __webpack_require__(
          './node_modules/framer-motion/dist/es/frameloop/index.mjs',
        ),
        use_isomorphic_effect = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs',
        );
      function useIsMounted() {
        const isMounted = (0, react.useRef)(!1);
        return (
          (0, use_isomorphic_effect.L)(
            () => (
              (isMounted.current = !0),
              () => {
                isMounted.current = !1;
              }
            ),
            [],
          ),
          isMounted
        );
      }
      var PresenceContext = __webpack_require__(
          './node_modules/framer-motion/dist/es/context/PresenceContext.mjs',
        ),
        use_constant = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/use-constant.mjs',
        );
      class PopChildMeasure extends react.Component {
        getSnapshotBeforeUpdate(prevProps) {
          const element = this.props.childRef.current;
          if (element && prevProps.isPresent && !this.props.isPresent) {
            const size = this.props.sizeRef.current;
            (size.height = element.offsetHeight || 0),
              (size.width = element.offsetWidth || 0),
              (size.top = element.offsetTop),
              (size.left = element.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function PopChild({ children, isPresent }) {
        const id = (0, react.useId)(),
          ref = (0, react.useRef)(null),
          size = (0, react.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, react.useInsertionEffect)(() => {
            const { width, height, top, left } = size.current;
            if (isPresent || !ref.current || !width || !height) return;
            ref.current.dataset.motionPopId = id;
            const style = document.createElement('style');
            return (
              document.head.appendChild(style),
              style.sheet &&
                style.sheet.insertRule(
                  `\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `,
                ),
              () => {
                document.head.removeChild(style);
              }
            );
          }, [isPresent]),
          react.createElement(
            PopChildMeasure,
            { isPresent, childRef: ref, sizeRef: size },
            react.cloneElement(children, { ref }),
          )
        );
      }
      const PresenceChild = ({
        children,
        initial,
        isPresent,
        onExitComplete,
        custom,
        presenceAffectsLayout,
        mode,
      }) => {
        const presenceChildren = (0, use_constant.h)(newChildrenMap),
          id = (0, react.useId)(),
          context = (0, react.useMemo)(
            () => ({
              id,
              initial,
              isPresent,
              custom,
              onExitComplete: (childId) => {
                presenceChildren.set(childId, !0);
                for (const isComplete of presenceChildren.values())
                  if (!isComplete) return;
                onExitComplete && onExitComplete();
              },
              register: (childId) => (
                presenceChildren.set(childId, !1), () => presenceChildren.delete(childId)
              ),
            }),
            presenceAffectsLayout ? void 0 : [isPresent],
          );
        return (
          (0, react.useMemo)(() => {
            presenceChildren.forEach((_, key) => presenceChildren.set(key, !1));
          }, [isPresent]),
          react.useEffect(() => {
            !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
          }, [isPresent]),
          'popLayout' === mode &&
            (children = react.createElement(PopChild, { isPresent }, children)),
          react.createElement(PresenceContext.O.Provider, { value: context }, children)
        );
      };
      function newChildrenMap() {
        return new Map();
      }
      var LayoutGroupContext = __webpack_require__(
        './node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs',
      );
      var errors = __webpack_require__(
        './node_modules/framer-motion/dist/es/utils/errors.mjs',
      );
      const getChildKey = (child) => child.key || '';
      const AnimatePresence = ({
        children,
        custom,
        initial = !0,
        onExitComplete,
        exitBeforeEnter,
        presenceAffectsLayout = !0,
        mode = 'sync',
      }) => {
        (0, errors.k)(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
        const forceRender =
            (0, react.useContext)(LayoutGroupContext.p).forceRender ||
            (function useForceUpdate() {
              const isMounted = useIsMounted(),
                [forcedRenderCount, setForcedRenderCount] = (0, react.useState)(0),
                forceRender = (0, react.useCallback)(() => {
                  isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
                }, [forcedRenderCount]);
              return [
                (0, react.useCallback)(
                  () => frameloop.Wi.postRender(forceRender),
                  [forceRender],
                ),
                forcedRenderCount,
              ];
            })()[0],
          isMounted = useIsMounted(),
          filteredChildren = (function onlyElements(children) {
            const filtered = [];
            return (
              react.Children.forEach(children, (child) => {
                (0, react.isValidElement)(child) && filtered.push(child);
              }),
              filtered
            );
          })(children);
        let childrenToRender = filteredChildren;
        const exitingChildren = (0, react.useRef)(new Map()).current,
          presentChildren = (0, react.useRef)(childrenToRender),
          allChildren = (0, react.useRef)(new Map()).current,
          isInitialRender = (0, react.useRef)(!0);
        if (
          ((0, use_isomorphic_effect.L)(() => {
            (isInitialRender.current = !1),
              (function updateChildLookup(children, allChildren) {
                children.forEach((child) => {
                  const key = getChildKey(child);
                  allChildren.set(key, child);
                });
              })(filteredChildren, allChildren),
              (presentChildren.current = childrenToRender);
          }),
          (function useUnmountEffect(callback) {
            return (0, react.useEffect)(() => () => callback(), []);
          })(() => {
            (isInitialRender.current = !0), allChildren.clear(), exitingChildren.clear();
          }),
          isInitialRender.current)
        )
          return react.createElement(
            react.Fragment,
            null,
            childrenToRender.map((child) =>
              react.createElement(
                PresenceChild,
                {
                  key: getChildKey(child),
                  isPresent: !0,
                  initial: !!initial && void 0,
                  presenceAffectsLayout,
                  mode,
                },
                child,
              ),
            ),
          );
        childrenToRender = [...childrenToRender];
        const presentKeys = presentChildren.current.map(getChildKey),
          targetKeys = filteredChildren.map(getChildKey),
          numPresent = presentKeys.length;
        for (let i = 0; i < numPresent; i++) {
          const key = presentKeys[i];
          -1 !== targetKeys.indexOf(key) ||
            exitingChildren.has(key) ||
            exitingChildren.set(key, void 0);
        }
        return (
          'wait' === mode && exitingChildren.size && (childrenToRender = []),
          exitingChildren.forEach((component, key) => {
            if (-1 !== targetKeys.indexOf(key)) return;
            const child = allChildren.get(key);
            if (!child) return;
            const insertionIndex = presentKeys.indexOf(key);
            let exitingComponent = component;
            if (!exitingComponent) {
              const onExit = () => {
                allChildren.delete(key), exitingChildren.delete(key);
                const removeIndex = presentChildren.current.findIndex(
                  (presentChild) => presentChild.key === key,
                );
                if (
                  (presentChildren.current.splice(removeIndex, 1), !exitingChildren.size)
                ) {
                  if (
                    ((presentChildren.current = filteredChildren),
                    !1 === isMounted.current)
                  )
                    return;
                  forceRender(), onExitComplete && onExitComplete();
                }
              };
              (exitingComponent = react.createElement(
                PresenceChild,
                {
                  key: getChildKey(child),
                  isPresent: !1,
                  onExitComplete: onExit,
                  custom,
                  presenceAffectsLayout,
                  mode,
                },
                child,
              )),
                exitingChildren.set(key, exitingComponent);
            }
            childrenToRender.splice(insertionIndex, 0, exitingComponent);
          }),
          (childrenToRender = childrenToRender.map((child) => {
            const key = child.key;
            return exitingChildren.has(key)
              ? child
              : react.createElement(
                  PresenceChild,
                  { key: getChildKey(child), isPresent: !0, presenceAffectsLayout, mode },
                  child,
                );
          })),
          react.createElement(
            react.Fragment,
            null,
            exitingChildren.size
              ? childrenToRender
              : childrenToRender.map((child) => (0, react.cloneElement)(child)),
          )
        );
      };
    },
  },
]);
>>>>>>> 0a42c43 (Runs lint):docs/main-navigation-__dev__-main-navigation-stories.51e07d36.iframe.bundle.js

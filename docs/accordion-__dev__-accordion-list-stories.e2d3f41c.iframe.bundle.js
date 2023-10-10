<<<<<<< HEAD:docs/accordion-__dev__-accordion-list-stories.e2d3f41c.iframe.bundle.js
"use strict";(self.webpackChunkarbutus=self.webpackChunkarbutus||[]).push([[5150],{"./components/accordion/__dev__/accordion-list.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Item:()=>Item,List:()=>List,__namedExportsOrder:()=>__namedExportsOrder,default:()=>accordion_list_stories});var text_text=__webpack_require__("./components/text/lib/text/text.js"),react=__webpack_require__("./node_modules/react/index.js"),mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),icon=__webpack_require__("./components/icon/lib/icon/icon.js"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js");const useAccordionItemStyles=(0,makeStyles_esm.Z)({root:{borderBottomWidth:tokens.T.strokeWidthThin,borderBottomStyle:"solid",borderBottomColor:tokens.T.colorNeutralStroke1,transitionProperty:"border-bottom-color",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,paddingTop:tokens.T.spacingVerticalM,paddingBottom:tokens.T.spacingVerticalM},trigger:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",borderTopStyle:"none",borderBottomStyle:"none",borderLeftStyle:"none",borderRightStyle:"none",backgroundColor:"transparent",cursor:"pointer",paddingTop:0,paddingBottom:tokens.T.spacingVerticalS,paddingLeft:"0",paddingRight:"0"},title:{whiteSpace:"nowrap",overflowY:"hidden",overflowX:"hidden",textOverflow:"ellipsis"},content:{width:"100%",paddingTop:0,paddingBottom:0,paddingLeft:"0",paddingRight:"0"},toggle:{alignSelf:"center",transitionProperty:"transform",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase},toggleExpanded:{transform:"rotate(90deg)"},toggleIdle:{transform:"rotate(0deg)"}});var motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),use_reduced_motion=__webpack_require__("./node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const slideVariants=({shouldReduceMotion})=>({expanded:{height:"auto",transition:{ease:"easeOut",duration:shouldReduceMotion?0:.2}},collapsed:{height:0,transition:{delay:shouldReduceMotion?0:.075,ease:"easeOut",duration:shouldReduceMotion?0:.2}}}),SlideMotion=({children,initial,a11yLabelId,a11yContentId,className})=>(0,jsx_runtime.jsx)(motion.E.section,{initial,animate:"expanded",exit:"collapsed",variants:slideVariants({shouldReduceMotion:(0,use_reduced_motion.J)()}),className,id:a11yContentId,"aria-labelledby":a11yLabelId,role:"region",children});SlideMotion.displayName="SlideMotion";const fadeVariants=({shouldReduceMotion})=>({expanded:{opacity:1,top:"0",transition:{delay:shouldReduceMotion?0:.125,ease:"easeOut",duration:shouldReduceMotion?0:.15}},collapsed:{opacity:0,top:"-4px",transition:{ease:"easeOut",duration:shouldReduceMotion?0:.15}}}),FadeMotion=({children,initial})=>(0,jsx_runtime.jsx)(motion.E.div,{style:{position:"relative"},initial,animate:"expanded",exit:"collapsed",variants:fadeVariants({shouldReduceMotion:(0,use_reduced_motion.J)()}),children});FadeMotion.displayName="FadeMotion";try{SlideMotion.displayName="SlideMotion",SlideMotion.__docgenInfo={description:"",displayName:"SlideMotion",props:{initial:{defaultValue:null,description:"",name:"initial",required:!0,type:{name:"enum",value:[{value:'"collapsed"'},{value:'"expanded"'}]}},a11yLabelId:{defaultValue:null,description:"",name:"a11yLabelId",required:!0,type:{name:"string"}},a11yContentId:{defaultValue:null,description:"",name:"a11yContentId",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/accordion/src/accordion-item/motion.tsx#SlideMotion"]={docgenInfo:SlideMotion.__docgenInfo,name:"SlideMotion",path:"components/accordion/src/accordion-item/motion.tsx#SlideMotion"})}catch(__react_docgen_typescript_loader_error){}try{FadeMotion.displayName="FadeMotion",FadeMotion.__docgenInfo={description:"",displayName:"FadeMotion",props:{initial:{defaultValue:null,description:"",name:"initial",required:!0,type:{name:"enum",value:[{value:'"collapsed"'},{value:'"expanded"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/accordion/src/accordion-item/motion.tsx#FadeMotion"]={docgenInfo:FadeMotion.__docgenInfo,name:"FadeMotion",path:"components/accordion/src/accordion-item/motion.tsx#FadeMotion"})}catch(__react_docgen_typescript_loader_error){}const AccordionItem=({className,title,children,initial="collapsed"})=>{const[isExpanded,setIsExpanded]=(0,react.useState)("expanded"===initial),a11yLabelId=(0,react.useId)(),a11yContentId=(0,react.useId)(),classes=useAccordionItemStyles();return(0,jsx_runtime.jsxs)("div",{className:(0,mergeClasses_esm.z)(classes.root,className),children:[(0,jsx_runtime.jsxs)("button",{className:classes.trigger,id:a11yLabelId,"aria-controls":a11yContentId,"aria-expanded":isExpanded,onClick:()=>setIsExpanded(!isExpanded),children:[(0,jsx_runtime.jsx)(text_text.x,{className:classes.title,block:!0,variant:"caption",children:title}),(0,jsx_runtime.jsx)(icon.J,{iconName:"chevron-right",color:"tertiary",className:(0,mergeClasses_esm.z)(classes.toggle,isExpanded?classes.toggleExpanded:classes.toggleIdle)})]}),(0,jsx_runtime.jsx)(AnimatePresence.M,{initial:!1,children:isExpanded&&(0,jsx_runtime.jsx)(SlideMotion,{initial,a11yContentId,a11yLabelId,className:classes.content,children:(0,jsx_runtime.jsx)(FadeMotion,{initial,children})})})]})};AccordionItem.displayName="AccordionItem";try{AccordionItem.displayName="AccordionItem",AccordionItem.__docgenInfo={description:"",displayName:"AccordionItem",props:{className:{defaultValue:null,description:"Consumer-provided class name.",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The title of the accordion item that renders in the trigger.",name:"title",required:!0,type:{name:"string"}},initial:{defaultValue:{value:"collapsed"},description:"Initial state of the accordion item.",name:"initial",required:!1,type:{name:"enum",value:[{value:'"collapsed"'},{value:'"expanded"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/accordion/src/accordion-item/accordion-item.tsx#AccordionItem"]={docgenInfo:AccordionItem.__docgenInfo,name:"AccordionItem",path:"components/accordion/src/accordion-item/accordion-item.tsx#AccordionItem"})}catch(__react_docgen_typescript_loader_error){}const useAccordionListStyles=(0,makeStyles_esm.Z)({root:{display:"grid",rowGap:tokens.T.spacingVerticalS}}),AccordionList=({className,children})=>{const classes=useAccordionListStyles();return(0,jsx_runtime.jsx)("div",{className:(0,mergeClasses_esm.z)(classes.root,className),children})};AccordionList.displayName="AccordionList";try{AccordionList.displayName="AccordionList",AccordionList.__docgenInfo={description:"",displayName:"AccordionList",props:{className:{defaultValue:null,description:"Consumer-provided class name.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/accordion/src/accordion-list/accordion-list.tsx#AccordionList"]={docgenInfo:AccordionList.__docgenInfo,name:"AccordionList",path:"components/accordion/src/accordion-list/accordion-list.tsx#AccordionList"})}catch(__react_docgen_typescript_loader_error){}var tile=__webpack_require__("./components/tile/lib/tile.js");const DemoContent=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gridGap:"1rem"},children:[(0,jsx_runtime.jsx)(text_text.x,{block:!0,as:"p",variant:"paragraph",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus iure iusto ipsa labore placeat nulla veniam. Odit possimus praesentium enim blanditiis. Quis quisquam esse eos amet dolore odit vel asperiores."}),(0,jsx_runtime.jsx)(tile.n,{variant:"solid-color",children:" "})]});DemoContent.displayName="DemoContent";try{DemoContent.displayName="DemoContent",DemoContent.__docgenInfo={description:"",displayName:"DemoContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/accordion/__dev__/partials/demo-content.tsx#DemoContent"]={docgenInfo:DemoContent.__docgenInfo,name:"DemoContent",path:"components/accordion/__dev__/partials/demo-content.tsx#DemoContent"})}catch(__react_docgen_typescript_loader_error){}const accordion_list_stories={title:"Lists/AccordionList",component:AccordionItem},ItemTemplate=args=>(0,jsx_runtime.jsx)("div",{style:{width:"600px"},children:(0,jsx_runtime.jsx)(AccordionItem,{...args})});ItemTemplate.displayName="ItemTemplate";const Item=ItemTemplate.bind({});Item.args={title:"Sample title for an AccordionItem",children:(0,jsx_runtime.jsx)(text_text.x,{block:!0,children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas cupiditate inventore id voluptatum ipsa. Voluptatibus, id. Deserunt modi labore culpa quis consectetur aut corporis reiciendis, eligendi sit, maxime harum magnam."})};const ListTemplate=args=>(0,jsx_runtime.jsx)("div",{style:{width:"600px",height:"100%"},children:(0,jsx_runtime.jsx)(AccordionList,{...args})});ListTemplate.displayName="ListTemplate";const List=ListTemplate.bind({});List.args={children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Array.from({length:3},((_,i)=>(0,jsx_runtime.jsx)(AccordionItem,{title:`AccordionItem ${i+1}`,children:(0,jsx_runtime.jsx)(DemoContent,{})},i)))})};const __namedExportsOrder=["Item","List"]},"./components/text/lib/text/text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@fluentui/react-text/lib/components/Text/Text.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_text_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/text/lib/text/text.styles.js");const Text=({children,color="primary",variant,className,weight,size,font,...props})=>{const classes=(0,_text_styles__WEBPACK_IMPORTED_MODULE_1__.Ke)();let variantClass="";weight&&size&&font||(variantClass=variant?classes[variant]:classes.paragraph);const rootClasses=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.z)(classes.root,classes[color],variantClass,className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__.x,{weight,size,font,className:rootClasses,...props},children)};Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./components/text/lib/text/text.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AD:()=>variantClasses,Ke:()=>useTextStyles,bG:()=>colorClasses});var _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./styles/utilities/lib/map-to-styles.js");const colorMap={accent:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground1,action:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,primary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground1,secondary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground2,tertiary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3,quaternary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground4,negative:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,positive:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteGreenForeground1,warning:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteMarigoldForeground1,danger:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,info:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,background:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground1},colorClasses=(0,_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__.f)(colorMap,(color=>({color}))),variantClasses={jumbo:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero1000,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero1000,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightBold},title:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero800,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero800,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},subtitle:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero700,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero700,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},headline:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},leading:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},paragraph:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},caption:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},description:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase200,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase200,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular}},useTextStyles=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.Z)({...colorClasses,...variantClasses,root:{..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.margin(0),..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.padding(0)},code:{display:"inline-block",fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyMonospace,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,backgroundColor:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground3,..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.borderRadius(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.borderRadiusSmall),paddingLeft:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS,paddingRight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS}})},"./components/tile/lib/tile.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>Tile});var mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),index_esm=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),map_to_styles=__webpack_require__("./styles/utilities/lib/map-to-styles.js"),themes_tokens=__webpack_require__("./styles/theming/lib/themes/tokens.js");const colorMap={none:"transparent",primary:tokens.T.colorNeutralBackground1,secondary:tokens.T.colorNeutralBackground2,tertiary:tokens.T.colorNeutralBackground3,quaternary:tokens.T.colorNeutralBackground4,tile:tokens.T.colorNeutralBackground6,negative:tokens.T.colorPaletteDarkOrangeBackground1,positive:tokens.T.colorPaletteGreenBackground1,warning:tokens.T.colorPaletteMarigoldBackground1,danger:tokens.T.colorPaletteDarkOrangeBackground1,info:tokens.T.colorNeutralBackground2,accent:tokens.T.colorBrandBackground2},colorClasses=(0,map_to_styles.f)(colorMap,(color=>({backgroundColor:color}))),useTileStyles=(0,makeStyles_esm.Z)({root:{marginTop:0,marginBottom:0,marginLeft:0,marginRight:0},interactive:{...index_esm.q5.borderStyle("none"),...index_esm.q5.borderColor("transparent"),cursor:"pointer",transitionProperty:"all",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,":focus":{outlineColor:tokens.T.colorBrandForeground2}},card:{backgroundColor:tokens.T.colorNeutralBackground1,...index_esm.q5.borderRadius(tokens.T.borderRadiusLarge),boxShadow:tokens.T.shadow4},interactiveCard:{":hover":{boxShadow:tokens.T.shadow16}},image:{backgroundColor:tokens.T.colorNeutralBackground6,...index_esm.q5.borderRadius(themes_tokens.A.shape.borderRadius),backgroundSize:"cover",backgroundPositionX:"center",backgroundPositionY:"center"},solidColor:{...index_esm.q5.borderRadius(themes_tokens.A.shape.borderRadius)},...colorClasses}),isImage=({variant})=>"image"===variant,Tile=({children,variant,as:Root="div",backgroundColor="tile",imageSrc,className,onClick})=>{const classes=useTileStyles();let variantClasses="";switch(!0){case(({variant})=>"card"===variant)({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.card,onClick&&classes.interactive,onClick&&classes.interactiveCard,className);break;case isImage({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.image,onClick&&classes.interactive,className);break;case(({variant})=>"solid-color"===variant)({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.solidColor,onClick&&classes.interactive,classes[backgroundColor],className);break;default:variantClasses=(0,mergeClasses_esm.z)(classes.root,className)}const imageBackground=isImage({variant})?{style:{backgroundImage:`url("${imageSrc??""}")`}}:{};return react.createElement(Root,{className:variantClasses,...imageBackground,onClick},children)};Tile.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1},backgroundColor:{defaultValue:{value:"'tile'",computed:!1},required:!1}}}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");var errors=__webpack_require__("./node_modules/framer-motion/dist/es/utils/errors.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.k)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const forceRender=(0,react.useContext)(LayoutGroupContext.p).forceRender||function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}()[0],isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exitingChildren=(0,react.useRef)(new Map).current,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),function useUnmountEffect(callback){return(0,react.useEffect)((()=>()=>callback()),[])}((()=>{isInitialRender.current=!0,allChildren.clear(),exitingChildren.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1!==targetKeys.indexOf(key)||exitingChildren.has(key)||exitingChildren.set(key,void 0)}return"wait"===mode&&exitingChildren.size&&(childrenToRender=[]),exitingChildren.forEach(((component,key)=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);let exitingComponent=component;if(!exitingComponent){const onExit=()=>{allChildren.delete(key),exitingChildren.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exitingChildren.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}};exitingComponent=react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:onExit,custom,presenceAffectsLayout,mode},child),exitingChildren.set(key,exitingComponent)}childrenToRender.splice(insertionIndex,0,exitingComponent)})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exitingChildren.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),react.createElement(react.Fragment,null,exitingChildren.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);
=======
'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [5150],
  {
    './components/accordion/__dev__/accordion-list.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Item: () => Item,
          List: () => List,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => accordion_list_stories,
        });
      var text_text = __webpack_require__('./components/text/lib/text/text.js'),
        react = __webpack_require__('./node_modules/react/index.js'),
        mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        icon = __webpack_require__('./components/icon/lib/icon/icon.js'),
        AnimatePresence = __webpack_require__(
          './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs',
        ),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js'),
        makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        );
      const useAccordionItemStyles = (0, makeStyles_esm.Z)({
        root: {
          borderBottomWidth: tokens.T.strokeWidthThin,
          borderBottomStyle: 'solid',
          borderBottomColor: tokens.T.colorNeutralStroke1,
          transitionProperty: 'border-bottom-color',
          transitionDuration: tokens.T.durationNormal,
          transitionTimingFunction: tokens.T.curveEasyEase,
          paddingTop: tokens.T.spacingVerticalM,
          paddingBottom: tokens.T.spacingVerticalM,
        },
        trigger: {
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderTopStyle: 'none',
          borderBottomStyle: 'none',
          borderLeftStyle: 'none',
          borderRightStyle: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          paddingTop: 0,
          paddingBottom: tokens.T.spacingVerticalS,
          paddingLeft: '0',
          paddingRight: '0',
        },
        title: {
          whiteSpace: 'nowrap',
          overflowY: 'hidden',
          overflowX: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: {
          width: '100%',
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: '0',
          paddingRight: '0',
        },
        toggle: {
          alignSelf: 'center',
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
              'components/accordion/src/accordion-item/motion.tsx#SlideMotion'
            ] = {
              docgenInfo: SlideMotion.__docgenInfo,
              name: 'SlideMotion',
              path: 'components/accordion/src/accordion-item/motion.tsx#SlideMotion',
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
              'components/accordion/src/accordion-item/motion.tsx#FadeMotion'
            ] = {
              docgenInfo: FadeMotion.__docgenInfo,
              name: 'FadeMotion',
              path: 'components/accordion/src/accordion-item/motion.tsx#FadeMotion',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const AccordionItem = ({ className, title, children, initial = 'collapsed' }) => {
        const [isExpanded, setIsExpanded] = (0, react.useState)('expanded' === initial),
          a11yLabelId = (0, react.useId)(),
          a11yContentId = (0, react.useId)(),
          classes = useAccordionItemStyles();
        return (0, jsx_runtime.jsxs)('div', {
          className: (0, mergeClasses_esm.z)(classes.root, className),
          children: [
            (0, jsx_runtime.jsxs)('button', {
              className: classes.trigger,
              id: a11yLabelId,
              'aria-controls': a11yContentId,
              'aria-expanded': isExpanded,
              onClick: () => setIsExpanded(!isExpanded),
              children: [
                (0, jsx_runtime.jsx)(text_text.x, {
                  className: classes.title,
                  block: !0,
                  variant: 'caption',
                  children: title,
                }),
                (0, jsx_runtime.jsx)(icon.J, {
                  iconName: 'chevron-right',
                  color: 'tertiary',
                  className: (0, mergeClasses_esm.z)(
                    classes.toggle,
                    isExpanded ? classes.toggleExpanded : classes.toggleIdle,
                  ),
                }),
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
                  className: classes.content,
                  children: (0, jsx_runtime.jsx)(FadeMotion, { initial, children }),
                }),
            }),
          ],
        });
      };
      AccordionItem.displayName = 'AccordionItem';
      try {
        (AccordionItem.displayName = 'AccordionItem'),
          (AccordionItem.__docgenInfo = {
            description: '',
            displayName: 'AccordionItem',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer-provided class name.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              title: {
                defaultValue: null,
                description:
                  'The title of the accordion item that renders in the trigger.',
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
              'components/accordion/src/accordion-item/accordion-item.tsx#AccordionItem'
            ] = {
              docgenInfo: AccordionItem.__docgenInfo,
              name: 'AccordionItem',
              path: 'components/accordion/src/accordion-item/accordion-item.tsx#AccordionItem',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const useAccordionListStyles = (0, makeStyles_esm.Z)({
          root: { display: 'grid', rowGap: tokens.T.spacingVerticalS },
        }),
        AccordionList = ({ className, children }) => {
          const classes = useAccordionListStyles();
          return (0, jsx_runtime.jsx)('div', {
            className: (0, mergeClasses_esm.z)(classes.root, className),
            children,
          });
        };
      AccordionList.displayName = 'AccordionList';
      try {
        (AccordionList.displayName = 'AccordionList'),
          (AccordionList.__docgenInfo = {
            description: '',
            displayName: 'AccordionList',
            props: {
              className: {
                defaultValue: null,
                description: 'Consumer-provided class name.',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/accordion/src/accordion-list/accordion-list.tsx#AccordionList'
            ] = {
              docgenInfo: AccordionList.__docgenInfo,
              name: 'AccordionList',
              path: 'components/accordion/src/accordion-list/accordion-list.tsx#AccordionList',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var tile = __webpack_require__('./components/tile/lib/tile.js');
      const DemoContent = () =>
        (0, jsx_runtime.jsxs)('div', {
          style: { display: 'grid', gridTemplateColumns: '2fr 1fr', gridGap: '1rem' },
          children: [
            (0, jsx_runtime.jsx)(text_text.x, {
              block: !0,
              as: 'p',
              variant: 'paragraph',
              children:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus iure iusto ipsa labore placeat nulla veniam. Odit possimus praesentium enim blanditiis. Quis quisquam esse eos amet dolore odit vel asperiores.',
            }),
            (0, jsx_runtime.jsx)(tile.n, { variant: 'solid-color', children: ' ' }),
          ],
        });
      DemoContent.displayName = 'DemoContent';
      try {
        (DemoContent.displayName = 'DemoContent'),
          (DemoContent.__docgenInfo = {
            description: '',
            displayName: 'DemoContent',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/accordion/__dev__/partials/demo-content.tsx#DemoContent'
            ] = {
              docgenInfo: DemoContent.__docgenInfo,
              name: 'DemoContent',
              path: 'components/accordion/__dev__/partials/demo-content.tsx#DemoContent',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const accordion_list_stories = {
          title: 'Lists/AccordionList',
          component: AccordionItem,
        },
        ItemTemplate = (args) =>
          (0, jsx_runtime.jsx)('div', {
            style: { width: '600px' },
            children: (0, jsx_runtime.jsx)(AccordionItem, { ...args }),
          });
      ItemTemplate.displayName = 'ItemTemplate';
      const Item = ItemTemplate.bind({});
      Item.args = {
        title: 'Sample title for an AccordionItem',
        children: (0, jsx_runtime.jsx)(text_text.x, {
          block: !0,
          children:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas cupiditate inventore id voluptatum ipsa. Voluptatibus, id. Deserunt modi labore culpa quis consectetur aut corporis reiciendis, eligendi sit, maxime harum magnam.',
        }),
      };
      const ListTemplate = (args) =>
        (0, jsx_runtime.jsx)('div', {
          style: { width: '600px', height: '100%' },
          children: (0, jsx_runtime.jsx)(AccordionList, { ...args }),
        });
      ListTemplate.displayName = 'ListTemplate';
      const List = ListTemplate.bind({});
      List.args = {
        children: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: Array.from({ length: 3 }, (_, i) =>
            (0, jsx_runtime.jsx)(
              AccordionItem,
              {
                title: `AccordionItem ${i + 1}`,
                children: (0, jsx_runtime.jsx)(DemoContent, {}),
              },
              i,
            ),
          ),
        }),
      };
      const __namedExportsOrder = ['Item', 'List'];
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
>>>>>>> 0a42c43 (Runs lint):docs/accordion-__dev__-accordion-list-stories.1e99fe3c.iframe.bundle.js

"use strict";(self.webpackChunkarbutus=self.webpackChunkarbutus||[]).push([[4881],{"./node_modules/@fluentui/react-text/lib/components/Text/Text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var react=__webpack_require__("./node_modules/react/index.js"),getNativeElementProps=__webpack_require__("./node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js");var createElement=__webpack_require__("./node_modules/@fluentui/react-jsx-runtime/lib/createElement.js"),getSlotsNext=__webpack_require__("./node_modules/@fluentui/react-utilities/lib/compose/getSlotsNext.js");var _styles_esm=__webpack_require__("./node_modules/@griffel/react/__styles.esm.js"),mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js");const textClassNames_root="fui-Text",useStyles=(0,_styles_esm.s)({root:{Bahqtrf:"fk6fouc",Be2twd7:"fkhj508",Bg96gwp:"f1i3iumi",Bhrd7zp:"figsok6",fsow6f:"fpgzoln",mc9l5x:"f1w7gpdv",Huce71:"f6juhto",B68tc82:"f1mtd64y",Bmxbyg5:"f1y7q3j9",ygn44y:"f2jf649"},nowrap:{Huce71:"fz5stix",B68tc82:"f1p9o1ba",Bmxbyg5:"f1sil6mw"},truncate:{ygn44y:"f1cmbuwj"},block:{mc9l5x:"ftgm304"},italic:{B80ckks:"f1j4dglz"},underline:{w71qe1:"f13mvf36"},strikethrough:{w71qe1:"fv5q2k7"},strikethroughUnderline:{w71qe1:"f1drk4o6"},base100:{Be2twd7:"f13mqy1h",Bg96gwp:"fcpl73t"},base200:{Be2twd7:"fy9rknc",Bg96gwp:"fwrc4pm"},base400:{Be2twd7:"fod5ikn",Bg96gwp:"faaz57k"},base500:{Be2twd7:"f1pp30po",Bg96gwp:"f106mvju"},base600:{Be2twd7:"f1x0m3f5",Bg96gwp:"fb86gi6"},hero700:{Be2twd7:"fojgt09",Bg96gwp:"fcen8rp"},hero800:{Be2twd7:"fccw675",Bg96gwp:"f1ebx5kk"},hero900:{Be2twd7:"f15afnhw",Bg96gwp:"fr3w3wp"},hero1000:{Be2twd7:"fpyltcb",Bg96gwp:"f1ivgwrt"},monospace:{Bahqtrf:"f1fedwem"},numeric:{Bahqtrf:"f1uq0ln5"},weightMedium:{Bhrd7zp:"fdj6btp"},weightSemibold:{Bhrd7zp:"fl43uef"},weightBold:{Bhrd7zp:"flh3ekv"},alignCenter:{fsow6f:"f17mccla"},alignEnd:{fsow6f:"f12ymhq5"},alignJustify:{fsow6f:"f1j59e10"}},{d:[".fk6fouc{font-family:var(--fontFamilyBase);}",".fkhj508{font-size:var(--fontSizeBase300);}",".f1i3iumi{line-height:var(--lineHeightBase300);}",".figsok6{font-weight:var(--fontWeightRegular);}",".fpgzoln{text-align:start;}",".f1w7gpdv{display:inline;}",".f6juhto{white-space:normal;}",".f1mtd64y{overflow-x:visible;}",".f1y7q3j9{overflow-y:visible;}",".f2jf649{text-overflow:clip;}",".fz5stix{white-space:nowrap;}",".f1p9o1ba{overflow-x:hidden;}",".f1sil6mw{overflow-y:hidden;}",".f1cmbuwj{text-overflow:ellipsis;}",".ftgm304{display:block;}",".f1j4dglz{font-style:italic;}",".f13mvf36{text-decoration-line:underline;}",".fv5q2k7{text-decoration-line:line-through;}",".f1drk4o6{text-decoration-line:line-through underline;}",".f13mqy1h{font-size:var(--fontSizeBase100);}",".fcpl73t{line-height:var(--lineHeightBase100);}",".fy9rknc{font-size:var(--fontSizeBase200);}",".fwrc4pm{line-height:var(--lineHeightBase200);}",".fod5ikn{font-size:var(--fontSizeBase400);}",".faaz57k{line-height:var(--lineHeightBase400);}",".f1pp30po{font-size:var(--fontSizeBase500);}",".f106mvju{line-height:var(--lineHeightBase500);}",".f1x0m3f5{font-size:var(--fontSizeBase600);}",".fb86gi6{line-height:var(--lineHeightBase600);}",".fojgt09{font-size:var(--fontSizeHero700);}",".fcen8rp{line-height:var(--lineHeightHero700);}",".fccw675{font-size:var(--fontSizeHero800);}",".f1ebx5kk{line-height:var(--lineHeightHero800);}",".f15afnhw{font-size:var(--fontSizeHero900);}",".fr3w3wp{line-height:var(--lineHeightHero900);}",".fpyltcb{font-size:var(--fontSizeHero1000);}",".f1ivgwrt{line-height:var(--lineHeightHero1000);}",".f1fedwem{font-family:var(--fontFamilyMonospace);}",".f1uq0ln5{font-family:var(--fontFamilyNumeric);}",".fdj6btp{font-weight:var(--fontWeightMedium);}",".fl43uef{font-weight:var(--fontWeightSemibold);}",".flh3ekv{font-weight:var(--fontWeightBold);}",".f17mccla{text-align:center;}",".f12ymhq5{text-align:end;}",".f1j59e10{text-align:justify;}"]});var CustomStyleHooksContext=__webpack_require__("./node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js");const Text=react.forwardRef(((props,ref)=>{const state=((props,ref)=>{const{wrap,truncate,block,italic,underline,strikethrough,size,font,weight,align}=props;var _props_as;const as=null!==(_props_as=props.as)&&void 0!==_props_as?_props_as:"span";return{align:null!=align?align:"start",block:null!=block&&block,font:null!=font?font:"base",italic:null!=italic&&italic,size:null!=size?size:300,strikethrough:null!=strikethrough&&strikethrough,truncate:null!=truncate&&truncate,underline:null!=underline&&underline,weight:null!=weight?weight:"regular",wrap:null==wrap||wrap,components:{root:"span"},root:(0,getNativeElementProps.n)(as,{ref,...props,as})}})(props,ref);return(state=>{const styles=useStyles();state.root.className=(0,mergeClasses_esm.z)(textClassNames_root,styles.root,!1===state.wrap&&styles.nowrap,state.truncate&&styles.truncate,state.block&&styles.block,state.italic&&styles.italic,state.underline&&styles.underline,state.strikethrough&&styles.strikethrough,state.underline&&state.strikethrough&&styles.strikethroughUnderline,100===state.size&&styles.base100,200===state.size&&styles.base200,400===state.size&&styles.base400,500===state.size&&styles.base500,600===state.size&&styles.base600,700===state.size&&styles.hero700,800===state.size&&styles.hero800,900===state.size&&styles.hero900,1e3===state.size&&styles.hero1000,"monospace"===state.font&&styles.monospace,"numeric"===state.font&&styles.numeric,"medium"===state.weight&&styles.weightMedium,"semibold"===state.weight&&styles.weightSemibold,"bold"===state.weight&&styles.weightBold,"center"===state.align&&styles.alignCenter,"end"===state.align&&styles.alignEnd,"justify"===state.align&&styles.alignJustify,state.root.className)})(state),(0,CustomStyleHooksContext.oj)("useTextStyles_unstable")(state),(state=>{const{slots,slotProps}=(0,getSlotsNext.D)(state);return(0,createElement.a)(slots.root,slotProps.root)})(state)}));Text.displayName="Text"},"./node_modules/@griffel/react/__styles.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>__styles});var _griffel_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@griffel/core/__styles.esm.js"),_RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/react/RendererContext.esm.js"),_TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@griffel/react/TextDirectionContext.esm.js");function __styles(classesMapBySlot,cssRules){const getStyles=(0,_griffel_core__WEBPACK_IMPORTED_MODULE_0__.s)(classesMapBySlot,cssRules);return function useClasses(){const dir=(0,_TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__.s)(),renderer=(0,_RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)();return getStyles({dir,renderer})}}},"./.storybook/decorators/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Centered});__webpack_require__("./node_modules/react/index.js");const useCenteredClasses=(0,__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js").Z)({root:{minHeight:"100vh",width:"100%",display:"grid",alignItems:"center",justifyItems:"center"}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Centered=({children})=>{const classes=useCenteredClasses();return(0,jsx_runtime.jsx)("div",{className:classes.root,children})};Centered.displayName="Centered";try{Centered.displayName="Centered",Centered.__docgenInfo={description:"",displayName:"Centered",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/decorators/centered.tsx#Centered"]={docgenInfo:Centered.__docgenInfo,name:"Centered",path:".storybook/decorators/centered.tsx#Centered"})}catch(__react_docgen_typescript_loader_error){}},"./components/badge/lib/badge/badge.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Badge});var mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),icon=__webpack_require__("./components/icon/lib/icon/icon.js"),react=__webpack_require__("./node_modules/react/index.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),index_esm=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),map_to_styles=__webpack_require__("./styles/utilities/lib/map-to-styles.js");const colorMap={accent:tokens.T.colorBrandBackground2,primary:tokens.T.colorNeutralForeground1,secondary:tokens.T.colorNeutralForeground2,tertiary:tokens.T.colorNeutralForeground3,quaternary:tokens.T.colorNeutralForeground4,negative:tokens.T.colorPaletteDarkOrangeForeground1,positive:tokens.T.colorPaletteGreenForeground1,warning:tokens.T.colorPaletteMarigoldForeground1,danger:tokens.T.colorPaletteDarkOrangeForeground1,info:tokens.T.colorBrandForeground2},colorClasses=(0,map_to_styles.f)(colorMap,(color=>({backgroundColor:color}))),useBadgeStyles=(0,makeStyles_esm.Z)({root:{display:"grid",alignItems:"center",justifyItems:"center",height:tokens.T.spacingHorizontalXXL,width:tokens.T.spacingHorizontalXXL,...index_esm.q5.borderRadius(tokens.T.spacingHorizontalXXL)},inline:{display:"inline-grid",verticalAlign:"center"},...colorClasses}),Badge=({className,iconName,color="primary",isInline})=>{const classes=useBadgeStyles();return react.createElement("span",{className:(0,mergeClasses_esm.z)(classes.root,classes[color],isInline&&classes.inline,className)},react.createElement(icon.J,{size:"small",iconName,color:`${color}-inverse`}))};Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./components/link/lib/link/link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),icon=__webpack_require__("./components/icon/lib/icon/icon.js"),text_text=__webpack_require__("./components/text/lib/text/text.js"),use_space_styles=__webpack_require__("./hooks/use-space-styles/lib/use-space-styles.js"),react=__webpack_require__("./node_modules/react/index.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),index_esm=__webpack_require__("./node_modules/@griffel/core/index.esm.js");const useLinkStyles=(0,makeStyles_esm.Z)({root:{cursor:"pointer",backgroundColor:"transparent",...index_esm.q5.borderStyle("none"),outlineStyle:"none",display:"inline-flex",textDecorationLine:"none",alignItems:"center"},isUnderlined:{textDecorationLine:"underline",textDecorationSkipInk:"all"},flexLayout:{columnGap:tokens.T.spacingHorizontalS}}),getTextProps=({variant})=>{switch(variant){case"display":return{variant:"leading",color:"action"};case"accent":case"caption":return{variant:"caption",color:"primary"};case"inverse":return{color:"background"};case"secondary":return{variant:"description",color:"secondary"};default:return{color:"action"}}},Link=({as:Link,children,className,elementProps,variant="primary",withIcon,isUnderlined,iconName="open"})=>{const space=(0,use_space_styles.z)(),classes=useLinkStyles(),isComplexVariant=["display","accent"].includes(variant);return react.createElement(Link,{className:(0,mergeClasses_esm.z)(classes.root,isComplexVariant&&classes.flexLayout,className),...elementProps},isComplexVariant&&react.createElement(icon.J,{iconName:"arrow-right",size:"display"===variant?"large":"medium",className:(0,mergeClasses_esm.z)("display"===variant?space.mr3:space.mr1,"display"===variant&&space.mt1)}),react.createElement(text_text.x,{as:"span",className:isUnderlined?classes.isUnderlined:"",...getTextProps({variant})},children),withIcon&&react.createElement(icon.J,{iconName,color:"tertiary",isInline:!0,className:space.ml3}))};Link.__docgenInfo={description:"",methods:[],displayName:"Link",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},iconName:{defaultValue:{value:"'open'",computed:!1},required:!1}}}},"./components/mark-list/lib/context.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>MarkListContext});const MarkListContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)({})},"./components/mark-list/lib/mark-list-item/mark-list-item.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MarkListItem});var mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),icon=__webpack_require__("./components/icon/lib/icon/icon.js"),use_space_styles=__webpack_require__("./hooks/use-space-styles/lib/use-space-styles.js"),react=__webpack_require__("./node_modules/react/index.js"),context=__webpack_require__("./components/mark-list/lib/context.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js");const useMarkListItemStyles=(0,__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js").Z)({root:{display:"grid",gridTemplateColumns:`${tokens.T.spacingHorizontalL} auto`,columnGap:tokens.T.spacingHorizontalM},mark:{color:tokens.T.colorNeutralForeground4}}),MarkListItem=({className,children})=>{const{iconColor,iconName}=(0,react.useContext)(context.z),classes=useMarkListItemStyles(),space=(0,use_space_styles.z)();return react.createElement("li",{className:(0,mergeClasses_esm.z)(classes.root,className)},iconName?react.createElement(icon.J,{iconName,color:iconColor,className:space.mt2}):react.createElement("span",{className:classes.mark},"— "),react.createElement("div",null,children))};MarkListItem.__docgenInfo={description:"",methods:[],displayName:"MarkListItem"}},"./components/mark-list/lib/mark-list/mark-list.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>MarkList});var mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),context=__webpack_require__("./components/mark-list/lib/context.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js");const useMarkListStyles=(0,__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js").Z)({root:{listStyleType:"none",display:"grid",gridTemplateColumns:"1fr",rowGap:tokens.T.spacingHorizontalM}}),MarkList=({className,children,iconColor,iconName})=>{const classes=useMarkListStyles();return react.createElement(context.z.Provider,{value:{iconColor,iconName}},react.createElement("ul",{className:(0,mergeClasses_esm.z)(classes.root,className)},children))};MarkList.__docgenInfo={description:"",methods:[],displayName:"MarkList"}},"./components/recommendation-tile/__dev__/recommendation-tile.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithImage:()=>WithImage,WithImageAndWithLink:()=>WithImageAndWithLink,WithLink:()=>WithLink,WithRecommendationList:()=>WithRecommendationList,WithoutImage:()=>WithoutImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>recommendation_tile_stories});var makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),tile=__webpack_require__("./components/tile/lib/tile.js"),decorators=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./.storybook/decorators/index.ts")),mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),badge=__webpack_require__("./components/badge/lib/badge/badge.js"),link_link=__webpack_require__("./components/link/lib/link/link.js"),mark_list=__webpack_require__("./components/mark-list/lib/mark-list/mark-list.js"),mark_list_item=__webpack_require__("./components/mark-list/lib/mark-list-item/mark-list-item.js"),text_text=__webpack_require__("./components/text/lib/text/text.js"),use_space_styles=__webpack_require__("./hooks/use-space-styles/lib/use-space-styles.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),index_esm=__webpack_require__("./node_modules/@griffel/core/index.esm.js");const useRecommendationTileStyles=(0,makeStyles_esm.Z)({image:{...index_esm.q5.borderRadius("var(--arbutus--shape-border-radius)"),height:"13.75rem",width:"100%",objectFit:"cover"},imageContainer:{position:"relative"},overlayBadge:{position:"absolute",left:tokens.T.spacingHorizontalM,top:tokens.T.spacingHorizontalM},recommendationList:{paddingLeft:0}}),getBackgroundColor=({withImage,recommendation})=>{switch(!0){case withImage:return"none";case!withImage&&"positive"===recommendation:return"positive";case!withImage&&"negative"===recommendation:return"negative";default:return"none"}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RecommendationTile=({className,description,imageAs:Image,imageProps,linkAs,linkProps,linkText,linkWithIcon,recommendation,recommendationsList,title})=>{const classes=useRecommendationTileStyles(),space=(0,use_space_styles.z)();return(0,jsx_runtime.jsxs)(tile.n,{variant:"solid-color",backgroundColor:getBackgroundColor({withImage:Boolean(Image),recommendation}),className:(0,mergeClasses_esm.z)(!Image&&space.p9,className),children:[Image&&(0,jsx_runtime.jsxs)("div",{className:classes.imageContainer,children:[(0,jsx_runtime.jsx)(badge.C,{iconName:"positive"===recommendation?"check":"x",color:"positive"===recommendation?"positive":"negative",className:classes.overlayBadge}),(0,jsx_runtime.jsx)(Image,{...imageProps,className:(0,mergeClasses_esm.z)(classes.image,space.mb4)})]}),(0,jsx_runtime.jsxs)(text_text.x,{block:!0,variant:recommendationsList?"headline":"caption",color:recommendation,className:recommendationsList?space.mb7:space.mb5,children:[!Image||recommendationsList&&(0,jsx_runtime.jsx)(badge.C,{iconName:"positive"===recommendation?"check":"x",color:"positive"===recommendation?"positive":"negative",isInline:!0,className:space.mr5}),title]}),description&&(0,jsx_runtime.jsx)(text_text.x,{block:!0,variant:"description",children:description}),recommendationsList&&(0,jsx_runtime.jsx)(mark_list.N,{iconName:"positive"===recommendation?"check":"x",iconColor:"positive"===recommendation?"positive":"negative",className:(0,mergeClasses_esm.z)(classes.recommendationList,space.mt5),children:recommendationsList.map(((recommendation,index)=>(0,jsx_runtime.jsx)(mark_list_item.O,{children:recommendation},index)))}),linkAs&&linkText&&(0,jsx_runtime.jsx)(link_link.r,{as:linkAs,variant:"caption",elementProps:linkProps,className:space.mt5,withIcon:linkWithIcon,children:linkText})]})};RecommendationTile.displayName="RecommendationTile";try{RecommendationTile.displayName="RecommendationTile",RecommendationTile.__docgenInfo={description:"",displayName:"RecommendationTile",props:{className:{defaultValue:null,description:"Consumer provided class.",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Title of the bookmark.",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Description of the bookmark.",name:"description",required:!1,type:{name:"string"}},recommendation:{defaultValue:null,description:"Sets whether this tile represents an encouraged or discouraged example",name:"recommendation",required:!0,type:{name:"enum",value:[{value:'"negative"'},{value:'"positive"'}]}},recommendationsList:{defaultValue:null,description:"Adds an unordered list of recommendations.",name:"recommendationsList",required:!1,type:{name:"string[]"}},imageAs:{defaultValue:null,description:"Image element.",name:"imageAs",required:!1,type:{name:"ElementType"}},imageProps:{defaultValue:null,description:"Image element props.",name:"imageProps",required:!1,type:{name:"Record<string, unknown>"}},linkText:{defaultValue:null,description:"Link text.",name:"linkText",required:!1,type:{name:"string"}},linkAs:{defaultValue:null,description:"Link element.",name:"linkAs",required:!1,type:{name:"ElementType"}},linkProps:{defaultValue:null,description:"Link element props.",name:"linkProps",required:!1,type:{name:"Record<string, unknown>"}},linkWithIcon:{defaultValue:null,description:"Adds an icon that indicates that the link will open in a new tab.",name:"linkWithIcon",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/recommendation-tile/src/recommendation-tile/recommendation-tile.tsx#RecommendationTile"]={docgenInfo:RecommendationTile.__docgenInfo,name:"RecommendationTile",path:"components/recommendation-tile/src/recommendation-tile/recommendation-tile.tsx#RecommendationTile"})}catch(__react_docgen_typescript_loader_error){}const DemoImage=({className,alt,src})=>(0,jsx_runtime.jsx)("img",{className,alt,src});DemoImage.displayName="DemoImage";const DemoLink=({className,href,children})=>(0,jsx_runtime.jsx)("a",{className,href,target:"__blank",children});DemoLink.displayName="DemoLink";const recommendation_tile_stories={title:"Tiles/RecommendationTile",component:RecommendationTile,argTypes:{onClick:{action:"clicked"},recommendation:{options:["positive","negative"],control:{type:"select"}}},decorators:[Story=>(0,jsx_runtime.jsx)(decorators.z,{children:(0,jsx_runtime.jsx)("div",{style:{maxWidth:"980px"},children:(0,jsx_runtime.jsx)(Story,{})})})]},useTileGridStyles=(0,makeStyles_esm.Z)({root:{width:"100%",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",columnGap:"2.5rem",rowGap:"2.5rem","@media screen and (max-width: var(--arbutus--breakpoint-xxs))":{gridTemplateColumns:"100%"}}}),Template=args=>{const classes=useTileGridStyles();return(0,jsx_runtime.jsxs)("div",{className:classes.root,children:[(0,jsx_runtime.jsx)(RecommendationTile,{...args}),(0,jsx_runtime.jsx)(tile.n,{variant:"solid-color",children:" "})]})};Template.displayName="Template";const WithImageAndWithLink=Template.bind({});WithImageAndWithLink.args={title:"Give primary buttons prominence",description:"Primary buttons have to draw users’s attention right away. Make sure there is only one primary button in the view.",recommendation:"positive",imageAs:DemoImage,imageProps:{src:"https://via.placeholder.com/300x200.png/FAF9F8",alt:"Image placeholder"},linkAs:DemoLink,linkText:"Learn more",linkWithIcon:!0,linkProps:{href:"https://www.microsoft.com"}};const WithImage=Template.bind({});WithImage.args={title:"Give primary buttons prominence",description:"Primary buttons have to draw users’s attention right away. Make sure there is only one primary button in the view.",recommendation:"positive",imageAs:DemoImage,imageProps:{src:"https://via.placeholder.com/300x200.png/FAF9F8",alt:"Image placeholder"}};const WithoutImage=Template.bind({});WithoutImage.args={title:"Give primary buttons prominence",description:"Primary buttons have to draw users’s attention right away. Make sure there is only one primary button in the view.",recommendation:"positive",imageAs:void 0,imageProps:void 0};const WithLink=Template.bind({});WithLink.args={title:"Give primary buttons prominence",description:"Primary buttons have to draw users’s attention right away. Make sure there is only one primary button in the view.",recommendation:"positive",imageAs:void 0,imageProps:void 0,linkAs:DemoLink,linkText:"Learn more",linkWithIcon:!0,linkProps:{href:"https://www.microsoft.com"}};const WithRecommendationList=Template.bind({});WithRecommendationList.args={title:"Give primary buttons prominence",recommendationsList:["Primary buttons have to draw users’s attention right away. Make sure there is only one primary button in the view.","Eu zril ignota quaestio nec, no agam meliore sit, duo posse utinam deleniti id. Ut his veniam verear, ei sea mazim mentitum probatus.","Ut sit alienum molestie referrentur, ius tollit definitiones ad, audiam vidisse gubergren id mea.","Elit veniam ocurreret et ius, menandri atomorum voluptaria eum ad. Ius ex dolor utamur partiendo."],recommendation:"positive"};const __namedExportsOrder=["WithImageAndWithLink","WithImage","WithoutImage","WithLink","WithRecommendationList"]},"./components/text/lib/text/text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@fluentui/react-text/lib/components/Text/Text.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_text_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/text/lib/text/text.styles.js");const Text=({children,color="primary",variant,className,weight,size,font,...props})=>{const classes=(0,_text_styles__WEBPACK_IMPORTED_MODULE_1__.Ke)();let variantClass="";weight&&size&&font||(variantClass=variant?classes[variant]:classes.paragraph);const rootClasses=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.z)(classes.root,classes[color],variantClass,className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__.x,{weight,size,font,className:rootClasses,...props},children)};Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./components/text/lib/text/text.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AD:()=>variantClasses,Ke:()=>useTextStyles,bG:()=>colorClasses});var _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./styles/utilities/lib/map-to-styles.js");const colorMap={accent:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground1,action:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,primary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground1,secondary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground2,tertiary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3,quaternary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground4,negative:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,positive:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteGreenForeground1,warning:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteMarigoldForeground1,danger:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,info:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,background:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground1},colorClasses=(0,_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__.f)(colorMap,(color=>({color}))),variantClasses={jumbo:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero1000,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero1000,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightBold},title:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero800,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero800,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},subtitle:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero700,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero700,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},headline:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},leading:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},paragraph:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},caption:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},description:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase200,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase200,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular}},useTextStyles=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.Z)({...colorClasses,...variantClasses,root:{..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.margin(0),..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.padding(0)},code:{display:"inline-block",fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyMonospace,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,backgroundColor:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground3,..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.borderRadius(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.borderRadiusSmall),paddingLeft:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS,paddingRight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS}})},"./components/tile/lib/tile.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>Tile});var mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),index_esm=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),map_to_styles=__webpack_require__("./styles/utilities/lib/map-to-styles.js");const colorMap={none:"transparent",primary:tokens.T.colorNeutralBackground1,secondary:tokens.T.colorNeutralBackground2,tertiary:tokens.T.colorNeutralBackground3,quaternary:tokens.T.colorNeutralBackground4,tile:tokens.T.colorNeutralBackground6,negative:tokens.T.colorPaletteDarkOrangeBackground1,positive:tokens.T.colorPaletteGreenBackground1,warning:tokens.T.colorPaletteMarigoldBackground1,danger:tokens.T.colorPaletteDarkOrangeBackground1,info:tokens.T.colorNeutralBackground2,accent:tokens.T.colorBrandBackground2},colorClasses=(0,map_to_styles.f)(colorMap,(color=>({backgroundColor:color}))),useTileStyles=(0,makeStyles_esm.Z)({root:{marginTop:0,marginBottom:0,marginLeft:0,marginRight:0},interactive:{...index_esm.q5.borderStyle("none"),...index_esm.q5.borderColor("transparent"),cursor:"pointer",transitionProperty:"all",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,":focus":{outlineColor:tokens.T.colorBrandForeground2}},card:{backgroundColor:tokens.T.colorNeutralBackground1,...index_esm.q5.borderRadius(tokens.T.borderRadiusLarge),boxShadow:tokens.T.shadow4},interactiveCard:{":hover":{boxShadow:tokens.T.shadow16}},image:{backgroundColor:tokens.T.colorNeutralBackground6,...index_esm.q5.borderRadius("var(--arbutus--shape-border-radius)"),backgroundSize:"cover",backgroundPositionX:"center",backgroundPositionY:"center"},solidColor:{...index_esm.q5.borderRadius("var(--arbutus--shape-border-radius)")},...colorClasses}),isImage=({variant})=>"image"===variant,Tile=({children,variant,as:Root="div",backgroundColor="tile",imageSrc,className,onClick})=>{const classes=useTileStyles();let variantClasses="";switch(!0){case(({variant})=>"card"===variant)({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.card,onClick&&classes.interactive,onClick&&classes.interactiveCard,className);break;case isImage({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.image,onClick&&classes.interactive,className);break;case(({variant})=>"solid-color"===variant)({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.solidColor,onClick&&classes.interactive,classes[backgroundColor],className);break;default:variantClasses=(0,mergeClasses_esm.z)(classes.root,className)}const imageBackground=isImage({variant})?{style:{backgroundImage:`url("${imageSrc??""}")`}}:{};return react.createElement(Root,{className:variantClasses,...imageBackground,onClick},children)};Tile.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1},backgroundColor:{defaultValue:{value:"'tile'",computed:!1},required:!1}}}},"./hooks/use-space-styles/lib/use-space-styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useSpaceStyles});var makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js");const spaceScale={1:tokens.T.spacingHorizontalXXS,2:tokens.T.spacingHorizontalXS,3:tokens.T.spacingHorizontalSNudge,4:tokens.T.spacingHorizontalS,5:tokens.T.spacingHorizontalMNudge,6:tokens.T.spacingHorizontalM,7:tokens.T.spacingHorizontalL,8:tokens.T.spacingHorizontalXL,9:tokens.T.spacingHorizontalXXL,10:tokens.T.spacingHorizontalXXXL,11:"40px",12:"52px"},spaceEntries=Object.entries(spaceScale),margin=spaceEntries.reduce(((acc,[key,value])=>(acc[`m${key}`]={marginTop:value,marginBottom:value,marginLeft:value,marginRight:value},acc)),{}),marginY=spaceEntries.reduce(((acc,[key,value])=>(acc[`my${key}`]={marginTop:value,marginBottom:value},acc)),{}),marginX=spaceEntries.reduce(((acc,[key,value])=>(acc[`mx${key}`]={marginLeft:value,marginRight:value},acc)),{}),marginTop=spaceEntries.reduce(((acc,[key,value])=>(acc[`mt${key}`]={marginTop:value},acc)),{}),marginBottom=spaceEntries.reduce(((acc,[key,value])=>(acc[`mb${key}`]={marginBottom:value},acc)),{}),marginLeft=spaceEntries.reduce(((acc,[key,value])=>(acc[`ml${key}`]={marginLeft:value},acc)),{}),marginRight=spaceEntries.reduce(((acc,[key,value])=>(acc[`mr${key}`]={marginRight:value},acc)),{}),padding=spaceEntries.reduce(((acc,[key,value])=>(acc[`p${key}`]={paddingTop:value,paddingBottom:value,paddingLeft:value,paddingRight:value},acc)),{}),paddingY=spaceEntries.reduce(((acc,[key,value])=>(acc[`py${key}`]={paddingTop:value,paddingBottom:value},acc)),{}),paddingX=spaceEntries.reduce(((acc,[key,value])=>(acc[`px${key}`]={paddingLeft:value,paddingRight:value},acc)),{}),paddingTop=spaceEntries.reduce(((acc,[key,value])=>(acc[`pt${key}`]={paddingTop:value},acc)),{}),paddingBottom=spaceEntries.reduce(((acc,[key,value])=>(acc[`pb${key}`]={paddingBottom:value},acc)),{}),paddingLeft=spaceEntries.reduce(((acc,[key,value])=>(acc[`pl${key}`]={paddingLeft:value},acc)),{}),paddingRight=spaceEntries.reduce(((acc,[key,value])=>(acc[`pr${key}`]={paddingRight:value},acc)),{}),useSpaceStyles=(0,makeStyles_esm.Z)({...margin,...marginY,...marginX,...marginTop,...marginBottom,...marginLeft,...marginRight,...padding,...paddingBottom,...paddingLeft,...paddingRight,...paddingTop,...paddingX,...paddingY})}}]);
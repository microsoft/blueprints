<<<<<<< HEAD:docs/action-tile-__dev__-action-tile-stories.b61291b3.iframe.bundle.js
"use strict";(self.webpackChunkarbutus=self.webpackChunkarbutus||[]).push([[1176],{"./node_modules/@fluentui/react-text/lib/components/Text/Text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var react=__webpack_require__("./node_modules/react/index.js"),getNativeElementProps=__webpack_require__("./node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js");var createElement=__webpack_require__("./node_modules/@fluentui/react-jsx-runtime/lib/createElement.js"),getSlotsNext=__webpack_require__("./node_modules/@fluentui/react-utilities/lib/compose/getSlotsNext.js");var _styles_esm=__webpack_require__("./node_modules/@griffel/react/__styles.esm.js"),mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js");const textClassNames_root="fui-Text",useStyles=(0,_styles_esm.s)({root:{Bahqtrf:"fk6fouc",Be2twd7:"fkhj508",Bg96gwp:"f1i3iumi",Bhrd7zp:"figsok6",fsow6f:"fpgzoln",mc9l5x:"f1w7gpdv",Huce71:"f6juhto",B68tc82:"f1mtd64y",Bmxbyg5:"f1y7q3j9",ygn44y:"f2jf649"},nowrap:{Huce71:"fz5stix",B68tc82:"f1p9o1ba",Bmxbyg5:"f1sil6mw"},truncate:{ygn44y:"f1cmbuwj"},block:{mc9l5x:"ftgm304"},italic:{B80ckks:"f1j4dglz"},underline:{w71qe1:"f13mvf36"},strikethrough:{w71qe1:"fv5q2k7"},strikethroughUnderline:{w71qe1:"f1drk4o6"},base100:{Be2twd7:"f13mqy1h",Bg96gwp:"fcpl73t"},base200:{Be2twd7:"fy9rknc",Bg96gwp:"fwrc4pm"},base400:{Be2twd7:"fod5ikn",Bg96gwp:"faaz57k"},base500:{Be2twd7:"f1pp30po",Bg96gwp:"f106mvju"},base600:{Be2twd7:"f1x0m3f5",Bg96gwp:"fb86gi6"},hero700:{Be2twd7:"fojgt09",Bg96gwp:"fcen8rp"},hero800:{Be2twd7:"fccw675",Bg96gwp:"f1ebx5kk"},hero900:{Be2twd7:"f15afnhw",Bg96gwp:"fr3w3wp"},hero1000:{Be2twd7:"fpyltcb",Bg96gwp:"f1ivgwrt"},monospace:{Bahqtrf:"f1fedwem"},numeric:{Bahqtrf:"f1uq0ln5"},weightMedium:{Bhrd7zp:"fdj6btp"},weightSemibold:{Bhrd7zp:"fl43uef"},weightBold:{Bhrd7zp:"flh3ekv"},alignCenter:{fsow6f:"f17mccla"},alignEnd:{fsow6f:"f12ymhq5"},alignJustify:{fsow6f:"f1j59e10"}},{d:[".fk6fouc{font-family:var(--fontFamilyBase);}",".fkhj508{font-size:var(--fontSizeBase300);}",".f1i3iumi{line-height:var(--lineHeightBase300);}",".figsok6{font-weight:var(--fontWeightRegular);}",".fpgzoln{text-align:start;}",".f1w7gpdv{display:inline;}",".f6juhto{white-space:normal;}",".f1mtd64y{overflow-x:visible;}",".f1y7q3j9{overflow-y:visible;}",".f2jf649{text-overflow:clip;}",".fz5stix{white-space:nowrap;}",".f1p9o1ba{overflow-x:hidden;}",".f1sil6mw{overflow-y:hidden;}",".f1cmbuwj{text-overflow:ellipsis;}",".ftgm304{display:block;}",".f1j4dglz{font-style:italic;}",".f13mvf36{text-decoration-line:underline;}",".fv5q2k7{text-decoration-line:line-through;}",".f1drk4o6{text-decoration-line:line-through underline;}",".f13mqy1h{font-size:var(--fontSizeBase100);}",".fcpl73t{line-height:var(--lineHeightBase100);}",".fy9rknc{font-size:var(--fontSizeBase200);}",".fwrc4pm{line-height:var(--lineHeightBase200);}",".fod5ikn{font-size:var(--fontSizeBase400);}",".faaz57k{line-height:var(--lineHeightBase400);}",".f1pp30po{font-size:var(--fontSizeBase500);}",".f106mvju{line-height:var(--lineHeightBase500);}",".f1x0m3f5{font-size:var(--fontSizeBase600);}",".fb86gi6{line-height:var(--lineHeightBase600);}",".fojgt09{font-size:var(--fontSizeHero700);}",".fcen8rp{line-height:var(--lineHeightHero700);}",".fccw675{font-size:var(--fontSizeHero800);}",".f1ebx5kk{line-height:var(--lineHeightHero800);}",".f15afnhw{font-size:var(--fontSizeHero900);}",".fr3w3wp{line-height:var(--lineHeightHero900);}",".fpyltcb{font-size:var(--fontSizeHero1000);}",".f1ivgwrt{line-height:var(--lineHeightHero1000);}",".f1fedwem{font-family:var(--fontFamilyMonospace);}",".f1uq0ln5{font-family:var(--fontFamilyNumeric);}",".fdj6btp{font-weight:var(--fontWeightMedium);}",".fl43uef{font-weight:var(--fontWeightSemibold);}",".flh3ekv{font-weight:var(--fontWeightBold);}",".f17mccla{text-align:center;}",".f12ymhq5{text-align:end;}",".f1j59e10{text-align:justify;}"]});var CustomStyleHooksContext=__webpack_require__("./node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js");const Text=react.forwardRef(((props,ref)=>{const state=((props,ref)=>{const{wrap,truncate,block,italic,underline,strikethrough,size,font,weight,align}=props;var _props_as;const as=null!==(_props_as=props.as)&&void 0!==_props_as?_props_as:"span";return{align:null!=align?align:"start",block:null!=block&&block,font:null!=font?font:"base",italic:null!=italic&&italic,size:null!=size?size:300,strikethrough:null!=strikethrough&&strikethrough,truncate:null!=truncate&&truncate,underline:null!=underline&&underline,weight:null!=weight?weight:"regular",wrap:null==wrap||wrap,components:{root:"span"},root:(0,getNativeElementProps.n)(as,{ref,...props,as})}})(props,ref);return(state=>{const styles=useStyles();state.root.className=(0,mergeClasses_esm.z)(textClassNames_root,styles.root,!1===state.wrap&&styles.nowrap,state.truncate&&styles.truncate,state.block&&styles.block,state.italic&&styles.italic,state.underline&&styles.underline,state.strikethrough&&styles.strikethrough,state.underline&&state.strikethrough&&styles.strikethroughUnderline,100===state.size&&styles.base100,200===state.size&&styles.base200,400===state.size&&styles.base400,500===state.size&&styles.base500,600===state.size&&styles.base600,700===state.size&&styles.hero700,800===state.size&&styles.hero800,900===state.size&&styles.hero900,1e3===state.size&&styles.hero1000,"monospace"===state.font&&styles.monospace,"numeric"===state.font&&styles.numeric,"medium"===state.weight&&styles.weightMedium,"semibold"===state.weight&&styles.weightSemibold,"bold"===state.weight&&styles.weightBold,"center"===state.align&&styles.alignCenter,"end"===state.align&&styles.alignEnd,"justify"===state.align&&styles.alignJustify,state.root.className)})(state),(0,CustomStyleHooksContext.oj)("useTextStyles_unstable")(state),(state=>{const{slots,slotProps}=(0,getSlotsNext.D)(state);return(0,createElement.a)(slots.root,slotProps.root)})(state)}));Text.displayName="Text"},"./node_modules/@griffel/react/__styles.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>__styles});var _griffel_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@griffel/core/__styles.esm.js"),_RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/react/RendererContext.esm.js"),_TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@griffel/react/TextDirectionContext.esm.js");function __styles(classesMapBySlot,cssRules){const getStyles=(0,_griffel_core__WEBPACK_IMPORTED_MODULE_0__.s)(classesMapBySlot,cssRules);return function useClasses(){const dir=(0,_TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__.s)(),renderer=(0,_RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)();return getStyles({dir,renderer})}}},"./.storybook/decorators/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Centered});__webpack_require__("./node_modules/react/index.js");const useCenteredClasses=(0,__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js").Z)({root:{minHeight:"100vh",width:"100%",display:"grid",alignItems:"center",justifyItems:"center"}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Centered=({children})=>{const classes=useCenteredClasses();return(0,jsx_runtime.jsx)("div",{className:classes.root,children})};Centered.displayName="Centered";try{Centered.displayName="Centered",Centered.__docgenInfo={description:"",displayName:"Centered",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/decorators/centered.tsx#Centered"]={docgenInfo:Centered.__docgenInfo,name:"Centered",path:".storybook/decorators/centered.tsx#Centered"})}catch(__react_docgen_typescript_loader_error){}},"./components/action-tile/__dev__/action-tile.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithImage:()=>WithImage,WithoutImage:()=>WithoutImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>action_tile_stories});var tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),tile=__webpack_require__("./components/tile/lib/tile.js"),decorators=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./.storybook/decorators/index.ts")),mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),icon=__webpack_require__("./components/icon/lib/icon/icon.js"),text_text=__webpack_require__("./components/text/lib/text/text.js"),index_esm=__webpack_require__("./node_modules/@griffel/core/index.esm.js");const useActionTileStyles=(0,makeStyles_esm.Z)({root:{display:"grid",columnGap:tokens.T.spacingHorizontalL,minHeight:"60px",alignContent:"center",alignItems:"center",textAlign:"left",paddingLeft:tokens.T.spacingHorizontalXXL,paddingRight:tokens.T.spacingHorizontalXXL,cursor:"pointer",backgroundColor:"transparent",...index_esm.q5.borderStyle("none"),...index_esm.q5.borderColor("transparent")},withImage:{gridTemplateColumns:"1.75rem auto 1rem"},withoutImage:{gridTemplateColumns:"auto 1rem"},image:{height:"1.75rem",width:"1.75rem",objectFit:"cover"}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ActionTile=({className,title,onClick,description,imageSrc,imageAlt})=>{const classes=useActionTileStyles(),withImage=imageSrc&&imageAlt;return(0,jsx_runtime.jsxs)(tile.n,{as:"button",variant:"card",className:(0,mergeClasses_esm.z)(classes.root,withImage?classes.withImage:classes.withoutImage,className),onClick,children:[withImage&&(0,jsx_runtime.jsx)("img",{src:imageSrc,alt:imageAlt,className:classes.image}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(text_text.x,{block:!0,variant:"caption",children:title}),description&&(0,jsx_runtime.jsx)(text_text.x,{variant:"description",color:"secondary",children:description})]}),(0,jsx_runtime.jsx)(icon.J,{iconName:"chevron-right",color:"tertiary"})]})};ActionTile.displayName="ActionTile";try{ActionTile.displayName="ActionTile",ActionTile.__docgenInfo={description:"",displayName:"ActionTile",props:{className:{defaultValue:null,description:"Consumer provided class.",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Title of the action.",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Concise description of the action.",name:"description",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Click handler.",name:"onClick",required:!0,type:{name:"(e?: SyntheticEvent<Element, Event>) => void"}},imageSrc:{defaultValue:null,description:"Custom optional icon.",name:"imageSrc",required:!1,type:{name:"string"}},imageAlt:{defaultValue:null,description:"Accessible icon description.",name:"imageAlt",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/action-tile/src/action-tile/action-tile.tsx#ActionTile"]={docgenInfo:ActionTile.__docgenInfo,name:"ActionTile",path:"components/action-tile/src/action-tile/action-tile.tsx#ActionTile"})}catch(__react_docgen_typescript_loader_error){}const icon_namespaceObject=__webpack_require__.p+"static/media/icon.0ca5d4cb.svg",action_tile_stories={title:"Tiles/ActionTile",component:ActionTile,argTypes:{onClick:{action:"clicked"}},decorators:[Story=>(0,jsx_runtime.jsx)(decorators.z,{children:(0,jsx_runtime.jsx)("div",{style:{maxWidth:"980px"},children:(0,jsx_runtime.jsx)(Story,{})})})]},useTileGridStyles=(0,makeStyles_esm.Z)({root:{minWidth:"22.5rem",display:"grid",gridTemplateColumns:"1fr",gridAutoRows:"3.75rem",columnGap:tokens.T.spacingHorizontalM,rowGap:tokens.T.spacingVerticalM,"@media screen and (max-width: var(--arbutus--breakpoint-xxs))":{gridTemplateColumns:"100%"}}}),Template=args=>{const classes=useTileGridStyles();return(0,jsx_runtime.jsxs)("div",{className:classes.root,children:[(0,jsx_runtime.jsx)(tile.n,{variant:"solid-color",children:" "}),(0,jsx_runtime.jsx)(ActionTile,{...args}),(0,jsx_runtime.jsx)(tile.n,{variant:"solid-color",children:" "}),(0,jsx_runtime.jsx)(tile.n,{variant:"solid-color",children:" "}),(0,jsx_runtime.jsx)(tile.n,{variant:"solid-color",children:" "})]})};Template.displayName="Template";const WithoutImage=Template.bind({});WithoutImage.args={title:"ActionTile",description:"Component"};const WithImage=Template.bind({});WithImage.args={title:"ActionTile",description:"Component",imageAlt:"Component icon",imageSrc:icon_namespaceObject};const __namedExportsOrder=["WithoutImage","WithImage"]},"./components/text/lib/text/text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@fluentui/react-text/lib/components/Text/Text.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_text_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/text/lib/text/text.styles.js");const Text=({children,color="primary",variant,className,weight,size,font,...props})=>{const classes=(0,_text_styles__WEBPACK_IMPORTED_MODULE_1__.Ke)();let variantClass="";weight&&size&&font||(variantClass=variant?classes[variant]:classes.paragraph);const rootClasses=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.z)(classes.root,classes[color],variantClass,className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__.x,{weight,size,font,className:rootClasses,...props},children)};Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./components/text/lib/text/text.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AD:()=>variantClasses,Ke:()=>useTextStyles,bG:()=>colorClasses});var _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./styles/utilities/lib/map-to-styles.js");const colorMap={accent:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground1,action:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,primary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground1,secondary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground2,tertiary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3,quaternary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground4,negative:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,positive:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteGreenForeground1,warning:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteMarigoldForeground1,danger:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,info:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,background:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground1},colorClasses=(0,_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__.f)(colorMap,(color=>({color}))),variantClasses={jumbo:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero1000,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero1000,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightBold},title:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero800,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero800,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},subtitle:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero700,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero700,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},headline:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},leading:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},paragraph:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},caption:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},description:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase200,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase200,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular}},useTextStyles=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.Z)({...colorClasses,...variantClasses,root:{..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.margin(0),..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.padding(0)},code:{display:"inline-block",fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyMonospace,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,backgroundColor:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground3,..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.borderRadius(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.borderRadiusSmall),paddingLeft:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS,paddingRight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS}})},"./components/tile/lib/tile.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>Tile});var mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),index_esm=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),map_to_styles=__webpack_require__("./styles/utilities/lib/map-to-styles.js"),themes_tokens=__webpack_require__("./styles/theming/lib/themes/tokens.js");const colorMap={none:"transparent",primary:tokens.T.colorNeutralBackground1,secondary:tokens.T.colorNeutralBackground2,tertiary:tokens.T.colorNeutralBackground3,quaternary:tokens.T.colorNeutralBackground4,tile:tokens.T.colorNeutralBackground6,negative:tokens.T.colorPaletteDarkOrangeBackground1,positive:tokens.T.colorPaletteGreenBackground1,warning:tokens.T.colorPaletteMarigoldBackground1,danger:tokens.T.colorPaletteDarkOrangeBackground1,info:tokens.T.colorNeutralBackground2,accent:tokens.T.colorBrandBackground2},colorClasses=(0,map_to_styles.f)(colorMap,(color=>({backgroundColor:color}))),useTileStyles=(0,makeStyles_esm.Z)({root:{marginTop:0,marginBottom:0,marginLeft:0,marginRight:0},interactive:{...index_esm.q5.borderStyle("none"),...index_esm.q5.borderColor("transparent"),cursor:"pointer",transitionProperty:"all",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,":focus":{outlineColor:tokens.T.colorBrandForeground2}},card:{backgroundColor:tokens.T.colorNeutralBackground1,...index_esm.q5.borderRadius(tokens.T.borderRadiusLarge),boxShadow:tokens.T.shadow4},interactiveCard:{":hover":{boxShadow:tokens.T.shadow16}},image:{backgroundColor:tokens.T.colorNeutralBackground6,...index_esm.q5.borderRadius(themes_tokens.A.shape.borderRadius),backgroundSize:"cover",backgroundPositionX:"center",backgroundPositionY:"center"},solidColor:{...index_esm.q5.borderRadius(themes_tokens.A.shape.borderRadius)},...colorClasses}),isImage=({variant})=>"image"===variant,Tile=({children,variant,as:Root="div",backgroundColor="tile",imageSrc,className,onClick})=>{const classes=useTileStyles();let variantClasses="";switch(!0){case(({variant})=>"card"===variant)({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.card,onClick&&classes.interactive,onClick&&classes.interactiveCard,className);break;case isImage({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.image,onClick&&classes.interactive,className);break;case(({variant})=>"solid-color"===variant)({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.solidColor,onClick&&classes.interactive,classes[backgroundColor],className);break;default:variantClasses=(0,mergeClasses_esm.z)(classes.root,className)}const imageBackground=isImage({variant})?{style:{backgroundImage:`url("${imageSrc??""}")`}}:{};return react.createElement(Root,{className:variantClasses,...imageBackground,onClick},children)};Tile.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1},backgroundColor:{defaultValue:{value:"'tile'",computed:!1},required:!1}}}}}]);
=======
'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [1176],
  {
    './node_modules/@fluentui/react-text/lib/components/Text/Text.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { x: () => Text });
      var react = __webpack_require__('./node_modules/react/index.js'),
        getNativeElementProps = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js',
        );
      var createElement = __webpack_require__(
          './node_modules/@fluentui/react-jsx-runtime/lib/createElement.js',
        ),
        getSlotsNext = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/compose/getSlotsNext.js',
        );
      var _styles_esm = __webpack_require__(
          './node_modules/@griffel/react/__styles.esm.js',
        ),
        mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        );
      const textClassNames_root = 'fui-Text',
        useStyles = (0, _styles_esm.s)(
          {
            root: {
              Bahqtrf: 'fk6fouc',
              Be2twd7: 'fkhj508',
              Bg96gwp: 'f1i3iumi',
              Bhrd7zp: 'figsok6',
              fsow6f: 'fpgzoln',
              mc9l5x: 'f1w7gpdv',
              Huce71: 'f6juhto',
              B68tc82: 'f1mtd64y',
              Bmxbyg5: 'f1y7q3j9',
              ygn44y: 'f2jf649',
            },
            nowrap: { Huce71: 'fz5stix', B68tc82: 'f1p9o1ba', Bmxbyg5: 'f1sil6mw' },
            truncate: { ygn44y: 'f1cmbuwj' },
            block: { mc9l5x: 'ftgm304' },
            italic: { B80ckks: 'f1j4dglz' },
            underline: { w71qe1: 'f13mvf36' },
            strikethrough: { w71qe1: 'fv5q2k7' },
            strikethroughUnderline: { w71qe1: 'f1drk4o6' },
            base100: { Be2twd7: 'f13mqy1h', Bg96gwp: 'fcpl73t' },
            base200: { Be2twd7: 'fy9rknc', Bg96gwp: 'fwrc4pm' },
            base400: { Be2twd7: 'fod5ikn', Bg96gwp: 'faaz57k' },
            base500: { Be2twd7: 'f1pp30po', Bg96gwp: 'f106mvju' },
            base600: { Be2twd7: 'f1x0m3f5', Bg96gwp: 'fb86gi6' },
            hero700: { Be2twd7: 'fojgt09', Bg96gwp: 'fcen8rp' },
            hero800: { Be2twd7: 'fccw675', Bg96gwp: 'f1ebx5kk' },
            hero900: { Be2twd7: 'f15afnhw', Bg96gwp: 'fr3w3wp' },
            hero1000: { Be2twd7: 'fpyltcb', Bg96gwp: 'f1ivgwrt' },
            monospace: { Bahqtrf: 'f1fedwem' },
            numeric: { Bahqtrf: 'f1uq0ln5' },
            weightMedium: { Bhrd7zp: 'fdj6btp' },
            weightSemibold: { Bhrd7zp: 'fl43uef' },
            weightBold: { Bhrd7zp: 'flh3ekv' },
            alignCenter: { fsow6f: 'f17mccla' },
            alignEnd: { fsow6f: 'f12ymhq5' },
            alignJustify: { fsow6f: 'f1j59e10' },
          },
          {
            d: [
              '.fk6fouc{font-family:var(--fontFamilyBase);}',
              '.fkhj508{font-size:var(--fontSizeBase300);}',
              '.f1i3iumi{line-height:var(--lineHeightBase300);}',
              '.figsok6{font-weight:var(--fontWeightRegular);}',
              '.fpgzoln{text-align:start;}',
              '.f1w7gpdv{display:inline;}',
              '.f6juhto{white-space:normal;}',
              '.f1mtd64y{overflow-x:visible;}',
              '.f1y7q3j9{overflow-y:visible;}',
              '.f2jf649{text-overflow:clip;}',
              '.fz5stix{white-space:nowrap;}',
              '.f1p9o1ba{overflow-x:hidden;}',
              '.f1sil6mw{overflow-y:hidden;}',
              '.f1cmbuwj{text-overflow:ellipsis;}',
              '.ftgm304{display:block;}',
              '.f1j4dglz{font-style:italic;}',
              '.f13mvf36{text-decoration-line:underline;}',
              '.fv5q2k7{text-decoration-line:line-through;}',
              '.f1drk4o6{text-decoration-line:line-through underline;}',
              '.f13mqy1h{font-size:var(--fontSizeBase100);}',
              '.fcpl73t{line-height:var(--lineHeightBase100);}',
              '.fy9rknc{font-size:var(--fontSizeBase200);}',
              '.fwrc4pm{line-height:var(--lineHeightBase200);}',
              '.fod5ikn{font-size:var(--fontSizeBase400);}',
              '.faaz57k{line-height:var(--lineHeightBase400);}',
              '.f1pp30po{font-size:var(--fontSizeBase500);}',
              '.f106mvju{line-height:var(--lineHeightBase500);}',
              '.f1x0m3f5{font-size:var(--fontSizeBase600);}',
              '.fb86gi6{line-height:var(--lineHeightBase600);}',
              '.fojgt09{font-size:var(--fontSizeHero700);}',
              '.fcen8rp{line-height:var(--lineHeightHero700);}',
              '.fccw675{font-size:var(--fontSizeHero800);}',
              '.f1ebx5kk{line-height:var(--lineHeightHero800);}',
              '.f15afnhw{font-size:var(--fontSizeHero900);}',
              '.fr3w3wp{line-height:var(--lineHeightHero900);}',
              '.fpyltcb{font-size:var(--fontSizeHero1000);}',
              '.f1ivgwrt{line-height:var(--lineHeightHero1000);}',
              '.f1fedwem{font-family:var(--fontFamilyMonospace);}',
              '.f1uq0ln5{font-family:var(--fontFamilyNumeric);}',
              '.fdj6btp{font-weight:var(--fontWeightMedium);}',
              '.fl43uef{font-weight:var(--fontWeightSemibold);}',
              '.flh3ekv{font-weight:var(--fontWeightBold);}',
              '.f17mccla{text-align:center;}',
              '.f12ymhq5{text-align:end;}',
              '.f1j59e10{text-align:justify;}',
            ],
          },
        );
      var CustomStyleHooksContext = __webpack_require__(
        './node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js',
      );
      const Text = react.forwardRef((props, ref) => {
        const state = ((props, ref) => {
          const {
            wrap,
            truncate,
            block,
            italic,
            underline,
            strikethrough,
            size,
            font,
            weight,
            align,
          } = props;
          var _props_as;
          const as =
            null !== (_props_as = props.as) && void 0 !== _props_as ? _props_as : 'span';
          return {
            align: null != align ? align : 'start',
            block: null != block && block,
            font: null != font ? font : 'base',
            italic: null != italic && italic,
            size: null != size ? size : 300,
            strikethrough: null != strikethrough && strikethrough,
            truncate: null != truncate && truncate,
            underline: null != underline && underline,
            weight: null != weight ? weight : 'regular',
            wrap: null == wrap || wrap,
            components: { root: 'span' },
            root: (0, getNativeElementProps.n)(as, { ref, ...props, as }),
          };
        })(props, ref);
        return (
          ((state) => {
            const styles = useStyles();
            state.root.className = (0, mergeClasses_esm.z)(
              textClassNames_root,
              styles.root,
              !1 === state.wrap && styles.nowrap,
              state.truncate && styles.truncate,
              state.block && styles.block,
              state.italic && styles.italic,
              state.underline && styles.underline,
              state.strikethrough && styles.strikethrough,
              state.underline && state.strikethrough && styles.strikethroughUnderline,
              100 === state.size && styles.base100,
              200 === state.size && styles.base200,
              400 === state.size && styles.base400,
              500 === state.size && styles.base500,
              600 === state.size && styles.base600,
              700 === state.size && styles.hero700,
              800 === state.size && styles.hero800,
              900 === state.size && styles.hero900,
              1e3 === state.size && styles.hero1000,
              'monospace' === state.font && styles.monospace,
              'numeric' === state.font && styles.numeric,
              'medium' === state.weight && styles.weightMedium,
              'semibold' === state.weight && styles.weightSemibold,
              'bold' === state.weight && styles.weightBold,
              'center' === state.align && styles.alignCenter,
              'end' === state.align && styles.alignEnd,
              'justify' === state.align && styles.alignJustify,
              state.root.className,
            );
          })(state),
          (0, CustomStyleHooksContext.oj)('useTextStyles_unstable')(state),
          ((state) => {
            const { slots, slotProps } = (0, getSlotsNext.D)(state);
            return (0, createElement.a)(slots.root, slotProps.root);
          })(state)
        );
      });
      Text.displayName = 'Text';
    },
    './node_modules/@griffel/react/__styles.esm.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { s: () => __styles });
      var _griffel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/@griffel/core/__styles.esm.js',
        ),
        _RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@griffel/react/RendererContext.esm.js',
        ),
        _TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/@griffel/react/TextDirectionContext.esm.js',
        );
      function __styles(classesMapBySlot, cssRules) {
        const getStyles = (0, _griffel_core__WEBPACK_IMPORTED_MODULE_0__.s)(
          classesMapBySlot,
          cssRules,
        );
        return function useClasses() {
          const dir = (0, _TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__.s)(),
            renderer = (0, _RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)();
          return getStyles({ dir, renderer });
        };
      }
    },
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
    './components/action-tile/__dev__/action-tile.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          WithImage: () => WithImage,
          WithoutImage: () => WithoutImage,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => action_tile_stories,
        });
      var tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js'),
        makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        tile = __webpack_require__('./components/tile/lib/tile.js'),
        decorators =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./.storybook/decorators/index.ts')),
        mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        icon = __webpack_require__('./components/icon/lib/icon/icon.js'),
        text_text = __webpack_require__('./components/text/lib/text/text.js'),
        index_esm = __webpack_require__('./node_modules/@griffel/core/index.esm.js');
      const useActionTileStyles = (0, makeStyles_esm.Z)({
        root: {
          display: 'grid',
          columnGap: tokens.T.spacingHorizontalL,
          minHeight: '60px',
          alignContent: 'center',
          alignItems: 'center',
          textAlign: 'left',
          paddingLeft: tokens.T.spacingHorizontalXXL,
          paddingRight: tokens.T.spacingHorizontalXXL,
          cursor: 'pointer',
          backgroundColor: 'transparent',
          ...index_esm.q5.borderStyle('none'),
          ...index_esm.q5.borderColor('transparent'),
        },
        withImage: { gridTemplateColumns: '1.75rem auto 1rem' },
        withoutImage: { gridTemplateColumns: 'auto 1rem' },
        image: { height: '1.75rem', width: '1.75rem', objectFit: 'cover' },
      });
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const ActionTile = ({
        className,
        title,
        onClick,
        description,
        imageSrc,
        imageAlt,
      }) => {
        const classes = useActionTileStyles(),
          withImage = imageSrc && imageAlt;
        return (0, jsx_runtime.jsxs)(tile.n, {
          as: 'button',
          variant: 'card',
          className: (0, mergeClasses_esm.z)(
            classes.root,
            withImage ? classes.withImage : classes.withoutImage,
            className,
          ),
          onClick,
          children: [
            withImage &&
              (0, jsx_runtime.jsx)('img', {
                src: imageSrc,
                alt: imageAlt,
                className: classes.image,
              }),
            (0, jsx_runtime.jsxs)('div', {
              children: [
                (0, jsx_runtime.jsx)(text_text.x, {
                  block: !0,
                  variant: 'caption',
                  children: title,
                }),
                description &&
                  (0, jsx_runtime.jsx)(text_text.x, {
                    variant: 'description',
                    color: 'secondary',
                    children: description,
                  }),
              ],
            }),
            (0, jsx_runtime.jsx)(icon.J, {
              iconName: 'chevron-right',
              color: 'tertiary',
            }),
          ],
        });
      };
      ActionTile.displayName = 'ActionTile';
      try {
        (ActionTile.displayName = 'ActionTile'),
          (ActionTile.__docgenInfo = {
            description: '',
            displayName: 'ActionTile',
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
                description: 'Title of the action.',
                name: 'title',
                required: !0,
                type: { name: 'string' },
              },
              description: {
                defaultValue: null,
                description: 'Concise description of the action.',
                name: 'description',
                required: !1,
                type: { name: 'string' },
              },
              onClick: {
                defaultValue: null,
                description: 'Click handler.',
                name: 'onClick',
                required: !0,
                type: { name: '(e?: SyntheticEvent<Element, Event>) => void' },
              },
              imageSrc: {
                defaultValue: null,
                description: 'Custom optional icon.',
                name: 'imageSrc',
                required: !1,
                type: { name: 'string' },
              },
              imageAlt: {
                defaultValue: null,
                description: 'Accessible icon description.',
                name: 'imageAlt',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/action-tile/src/action-tile/action-tile.tsx#ActionTile'
            ] = {
              docgenInfo: ActionTile.__docgenInfo,
              name: 'ActionTile',
              path: 'components/action-tile/src/action-tile/action-tile.tsx#ActionTile',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const icon_namespaceObject =
          __webpack_require__.p + 'static/media/icon.0ca5d4cb.svg',
        action_tile_stories = {
          title: 'Tiles/ActionTile',
          component: ActionTile,
          argTypes: { onClick: { action: 'clicked' } },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)(decorators.z, {
                children: (0, jsx_runtime.jsx)('div', {
                  style: { maxWidth: '980px' },
                  children: (0, jsx_runtime.jsx)(Story, {}),
                }),
              }),
          ],
        },
        useTileGridStyles = (0, makeStyles_esm.Z)({
          root: {
            minWidth: '22.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridAutoRows: '3.75rem',
            columnGap: tokens.T.spacingHorizontalM,
            rowGap: tokens.T.spacingVerticalM,
            '@media screen and (max-width: var(--arbutus--breakpoint-xxs))': {
              gridTemplateColumns: '100%',
            },
          },
        }),
        Template = (args) => {
          const classes = useTileGridStyles();
          return (0, jsx_runtime.jsxs)('div', {
            className: classes.root,
            children: [
              (0, jsx_runtime.jsx)(tile.n, { variant: 'solid-color', children: ' ' }),
              (0, jsx_runtime.jsx)(ActionTile, { ...args }),
              (0, jsx_runtime.jsx)(tile.n, { variant: 'solid-color', children: ' ' }),
              (0, jsx_runtime.jsx)(tile.n, { variant: 'solid-color', children: ' ' }),
              (0, jsx_runtime.jsx)(tile.n, { variant: 'solid-color', children: ' ' }),
            ],
          });
        };
      Template.displayName = 'Template';
      const WithoutImage = Template.bind({});
      WithoutImage.args = { title: 'ActionTile', description: 'Component' };
      const WithImage = Template.bind({});
      WithImage.args = {
        title: 'ActionTile',
        description: 'Component',
        imageAlt: 'Component icon',
        imageSrc: icon_namespaceObject,
      };
      const __namedExportsOrder = ['WithoutImage', 'WithImage'];
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
  },
]);
>>>>>>> 0a42c43 (Runs lint):docs/action-tile-__dev__-action-tile-stories.130c8ae1.iframe.bundle.js

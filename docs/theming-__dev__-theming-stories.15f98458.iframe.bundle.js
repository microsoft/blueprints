/*! For license information please see theming-__dev__-theming-stories.15f98458.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkarbutus=self.webpackChunkarbutus||[]).push([[5926],{"./node_modules/@fluentui/react-text/lib/components/Text/Text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var react=__webpack_require__("./node_modules/react/index.js"),getNativeElementProps=__webpack_require__("./node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js");var createElement=__webpack_require__("./node_modules/@fluentui/react-jsx-runtime/lib/createElement.js"),getSlotsNext=__webpack_require__("./node_modules/@fluentui/react-utilities/lib/compose/getSlotsNext.js");var _styles_esm=__webpack_require__("./node_modules/@griffel/react/__styles.esm.js"),mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js");const textClassNames_root="fui-Text",useStyles=(0,_styles_esm.s)({root:{Bahqtrf:"fk6fouc",Be2twd7:"fkhj508",Bg96gwp:"f1i3iumi",Bhrd7zp:"figsok6",fsow6f:"fpgzoln",mc9l5x:"f1w7gpdv",Huce71:"f6juhto",B68tc82:"f1mtd64y",Bmxbyg5:"f1y7q3j9",ygn44y:"f2jf649"},nowrap:{Huce71:"fz5stix",B68tc82:"f1p9o1ba",Bmxbyg5:"f1sil6mw"},truncate:{ygn44y:"f1cmbuwj"},block:{mc9l5x:"ftgm304"},italic:{B80ckks:"f1j4dglz"},underline:{w71qe1:"f13mvf36"},strikethrough:{w71qe1:"fv5q2k7"},strikethroughUnderline:{w71qe1:"f1drk4o6"},base100:{Be2twd7:"f13mqy1h",Bg96gwp:"fcpl73t"},base200:{Be2twd7:"fy9rknc",Bg96gwp:"fwrc4pm"},base400:{Be2twd7:"fod5ikn",Bg96gwp:"faaz57k"},base500:{Be2twd7:"f1pp30po",Bg96gwp:"f106mvju"},base600:{Be2twd7:"f1x0m3f5",Bg96gwp:"fb86gi6"},hero700:{Be2twd7:"fojgt09",Bg96gwp:"fcen8rp"},hero800:{Be2twd7:"fccw675",Bg96gwp:"f1ebx5kk"},hero900:{Be2twd7:"f15afnhw",Bg96gwp:"fr3w3wp"},hero1000:{Be2twd7:"fpyltcb",Bg96gwp:"f1ivgwrt"},monospace:{Bahqtrf:"f1fedwem"},numeric:{Bahqtrf:"f1uq0ln5"},weightMedium:{Bhrd7zp:"fdj6btp"},weightSemibold:{Bhrd7zp:"fl43uef"},weightBold:{Bhrd7zp:"flh3ekv"},alignCenter:{fsow6f:"f17mccla"},alignEnd:{fsow6f:"f12ymhq5"},alignJustify:{fsow6f:"f1j59e10"}},{d:[".fk6fouc{font-family:var(--fontFamilyBase);}",".fkhj508{font-size:var(--fontSizeBase300);}",".f1i3iumi{line-height:var(--lineHeightBase300);}",".figsok6{font-weight:var(--fontWeightRegular);}",".fpgzoln{text-align:start;}",".f1w7gpdv{display:inline;}",".f6juhto{white-space:normal;}",".f1mtd64y{overflow-x:visible;}",".f1y7q3j9{overflow-y:visible;}",".f2jf649{text-overflow:clip;}",".fz5stix{white-space:nowrap;}",".f1p9o1ba{overflow-x:hidden;}",".f1sil6mw{overflow-y:hidden;}",".f1cmbuwj{text-overflow:ellipsis;}",".ftgm304{display:block;}",".f1j4dglz{font-style:italic;}",".f13mvf36{text-decoration-line:underline;}",".fv5q2k7{text-decoration-line:line-through;}",".f1drk4o6{text-decoration-line:line-through underline;}",".f13mqy1h{font-size:var(--fontSizeBase100);}",".fcpl73t{line-height:var(--lineHeightBase100);}",".fy9rknc{font-size:var(--fontSizeBase200);}",".fwrc4pm{line-height:var(--lineHeightBase200);}",".fod5ikn{font-size:var(--fontSizeBase400);}",".faaz57k{line-height:var(--lineHeightBase400);}",".f1pp30po{font-size:var(--fontSizeBase500);}",".f106mvju{line-height:var(--lineHeightBase500);}",".f1x0m3f5{font-size:var(--fontSizeBase600);}",".fb86gi6{line-height:var(--lineHeightBase600);}",".fojgt09{font-size:var(--fontSizeHero700);}",".fcen8rp{line-height:var(--lineHeightHero700);}",".fccw675{font-size:var(--fontSizeHero800);}",".f1ebx5kk{line-height:var(--lineHeightHero800);}",".f15afnhw{font-size:var(--fontSizeHero900);}",".fr3w3wp{line-height:var(--lineHeightHero900);}",".fpyltcb{font-size:var(--fontSizeHero1000);}",".f1ivgwrt{line-height:var(--lineHeightHero1000);}",".f1fedwem{font-family:var(--fontFamilyMonospace);}",".f1uq0ln5{font-family:var(--fontFamilyNumeric);}",".fdj6btp{font-weight:var(--fontWeightMedium);}",".fl43uef{font-weight:var(--fontWeightSemibold);}",".flh3ekv{font-weight:var(--fontWeightBold);}",".f17mccla{text-align:center;}",".f12ymhq5{text-align:end;}",".f1j59e10{text-align:justify;}"]});var CustomStyleHooksContext=__webpack_require__("./node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js");const Text=react.forwardRef(((props,ref)=>{const state=((props,ref)=>{const{wrap,truncate,block,italic,underline,strikethrough,size,font,weight,align}=props;var _props_as;const as=null!==(_props_as=props.as)&&void 0!==_props_as?_props_as:"span";return{align:null!=align?align:"start",block:null!=block&&block,font:null!=font?font:"base",italic:null!=italic&&italic,size:null!=size?size:300,strikethrough:null!=strikethrough&&strikethrough,truncate:null!=truncate&&truncate,underline:null!=underline&&underline,weight:null!=weight?weight:"regular",wrap:null==wrap||wrap,components:{root:"span"},root:(0,getNativeElementProps.n)(as,{ref,...props,as})}})(props,ref);return(state=>{const styles=useStyles();state.root.className=(0,mergeClasses_esm.z)(textClassNames_root,styles.root,!1===state.wrap&&styles.nowrap,state.truncate&&styles.truncate,state.block&&styles.block,state.italic&&styles.italic,state.underline&&styles.underline,state.strikethrough&&styles.strikethrough,state.underline&&state.strikethrough&&styles.strikethroughUnderline,100===state.size&&styles.base100,200===state.size&&styles.base200,400===state.size&&styles.base400,500===state.size&&styles.base500,600===state.size&&styles.base600,700===state.size&&styles.hero700,800===state.size&&styles.hero800,900===state.size&&styles.hero900,1e3===state.size&&styles.hero1000,"monospace"===state.font&&styles.monospace,"numeric"===state.font&&styles.numeric,"medium"===state.weight&&styles.weightMedium,"semibold"===state.weight&&styles.weightSemibold,"bold"===state.weight&&styles.weightBold,"center"===state.align&&styles.alignCenter,"end"===state.align&&styles.alignEnd,"justify"===state.align&&styles.alignJustify,state.root.className)})(state),(0,CustomStyleHooksContext.oj)("useTextStyles_unstable")(state),(state=>{const{slots,slotProps}=(0,getSlotsNext.D)(state);return(0,createElement.a)(slots.root,slotProps.root)})(state)}));Text.displayName="Text"},"./node_modules/@griffel/react/__styles.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>__styles});var _griffel_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@griffel/core/__styles.esm.js"),_RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/react/RendererContext.esm.js"),_TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@griffel/react/TextDirectionContext.esm.js");function __styles(classesMapBySlot,cssRules){const getStyles=(0,_griffel_core__WEBPACK_IMPORTED_MODULE_0__.s)(classesMapBySlot,cssRules);return function useClasses(){const dir=(0,_TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__.s)(),renderer=(0,_RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)();return getStyles({dir,renderer})}}},"./node_modules/@reach/visually-hidden/dist/reach-visually-hidden.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>VisuallyHidden});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),VisuallyHidden=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function VisuallyHidden2({as:Comp="span",style={},...props},ref){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp,{ref,style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal",...style},...props})}));VisuallyHidden.displayName="VisuallyHidden"},"./.storybook/decorators/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Centered});__webpack_require__("./node_modules/react/index.js");const useCenteredClasses=(0,__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js").Z)({root:{minHeight:"100vh",width:"100%",display:"grid",alignItems:"center",justifyItems:"center"}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Centered=({children})=>{const classes=useCenteredClasses();return(0,jsx_runtime.jsx)("div",{className:classes.root,children})};Centered.displayName="Centered";try{Centered.displayName="Centered",Centered.__docgenInfo={description:"",displayName:"Centered",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/decorators/centered.tsx#Centered"]={docgenInfo:Centered.__docgenInfo,name:"Centered",path:".storybook/decorators/centered.tsx#Centered"})}catch(__react_docgen_typescript_loader_error){}},"./components/button/lib/button/button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),map_to_styles=__webpack_require__("./styles/utilities/lib/map-to-styles.js");const colorMap={primary:{foreground:tokens.T.colorBrandForeground1,stroke:tokens.T.colorBrandForeground2,background:tokens.T.colorBrandBackground2},secondary:{foreground:tokens.T.colorNeutralForeground1,stroke:tokens.T.colorNeutralStroke1,background:tokens.T.colorNeutralBackground3},danger:{foreground:tokens.T.colorPaletteDarkOrangeForeground1,stroke:tokens.T.colorPaletteDarkOrangeBorder1,background:tokens.T.colorPaletteDarkOrangeBackground1},warning:{foreground:tokens.T.colorPaletteMarigoldForeground1,stroke:tokens.T.colorPaletteMarigoldBorder1,background:tokens.T.colorPaletteMarigoldBackground1},success:{foreground:tokens.T.colorPaletteGreenForeground1,stroke:tokens.T.colorPaletteGreenBorder1,background:tokens.T.colorPaletteGreenBackground1}},colorPillClasses=(0,map_to_styles.f)(colorMap,(({foreground,background,stroke})=>({color:foreground,borderTopColor:stroke,borderRightColor:stroke,borderLeftColor:stroke,borderBottomColor:stroke,"&:focus-visible, &:hover":{backgroundColor:background,boxShadow:`0 0 2px ${background}, 0 8px 16px ${background}, inset 0 0 0px 0.5px ${stroke}`}}))),{primary,...restColors}=colorMap,colorBrickClasses=(0,map_to_styles.f)(restColors,(({foreground,background,stroke})=>({backgroundColor:background,color:foreground,borderTopColor:stroke,borderRightColor:stroke,borderLeftColor:stroke,borderBottomColor:stroke,"&:focus-visible, &:hover":{boxShadow:`0 0 2px ${background}, 0 8px 16px ${background}, inset 0 0 0px 0.5px ${stroke}`}}))),sizeMap={small:{x:tokens.T.spacingHorizontalM,y:tokens.T.spacingVerticalXS,fontSize:tokens.T.fontSizeBase300},medium:{x:tokens.T.spacingHorizontalL,y:tokens.T.spacingVerticalS,fontSize:tokens.T.fontSizeBase300},large:{x:tokens.T.spacingHorizontalXXL,y:tokens.T.spacingVerticalM,fontSize:tokens.T.fontSizeBase400}},sizeClasses=(0,map_to_styles.f)(sizeMap,(({y,x,fontSize})=>({paddingLeft:x,paddingRight:x,paddingTop:y,paddingBottom:y,fontSize}))),sizePillClasses=(0,map_to_styles.f)(sizeMap,(({x,fontSize})=>({borderTopLeftRadius:`calc(${x} * 2 + ${fontSize})`,borderTopRightRadius:`calc(${x} * 2 + ${fontSize})`,borderBottomLeftRadius:`calc(${x} * 2 + ${fontSize})`,borderBottomRightRadius:`calc(${x} * 2 + ${fontSize})`}))),useButtonStyles=(0,makeStyles_esm.Z)({root:{cursor:"pointer",transitionProperty:"all",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,fontWeight:tokens.T.fontWeightSemibold,borderTopStyle:"solid",borderBottomStyle:"solid",borderLeftStyle:"solid",borderRightStyle:"solid",borderTopWidth:tokens.T.strokeWidthThin,borderBottomWidth:tokens.T.strokeWidthThin,borderLeftWidth:tokens.T.strokeWidthThin,borderRightWidth:tokens.T.strokeWidthThin,boxShadow:"0 0 2px transparent, 0 8px 16px transparent","@media (prefers-reduced-motion)":{transitionDuration:"0ms"},"&:focus-visible":{outlineStyle:"none",outlineColor:"transparent"}},pill:{backgroundColor:"transparent"},brick:{borderTopLeftRadius:tokens.T.borderRadiusMedium,borderTopRightRadius:tokens.T.borderRadiusMedium,borderBottomLeftRadius:tokens.T.borderRadiusMedium,borderBottomRightRadius:tokens.T.borderRadiusMedium},...sizeClasses}),useButtonPillStyles=(0,makeStyles_esm.Z)({...colorPillClasses,...sizePillClasses}),useButtonBrickStyles=(0,makeStyles_esm.Z)({primary:{color:tokens.T.colorNeutralBackground1,backgroundColor:tokens.T.colorBrandForegroundInverted,borderTopColor:tokens.T.colorBrandForegroundInverted,borderRightColor:tokens.T.colorBrandForegroundInverted,borderLeftColor:tokens.T.colorBrandForegroundInverted,borderBottomColor:tokens.T.colorBrandForegroundInverted,"&:focus-visible, &:hover":{backgroundColor:tokens.T.colorBrandForegroundInvertedHover,boxShadow:`0 0 2px ${colorMap.primary.foreground}, 0 8px 16px ${colorMap.primary.background}`}},...colorBrickClasses}),Button=({className,color="primary",size="medium",shape="brick",children,...rest})=>{const classes=useButtonStyles(),brickClasses=useButtonBrickStyles(),pillClasses=useButtonPillStyles(),isBrick="brick"===shape,isPill="pill"===shape;return react.createElement("button",{className:(0,mergeClasses_esm.z)(classes.root,classes[size],isBrick&&brickClasses[color],isBrick&&classes.brick,isPill&&classes.pill,isPill&&pillClasses[color],isPill&&pillClasses[size],className),...rest},children)};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},shape:{defaultValue:{value:"'brick'",computed:!1},required:!1}}}},"./components/text/lib/text/text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@fluentui/react-text/lib/components/Text/Text.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_text_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/text/lib/text/text.styles.js");const Text=({children,color="primary",variant,className,weight,size,font,...props})=>{const classes=(0,_text_styles__WEBPACK_IMPORTED_MODULE_1__.Ke)();let variantClass="";weight&&size&&font||(variantClass=variant?classes[variant]:classes.paragraph);const rootClasses=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.z)(classes.root,classes[color],variantClass,className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__.x,{weight,size,font,className:rootClasses,...props},children)};Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./components/text/lib/text/text.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AD:()=>variantClasses,Ke:()=>useTextStyles,bG:()=>colorClasses});var _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./styles/utilities/lib/map-to-styles.js");const colorMap={accent:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground1,action:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,primary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground1,secondary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground2,tertiary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3,quaternary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground4,negative:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,positive:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteGreenForeground1,warning:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteMarigoldForeground1,danger:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,info:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,background:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground1},colorClasses=(0,_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__.f)(colorMap,(color=>({color}))),variantClasses={jumbo:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero1000,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero1000,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightBold},title:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero800,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero800,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},subtitle:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero700,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero700,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},headline:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},leading:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},paragraph:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},caption:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},description:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase200,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase200,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular}},useTextStyles=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.Z)({...colorClasses,...variantClasses,root:{..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.margin(0),..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.padding(0)},code:{display:"inline-block",fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyMonospace,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,backgroundColor:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground3,..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.borderRadius(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.borderRadiusSmall),paddingLeft:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS,paddingRight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS}})},"./styles/theming/__dev__/theming.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>theming_stories});var button_button=__webpack_require__("./components/button/lib/button/button.js"),text_text=__webpack_require__("./components/text/lib/text/text.js"),mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),icon=__webpack_require__("./components/icon/lib/icon/icon.js"),reach_visually_hidden=__webpack_require__("./node_modules/@reach/visually-hidden/dist/reach-visually-hidden.mjs"),react=__webpack_require__("./node_modules/react/index.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),index_esm=__webpack_require__("./node_modules/@griffel/core/index.esm.js");const buttonHeight=tokens.T.spacingVerticalXXL,toggleHeight=tokens.T.spacingVerticalL,useThemeSwitchStyles=(0,makeStyles_esm.Z)({root:{position:"relative",backgroundColor:tokens.T.colorNeutralBackground2,height:buttonHeight,width:`calc(${buttonHeight} * 2 + -2px)`,paddingTop:`calc((${buttonHeight} - ${toggleHeight}) / 2)`,paddingBottom:`calc((${buttonHeight} - ${toggleHeight}) / 2)`,paddingLeft:`calc((${buttonHeight} - ${toggleHeight}) / 2)`,paddingRight:`calc((${buttonHeight} - ${toggleHeight}) / 2)`,outlineStyle:"none",cursor:"pointer",transitionProperty:"all",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,borderTopStyle:"none",borderBottomStyle:"none",borderLeftStyle:"none",borderRightStyle:"none",boxShadow:tokens.T.shadow2,...index_esm.q5.borderRadius(`calc(${buttonHeight} / 2)`)},toggle:{transitionProperty:"all",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,position:"absolute",top:`calc((${buttonHeight} - ${toggleHeight}) / 2)`,height:toggleHeight,width:toggleHeight,backgroundColor:tokens.T.colorNeutralForeground2,boxShadow:tokens.T.shadow4,...index_esm.q5.borderRadius(toggleHeight)},toggleOff:{transform:"translateX(0)"},toggleOn:{transform:`translateX(calc(${buttonHeight} + -2px))`},iconSun:{position:"absolute",transitionProperty:"all",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,top:`calc((${buttonHeight} - ${toggleHeight}) / 2)`,left:`calc((${buttonHeight} - ${toggleHeight}) / 2)`,color:tokens.T.colorPaletteMarigoldBackground3,opacity:1},iconMoon:{position:"absolute",transitionProperty:"all",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,top:`calc((${buttonHeight} - ${toggleHeight}) / 2)`,right:`calc((${buttonHeight} - ${toggleHeight}) / 2)`,color:tokens.T.colorPaletteMarigoldBackground3,opacity:1},iconOff:{opacity:0}}),ThemeSwitch=({className,label="Dark mode",isDark,onToggle})=>{const classes=useThemeSwitchStyles();return react.createElement("button",{"aria-pressed":isDark,className:(0,mergeClasses_esm.z)(classes.root,className),onClick:()=>onToggle?.()},react.createElement(reach_visually_hidden.T,null,label),react.createElement("div",{"aria-hidden":!0,className:(0,mergeClasses_esm.z)(classes.toggle,isDark?classes.toggleOn:classes.toggleOff)}),react.createElement(icon.J,{iconName:"sun",className:(0,mergeClasses_esm.z)(classes.iconSun,!isDark&&classes.iconOff)}),react.createElement(icon.J,{iconName:"moon",className:(0,mergeClasses_esm.z)(classes.iconMoon,isDark&&classes.iconOff)}))};ThemeSwitch.__docgenInfo={description:"",methods:[],displayName:"ThemeSwitch",props:{label:{defaultValue:{value:"'Dark mode'",computed:!1},required:!1}}};var decorators=__webpack_require__("./.storybook/decorators/index.ts"),createLightTheme=__webpack_require__("./node_modules/@fluentui/tokens/lib/utils/createLightTheme.js");const arbutusBrandRamp={10:"#151515",20:"#221F1E",30:"#2E2627",40:"#3D2D2E",50:"#4F3437",60:"#613A3D",70:"#913039",80:"#BD3844",90:"#C6404B",100:"#E05E69",110:"#E6717B",120:"#EB838C",130:"#F19FA6",140:"#F7B7BC",150:"#FACFD3",160:"#FCEBEC"},ThemeContext=(0,react.createContext)({theme:(0,createLightTheme.f)(arbutusBrandRamp),themeKey:"light"});var FluentProvider=__webpack_require__("./node_modules/@fluentui/react-provider/lib/components/FluentProvider/FluentProvider.js"),createDarkTheme=__webpack_require__("./node_modules/@fluentui/tokens/lib/utils/createDarkTheme.js"),lib=__webpack_require__("./hooks/use-css-vars/lib/index.js"),use_prefers_color_scheme_lib=__webpack_require__("./hooks/use-prefers-color-scheme/lib/index.js");const breakpoints={micro:"400px",xxs:"470px",xs:"640px",small:"768px",medium:"1024px",large:"1140px"},layout={mobile:0,tablet:768,desktop:1140,ultraWide:1440},arbutusTokens={light:{color:{overlay:{background:"rgb(255 255 255 / 75%)"}},shape:{"border-radius":"1rem"},breakpoints,layout},dark:{color:{overlay:{background:"rgb(0 0 0 / 75%)"}},shape:{"border-radius":"1rem"},breakpoints,layout}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ThemeProvider=({children,brandVariants=arbutusBrandRamp,defaultTheme="light",themes:_themes,currentThemeKey:userThemeKey,setThemeKey:userSetThemeKey})=>{const defaultThemes=(0,react.useMemo)((()=>({light:(0,createLightTheme.f)(brandVariants),dark:(0,createDarkTheme.d)(brandVariants)})),[brandVariants]),themes=_themes??defaultThemes,preferredTheme=(0,use_prefers_color_scheme_lib.t)(),themeOption=preferredTheme??defaultTheme,isControlled=void 0!==userThemeKey,[internalThemeKey,internalSetTheme]=(0,react.useState)(themeOption);(0,react.useEffect)((()=>{isControlled||internalSetTheme(themeOption)}),[preferredTheme,themeOption,isControlled]);const themeKey=isControlled?userThemeKey:internalThemeKey,setTheme=isControlled?userSetThemeKey:internalSetTheme,theme=themes[themeKey];return(0,lib.z)({theme:arbutusTokens[themeKey],prefix:"arbutus"}),(0,jsx_runtime.jsx)(ThemeContext.Provider,{value:{setTheme,themeKey,theme},children:(0,jsx_runtime.jsx)(FluentProvider.r,{theme,children})})};ThemeProvider.displayName="ThemeProvider";try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{defaultTheme:{defaultValue:{value:"light"},description:"",name:"defaultTheme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},brandVariants:{defaultValue:{value:"{\n  10: '#151515',\n  20: '#221F1E',\n  30: '#2E2627',\n  40: '#3D2D2E',\n  50: '#4F3437',\n  60: '#613A3D',\n  70: '#913039',\n  80: '#BD3844',\n  90: '#C6404B',\n  100: '#E05E69',\n  110: '#E6717B',\n  120: '#EB838C',\n  130: '#F19FA6',\n  140: '#F7B7BC',\n  150: '#FACFD3',\n  160: '#FCEBEC',\n}"},description:"",name:"brandVariants",required:!1,type:{name:"BrandVariants"}},themes:{defaultValue:null,description:"",name:"themes",required:!1,type:{name:"Record<ColorScheme, Theme>"}},currentThemeKey:{defaultValue:null,description:"",name:"currentThemeKey",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},setThemeKey:{defaultValue:null,description:"",name:"setThemeKey",required:!1,type:{name:"(themeKey: ColorScheme) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["styles/theming/src/theme-provider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"styles/theming/src/theme-provider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}const DemoComponent=()=>{const{themeKey,setTheme}=(()=>{const{theme,themeKey,setTheme}=(0,react.useContext)(ThemeContext);return{theme,themeKey,setTheme}})(),isDark="dark"===themeKey;return(0,jsx_runtime.jsxs)(decorators.z,{children:[(0,jsx_runtime.jsx)(ThemeSwitch,{isDark,onToggle:()=>setTheme?.(isDark?"light":"dark")}),(0,jsx_runtime.jsx)(text_text.x,{as:"h1",block:!0,variant:"title",children:"Welcome to theming!"}),(0,jsx_runtime.jsx)(button_button.z,{children:"I am a button"})]})};DemoComponent.displayName="DemoComponent";const theming_stories={title:"Styles/Theming"},Template=()=>(0,jsx_runtime.jsx)(ThemeProvider,{children:(0,jsx_runtime.jsx)(DemoComponent,{})});Template.displayName="Template";const Simple=Template.bind({}),__namedExportsOrder=["Simple"]}}]);
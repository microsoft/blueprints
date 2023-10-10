<<<<<<< HEAD:docs/file-to-string-__dev__-file-to-string-stories.3b9b5b64.iframe.bundle.js
/*! For license information please see file-to-string-__dev__-file-to-string-stories.3b9b5b64.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkarbutus=self.webpackChunkarbutus||[]).push([[8316],{"./node_modules/@fluentui/react-text/lib/components/Text/Text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var react=__webpack_require__("./node_modules/react/index.js"),getNativeElementProps=__webpack_require__("./node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js");var createElement=__webpack_require__("./node_modules/@fluentui/react-jsx-runtime/lib/createElement.js"),getSlotsNext=__webpack_require__("./node_modules/@fluentui/react-utilities/lib/compose/getSlotsNext.js");var _styles_esm=__webpack_require__("./node_modules/@griffel/react/__styles.esm.js"),mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js");const textClassNames_root="fui-Text",useStyles=(0,_styles_esm.s)({root:{Bahqtrf:"fk6fouc",Be2twd7:"fkhj508",Bg96gwp:"f1i3iumi",Bhrd7zp:"figsok6",fsow6f:"fpgzoln",mc9l5x:"f1w7gpdv",Huce71:"f6juhto",B68tc82:"f1mtd64y",Bmxbyg5:"f1y7q3j9",ygn44y:"f2jf649"},nowrap:{Huce71:"fz5stix",B68tc82:"f1p9o1ba",Bmxbyg5:"f1sil6mw"},truncate:{ygn44y:"f1cmbuwj"},block:{mc9l5x:"ftgm304"},italic:{B80ckks:"f1j4dglz"},underline:{w71qe1:"f13mvf36"},strikethrough:{w71qe1:"fv5q2k7"},strikethroughUnderline:{w71qe1:"f1drk4o6"},base100:{Be2twd7:"f13mqy1h",Bg96gwp:"fcpl73t"},base200:{Be2twd7:"fy9rknc",Bg96gwp:"fwrc4pm"},base400:{Be2twd7:"fod5ikn",Bg96gwp:"faaz57k"},base500:{Be2twd7:"f1pp30po",Bg96gwp:"f106mvju"},base600:{Be2twd7:"f1x0m3f5",Bg96gwp:"fb86gi6"},hero700:{Be2twd7:"fojgt09",Bg96gwp:"fcen8rp"},hero800:{Be2twd7:"fccw675",Bg96gwp:"f1ebx5kk"},hero900:{Be2twd7:"f15afnhw",Bg96gwp:"fr3w3wp"},hero1000:{Be2twd7:"fpyltcb",Bg96gwp:"f1ivgwrt"},monospace:{Bahqtrf:"f1fedwem"},numeric:{Bahqtrf:"f1uq0ln5"},weightMedium:{Bhrd7zp:"fdj6btp"},weightSemibold:{Bhrd7zp:"fl43uef"},weightBold:{Bhrd7zp:"flh3ekv"},alignCenter:{fsow6f:"f17mccla"},alignEnd:{fsow6f:"f12ymhq5"},alignJustify:{fsow6f:"f1j59e10"}},{d:[".fk6fouc{font-family:var(--fontFamilyBase);}",".fkhj508{font-size:var(--fontSizeBase300);}",".f1i3iumi{line-height:var(--lineHeightBase300);}",".figsok6{font-weight:var(--fontWeightRegular);}",".fpgzoln{text-align:start;}",".f1w7gpdv{display:inline;}",".f6juhto{white-space:normal;}",".f1mtd64y{overflow-x:visible;}",".f1y7q3j9{overflow-y:visible;}",".f2jf649{text-overflow:clip;}",".fz5stix{white-space:nowrap;}",".f1p9o1ba{overflow-x:hidden;}",".f1sil6mw{overflow-y:hidden;}",".f1cmbuwj{text-overflow:ellipsis;}",".ftgm304{display:block;}",".f1j4dglz{font-style:italic;}",".f13mvf36{text-decoration-line:underline;}",".fv5q2k7{text-decoration-line:line-through;}",".f1drk4o6{text-decoration-line:line-through underline;}",".f13mqy1h{font-size:var(--fontSizeBase100);}",".fcpl73t{line-height:var(--lineHeightBase100);}",".fy9rknc{font-size:var(--fontSizeBase200);}",".fwrc4pm{line-height:var(--lineHeightBase200);}",".fod5ikn{font-size:var(--fontSizeBase400);}",".faaz57k{line-height:var(--lineHeightBase400);}",".f1pp30po{font-size:var(--fontSizeBase500);}",".f106mvju{line-height:var(--lineHeightBase500);}",".f1x0m3f5{font-size:var(--fontSizeBase600);}",".fb86gi6{line-height:var(--lineHeightBase600);}",".fojgt09{font-size:var(--fontSizeHero700);}",".fcen8rp{line-height:var(--lineHeightHero700);}",".fccw675{font-size:var(--fontSizeHero800);}",".f1ebx5kk{line-height:var(--lineHeightHero800);}",".f15afnhw{font-size:var(--fontSizeHero900);}",".fr3w3wp{line-height:var(--lineHeightHero900);}",".fpyltcb{font-size:var(--fontSizeHero1000);}",".f1ivgwrt{line-height:var(--lineHeightHero1000);}",".f1fedwem{font-family:var(--fontFamilyMonospace);}",".f1uq0ln5{font-family:var(--fontFamilyNumeric);}",".fdj6btp{font-weight:var(--fontWeightMedium);}",".fl43uef{font-weight:var(--fontWeightSemibold);}",".flh3ekv{font-weight:var(--fontWeightBold);}",".f17mccla{text-align:center;}",".f12ymhq5{text-align:end;}",".f1j59e10{text-align:justify;}"]});var CustomStyleHooksContext=__webpack_require__("./node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js");const Text=react.forwardRef(((props,ref)=>{const state=((props,ref)=>{const{wrap,truncate,block,italic,underline,strikethrough,size,font,weight,align}=props;var _props_as;const as=null!==(_props_as=props.as)&&void 0!==_props_as?_props_as:"span";return{align:null!=align?align:"start",block:null!=block&&block,font:null!=font?font:"base",italic:null!=italic&&italic,size:null!=size?size:300,strikethrough:null!=strikethrough&&strikethrough,truncate:null!=truncate&&truncate,underline:null!=underline&&underline,weight:null!=weight?weight:"regular",wrap:null==wrap||wrap,components:{root:"span"},root:(0,getNativeElementProps.n)(as,{ref,...props,as})}})(props,ref);return(state=>{const styles=useStyles();state.root.className=(0,mergeClasses_esm.z)(textClassNames_root,styles.root,!1===state.wrap&&styles.nowrap,state.truncate&&styles.truncate,state.block&&styles.block,state.italic&&styles.italic,state.underline&&styles.underline,state.strikethrough&&styles.strikethrough,state.underline&&state.strikethrough&&styles.strikethroughUnderline,100===state.size&&styles.base100,200===state.size&&styles.base200,400===state.size&&styles.base400,500===state.size&&styles.base500,600===state.size&&styles.base600,700===state.size&&styles.hero700,800===state.size&&styles.hero800,900===state.size&&styles.hero900,1e3===state.size&&styles.hero1000,"monospace"===state.font&&styles.monospace,"numeric"===state.font&&styles.numeric,"medium"===state.weight&&styles.weightMedium,"semibold"===state.weight&&styles.weightSemibold,"bold"===state.weight&&styles.weightBold,"center"===state.align&&styles.alignCenter,"end"===state.align&&styles.alignEnd,"justify"===state.align&&styles.alignJustify,state.root.className)})(state),(0,CustomStyleHooksContext.oj)("useTextStyles_unstable")(state),(state=>{const{slots,slotProps}=(0,getSlotsNext.D)(state);return(0,createElement.a)(slots.root,slotProps.root)})(state)}));Text.displayName="Text"},"./node_modules/@griffel/react/__styles.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>__styles});var _griffel_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@griffel/core/__styles.esm.js"),_RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/react/RendererContext.esm.js"),_TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@griffel/react/TextDirectionContext.esm.js");function __styles(classesMapBySlot,cssRules){const getStyles=(0,_griffel_core__WEBPACK_IMPORTED_MODULE_0__.s)(classesMapBySlot,cssRules);return function useClasses(){const dir=(0,_TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__.s)(),renderer=(0,_RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)();return getStyles({dir,renderer})}}},"./node_modules/@reach/visually-hidden/dist/reach-visually-hidden.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>VisuallyHidden});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),VisuallyHidden=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function VisuallyHidden2({as:Comp="span",style={},...props},ref){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp,{ref,style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal",...style},...props})}));VisuallyHidden.displayName="VisuallyHidden"},"./.storybook/decorators/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Centered});__webpack_require__("./node_modules/react/index.js");const useCenteredClasses=(0,__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js").Z)({root:{minHeight:"100vh",width:"100%",display:"grid",alignItems:"center",justifyItems:"center"}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Centered=({children})=>{const classes=useCenteredClasses();return(0,jsx_runtime.jsx)("div",{className:classes.root,children})};Centered.displayName="Centered";try{Centered.displayName="Centered",Centered.__docgenInfo={description:"",displayName:"Centered",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/decorators/centered.tsx#Centered"]={docgenInfo:Centered.__docgenInfo,name:"Centered",path:".storybook/decorators/centered.tsx#Centered"})}catch(__react_docgen_typescript_loader_error){}},"./components/command/lib/command/command.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Command});var mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),icon=__webpack_require__("./components/icon/lib/icon/icon.js"),use_copy_to_clipboard=__webpack_require__("./hooks/use-copy-to-clipboard/lib/use-copy-to-clipboard/use-copy-to-clipboard.js"),reach_visually_hidden=__webpack_require__("./node_modules/@reach/visually-hidden/dist/reach-visually-hidden.mjs"),react=__webpack_require__("./node_modules/react/index.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js");const useCommandStyles=(0,__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js").Z)({root:{paddingBottom:0,paddingTop:0,paddingLeft:tokens.T.spacingHorizontalXL,paddingRight:0,borderTopLeftRadius:tokens.T.borderRadiusMedium,borderTopRightRadius:tokens.T.borderRadiusMedium,borderBottomRightRadius:tokens.T.borderRadiusMedium,borderBottomLeftRadius:tokens.T.borderRadiusMedium,backgroundColor:tokens.T.colorNeutralBackground6,display:"grid",gridTemplateColumns:"auto 44px",columnGap:tokens.T.spacingHorizontalM,overflowX:"hidden",overflowY:"hidden"},command:{paddingTop:tokens.T.spacingVerticalM,paddingBottom:tokens.T.spacingVerticalM,fontSize:tokens.T.fontSizeBase300,fontWeight:tokens.T.fontWeightRegular,color:tokens.T.colorNeutralForeground2,lineHeight:tokens.T.lineHeightBase300},button:{borderTopStyle:"none",borderBottomStyle:"none",borderLeftStyle:"none",borderRightStyle:"none",height:"100%",cursor:"pointer",transitionProperty:"all",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase},idle:{backgroundColor:tokens.T.colorNeutralBackground4},complete:{backgroundColor:tokens.T.colorPaletteGreenBackground2,"& > svg":{color:tokens.T.colorPaletteGreenForeground2}}}),Command=({isCopyable,command,copyLabel="Copy command."})=>{const{copy,isCopied}=(0,use_copy_to_clipboard.m)(),classes=useCommandStyles(),buttonClasses=(0,mergeClasses_esm.z)(classes.button,isCopied?classes.complete:classes.idle);return react.createElement("div",{className:classes.root},react.createElement("span",{className:classes.command},command),isCopyable&&react.createElement("button",{onClick:()=>copy(command),className:buttonClasses},react.createElement(icon.J,{iconName:isCopied?"check":"copy",color:isCopied?"positive-inverse":"secondary"}),react.createElement(reach_visually_hidden.T,null,copyLabel)))};Command.__docgenInfo={description:"",methods:[],displayName:"Command",props:{copyLabel:{defaultValue:{value:"'Copy command.'",computed:!1},required:!1}}}},"./components/text/lib/text/text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@fluentui/react-text/lib/components/Text/Text.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_text_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/text/lib/text/text.styles.js");const Text=({children,color="primary",variant,className,weight,size,font,...props})=>{const classes=(0,_text_styles__WEBPACK_IMPORTED_MODULE_1__.Ke)();let variantClass="";weight&&size&&font||(variantClass=variant?classes[variant]:classes.paragraph);const rootClasses=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.z)(classes.root,classes[color],variantClass,className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__.x,{weight,size,font,className:rootClasses,...props},children)};Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./components/text/lib/text/text.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AD:()=>variantClasses,Ke:()=>useTextStyles,bG:()=>colorClasses});var _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./styles/utilities/lib/map-to-styles.js");const colorMap={accent:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground1,action:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,primary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground1,secondary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground2,tertiary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3,quaternary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground4,negative:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,positive:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteGreenForeground1,warning:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteMarigoldForeground1,danger:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,info:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,background:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground1},colorClasses=(0,_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__.f)(colorMap,(color=>({color}))),variantClasses={jumbo:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero1000,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero1000,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightBold},title:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero800,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero800,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},subtitle:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero700,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero700,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},headline:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},leading:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},paragraph:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},caption:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},description:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase200,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase200,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular}},useTextStyles=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.Z)({...colorClasses,...variantClasses,root:{..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.margin(0),..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.padding(0)},code:{display:"inline-block",fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyMonospace,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,backgroundColor:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground3,..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.borderRadius(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.borderRadiusSmall),paddingLeft:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS,paddingRight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS}})},"./hooks/use-copy-to-clipboard/lib/use-copy-to-clipboard/use-copy-to-clipboard.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>useCopyToClipboard});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const isBrowser="undefined"!=typeof window,useCopyToClipboard=options=>{const{resetTimeout=2500}=options??{},[isCopied,setIsCopied]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[error,setError]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[status,setStatus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("ready");(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if("ready"===status)return;const timeoutId=setTimeout((()=>{setIsCopied(!1),setError(void 0),setStatus("ready")}),resetTimeout);return()=>clearTimeout(timeoutId)}),[status,resetTimeout]);return{copy:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((text=>{let Clipboard;isBrowser&&(Clipboard=window.navigator.clipboard),Clipboard||(setError("Clipboard API is not supported."),setStatus("error")),Clipboard?.writeText(text).then((()=>{setIsCopied(!0),setStatus("success")})).catch((()=>{setError("Could not copy to clipboard."),setStatus("error")}))}),[]),isCopied,error,status}}},"./styles/theming/lib/use-theme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>useTheme});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_theme_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./styles/theming/lib/theme-context.js");const useTheme=()=>{const{theme,themeKey,setTheme}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_theme_context__WEBPACK_IMPORTED_MODULE_1__.N);return{theme,themeKey,setTheme}}},"./utilities/file-to-string/__dev__/file-to-string.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>file_to_string_stories});var makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),use_theme=__webpack_require__("./styles/theming/lib/use-theme.js"),react=__webpack_require__("./node_modules/react/index.js"),default_highlight=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),solarized_dark=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/solarized-dark.js"),solarized_light=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/solarized-light.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),themes_tokens=__webpack_require__("./styles/theming/lib/themes/tokens.js");const syntaxHighlighterCustomStyles={backgroundColor:tokens.T.colorNeutralBackground3,marginTop:0,marginBottom:0,boxSizing:"border-box",width:"100%",paddingTop:tokens.T.spacingVerticalL,paddingBottom:tokens.T.spacingVerticalL,paddingLeft:tokens.T.spacingVerticalXXL,paddingRight:tokens.T.spacingVerticalXXL,borderTopLeftRadius:themes_tokens.A.shape.borderRadius,borderTopRightRadius:themes_tokens.A.shape.borderRadius,borderBottomRightRadius:themes_tokens.A.shape.borderRadius,borderBottomLeftRadius:themes_tokens.A.shape.borderRadius},CodeSnippet=({language,code})=>{const{themeKey}=(0,use_theme.F)(),isDarkTheme="dark"===themeKey;return react.createElement(default_highlight.Z,{language,showLineNumbers:!0,style:isDarkTheme?solarized_dark.Z:solarized_light.Z,customStyle:syntaxHighlighterCustomStyles},code)};CodeSnippet.__docgenInfo={description:"",methods:[],displayName:"CodeSnippet"};var command=__webpack_require__("./components/command/lib/command/command.js"),text_text=__webpack_require__("./components/text/lib/text/text.js"),decorators=__webpack_require__("./.storybook/decorators/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,makeStyles_esm.Z)({root:{maxWidth:"860px",display:"grid",gridGap:"16px"}}),DemoComponent=()=>{const classes=useStyles();return(0,jsx_runtime.jsxs)("div",{className:classes.root,children:[(0,jsx_runtime.jsx)(text_text.x,{as:"h1",block:!0,variant:"title",children:"File To String"}),(0,jsx_runtime.jsx)(text_text.x,{as:"p",block:!0,variant:"leading",children:"File to string takes a path to a file and generates a new file that exports it as a string this utility is useful for documenting code examples that you might want to show the source code for there are options for output in java script and type script."}),(0,jsx_runtime.jsxs)(text_text.x,{as:"h2",block:!0,variant:"caption",children:["1. Create a script file, for example: ",(0,jsx_runtime.jsx)(text_text.x,{variant:"code",children:"scripts/examples-to-string.mjs"})]}),(0,jsx_runtime.jsx)(CodeSnippet,{language:"javascript",code:"import { fileToString } from '@microsoft/arbutus.file-to-string';\n\nconst config = {\n  files: ['./__dev__/example.js'],\n  outputDir: './__dev__/__raw__', // optional\n  extension: 'ts', // optional\n};\n\nfileToString({ config })\n  .then(() => console.log('Success!'))\n  .catch((err) => console.log(`Did not work out: ${err}`));\n"}),(0,jsx_runtime.jsx)(text_text.x,{as:"h2",block:!0,variant:"caption",children:"2. Add the script to your package.json."}),(0,jsx_runtime.jsx)(command.m,{isCopyable:!0,command:'"generate-example-files": "node scripts/examples-to-string.mjs"'})]})};DemoComponent.displayName="DemoComponent";const file_to_string_stories={title:"Utilities/File To String",decorators:[StoryFn=>(0,jsx_runtime.jsx)(decorators.z,{children:(0,jsx_runtime.jsx)(StoryFn,{})})]},Template=()=>(0,jsx_runtime.jsx)(DemoComponent,{});Template.displayName="Template";const Demo=Template.bind({}),__namedExportsOrder=["Demo"]}}]);
=======
/*! For license information please see file-to-string-__dev__-file-to-string-stories.a23dc8da.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [8316],
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
    './node_modules/@reach/visually-hidden/dist/reach-visually-hidden.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { T: () => VisuallyHidden });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        VisuallyHidden = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
          function VisuallyHidden2({ as: Comp = 'span', style = {}, ...props }, ref) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp, {
              ref,
              style: {
                border: 0,
                clip: 'rect(0 0 0 0)',
                height: '1px',
                margin: '-1px',
                overflow: 'hidden',
                padding: 0,
                position: 'absolute',
                width: '1px',
                whiteSpace: 'nowrap',
                wordWrap: 'normal',
                ...style,
              },
              ...props,
            });
          },
        );
      VisuallyHidden.displayName = 'VisuallyHidden';
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
    './components/command/lib/command/command.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { m: () => Command });
      var mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        ),
        icon = __webpack_require__('./components/icon/lib/icon/icon.js'),
        use_copy_to_clipboard = __webpack_require__(
          './hooks/use-copy-to-clipboard/lib/use-copy-to-clipboard/use-copy-to-clipboard.js',
        ),
        reach_visually_hidden = __webpack_require__(
          './node_modules/@reach/visually-hidden/dist/reach-visually-hidden.mjs',
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js');
      const useCommandStyles = (0,
        __webpack_require__('./node_modules/@griffel/react/makeStyles.esm.js').Z)({
          root: {
            paddingBottom: 0,
            paddingTop: 0,
            paddingLeft: tokens.T.spacingHorizontalXL,
            paddingRight: 0,
            borderTopLeftRadius: tokens.T.borderRadiusMedium,
            borderTopRightRadius: tokens.T.borderRadiusMedium,
            borderBottomRightRadius: tokens.T.borderRadiusMedium,
            borderBottomLeftRadius: tokens.T.borderRadiusMedium,
            backgroundColor: tokens.T.colorNeutralBackground6,
            display: 'grid',
            gridTemplateColumns: 'auto 44px',
            columnGap: tokens.T.spacingHorizontalM,
            overflowX: 'hidden',
            overflowY: 'hidden',
          },
          command: {
            paddingTop: tokens.T.spacingVerticalM,
            paddingBottom: tokens.T.spacingVerticalM,
            fontSize: tokens.T.fontSizeBase300,
            fontWeight: tokens.T.fontWeightRegular,
            color: tokens.T.colorNeutralForeground2,
            lineHeight: tokens.T.lineHeightBase300,
          },
          button: {
            borderTopStyle: 'none',
            borderBottomStyle: 'none',
            borderLeftStyle: 'none',
            borderRightStyle: 'none',
            height: '100%',
            cursor: 'pointer',
            transitionProperty: 'all',
            transitionDuration: tokens.T.durationNormal,
            transitionTimingFunction: tokens.T.curveEasyEase,
          },
          idle: { backgroundColor: tokens.T.colorNeutralBackground4 },
          complete: {
            backgroundColor: tokens.T.colorPaletteGreenBackground2,
            '& > svg': { color: tokens.T.colorPaletteGreenForeground2 },
          },
        }),
        Command = ({ isCopyable, command, copyLabel = 'Copy command.' }) => {
          const { copy, isCopied } = (0, use_copy_to_clipboard.m)(),
            classes = useCommandStyles(),
            buttonClasses = (0, mergeClasses_esm.z)(
              classes.button,
              isCopied ? classes.complete : classes.idle,
            );
          return react.createElement(
            'div',
            { className: classes.root },
            react.createElement('span', { className: classes.command }, command),
            isCopyable &&
              react.createElement(
                'button',
                { onClick: () => copy(command), className: buttonClasses },
                react.createElement(icon.J, {
                  iconName: isCopied ? 'check' : 'copy',
                  color: isCopied ? 'positive-inverse' : 'secondary',
                }),
                react.createElement(reach_visually_hidden.T, null, copyLabel),
              ),
          );
        };
      Command.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Command',
        props: {
          copyLabel: {
            defaultValue: { value: "'Copy command.'", computed: !1 },
            required: !1,
          },
        },
      };
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
    './utilities/file-to-string/__dev__/file-to-string.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Demo: () => Demo,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => file_to_string_stories,
        });
      var makeStyles_esm = __webpack_require__(
          './node_modules/@griffel/react/makeStyles.esm.js',
        ),
        use_theme = __webpack_require__('./styles/theming/lib/use-theme.js'),
        react = __webpack_require__('./node_modules/react/index.js'),
        default_highlight = __webpack_require__(
          './node_modules/react-syntax-highlighter/dist/esm/default-highlight.js',
        ),
        solarized_dark = __webpack_require__(
          './node_modules/react-syntax-highlighter/dist/esm/styles/hljs/solarized-dark.js',
        ),
        solarized_light = __webpack_require__(
          './node_modules/react-syntax-highlighter/dist/esm/styles/hljs/solarized-light.js',
        ),
        tokens = __webpack_require__('./node_modules/@fluentui/tokens/lib/tokens.js');
      const syntaxHighlighterCustomStyles = {
          backgroundColor: tokens.T.colorNeutralBackground3,
          marginTop: 0,
          marginBottom: 0,
          boxSizing: 'border-box',
          width: '100%',
          paddingTop: tokens.T.spacingVerticalL,
          paddingBottom: tokens.T.spacingVerticalL,
          paddingLeft: tokens.T.spacingVerticalXXL,
          paddingRight: tokens.T.spacingVerticalXXL,
          borderTopLeftRadius: 'var(--arbutus--shape-border-radius)',
          borderTopRightRadius: 'var(--arbutus--shape-border-radius)',
          borderBottomRightRadius: 'var(--arbutus--shape-border-radius)',
          borderBottomLeftRadius: 'var(--arbutus--shape-border-radius)',
        },
        CodeSnippet = ({ language, code }) => {
          const { themeKey } = (0, use_theme.F)(),
            isDarkTheme = 'dark' === themeKey;
          return react.createElement(
            default_highlight.Z,
            {
              language,
              showLineNumbers: !0,
              style: isDarkTheme ? solarized_dark.Z : solarized_light.Z,
              customStyle: syntaxHighlighterCustomStyles,
            },
            code,
          );
        };
      CodeSnippet.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'CodeSnippet',
      };
      var command = __webpack_require__('./components/command/lib/command/command.js'),
        text_text = __webpack_require__('./components/text/lib/text/text.js'),
        decorators = __webpack_require__('./.storybook/decorators/index.ts');
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      const useStyles = (0, makeStyles_esm.Z)({
          root: { maxWidth: '860px', display: 'grid', gridGap: '16px' },
        }),
        DemoComponent = () => {
          const classes = useStyles();
          return (0, jsx_runtime.jsxs)('div', {
            className: classes.root,
            children: [
              (0, jsx_runtime.jsx)(text_text.x, {
                as: 'h1',
                block: !0,
                variant: 'title',
                children: 'File To String',
              }),
              (0, jsx_runtime.jsx)(text_text.x, {
                as: 'p',
                block: !0,
                variant: 'leading',
                children:
                  'File to string takes a path to a file and generates a new file that exports it as a string this utility is useful for documenting code examples that you might want to show the source code for there are options for output in java script and type script.',
              }),
              (0, jsx_runtime.jsxs)(text_text.x, {
                as: 'h2',
                block: !0,
                variant: 'caption',
                children: [
                  '1. Create a script file, for example: ',
                  (0, jsx_runtime.jsx)(text_text.x, {
                    variant: 'code',
                    children: 'scripts/examples-to-string.mjs',
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)(CodeSnippet, {
                language: 'javascript',
                code: "import { fileToString } from '@microsoft/arbutus.file-to-string';\n\nconst config = {\n  files: ['./__dev__/example.js'],\n  outputDir: './__dev__/__raw__', // optional\n  extension: 'ts', // optional\n};\n\nfileToString({ config })\n  .then(() => console.log('Success!'))\n  .catch((err) => console.log(`Did not work out: ${err}`));\n",
              }),
              (0, jsx_runtime.jsx)(text_text.x, {
                as: 'h2',
                block: !0,
                variant: 'caption',
                children: '2. Add the script to your package.json.',
              }),
              (0, jsx_runtime.jsx)(command.m, {
                isCopyable: !0,
                command:
                  '"generate-example-files": "node scripts/examples-to-string.mjs"',
              }),
            ],
          });
        };
      DemoComponent.displayName = 'DemoComponent';
      const file_to_string_stories = {
          title: 'Utilities/File To String',
          decorators: [
            (StoryFn) =>
              (0, jsx_runtime.jsx)(decorators.z, {
                children: (0, jsx_runtime.jsx)(StoryFn, {}),
              }),
          ],
        },
        Template = () => (0, jsx_runtime.jsx)(DemoComponent, {});
      Template.displayName = 'Template';
      const Demo = Template.bind({}),
        __namedExportsOrder = ['Demo'];
    },
  },
]);
>>>>>>> 0a42c43 (Runs lint):docs/file-to-string-__dev__-file-to-string-stories.a23dc8da.iframe.bundle.js

"use strict";(self.webpackChunkarbutus=self.webpackChunkarbutus||[]).push([[5839],{"./node_modules/@fluentui/react-text/lib/components/Text/Text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var react=__webpack_require__("./node_modules/react/index.js"),getNativeElementProps=__webpack_require__("./node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js");var getSlots=__webpack_require__("./node_modules/@fluentui/react-utilities/lib/compose/getSlots.js");var _styles_esm=__webpack_require__("./node_modules/@griffel/react/__styles.esm.js"),mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js");const textClassNames_root="fui-Text",useStyles=(0,_styles_esm.s)({root:{Bahqtrf:"fk6fouc",Be2twd7:"fkhj508",Bg96gwp:"f1i3iumi",Bhrd7zp:"figsok6",fsow6f:"fpgzoln",mc9l5x:"f1w7gpdv",Huce71:"f6juhto",B68tc82:"f1mtd64y",Bmxbyg5:"f1y7q3j9",ygn44y:"f2jf649"},nowrap:{Huce71:"fz5stix",B68tc82:"f1p9o1ba",Bmxbyg5:"f1sil6mw"},truncate:{ygn44y:"f1cmbuwj"},block:{mc9l5x:"ftgm304"},italic:{B80ckks:"f1j4dglz"},underline:{w71qe1:"f13mvf36"},strikethrough:{w71qe1:"fv5q2k7"},strikethroughUnderline:{w71qe1:"f1drk4o6"},base100:{Be2twd7:"f13mqy1h",Bg96gwp:"fcpl73t"},base200:{Be2twd7:"fy9rknc",Bg96gwp:"fwrc4pm"},base400:{Be2twd7:"fod5ikn",Bg96gwp:"faaz57k"},base500:{Be2twd7:"f1pp30po",Bg96gwp:"f106mvju"},base600:{Be2twd7:"f1x0m3f5",Bg96gwp:"fb86gi6"},hero700:{Be2twd7:"fojgt09",Bg96gwp:"fcen8rp"},hero800:{Be2twd7:"fccw675",Bg96gwp:"f1ebx5kk"},hero900:{Be2twd7:"f15afnhw",Bg96gwp:"fr3w3wp"},hero1000:{Be2twd7:"fpyltcb",Bg96gwp:"f1ivgwrt"},monospace:{Bahqtrf:"f1fedwem"},numeric:{Bahqtrf:"f1uq0ln5"},weightMedium:{Bhrd7zp:"fdj6btp"},weightSemibold:{Bhrd7zp:"fl43uef"},weightBold:{Bhrd7zp:"flh3ekv"},alignCenter:{fsow6f:"f17mccla"},alignEnd:{fsow6f:"f12ymhq5"},alignJustify:{fsow6f:"f1j59e10"}},{d:[".fk6fouc{font-family:var(--fontFamilyBase);}",".fkhj508{font-size:var(--fontSizeBase300);}",".f1i3iumi{line-height:var(--lineHeightBase300);}",".figsok6{font-weight:var(--fontWeightRegular);}",".fpgzoln{text-align:start;}",".f1w7gpdv{display:inline;}",".f6juhto{white-space:normal;}",".f1mtd64y{overflow-x:visible;}",".f1y7q3j9{overflow-y:visible;}",".f2jf649{text-overflow:clip;}",".fz5stix{white-space:nowrap;}",".f1p9o1ba{overflow-x:hidden;}",".f1sil6mw{overflow-y:hidden;}",".f1cmbuwj{text-overflow:ellipsis;}",".ftgm304{display:block;}",".f1j4dglz{font-style:italic;}",".f13mvf36{text-decoration-line:underline;}",".fv5q2k7{text-decoration-line:line-through;}",".f1drk4o6{text-decoration-line:line-through underline;}",".f13mqy1h{font-size:var(--fontSizeBase100);}",".fcpl73t{line-height:var(--lineHeightBase100);}",".fy9rknc{font-size:var(--fontSizeBase200);}",".fwrc4pm{line-height:var(--lineHeightBase200);}",".fod5ikn{font-size:var(--fontSizeBase400);}",".faaz57k{line-height:var(--lineHeightBase400);}",".f1pp30po{font-size:var(--fontSizeBase500);}",".f106mvju{line-height:var(--lineHeightBase500);}",".f1x0m3f5{font-size:var(--fontSizeBase600);}",".fb86gi6{line-height:var(--lineHeightBase600);}",".fojgt09{font-size:var(--fontSizeHero700);}",".fcen8rp{line-height:var(--lineHeightHero700);}",".fccw675{font-size:var(--fontSizeHero800);}",".f1ebx5kk{line-height:var(--lineHeightHero800);}",".f15afnhw{font-size:var(--fontSizeHero900);}",".fr3w3wp{line-height:var(--lineHeightHero900);}",".fpyltcb{font-size:var(--fontSizeHero1000);}",".f1ivgwrt{line-height:var(--lineHeightHero1000);}",".f1fedwem{font-family:var(--fontFamilyMonospace);}",".f1uq0ln5{font-family:var(--fontFamilyNumeric);}",".fdj6btp{font-weight:var(--fontWeightMedium);}",".fl43uef{font-weight:var(--fontWeightSemibold);}",".flh3ekv{font-weight:var(--fontWeightBold);}",".f17mccla{text-align:center;}",".f12ymhq5{text-align:end;}",".f1j59e10{text-align:justify;}"]}),Text=react.forwardRef(((props,ref)=>{const state=((props,ref)=>{var _a;const{wrap,truncate,block,italic,underline,strikethrough,size,font,weight,align}=props,as=null!==(_a=props.as)&&void 0!==_a?_a:"span";return{align:null!=align?align:"start",block:null!=block&&block,font:null!=font?font:"base",italic:null!=italic&&italic,size:null!=size?size:300,strikethrough:null!=strikethrough&&strikethrough,truncate:null!=truncate&&truncate,underline:null!=underline&&underline,weight:null!=weight?weight:"regular",wrap:null==wrap||wrap,components:{root:"span"},root:(0,getNativeElementProps.n)(as,{ref,...props,as})}})(props,ref);return(state=>{const styles=useStyles();state.root.className=(0,mergeClasses_esm.z)(textClassNames_root,styles.root,!1===state.wrap&&styles.nowrap,state.truncate&&styles.truncate,state.block&&styles.block,state.italic&&styles.italic,state.underline&&styles.underline,state.strikethrough&&styles.strikethrough,state.underline&&state.strikethrough&&styles.strikethroughUnderline,100===state.size&&styles.base100,200===state.size&&styles.base200,400===state.size&&styles.base400,500===state.size&&styles.base500,600===state.size&&styles.base600,700===state.size&&styles.hero700,800===state.size&&styles.hero800,900===state.size&&styles.hero900,1e3===state.size&&styles.hero1000,"monospace"===state.font&&styles.monospace,"numeric"===state.font&&styles.numeric,"medium"===state.weight&&styles.weightMedium,"semibold"===state.weight&&styles.weightSemibold,"bold"===state.weight&&styles.weightBold,"center"===state.align&&styles.alignCenter,"end"===state.align&&styles.alignEnd,"justify"===state.align&&styles.alignJustify,state.root.className)})(state),(state=>{const{slots,slotProps}=(0,getSlots.F)(state);return react.createElement(slots.root,{...slotProps.root})})(state)}));Text.displayName="Text"},"./node_modules/@griffel/react/__styles.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>__styles});var _griffel_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@griffel/core/__styles.esm.js"),_RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/react/RendererContext.esm.js"),_TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@griffel/react/TextDirectionContext.esm.js");function __styles(classesMapBySlot,cssRules){const getStyles=(0,_griffel_core__WEBPACK_IMPORTED_MODULE_0__.s)(classesMapBySlot,cssRules);return function useClasses(){const dir=(0,_TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__.s)(),renderer=(0,_RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)();return getStyles({dir,renderer})}}},"./.storybook/decorators/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Centered});__webpack_require__("./node_modules/react/index.js");const useCenteredClasses=(0,__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js").Z)({root:{minHeight:"100vh",width:"100%",display:"grid",alignItems:"center",justifyItems:"center"}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Centered=({children})=>{const classes=useCenteredClasses();return(0,jsx_runtime.jsx)("div",{className:classes.root,children})};Centered.displayName="Centered";try{Centered.displayName="Centered",Centered.__docgenInfo={description:"",displayName:"Centered",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/decorators/centered.tsx#Centered"]={docgenInfo:Centered.__docgenInfo,name:"Centered",path:".storybook/decorators/centered.tsx#Centered"})}catch(__react_docgen_typescript_loader_error){}},"./components/divider/lib/divider/divider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Divider});var mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js");const useDividerStyles=(0,__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js").Z)({root:{width:"100%",height:"0.0625rem",position:"relative",borderTopStyle:"none",borderRightStyle:"none",borderBottomStyle:"none",borderLeftStyle:"none",backgroundColor:tokens.T.colorNeutralStroke1,marginBottom:0,marginTop:0}}),Divider=({className})=>{const classes=useDividerStyles(),rootClasses=(0,mergeClasses_esm.z)(classes.root,className);return react.createElement("hr",{className:rootClasses})};Divider.__docgenInfo={description:"",methods:[],displayName:"Divider"}},"./components/text/__dev__/text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Code:()=>Code,Simple:()=>Simple,StylesDemo:()=>StylesDemo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>text_stories});var makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),index_esm=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),divider=__webpack_require__("./components/divider/lib/divider/divider.js"),use_space_styles=__webpack_require__("./hooks/use-space-styles/lib/use-space-styles.js"),decorators=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./.storybook/decorators/index.ts")),Text=__webpack_require__("./node_modules/@fluentui/react-text/lib/components/Text/Text.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),map_to_styles=__webpack_require__("./styles/utilities/lib/map-to-styles.js");const colorMap={accent:tokens.T.colorBrandForeground1,action:tokens.T.colorBrandForeground2,primary:tokens.T.colorNeutralForeground1,secondary:tokens.T.colorNeutralForeground2,tertiary:tokens.T.colorNeutralForeground3,quaternary:tokens.T.colorNeutralForeground4,negative:tokens.T.colorPaletteDarkOrangeForeground1,positive:tokens.T.colorPaletteGreenForeground1,warning:tokens.T.colorPaletteMarigoldForeground1,danger:tokens.T.colorPaletteDarkOrangeForeground1,info:tokens.T.colorBrandForeground2,background:tokens.T.colorNeutralBackground1},colorClasses=(0,map_to_styles.f)(colorMap,(color=>({color}))),variantClasses={jumbo:{fontFamily:tokens.T.fontFamilyBase,fontSize:tokens.T.fontSizeHero1000,lineHeight:tokens.T.lineHeightHero1000,fontWeight:tokens.T.fontWeightBold},title:{fontFamily:tokens.T.fontFamilyBase,fontSize:tokens.T.fontSizeHero800,lineHeight:tokens.T.lineHeightHero800,fontWeight:tokens.T.fontWeightSemibold},subtitle:{fontFamily:tokens.T.fontFamilyBase,fontSize:tokens.T.fontSizeHero700,lineHeight:tokens.T.lineHeightHero700,fontWeight:tokens.T.fontWeightSemibold},headline:{fontFamily:tokens.T.fontFamilyBase,fontSize:tokens.T.fontSizeBase500,lineHeight:tokens.T.lineHeightBase500,fontWeight:tokens.T.fontWeightSemibold},leading:{fontFamily:tokens.T.fontFamilyBase,fontSize:tokens.T.fontSizeBase500,lineHeight:tokens.T.lineHeightBase500,fontWeight:tokens.T.fontWeightRegular},paragraph:{fontFamily:tokens.T.fontFamilyBase,fontSize:tokens.T.fontSizeBase300,lineHeight:tokens.T.lineHeightBase300,fontWeight:tokens.T.fontWeightRegular},caption:{fontFamily:tokens.T.fontFamilyBase,fontSize:tokens.T.fontSizeBase300,lineHeight:tokens.T.lineHeightBase300,fontWeight:tokens.T.fontWeightSemibold},description:{fontFamily:tokens.T.fontFamilyBase,fontSize:tokens.T.fontSizeBase200,lineHeight:tokens.T.lineHeightBase200,fontWeight:tokens.T.fontWeightRegular}},useTextStyles=(0,makeStyles_esm.Z)({...colorClasses,...variantClasses,root:{...index_esm.q5.margin(0),...index_esm.q5.padding(0)},code:{display:"inline-block",fontFamily:tokens.T.fontFamilyMonospace,fontSize:tokens.T.fontSizeBase300,lineHeight:tokens.T.lineHeightBase300,backgroundColor:tokens.T.colorNeutralBackground3,...index_esm.q5.borderRadius(tokens.T.borderRadiusSmall),paddingLeft:tokens.T.spacingHorizontalXS,paddingRight:tokens.T.spacingHorizontalXS}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const text_Text=({children,color="primary",variant,className,weight,size,font,...props})=>{const classes=useTextStyles();let variantClass="";weight&&size&&font||(variantClass=variant?classes[variant]:classes.paragraph);const rootClasses=(0,mergeClasses_esm.z)(classes.root,classes[color],variantClass,className);return(0,jsx_runtime.jsx)(Text.x,{weight,size,font,className:rootClasses,...props,children})};text_Text.displayName="Text";try{text_Text.displayName="Text",text_Text.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"Consumer provided class.",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"Selection of text styles.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"caption"'},{value:'"code"'},{value:'"title"'},{value:'"jumbo"'},{value:'"headline"'},{value:'"subtitle"'},{value:'"leading"'},{value:'"paragraph"'},{value:'"description"'}]}},color:{defaultValue:{value:"primary"},description:"Selection of color options.",name:"color",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"quaternary"'},{value:'"negative"'},{value:'"positive"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"action"'},{value:'"background"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"p"'},{value:'"pre"'},{value:'"span"'}]}},align:{defaultValue:{value:"start"},description:"Aligns text based on the parent container.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"justify"'}]}},block:{defaultValue:{value:"false"},description:"Applies a block display for the content.",name:"block",required:!1,type:{name:"boolean"}},font:{defaultValue:{value:"base"},description:"Applies the font family to the content.",name:"font",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"numeric"'},{value:'"monospace"'}]}},italic:{defaultValue:{value:"false"},description:"Applies the italic font style to the content.",name:"italic",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"300"},description:"Applies font size and line height based on the theme tokens.",name:"size",required:!1,type:{name:"enum",value:[{value:"100"},{value:"200"},{value:"300"},{value:"400"},{value:"500"},{value:"600"},{value:"700"},{value:"800"},{value:"900"},{value:"1000"}]}},strikethrough:{defaultValue:{value:"false"},description:"Applies the strikethrough text decoration to the content.",name:"strikethrough",required:!1,type:{name:"boolean"}},truncate:{defaultValue:{value:"false"},description:"Truncate overflowing text for block displays.",name:"truncate",required:!1,type:{name:"boolean"}},underline:{defaultValue:{value:"false"},description:"Applies the underline text decoration to the content.",name:"underline",required:!1,type:{name:"boolean"}},weight:{defaultValue:{value:"regular"},description:"Applies font weight to the content.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"regular"'},{value:'"semibold"'},{value:'"bold"'}]}},wrap:{defaultValue:{value:"true"},description:"Wraps the text content on white spaces.",name:"wrap",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/text/src/text/text.tsx#Text"]={docgenInfo:text_Text.__docgenInfo,name:"Text",path:"components/text/src/text/text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}const text_stories={title:"Atoms/Text",component:text_Text,argTypes:{variant:{options:[...Object.keys(variantClasses),"code"],control:{type:"select"}},color:{options:Object.keys(colorClasses),control:{type:"select"}}},decorators:[Story=>(0,jsx_runtime.jsx)(decorators.z,{children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Story,{})})})]},Template=args=>(0,jsx_runtime.jsx)(text_Text,{block:!0,...args,children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit iusto."});Template.displayName="Template";const CodeTemplate=args=>(0,jsx_runtime.jsx)(text_Text,{block:!0,...args,children:'<Text variant="code">Hello!</Text>'});CodeTemplate.displayName="CodeTemplate";const Simple=Template.bind({});Simple.args={color:"primary",variant:"paragraph"};const Code=CodeTemplate.bind({});Code.args={variant:"code"};const useGridStyles=(0,makeStyles_esm.Z)({root:{maxWidth:"60rem"},article:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",columnGap:"1rem"},image:{...index_esm.q5.borderRadius("var(--arbutus--shape-border-radius)"),width:"100%"}}),TemplateDemo=()=>{const space=(0,use_space_styles.z)(),grid=useGridStyles(),imageClasses=(0,mergeClasses_esm.z)(grid.image,space.mb4);return(0,jsx_runtime.jsxs)("main",{className:(0,mergeClasses_esm.z)(space.pb12,grid.root),children:[(0,jsx_runtime.jsx)(text_Text,{block:!0,as:"h1",variant:"title",className:space.my4,children:"Title"}),(0,jsx_runtime.jsx)(text_Text,{block:!0,variant:"leading",children:"Leading Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit iusto."}),(0,jsx_runtime.jsx)(divider.i,{className:space.my8}),(0,jsx_runtime.jsx)(text_Text,{block:!0,as:"h2",variant:"subtitle",className:space.mb2,children:"Subheading"}),(0,jsx_runtime.jsx)(text_Text,{block:!0,variant:"leading",children:"Leading Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit iusto."}),(0,jsx_runtime.jsx)(divider.i,{className:space.my8}),(0,jsx_runtime.jsx)(text_Text,{block:!0,as:"h1",variant:"headline",className:space.my4,children:"Headline"}),(0,jsx_runtime.jsx)(text_Text,{block:!0,variant:"paragraph",className:space.mb8,children:"Paragraph Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit iusto."}),(0,jsx_runtime.jsxs)("div",{className:grid.article,children:[(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)("img",{src:"https://via.placeholder.com/300x100.png/f0f0f0",alt:"Text demo 1",className:imageClasses}),(0,jsx_runtime.jsx)(text_Text,{block:!0,as:"h2",variant:"caption",className:space.mb1,color:"positive",children:"Caption: What do you see?"}),(0,jsx_runtime.jsx)(text_Text,{block:!0,variant:"description",color:"tertiary",children:"Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit iusto."})]}),(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)("img",{src:"https://via.placeholder.com/300x100.png/f0f0f0",alt:"Text demo 1",className:imageClasses}),(0,jsx_runtime.jsx)(text_Text,{block:!0,as:"h2",variant:"caption",className:space.mb1,color:"negative",children:"Caption: What do you see?"}),(0,jsx_runtime.jsx)(text_Text,{block:!0,variant:"description",color:"tertiary",children:"Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit iusto."})]})]}),(0,jsx_runtime.jsx)(divider.i,{className:space.my12}),(0,jsx_runtime.jsxs)("div",{className:grid.article,children:[(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)(text_Text,{block:!0,as:"h4",variant:"jumbo",color:"quaternary",className:space.my6,children:"Jumbo Text"}),(0,jsx_runtime.jsx)(text_Text,{block:!0,variant:"description",color:"secondary",children:"Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit iusto."})]}),(0,jsx_runtime.jsx)("img",{src:"https://via.placeholder.com/300x200.png/f0f0f0",alt:"Text demo 2",className:grid.image})]})]})};TemplateDemo.displayName="TemplateDemo";const StylesDemo=TemplateDemo.bind({}),__namedExportsOrder=["Simple","Code","StylesDemo"]},"./hooks/use-space-styles/lib/use-space-styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useSpaceStyles});var makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js");const spaceScale={1:tokens.T.spacingHorizontalXXS,2:tokens.T.spacingHorizontalXS,3:tokens.T.spacingHorizontalSNudge,4:tokens.T.spacingHorizontalS,5:tokens.T.spacingHorizontalMNudge,6:tokens.T.spacingHorizontalM,7:tokens.T.spacingHorizontalL,8:tokens.T.spacingHorizontalXL,9:tokens.T.spacingHorizontalXXL,10:tokens.T.spacingHorizontalXXXL,11:"40px",12:"52px"},spaceEntries=Object.entries(spaceScale),margin=spaceEntries.reduce(((acc,[key,value])=>(acc[`m${key}`]={marginTop:value,marginBottom:value,marginLeft:value,marginRight:value},acc)),{}),marginY=spaceEntries.reduce(((acc,[key,value])=>(acc[`my${key}`]={marginTop:value,marginBottom:value},acc)),{}),marginX=spaceEntries.reduce(((acc,[key,value])=>(acc[`mx${key}`]={marginLeft:value,marginRight:value},acc)),{}),marginTop=spaceEntries.reduce(((acc,[key,value])=>(acc[`mt${key}`]={marginTop:value},acc)),{}),marginBottom=spaceEntries.reduce(((acc,[key,value])=>(acc[`mb${key}`]={marginBottom:value},acc)),{}),marginLeft=spaceEntries.reduce(((acc,[key,value])=>(acc[`ml${key}`]={marginLeft:value},acc)),{}),marginRight=spaceEntries.reduce(((acc,[key,value])=>(acc[`mr${key}`]={marginRight:value},acc)),{}),padding=spaceEntries.reduce(((acc,[key,value])=>(acc[`p${key}`]={paddingTop:value,paddingBottom:value,paddingLeft:value,paddingRight:value},acc)),{}),paddingY=spaceEntries.reduce(((acc,[key,value])=>(acc[`py${key}`]={paddingTop:value,paddingBottom:value},acc)),{}),paddingX=spaceEntries.reduce(((acc,[key,value])=>(acc[`px${key}`]={paddingLeft:value,paddingRight:value},acc)),{}),paddingTop=spaceEntries.reduce(((acc,[key,value])=>(acc[`pt${key}`]={paddingTop:value},acc)),{}),paddingBottom=spaceEntries.reduce(((acc,[key,value])=>(acc[`pb${key}`]={paddingBottom:value},acc)),{}),paddingLeft=spaceEntries.reduce(((acc,[key,value])=>(acc[`pl${key}`]={paddingLeft:value},acc)),{}),paddingRight=spaceEntries.reduce(((acc,[key,value])=>(acc[`pr${key}`]={paddingRight:value},acc)),{}),useSpaceStyles=(0,makeStyles_esm.Z)({...margin,...marginY,...marginX,...marginTop,...marginBottom,...marginLeft,...marginRight,...padding,...paddingBottom,...paddingLeft,...paddingRight,...paddingTop,...paddingX,...paddingY})},"./styles/utilities/lib/map-to-styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function mapToStyles(map,styleFunction){return Object.entries(map).reduce(((acc,[key,value])=>(acc[key]=styleFunction(value),acc)),{})}__webpack_require__.d(__webpack_exports__,{f:()=>mapToStyles})}}]);
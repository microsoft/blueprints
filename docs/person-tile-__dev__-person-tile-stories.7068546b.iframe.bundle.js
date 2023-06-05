"use strict";(self.webpackChunkarbutus=self.webpackChunkarbutus||[]).push([[4669],{"./components/person-tile/__dev__/person-tile.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Simple:()=>Simple,WithCustomIcon:()=>WithCustomIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>person_tile_stories});__webpack_require__("./node_modules/react/index.js");var Avatar=__webpack_require__("./node_modules/@fluentui/react-avatar/lib/components/Avatar/Avatar.js"),mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),icon=__webpack_require__("./components/icon/lib/icon/icon.js"),text_text=__webpack_require__("./components/text/lib/text/text.js"),tile=__webpack_require__("./components/tile/lib/tile.js"),use_space_styles=__webpack_require__("./hooks/use-space-styles/lib/use-space-styles.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js");const usePersonTileStyles=(0,__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js").Z)({root:{display:"grid",gridTemplateColumns:"40px auto min-content",columnGap:tokens.T.spacingHorizontalXL,alignItems:"center"},image:{height:tokens.T.spacingVerticalXL}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PersonTile=({className,avatarSrc,firstName,lastName,onClick,role,iconSrc,iconAlt})=>{const classes=usePersonTileStyles(),space=(0,use_space_styles.z)();return(0,jsx_runtime.jsxs)(tile.n,{onClick,variant:"card",className:(0,mergeClasses_esm.z)(classes.root,space.p7,className),children:[(0,jsx_runtime.jsx)(Avatar.q,{size:40,image:{as:"img",src:avatarSrc,"aria-hidden":!0}}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)(text_text.x,{variant:"caption",block:!0,children:[firstName," ",lastName]}),(0,jsx_runtime.jsx)(text_text.x,{variant:"paragraph",color:"secondary",block:!0,children:role})]}),iconSrc&&iconAlt?(0,jsx_runtime.jsx)("img",{src:iconSrc,alt:iconAlt,className:(0,mergeClasses_esm.z)(classes.image,space.px3)}):(0,jsx_runtime.jsx)(icon.J,{iconName:"open",label:iconAlt,className:space.px3,color:"secondary"})]})};PersonTile.displayName="PersonTile";try{PersonTile.displayName="PersonTile",PersonTile.__docgenInfo={description:"",displayName:"PersonTile",props:{className:{defaultValue:null,description:"Consumer provided class.",name:"className",required:!1,type:{name:"string"}},firstName:{defaultValue:null,description:"First name of the person.",name:"firstName",required:!0,type:{name:"string"}},lastName:{defaultValue:null,description:"Last name of the person.",name:"lastName",required:!0,type:{name:"string"}},avatarSrc:{defaultValue:null,description:"Avatar of the person.",name:"avatarSrc",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"Role of the person.",name:"role",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Action that handles click on the person tile.",name:"onClick",required:!0,type:{name:"(e?: SyntheticEvent<Element, Event>) => void"}},image:{defaultValue:null,description:"The Avatar's image.\n\nUsage e.g.: `image={{ src: '...' }}`",name:"image",required:!1,type:{name:'{ as?: "img"; } & Omit<Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> & { ...; }, "children"> & { ...; }'}},iconSrc:{defaultValue:null,description:"Custom optional icon.",name:"iconSrc",required:!1,type:{name:"string"}},iconAlt:{defaultValue:null,description:"Accessible icon description.",name:"iconAlt",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/person-tile/src/person-tile/person-tile.tsx#PersonTile"]={docgenInfo:PersonTile.__docgenInfo,name:"PersonTile",path:"components/person-tile/src/person-tile/person-tile.tsx#PersonTile"})}catch(__react_docgen_typescript_loader_error){}const avatar_namespaceObject=__webpack_require__.p+"static/media/avatar.3e128d47.jpg",teams_icon_namespaceObject=__webpack_require__.p+"static/media/teams-icon.22fada98.svg",person_tile_stories={title:"Tiles/PersonTile",component:PersonTile,argTypes:{onClick:{action:"clicked"}}},Template=args=>(0,jsx_runtime.jsx)(PersonTile,{...args});Template.displayName="Template";const Simple=Template.bind({});Simple.args={firstName:"Joanne",lastName:"Doe",role:"Software Engineer",avatarSrc:avatar_namespaceObject};const WithCustomIcon=Template.bind({});WithCustomIcon.args={firstName:"Joanne",lastName:"Doe",role:"Software Engineer",avatarSrc:avatar_namespaceObject,iconSrc:teams_icon_namespaceObject,iconAlt:"Open in Teams"};const __namedExportsOrder=["Simple","WithCustomIcon"]},"./components/text/lib/text/text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@fluentui/react-text/lib/components/Text/Text.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_text_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/text/lib/text/text.styles.js");const Text=({children,color="primary",variant,className,weight,size,font,...props})=>{const classes=(0,_text_styles__WEBPACK_IMPORTED_MODULE_1__.Ke)();let variantClass="";weight&&size&&font||(variantClass=variant?classes[variant]:classes.paragraph);const rootClasses=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.z)(classes.root,classes[color],variantClass,className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_text__WEBPACK_IMPORTED_MODULE_3__.x,{weight,size,font,className:rootClasses,...props},children)};Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./components/text/lib/text/text.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AD:()=>variantClasses,Ke:()=>useTextStyles,bG:()=>colorClasses});var _fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),_griffel_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./styles/utilities/lib/map-to-styles.js");const colorMap={accent:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground1,action:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,primary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground1,secondary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground2,tertiary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground3,quaternary:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralForeground4,negative:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,positive:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteGreenForeground1,warning:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteMarigoldForeground1,danger:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorPaletteDarkOrangeForeground1,info:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorBrandForeground2,background:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground1},colorClasses=(0,_microsoft_arbutus_style_utilities__WEBPACK_IMPORTED_MODULE_1__.f)(colorMap,(color=>({color}))),variantClasses={jumbo:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero1000,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero1000,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightBold},title:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero800,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero800,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},subtitle:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeHero700,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightHero700,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},headline:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},leading:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase500,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase500,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},paragraph:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular},caption:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightSemibold},description:{fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyBase,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase200,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase200,fontWeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontWeightRegular}},useTextStyles=(0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.Z)({...colorClasses,...variantClasses,root:{..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.margin(0),..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.padding(0)},code:{display:"inline-block",fontFamily:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontFamilyMonospace,fontSize:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.fontSizeBase300,lineHeight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.lineHeightBase300,backgroundColor:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.colorNeutralBackground3,..._griffel_react__WEBPACK_IMPORTED_MODULE_3__.q5.borderRadius(_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.borderRadiusSmall),paddingLeft:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS,paddingRight:_fluentui_react_theme__WEBPACK_IMPORTED_MODULE_0__.T.spacingHorizontalXS}})},"./components/tile/lib/tile.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>Tile});var mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),index_esm=__webpack_require__("./node_modules/@griffel/core/index.esm.js"),map_to_styles=__webpack_require__("./styles/utilities/lib/map-to-styles.js");const colorMap={none:"transparent",primary:tokens.T.colorNeutralBackground1,secondary:tokens.T.colorNeutralBackground2,tertiary:tokens.T.colorNeutralBackground3,quaternary:tokens.T.colorNeutralBackground4,tile:tokens.T.colorNeutralBackground6,negative:tokens.T.colorPaletteDarkOrangeBackground1,positive:tokens.T.colorPaletteGreenBackground1,warning:tokens.T.colorPaletteMarigoldBackground1,danger:tokens.T.colorPaletteDarkOrangeBackground1,info:tokens.T.colorNeutralBackground2,accent:tokens.T.colorBrandBackground2},colorClasses=(0,map_to_styles.f)(colorMap,(color=>({backgroundColor:color}))),useTileStyles=(0,makeStyles_esm.Z)({root:{marginTop:0,marginBottom:0,marginLeft:0,marginRight:0},interactive:{...index_esm.q5.borderStyle("none"),...index_esm.q5.borderColor("transparent"),cursor:"pointer",transitionProperty:"all",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase,":focus":{outlineColor:tokens.T.colorBrandForeground2}},card:{backgroundColor:tokens.T.colorNeutralBackground1,...index_esm.q5.borderRadius(tokens.T.borderRadiusLarge),boxShadow:tokens.T.shadow4},interactiveCard:{":hover":{boxShadow:tokens.T.shadow16}},image:{backgroundColor:tokens.T.colorNeutralBackground6,...index_esm.q5.borderRadius("var(--arbutus--shape-border-radius)"),backgroundSize:"cover",backgroundPositionX:"center",backgroundPositionY:"center"},solidColor:{...index_esm.q5.borderRadius("var(--arbutus--shape-border-radius)")},...colorClasses}),isImage=({variant})=>"image"===variant,Tile=({children,variant,as:Root="div",backgroundColor="tile",imageSrc,className,onClick})=>{const classes=useTileStyles();let variantClasses="";switch(!0){case(({variant})=>"card"===variant)({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.card,onClick&&classes.interactive,onClick&&classes.interactiveCard,className);break;case isImage({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.image,onClick&&classes.interactive,className);break;case(({variant})=>"solid-color"===variant)({variant}):variantClasses=(0,mergeClasses_esm.z)(classes.root,classes.solidColor,onClick&&classes.interactive,classes[backgroundColor],className);break;default:variantClasses=(0,mergeClasses_esm.z)(classes.root,className)}const imageBackground=isImage({variant})?{style:{backgroundImage:`url("${imageSrc??""}")`}}:{};return react.createElement(Root,{className:variantClasses,...imageBackground,onClick},children)};Tile.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1},backgroundColor:{defaultValue:{value:"'tile'",computed:!1},required:!1}}}},"./hooks/use-space-styles/lib/use-space-styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useSpaceStyles});var makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js");const spaceScale={1:tokens.T.spacingHorizontalXXS,2:tokens.T.spacingHorizontalXS,3:tokens.T.spacingHorizontalSNudge,4:tokens.T.spacingHorizontalS,5:tokens.T.spacingHorizontalMNudge,6:tokens.T.spacingHorizontalM,7:tokens.T.spacingHorizontalL,8:tokens.T.spacingHorizontalXL,9:tokens.T.spacingHorizontalXXL,10:tokens.T.spacingHorizontalXXXL,11:"40px",12:"52px"},spaceEntries=Object.entries(spaceScale),margin=spaceEntries.reduce(((acc,[key,value])=>(acc[`m${key}`]={marginTop:value,marginBottom:value,marginLeft:value,marginRight:value},acc)),{}),marginY=spaceEntries.reduce(((acc,[key,value])=>(acc[`my${key}`]={marginTop:value,marginBottom:value},acc)),{}),marginX=spaceEntries.reduce(((acc,[key,value])=>(acc[`mx${key}`]={marginLeft:value,marginRight:value},acc)),{}),marginTop=spaceEntries.reduce(((acc,[key,value])=>(acc[`mt${key}`]={marginTop:value},acc)),{}),marginBottom=spaceEntries.reduce(((acc,[key,value])=>(acc[`mb${key}`]={marginBottom:value},acc)),{}),marginLeft=spaceEntries.reduce(((acc,[key,value])=>(acc[`ml${key}`]={marginLeft:value},acc)),{}),marginRight=spaceEntries.reduce(((acc,[key,value])=>(acc[`mr${key}`]={marginRight:value},acc)),{}),padding=spaceEntries.reduce(((acc,[key,value])=>(acc[`p${key}`]={paddingTop:value,paddingBottom:value,paddingLeft:value,paddingRight:value},acc)),{}),paddingY=spaceEntries.reduce(((acc,[key,value])=>(acc[`py${key}`]={paddingTop:value,paddingBottom:value},acc)),{}),paddingX=spaceEntries.reduce(((acc,[key,value])=>(acc[`px${key}`]={paddingLeft:value,paddingRight:value},acc)),{}),paddingTop=spaceEntries.reduce(((acc,[key,value])=>(acc[`pt${key}`]={paddingTop:value},acc)),{}),paddingBottom=spaceEntries.reduce(((acc,[key,value])=>(acc[`pb${key}`]={paddingBottom:value},acc)),{}),paddingLeft=spaceEntries.reduce(((acc,[key,value])=>(acc[`pl${key}`]={paddingLeft:value},acc)),{}),paddingRight=spaceEntries.reduce(((acc,[key,value])=>(acc[`pr${key}`]={paddingRight:value},acc)),{}),useSpaceStyles=(0,makeStyles_esm.Z)({...margin,...marginY,...marginX,...marginTop,...marginBottom,...marginLeft,...marginRight,...padding,...paddingBottom,...paddingLeft,...paddingRight,...paddingTop,...paddingX,...paddingY})}}]);
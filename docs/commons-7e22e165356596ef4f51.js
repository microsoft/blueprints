"use strict";(self.webpackChunkarbutus_docs=self.webpackChunkarbutus_docs||[]).push([[9351],{65303:function(o,e,r){r.d(e,{C:function(){return p}});var t=r(73513),a=r(99971),n=r(2784),i=r(23552),d=r(59973),l=r(96698),c=r(56457);const g={accent:i.T.colorBrandBackground2,primary:i.T.colorNeutralForeground1,secondary:i.T.colorNeutralForeground2,tertiary:i.T.colorNeutralForeground3,quaternary:i.T.colorNeutralForeground4,negative:i.T.colorPaletteDarkOrangeForeground1,positive:i.T.colorPaletteGreenForeground1,warning:i.T.colorPaletteMarigoldForeground1,danger:i.T.colorPaletteDarkOrangeForeground1,info:i.T.colorBrandForeground2},s=(0,c.f)(g,(o=>({backgroundColor:o}))),u=(0,d.Z)({root:{display:"grid",alignItems:"center",justifyItems:"center",height:i.T.spacingHorizontalXXL,width:i.T.spacingHorizontalXXL,...l.q5.borderRadius(i.T.spacingHorizontalXXL)},inline:{display:"inline-grid",verticalAlign:"center"},...s}),p=o=>{let{className:e,iconName:r,color:i="primary",isInline:d}=o;const l=u();return n.createElement("span",{className:(0,t.z)(l.root,l[i],d&&l.inline,e)},n.createElement(a.J,{size:"small",iconName:r,color:`${i}-inverse`}))}},28986:function(o,e,r){r.d(e,{z:function(){return k}});var t=r(73513),a=r(2784),n=r(23552),i=r(59973),d=r(56457);const l={primary:{foreground:n.T.colorBrandForeground1,stroke:n.T.colorBrandForeground2,background:n.T.colorBrandBackground2},secondary:{foreground:n.T.colorNeutralForeground1,stroke:n.T.colorNeutralStroke1,background:n.T.colorNeutralBackground3},danger:{foreground:n.T.colorPaletteDarkOrangeForeground1,stroke:n.T.colorPaletteDarkOrangeBorder1,background:n.T.colorPaletteDarkOrangeBackground1},warning:{foreground:n.T.colorPaletteMarigoldForeground1,stroke:n.T.colorPaletteMarigoldBorder1,background:n.T.colorPaletteMarigoldBackground1},success:{foreground:n.T.colorPaletteGreenForeground1,stroke:n.T.colorPaletteGreenBorder1,background:n.T.colorPaletteGreenBackground1}},c=(0,d.f)(l,(o=>{let{foreground:e,background:r,stroke:t}=o;return{color:e,borderTopColor:t,borderRightColor:t,borderLeftColor:t,borderBottomColor:t,"&:focus-visible, &:hover":{backgroundColor:r,boxShadow:`0 0 2px ${r}, 0 8px 16px ${r}, inset 0 0 0px 0.5px ${t}`}}})),{primary:g,...s}=l,u=(0,d.f)(s,(o=>{let{foreground:e,background:r,stroke:t}=o;return{backgroundColor:r,color:e,borderTopColor:t,borderRightColor:t,borderLeftColor:t,borderBottomColor:t,"&:focus-visible, &:hover":{boxShadow:`0 0 2px ${r}, 0 8px 16px ${r}, inset 0 0 0px 0.5px ${t}`}}})),p={small:{x:n.T.spacingHorizontalM,y:n.T.spacingVerticalXS,fontSize:n.T.fontSizeBase300},medium:{x:n.T.spacingHorizontalL,y:n.T.spacingVerticalS,fontSize:n.T.fontSizeBase300},large:{x:n.T.spacingHorizontalXXL,y:n.T.spacingVerticalM,fontSize:n.T.fontSizeBase400}},m=(0,d.f)(p,(o=>{let{y:e,x:r,fontSize:t}=o;return{paddingLeft:r,paddingRight:r,paddingTop:e,paddingBottom:e,fontSize:t}})),T=(0,d.f)(p,(o=>{let{x:e,fontSize:r}=o;return{borderTopLeftRadius:`calc(${e} * 2 + ${r})`,borderTopRightRadius:`calc(${e} * 2 + ${r})`,borderBottomLeftRadius:`calc(${e} * 2 + ${r})`,borderBottomRightRadius:`calc(${e} * 2 + ${r})`}})),h=(0,i.Z)({root:{cursor:"pointer",transitionProperty:"all",transitionDuration:n.T.durationNormal,transitionTimingFunction:n.T.curveEasyEase,fontWeight:n.T.fontWeightSemibold,borderTopStyle:"solid",borderBottomStyle:"solid",borderLeftStyle:"solid",borderRightStyle:"solid",borderTopWidth:n.T.strokeWidthThin,borderBottomWidth:n.T.strokeWidthThin,borderLeftWidth:n.T.strokeWidthThin,borderRightWidth:n.T.strokeWidthThin,boxShadow:"0 0 2px transparent, 0 8px 16px transparent","@media (prefers-reduced-motion)":{transitionDuration:"0ms"},"&:focus-visible":{outlineStyle:"none",outlineColor:"transparent"}},pill:{backgroundColor:"transparent"},brick:{borderTopLeftRadius:n.T.borderRadiusMedium,borderTopRightRadius:n.T.borderRadiusMedium,borderBottomLeftRadius:n.T.borderRadiusMedium,borderBottomRightRadius:n.T.borderRadiusMedium},...m}),b=(0,i.Z)({...c,...T}),f=(0,i.Z)({primary:{color:n.T.colorNeutralBackground1,backgroundColor:n.T.colorBrandForegroundInverted,borderTopColor:n.T.colorBrandForegroundInverted,borderRightColor:n.T.colorBrandForegroundInverted,borderLeftColor:n.T.colorBrandForegroundInverted,borderBottomColor:n.T.colorBrandForegroundInverted,"&:focus-visible, &:hover":{backgroundColor:n.T.colorBrandForegroundInvertedHover,boxShadow:`0 0 2px ${l.primary.foreground}, 0 8px 16px ${l.primary.background}`}},...u}),k=o=>{let{className:e,color:r="primary",size:n="medium",shape:i="brick",children:d,...l}=o;const c=h(),g=f(),s=b(),u="brick"===i,p="pill"===i;return a.createElement("button",{className:(0,t.z)(c.root,c[n],u&&g[r],u&&c.brick,p&&c.pill,p&&s[r],p&&s[n],e),...l},d)}},933:function(o,e,r){r.d(e,{T:function(){return g}});var t=r(73513),a=r(2784),n=r(20590),i=r(23552),d=r(59973);const l={small:{height:i.T.spacingVerticalXL},medium:{height:i.T.spacingVerticalXXL},large:{height:i.T.spacingVerticalXXXL},fill:{height:"100%"}},c=(0,d.Z)({root:{width:"auto"},inline:{display:"inline-block",verticalAlign:"middle"},...l}),g=o=>{let{className:e,logoName:r,size:i="fill",isInline:d,label:l}=o;const g=c(),s=(0,a.useMemo)((()=>n.U[r]),[r]),u=(0,t.z)(g[i],d&&g.inline,e);return a.createElement(s,{className:u,label:l})}},20590:function(o,e,r){r.d(e,{U:function(){return a}});var t=r(2784);const a={figma:o=>{let{className:e,label:r="Figma logo"}=o;const a=`FigmaLogoSVG--${(0,t.useId)()}`;return t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 300",className:e,role:"img","aria-labelledby":a},t.createElement("title",{id:a},r),t.createElement("path",{fill:"#0acf83",d:"M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"}),t.createElement("path",{fill:"#a259ff",d:"M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"}),t.createElement("path",{fill:"#f24e1e",d:"M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"}),t.createElement("path",{fill:"#ff7262",d:"M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"}),t.createElement("path",{fill:"#1abcfe",d:"M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"}))},storybook:o=>{let{className:e,label:r="Storybook logo"}=o;const a=`FigmaLogoSVG--${(0,t.useId)()}`,n=`FigmaLogoSVG-path1-${(0,t.useId)()}`,i=`FigmaLogoSVG-mask2-${(0,t.useId)()}`;return t.createElement("svg",{className:e,role:"img","aria-labelledby":a,viewBox:"0 0 256 319",preserveAspectRatio:"xMidYMid"},t.createElement("title",{id:a},r),t.createElement("defs",null,t.createElement("path",{d:"M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z",id:n})),t.createElement("g",null,t.createElement("mask",{id:i,fill:"white"},t.createElement("use",{xlinkHref:`#${n}`})),t.createElement("use",{fill:"#FF4785",fillRule:"nonzero",xlinkHref:`#${n}`}),t.createElement("path",{d:"M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z",fill:"#FFFFFF",fillRule:"nonzero",mask:`url(#${i})`})))}}},65153:function(o,e,r){r.d(e,{l:function(){return T}});var t=r(73513),a=r(28986),n=r(99971),i=r(933),d=r(59226),l=r(2784),c=r(23552),g=r(59973);const s={small:{padding:"0px",paddingL:c.T.spacingHorizontalXXS,gap:c.T.spacingHorizontalXS,actionIcon:"16px",logo:"14px"},medium:{padding:c.T.spacingVerticalXS,paddingL:c.T.spacingHorizontalL,gap:c.T.spacingHorizontalS,actionIcon:"26px",logo:"20px"},large:{padding:c.T.spacingVerticalXS,paddingL:c.T.spacingHorizontalL,gap:c.T.spacingHorizontalL,actionIcon:"36px",logo:"30px"}},u=(0,g.Z)({root:{display:"inline-flex",alignItems:"center",verticalAlign:"bottom"},small:{position:"relative",borderLeftWidth:"0px",borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",paddingTop:s.small.padding,paddingBottom:s.small.padding,paddingLeft:s.small.paddingL,paddingRight:s.small.padding,columnGap:s.small.gap,"&:hover":{backgroundColor:"transparent",borderLeftWidth:"0px",borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",boxShadow:"none","&::before":{backgroundColor:c.T.colorNeutralBackground3,borderLeftWidth:"0px",borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",boxShadow:`0 0 2px ${c.T.colorNeutralBackground3}, inset 0 0 0px 1px ${c.T.colorNeutralStroke1}`}},"& > *":{zIndex:1},"&::before":{content:'""',position:"absolute",zIndex:0,top:"-2px",left:"-2px",width:"calc(100% + 4px)",height:"calc(100% + 4px)",borderTopLeftRadius:c.T.borderRadiusMedium,borderBottomLeftRadius:c.T.borderRadiusMedium,borderTopRightRadius:c.T.borderRadiusMedium,borderBottomRightRadius:c.T.borderRadiusMedium,transitionProperty:"all",transitionDuration:c.T.durationNormal,transitionTimingFunction:c.T.curveEasyEase}},medium:{paddingTop:s.medium.padding,paddingBottom:s.medium.padding,paddingLeft:s.medium.paddingL,paddingRight:s.medium.padding,columnGap:s.medium.gap,"&:hover span:last-child":{backgroundColor:c.T.colorBrandBackground2Hover}},large:{paddingTop:s.large.padding,paddingBottom:s.large.padding,paddingLeft:s.large.paddingL,paddingRight:s.large.padding,columnGap:s.large.gap,"&:hover span:last-child":{backgroundColor:c.T.colorBrandBackground2Hover}},smallRightPadding:{paddingRight:s.small.paddingL},mediumRightPadding:{paddingRight:s.medium.paddingL},largeRightPadding:{paddingRight:s.large.paddingL}}),p=(0,g.Z)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%",borderTopRightRadius:"50%",borderBottomRightRadius:"50%",transitionProperty:"all",transitionDuration:c.T.durationNormal,transitionTimingFunction:c.T.curveEasyEase,"& > svg":{height:"100%",width:"auto"}},small:{height:s.small.actionIcon,width:s.small.actionIcon,paddingTop:c.T.spacingVerticalXXS,paddingBottom:c.T.spacingVerticalXXS,paddingLeft:c.T.spacingVerticalXXS,paddingRight:c.T.spacingVerticalXXS},medium:{height:s.medium.actionIcon,width:s.medium.actionIcon,paddingTop:c.T.spacingVerticalXS,paddingBottom:c.T.spacingVerticalXS,paddingLeft:c.T.spacingVerticalXS,paddingRight:c.T.spacingVerticalXS,backgroundColor:c.T.colorBrandBackground2},large:{height:s.large.actionIcon,width:s.large.actionIcon,paddingTop:c.T.spacingVerticalS,paddingBottom:c.T.spacingVerticalS,paddingLeft:c.T.spacingVerticalS,paddingRight:c.T.spacingVerticalS,backgroundColor:c.T.colorBrandBackground2}}),m=(0,g.Z)({root:{width:"auto",alignSelf:"center",justifySelf:"center",overflowY:"hidden"},small:{height:s.small.logo,marginRight:c.T.spacingHorizontalXXS},medium:{height:s.medium.logo},large:{height:s.large.logo}}),T=o=>{let{actionIconName:e="link",className:r,logoLabel:c,logoName:g,text:s,size:T="medium",onClick:h}=o;const b=u(),f=p(),k=m(),B=!!e,v={small:b.smallRightPadding,medium:b.mediumRightPadding,large:b.largeRightPadding};return l.createElement(a.z,{className:(0,t.z)(b.root,b[T],!B&&v[T],r),shape:"pill",color:"secondary",size:"large",onClick:h},g&&c&&l.createElement(i.T,{className:(0,t.z)(k.root,k[T]),logoName:g,label:c}),l.createElement(d.x,{variant:"caption"},s),e&&l.createElement("span",{className:(0,t.z)(f.root,f[T])},l.createElement(n.J,{iconName:e,color:"accent"})))}},89006:function(o,e,r){r.d(e,{p:function(){return g}});var t=r(73513),a=r(2784),n=r(45601),i=r(23552),d=r(59973),l=r(96698);const c=(0,d.Z)({root:{display:"block"},largePadding:{...l.q5.padding(i.T.spacingVerticalXL)},smallPadding:{paddingLeft:i.T.spacingHorizontalXL,paddingRight:i.T.spacingHorizontalXL,paddingTop:i.T.spacingVerticalM,paddingBottom:i.T.spacingVerticalM},collapsedWithHeader:{display:"grid",gridTemplateColumns:"100px auto",gridGap:i.T.spacingHorizontalM}}),g=o=>{var e;let{className:r,isHeader:i,children:d,__index:l=0,...g}=o;const s=i?"th":"td",u=c(),{headerItems:p,isCollapsed:m}=(0,n.oO)(),T=null!==(e=null==p?void 0:p[l])&&void 0!==e?e:null,h=Boolean(T);return m&&h?a.createElement(s,{className:(0,t.z)(u.root,u.smallPadding,h&&u.collapsedWithHeader,r),...g},a.createElement("span",{"aria-hidden":!0},T),a.createElement("span",null,d)):a.createElement(s,{className:(0,t.z)(u.root,m?u.smallPadding:u.largePadding,r),...g},d)}},45601:function(o,e,r){r.d(e,{P_:function(){return n},oO:function(){return i}});var t=r(2784);const a=(0,t.createContext)({variant:"default"}),n=a.Provider,i=()=>(0,t.useContext)(a)},59534:function(o,e,r){r.d(e,{b:function(){return u}});var t=r(73513),a=r(59226),n=r(8843),i=r(2784),d=r(45601),l=r(23552),c=r(59973),g=r(96698);const s=(0,c.Z)({root:{borderSpacing:0,width:"100%",display:"block","& > tbody, & > thead":{display:"block",width:"100%"},"& > thead > tr":{borderBottomStyle:"solid",borderBottomWidth:l.T.strokeWidthThin,borderBottomColor:l.T.colorNeutralStroke1}},collapsed:{"& > thead":{borderBottomStyle:"none",borderBottomWidth:0,borderLeftStyle:"none",borderLeftWidth:0,borderRightStyle:"none",borderRightWidth:0,borderTopStyle:"none",borderTopWidth:0,clip:"rect(0 0 0 0)",height:"1px",marginBottom:"-1px",marginLeft:"-1px",marginRight:"-1px",marginTop:"-1px",overflowX:"hidden",overflowY:"hidden",paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},boundary:{...g.q5.borderColor(l.T.colorNeutralStroke1),...g.q5.borderWidth(l.T.strokeWidthThin),...g.q5.borderStyle("solid"),...g.q5.borderRadius(l.T.borderRadiusXLarge)},caption:{width:"100%",textAlign:"left","&:last-of-type":{marginBottom:l.T.spacingHorizontalL}}});const u=o=>{var e;let{className:r,variant:l="default",children:c,description:g,caption:u,columnSizing:p,...m}=o;const T=s(),h=(0,i.useId)(),b=(0,i.useId)(),f=(0,i.useRef)(null),k=function(o){const{0:e,1:r}=(0,i.useState)();return(0,i.useLayoutEffect)((()=>{var e;r(null==o||null===(e=o.current)||void 0===e?void 0:e.getBoundingClientRect())}),[o]),(0,n.Z)(o,(o=>r(o.contentRect))),e}(f),B=(null!==(e=null==k?void 0:k.width)&&void 0!==e?e:0)<640;let v=[];if(i.Children.toArray(c).some((o=>!!i.isValidElement(o)&&"thead"===o.type))){const o=i.Children.toArray(c).find((o=>{if(i.isValidElement(o))return"thead"===o.type}));if(o&&i.isValidElement(o)){const e=i.Children.toArray(o.props.children)[0];if(e&&i.isValidElement(e)){v=i.Children.toArray(e.props.children).map((o=>{if(i.isValidElement(o))return o.props.children}))}}}return i.createElement(d.P_,{value:{variant:l,columnSizing:p,headerItems:v,isCollapsed:B}},i.createElement("div",null,u&&i.createElement(a.x,{block:!0,variant:"headline",id:h,className:T.caption},u),g&&i.createElement(a.x,{block:!0,variant:"description",id:b,className:T.caption},g),i.createElement("table",{className:(0,t.z)(T.root,"default"===l&&T.boundary,B&&T.collapsed,r),ref:f,...u?{"aria-labelledby":h}:{},...g?{"aria-describedby":b}:{},...m},c)))}},88275:function(o,e,r){r.d(e,{S:function(){return g}});var t=r(73513),a=r(2784),n=r(45601);var i=r(23552),d=r(59973),l=r(96698);const c=(0,d.Z)({root:{display:"grid"},alternating:{"&:nth-child(even)":{backgroundColor:i.T.colorNeutralBackground3,...l.q5.borderRadius(i.T.borderRadiusMedium)}},default:{"&:not(:last-child)":{borderBottomStyle:"solid",borderBottomWidth:i.T.strokeWidthThin,borderBottomColor:i.T.colorNeutralStroke1}},collapsed:{paddingTop:i.T.spacingVerticalXL,paddingBottom:i.T.spacingVerticalXL}}),g=o=>{let{className:e,children:r}=o;const{variant:i,columnSizing:d}=(0,n.oO)(),l="default"===i,g="alternating"===i,s=a.Children.count(r),{isCollapsed:u}=(0,n.oO)(),p=c(),m=function(o,e,r){switch(void 0===e&&(e=!1),void 0===r&&(r=1),!0){case e:return{gridTemplateColumns:"1fr"};case Array.isArray(o):return{gridTemplateColumns:null==o?void 0:o.map((o=>"number"==typeof o?`${o}fr`:o)).join(" ")};default:return{gridTemplateColumns:`repeat(${r}, 1fr)`}}}(d,u,s);return a.createElement("tr",{style:m,className:(0,t.z)(p.root,u&&p.collapsed,g&&p.alternating,l&&p.default,e)},(o=>{let{children:e}=o;return a.Children.map(e,((o,e)=>(0,a.isValidElement)(o)?(0,a.cloneElement)(o,{__index:e}):o))})({children:r}))}},55319:function(o,e,r){r.d(e,{V:function(){return u}});var t=r(73513),a=r(2784),n=r(23552),i=r(59973),d=r(96698),l=r(56457);const c={new:{background:n.T.colorPaletteLavenderBackground2,text:n.T.colorPaletteLavenderForeground2},error:{background:n.T.colorPaletteDarkOrangeBackground2,text:n.T.colorPaletteDarkOrangeForeground2},warning:{background:n.T.colorPaletteMarigoldBackground2,text:n.T.colorPaletteMarigoldForeground2},success:{background:n.T.colorPaletteGreenBackground2,text:n.T.colorPaletteGreenForeground2},info:{background:n.T.colorNeutralBackground3,text:n.T.colorNeutralForeground3},accent:{background:n.T.colorBrandBackground2,text:n.T.colorBrandForeground2}},g=(0,l.f)(c,(o=>{let{background:e,text:r}=o;return{backgroundColor:e,color:r}})),s=(0,i.Z)({root:{color:n.T.colorNeutralForeground1,display:"block",textTransform:"uppercase",...d.q5.borderRadius(n.T.borderRadiusMedium)},medium:{paddingTop:n.T.spacingVerticalXS,paddingBottom:n.T.spacingVerticalXS,paddingLeft:n.T.spacingHorizontalS,paddingRight:n.T.spacingHorizontalS,fontSize:n.T.fontSizeBase200,fontWeight:n.T.fontWeightSemibold,lineHeight:n.T.lineHeightBase200},small:{paddingTop:n.T.spacingVerticalXXS,paddingBottom:n.T.spacingVerticalXXS,paddingLeft:n.T.spacingHorizontalXS,paddingRight:n.T.spacingHorizontalXS,fontSize:n.T.fontSizeBase100,lineHeight:n.T.lineHeightBase100,fontWeight:n.T.fontWeightSemibold,letterSpacing:"0.5px"},...g,inline:{display:"inline-block"}}),u=o=>{let{children:e,className:r,isInline:n,size:i="medium",type:d="accent"}=o;const l=s();return a.createElement("span",{className:(0,t.z)(l.root,l[d],l[i],n&&l.inline,r)},e)}},81230:function(o,e,r){r.d(e,{n:function(){return m}});var t=r(73513),a=r(2784),n=r(23552),i=r(59973),d=r(96698),l=r(56457),c=r(4851);const g={none:"transparent",primary:n.T.colorNeutralBackground1,secondary:n.T.colorNeutralBackground2,tertiary:n.T.colorNeutralBackground3,quaternary:n.T.colorNeutralBackground4,tile:n.T.colorNeutralBackground6,negative:n.T.colorPaletteDarkOrangeBackground1,positive:n.T.colorPaletteGreenBackground1,warning:n.T.colorPaletteMarigoldBackground1,danger:n.T.colorPaletteDarkOrangeBackground1,info:n.T.colorNeutralBackground2,accent:n.T.colorBrandBackground2},s=(0,l.f)(g,(o=>({backgroundColor:o}))),u=(0,i.Z)({root:{marginTop:0,marginBottom:0,marginLeft:0,marginRight:0},interactive:{...d.q5.borderStyle("none"),...d.q5.borderColor("transparent"),cursor:"pointer",transitionProperty:"all",transitionDuration:n.T.durationNormal,transitionTimingFunction:n.T.curveEasyEase,":focus":{outlineColor:n.T.colorBrandForeground2}},card:{backgroundColor:n.T.colorNeutralBackground1,...d.q5.borderRadius(n.T.borderRadiusLarge),boxShadow:n.T.shadow4},interactiveCard:{":hover":{boxShadow:n.T.shadow16}},image:{backgroundColor:n.T.colorNeutralBackground6,...d.q5.borderRadius(c.A.shape.borderRadius),backgroundSize:"cover",backgroundPositionX:"center",backgroundPositionY:"center"},solidColor:{...d.q5.borderRadius(c.A.shape.borderRadius)},...s}),p=o=>{let{variant:e}=o;return"image"===e},m=o=>{let{children:e,variant:r,as:n="div",backgroundColor:i="tile",imageSrc:d,className:l,onClick:c}=o;const g=u();let s="";switch(!0){case(o=>{let{variant:e}=o;return"card"===e})({variant:r}):s=(0,t.z)(g.root,g.card,c&&g.interactive,c&&g.interactiveCard,l);break;case p({variant:r}):s=(0,t.z)(g.root,g.image,c&&g.interactive,l);break;case(o=>{let{variant:e}=o;return"solid-color"===e})({variant:r}):s=(0,t.z)(g.root,g.solidColor,c&&g.interactive,g[i],l);break;default:s=(0,t.z)(g.root,l)}const m=p({variant:r})?{style:{backgroundImage:`url("${null!=d?d:""}")`}}:{};return a.createElement(n,{className:s,...m,onClick:c},e)}}}]);
//# sourceMappingURL=commons-7e22e165356596ef4f51.js.map
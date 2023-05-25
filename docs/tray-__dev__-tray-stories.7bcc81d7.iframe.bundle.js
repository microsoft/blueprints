"use strict";(self.webpackChunkarbutus=self.webpackChunkarbutus||[]).push([[8515],{"./components/tray/__dev__/tray.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NavigationExample:()=>NavigationExample,Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tray_stories});var tokens=__webpack_require__("./node_modules/@fluentui/tokens/lib/tokens.js"),makeStyles_esm=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),icon_button=__webpack_require__("./components/icon-button/lib/icon-button/icon-button.js"),text_text=__webpack_require__("./components/text/lib/text/text.js"),use_space_styles=__webpack_require__("./hooks/use-space-styles/lib/use-space-styles.js"),react=__webpack_require__("./node_modules/react/index.js"),mergeClasses_esm=__webpack_require__("./node_modules/@griffel/core/mergeClasses.esm.js");const useTrayStyles=(0,makeStyles_esm.Z)({root:{zIndex:10,position:"fixed",width:"324px",height:"100vh",borderRightColor:tokens.T.colorNeutralStroke1,borderRightWidth:"1px",borderRightStyle:"solid",transform:"translate3D(-325px, 0, 0)",opacity:0,left:0,top:0,backgroundColor:tokens.T.colorNeutralBackground1,backdropFilter:"blur(1rem)","@media screen and (prefers-reduced-motion: no-preference)":{transitionProperty:"all",transitionDuration:tokens.T.durationNormal,transitionTimingFunction:tokens.T.curveEasyEase},"@media screen and (max-width: 324px)":{width:"100%"}},isOpen:{opacity:1,backgroundColor:"var(--arbutus--color-overlay-background)",transform:"translate3d(0, 0, 0)"}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tray=({className,children,isOpen})=>{const classes=useTrayStyles();return(0,jsx_runtime.jsx)("aside",{className:(0,mergeClasses_esm.z)(classes.root,isOpen&&classes.isOpen,className),children})};Tray.displayName="Tray";try{Tray.displayName="Tray",Tray.__docgenInfo={description:"",displayName:"Tray",props:{className:{defaultValue:null,description:"Consumer provided class.",name:"className",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"Controls whether the tray is open or closed.",name:"isOpen",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/tray/src/tray/tray.tsx#Tray"]={docgenInfo:Tray.__docgenInfo,name:"Tray",path:"components/tray/src/tray/tray.tsx#Tray"})}catch(__react_docgen_typescript_loader_error){}var divider=__webpack_require__("./components/divider/lib/divider/divider.js"),main_navigation=__webpack_require__("./components/main-navigation/lib/main-navigation/main-navigation.js"),main_navigation_sub=__webpack_require__("./components/main-navigation/lib/main-navigation-sub/main-navigation-sub.js"),main_navigation_link=__webpack_require__("./components/main-navigation/lib/main-navigation-link/main-navigation-link.js");const Link=({children,href})=>(0,jsx_runtime.jsx)("a",{href,children});Link.displayName="Link";const NavigationSample=()=>(0,jsx_runtime.jsxs)(main_navigation.o,{children:[(0,jsx_runtime.jsxs)(main_navigation_sub.S,{title:"About us",children:[(0,jsx_runtime.jsx)(main_navigation_link.G,{as:Link,elementProps:{href:"#"},children:"Overview"}),(0,jsx_runtime.jsx)(main_navigation_link.G,{as:Link,elementProps:{href:"#"},children:"Getting started"})]}),(0,jsx_runtime.jsx)(divider.i,{}),(0,jsx_runtime.jsxs)(main_navigation_sub.S,{title:"Design Fundamentals",children:[(0,jsx_runtime.jsx)(main_navigation_link.G,{as:Link,elementProps:{href:"#"},children:"Typography"}),(0,jsx_runtime.jsx)(main_navigation_link.G,{as:Link,elementProps:{href:"#"},children:"Colors"}),(0,jsx_runtime.jsx)(main_navigation_link.G,{as:Link,elementProps:{href:"#"},children:"Space grid"})]}),(0,jsx_runtime.jsx)(divider.i,{}),(0,jsx_runtime.jsxs)(main_navigation_sub.S,{title:"Components",children:[(0,jsx_runtime.jsxs)(main_navigation_sub.S,{title:"Button",children:[(0,jsx_runtime.jsx)(main_navigation_link.G,{as:Link,elementProps:{href:"#"},children:"Primary"}),(0,jsx_runtime.jsx)(main_navigation_link.G,{as:Link,elementProps:{href:"#"},children:"Secondary"}),(0,jsx_runtime.jsx)(main_navigation_link.G,{as:Link,elementProps:{href:"#"},children:"Umph"})]}),(0,jsx_runtime.jsx)(main_navigation_link.G,{as:Link,elementProps:{href:"#"},children:"Text"}),(0,jsx_runtime.jsx)(main_navigation_link.G,{as:Link,elementProps:{href:"#"},children:"Link"})]}),(0,jsx_runtime.jsx)(divider.i,{}),(0,jsx_runtime.jsx)(main_navigation_link.G,{as:Link,elementProps:{href:"#"},children:"Credits"})]});NavigationSample.displayName="NavigationSample";var index_esm=__webpack_require__("./node_modules/@griffel/core/index.esm.js");const useGridStyles=(0,makeStyles_esm.Z)({root:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",columnGap:"1rem"},image:{...index_esm.q5.borderRadius("var(--arbutus--shape-border-radius)"),width:"100%"}}),PageSample=()=>{const space=(0,use_space_styles.z)(),grid=useGridStyles(),imageClasses=(0,mergeClasses_esm.z)(grid.image,space.mb4);return(0,jsx_runtime.jsxs)("main",{className:space.pb12,children:[(0,jsx_runtime.jsx)(text_text.x,{block:!0,as:"h1",variant:"headline",children:"Headline"}),(0,jsx_runtime.jsx)(text_text.x,{block:!0,variant:"leading",children:"Leading Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit iusto."}),(0,jsx_runtime.jsx)(divider.i,{className:space.my8}),(0,jsx_runtime.jsx)(text_text.x,{block:!0,as:"h2",variant:"subtitle",children:"Subheading"}),(0,jsx_runtime.jsx)(text_text.x,{block:!0,variant:"paragraph",className:space.mb8,children:"Paragraph Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit iusto."}),(0,jsx_runtime.jsxs)("div",{className:grid.root,children:[(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)("img",{src:"https://via.placeholder.com/300x100.png/f0f0f0",alt:"Text demo 1",className:imageClasses}),(0,jsx_runtime.jsx)(text_text.x,{block:!0,as:"h2",variant:"caption",className:space.mb1,children:"Caption: What do you see?"}),(0,jsx_runtime.jsx)(text_text.x,{block:!0,variant:"description",color:"tertiary",children:"Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit iusto."})]}),(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)("img",{src:"https://via.placeholder.com/300x100.png/f0f0f0",alt:"Text demo 1",className:imageClasses}),(0,jsx_runtime.jsx)(text_text.x,{block:!0,as:"h2",variant:"caption",className:space.mb1,children:"Caption: What do you see?"}),(0,jsx_runtime.jsx)(text_text.x,{block:!0,variant:"description",color:"tertiary",children:"Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit iusto."})]})]}),(0,jsx_runtime.jsx)(divider.i,{className:space.my12}),(0,jsx_runtime.jsxs)("div",{className:grid.root,children:[(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)(text_text.x,{block:!0,as:"h4",variant:"jumbo",color:"quaternary",className:space.mt4,children:"Jumbo Text"}),(0,jsx_runtime.jsx)(text_text.x,{block:!0,variant:"description",color:"secondary",children:"Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit iusto."})]}),(0,jsx_runtime.jsx)("img",{src:"https://via.placeholder.com/300x100.png/f0f0f0",alt:"Text demo 2",className:grid.image})]})]})};PageSample.displayName="PageSample";const tray_stories={title:"Layout/Tray",component:Tray},tray_stories_useGridStyles=(0,makeStyles_esm.Z)({root:{width:"100%",height:"100%"},header:{display:"grid",gridTemplateColumns:`${tokens.T.spacingHorizontalXXXL} auto`,columnGap:tokens.T.spacingHorizontalM,marginBottom:tokens.T.spacingVerticalXL}}),Template=args=>{const classes=tray_stories_useGridStyles(),space=(0,use_space_styles.z)();return(0,jsx_runtime.jsxs)("div",{className:classes.root,children:[(0,jsx_runtime.jsx)(Tray,{...args,children:(0,jsx_runtime.jsx)("div",{className:space.p3,children:"lorem"})}),(0,jsx_runtime.jsx)(PageSample,{})]})};Template.displayName="Template";const Simple=Template.bind({});Simple.args={isOpen:!0};const NavigationExampleTemplate=()=>{const classes=tray_stories_useGridStyles(),space=(0,use_space_styles.z)(),[isOpen,setIsOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{className:classes.root,children:[(0,jsx_runtime.jsx)(Tray,{isOpen,children:(0,jsx_runtime.jsxs)("div",{className:space.p3,children:[(0,jsx_runtime.jsxs)("header",{className:classes.header,children:[(0,jsx_runtime.jsx)(icon_button.h,{iconName:"slide-in",label:"Close navigation",onClick:()=>setIsOpen(!1)}),(0,jsx_runtime.jsx)(text_text.x,{as:"h1",variant:"subtitle",children:"Arbutus"})]}),(0,jsx_runtime.jsx)(NavigationSample,{})]})}),(0,jsx_runtime.jsxs)("header",{className:classes.header,children:[(0,jsx_runtime.jsx)(icon_button.h,{iconName:"slide-out",label:"Open navigation",onClick:()=>setIsOpen(!0)}),(0,jsx_runtime.jsx)(text_text.x,{as:"h1",variant:"subtitle",children:"Arbutus"})]}),(0,jsx_runtime.jsx)(PageSample,{})]})};NavigationExampleTemplate.displayName="NavigationExampleTemplate";const NavigationExample=NavigationExampleTemplate.bind({}),__namedExportsOrder=["Simple","NavigationExample"]}}]);
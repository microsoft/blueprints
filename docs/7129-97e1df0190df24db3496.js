"use strict";(self.webpackChunkarbutus_docs=self.webpackChunkarbutus_docs||[]).push([[7129],{37129:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var i=a(59973),o=a(73513),n=a(2784),r=a(23552);const l=(0,i.Z)({root:{display:"grid",rowGap:r.T.spacingVerticalS}}),s=e=>{let{className:t,children:a}=e;const i=l();return n.createElement("div",{className:(0,o.z)(i.root,t)},a)};var d=a(99971),c=a(59226),p=a(85380);const u=(0,i.Z)({root:{borderBottomWidth:r.T.strokeWidthThin,borderBottomStyle:"solid",borderBottomColor:r.T.colorNeutralStroke1,transitionProperty:"border-bottom-color",transitionDuration:r.T.durationNormal,transitionTimingFunction:r.T.curveEasyEase,paddingTop:r.T.spacingVerticalM,paddingBottom:r.T.spacingVerticalM},trigger:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",borderTopStyle:"none",borderBottomStyle:"none",borderLeftStyle:"none",borderRightStyle:"none",backgroundColor:"transparent",cursor:"pointer",paddingTop:0,paddingBottom:r.T.spacingVerticalS,paddingLeft:"0",paddingRight:"0"},title:{whiteSpace:"nowrap",overflowY:"hidden",overflowX:"hidden",textOverflow:"ellipsis"},content:{width:"100%",paddingTop:0,paddingBottom:0,paddingLeft:"0",paddingRight:"0"},toggle:{alignSelf:"center",transitionProperty:"transform",transitionDuration:r.T.durationNormal,transitionTimingFunction:r.T.curveEasyEase},toggleExpanded:{transform:"rotate(90deg)"},toggleIdle:{transform:"rotate(0deg)"}});var m=a(48555),g=a(3517);const h=.15,y=e=>{let{shouldReduceMotion:t}=e;return{expanded:{height:"auto",transition:{ease:"easeOut",duration:t?0:.2}},collapsed:{height:0,transition:{delay:t?0:.075,ease:"easeOut",duration:t?0:.2}}}},b=e=>{let{children:t,initial:a,a11yLabelId:i,a11yContentId:o,className:r}=e;return n.createElement(m.E.section,{initial:a,animate:"expanded",exit:"collapsed",variants:y({shouldReduceMotion:(0,g.J)()}),className:r,id:o,"aria-labelledby":i,role:"region"},t)},E=e=>{let{shouldReduceMotion:t}=e;return{expanded:{opacity:1,top:"0",transition:{delay:t?0:.125,ease:"easeOut",duration:t?0:h}},collapsed:{opacity:0,top:"-4px",transition:{ease:"easeOut",duration:t?0:h}}}},v=e=>{let{children:t,initial:a}=e;return n.createElement(m.E.div,{style:{position:"relative"},initial:a,animate:"expanded",exit:"collapsed",variants:E({shouldReduceMotion:(0,g.J)()})},t)},f=e=>{let{className:t,title:a,children:i,initial:r="collapsed"}=e;const{0:l,1:s}=(0,n.useState)("expanded"===r),m=(0,n.useId)(),g=(0,n.useId)(),h=u();return n.createElement("div",{className:(0,o.z)(h.root,t)},n.createElement("button",{className:h.trigger,id:m,"aria-controls":g,"aria-expanded":l,onClick:()=>s(!l)},n.createElement(c.x,{className:h.title,block:!0,variant:"caption"},a),n.createElement(d.J,{iconName:"chevron-right",color:"tertiary",className:(0,o.z)(h.toggle,l?h.toggleExpanded:h.toggleIdle)})),n.createElement(p.M,{initial:!1},l&&n.createElement(b,{initial:r,a11yContentId:g,a11yLabelId:m,className:h.content},n.createElement(v,{initial:r},i))))};var x=a(81230);const T=()=>n.createElement("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gridGap:"1rem"}},n.createElement(c.x,{block:!0,as:"p",variant:"paragraph"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus iure iusto ipsa labore placeat nulla veniam. Odit possimus praesentium enim blanditiis. Quis quisquam esse eos amet dolore odit vel asperiores."),n.createElement(x.n,{variant:"solid-color"}," ")),N=(0,i.Z)({root:{width:"100%",maxWidth:"600px",height:"100%"}});var w=()=>{const e=N();return n.createElement(s,{className:e.root},Array.from({length:3},((e,t)=>n.createElement(f,{key:t,title:`AccordionItem ${t+1}`},n.createElement(T,null)))))}}}]);
//# sourceMappingURL=7129-97e1df0190df24db3496.js.map
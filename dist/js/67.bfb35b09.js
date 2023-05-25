"use strict";(self["webpackChunkpros_project"]=self["webpackChunkpros_project"]||[]).push([[67],{6067:function(e,a,t){t.r(a),t.d(a,{default:function(){return de}});var l=t(6252),s=t(3577),n=t(2262);const i={class:"header"},r=(0,l._)("div",{class:"header__title text-h4"}," Wisconsin cancer graph ",-1),d=[r];function p(e,a){return(0,l.wg)(),(0,l.iD)("div",i,d)}var c=t(3744);const u={},o=(0,c.Z)(u,[["render",p]]);var v=o,m=t(4642),g=t(9e3),f=t(4405),y=t(6719),_=t(3099);const b=(0,y.ev)()({name:"VCardActions",props:(0,g.l)(),setup(e,a){let{slots:t}=a;return(0,f.AF)({VBtn:{variant:"text"}}),(0,_.L)((()=>(0,l.Wm)("div",{class:["v-card-actions",e.class],style:e.style},[t.default?.()]))),{}}});var h=t(2139),x=t(5988);const k=(0,x.J)("v-card-subtitle"),C=(0,x.J)("v-card-title");var W=t(875),A=t(6596),I=t(8942);const S=(0,y.ev)()({name:"VCardItem",props:{appendAvatar:String,appendIcon:A.lE,prependAvatar:String,prependIcon:A.lE,subtitle:String,title:String,...(0,g.l)(),...(0,I.f)()},setup(e,a){let{slots:t}=a;return(0,_.L)((()=>{const a=!(!e.prependAvatar&&!e.prependIcon),s=!(!a&&!t.prepend),n=!(!e.appendAvatar&&!e.appendIcon),i=!(!n&&!t.append),r=!(!e.title&&!t.title),d=!(!e.subtitle&&!t.subtitle);return(0,l.Wm)("div",{class:["v-card-item",e.class],style:e.style},[s&&(0,l.Wm)("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?(0,l.Wm)(W.z,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&(0,l.Wm)(h.V,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),(0,l.Wm)("div",{class:"v-card-item__content"},[r&&(0,l.Wm)(C,{key:"title"},{default:()=>[t.title?.()??e.title]}),d&&(0,l.Wm)(k,{key:"subtitle"},{default:()=>[t.subtitle?.()??e.subtitle]}),t.default?.()]),i&&(0,l.Wm)("div",{key:"append",class:"v-card-item__append"},[t.append?(0,l.Wm)(W.z,{key:"append-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):n&&(0,l.Wm)(h.V,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])})),{}}}),w=(0,x.J)("v-card-text");var V=t(7074),H=t(7284),B=t(9748),D=t(7689),E=t(6454),F=t(4203),z=t(6947),j=t(9680),Y=t(3632),L=t(8247),O=t(3664),Q=t(2716),G=t(2323);const J=(0,y.ev)()({name:"VCard",directives:{Ripple:H.H},props:{appendAvatar:String,appendIcon:A.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:A.lE,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...(0,E.m)(),...(0,g.l)(),...(0,I.f)(),...(0,F.x)(),...(0,z.c)(),...(0,D.fF)(),...(0,j.y)(),...(0,Y.F)(),...(0,L.I)(),...(0,O.GN)(),...(0,Q.Q)(),...(0,G.x$)(),...(0,B.bk)({variant:"elevated"})},setup(e,a){let{attrs:t,slots:s}=a;const{themeClasses:n}=(0,G.ER)(e),{borderClasses:i}=(0,E.P)(e),{colorClasses:r,colorStyles:d,variantClasses:p}=(0,B.c1)(e),{densityClasses:c}=(0,I.t)(e),{dimensionStyles:u}=(0,F.$)(e),{elevationClasses:o}=(0,z.Y)(e),{loaderClasses:v}=(0,D.U2)(e),{locationStyles:m}=(0,j.T)(e),{positionClasses:g}=(0,Y.K)(e),{roundedClasses:f}=(0,L.b)(e),y=(0,O.nB)(e,t),h=(0,l.Fl)((()=>!1!==e.link&&y.isLink.value)),x=(0,l.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||y.isClickable.value)));return(0,_.L)((()=>{const a=h.value?"a":e.tag,t=!(!s.title&&!e.title),_=!(!s.subtitle&&!e.subtitle),k=t||_,C=!!(s.append||e.appendAvatar||e.appendIcon),A=!!(s.prepend||e.prependAvatar||e.prependIcon),I=!(!s.image&&!e.image),H=k||A||C,E=!(!s.text&&!e.text);return(0,l.wy)((0,l.Wm)(a,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":x.value},n.value,i.value,r.value,c.value,o.value,v.value,g.value,f.value,p.value,e.class],style:[d.value,u.value,m.value,e.style],href:y.href.value,onClick:x.value&&y.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[I&&(0,l.Wm)("div",{key:"image",class:"v-card__image"},[s.image?(0,l.Wm)(W.z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},s.image):(0,l.Wm)(V.f,{key:"image-img",cover:!0,src:e.image},null)]),(0,l.Wm)(D.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:s.loader}),H&&(0,l.Wm)(S,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:s.item,prepend:s.prepend,title:s.title,subtitle:s.subtitle,append:s.append}),E&&(0,l.Wm)(w,{key:"text"},{default:()=>[s.text?.()??e.text]}),s.default?.(),s.actions&&(0,l.Wm)(b,null,{default:s.actions}),(0,B.Ux)(x.value,"v-card")]}),[[(0,l.Q2)("ripple"),x.value&&e.ripple]])})),{}}});var R=t(6560);const T=Symbol.for("vuetify:v-item-group"),Z=(0,y.ev)()({name:"VItemGroup",props:{...(0,g.l)(),...(0,R.k4)({selectedClass:"v-item--selected"}),...(0,Q.Q)(),...(0,G.x$)()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const{themeClasses:s}=(0,G.ER)(e),{isSelected:n,select:i,next:r,prev:d,selected:p}=(0,R._v)(e,T);return()=>(0,l.Wm)(e.tag,{class:["v-item-group",s.value,e.class],style:e.style},{default:()=>[t.default?.({isSelected:n,select:i,next:r,prev:d,selected:p.value})]})}}),$=(0,y.ev)()({name:"VItem",props:(0,R.YQ)(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:t}=a;const{isSelected:l,select:s,toggle:n,selectedClass:i,value:r,disabled:d}=(0,R.Yt)(e,T);return()=>t.default?.({isSelected:l.value,selectedClass:i.value,select:s,toggle:n,value:r.value,disabled:d.value})}}),K=e=>((0,l.dD)("data-v-909130ca"),e=e(),(0,l.Cn)(),e),P={class:"graph"},U={class:"graph__header d-none d-md-flex d-lg-flex"},N={class:"graph__content"},q={style:{width:"100%"},class:"text-h4 text-blue justify-center align-center"},M={style:{"min-height":"50px"}},X={class:"graph__category-select"},ee=K((()=>(0,l._)("div",{class:"text-h5"},"Choose category: ",-1))),ae={class:"text-h5 text-center graph__category"};var te={__name:"dataGraph",setup(e){const a=(0,m.a)(),t=(0,n.iH)(),i=(0,n.iH)([]),r=(0,n.iH)(),d=(0,n.iH)(a.getTableItems),p=(0,l.Fl)((()=>Array.isArray(d.value)?d.value.map((e=>e[r.value])):[])),c=(0,l.Fl)((()=>Array.isArray(p.value)?[...new Set(p.value)].map((e=>new Object({value:e,duplicateCount:p.value.filter((a=>a===e)).length}))):[]));function u(){let e=[],a=[];c.value.forEach((t=>{t.duplicateCount>1&&(void 0!==t.value?e.push(t.value):e.push("undefined"),a.push(t.duplicateCount))})),f.value[0].data=a,g.value.xaxis.categories=e}function o(){let e=Object.keys(d.value[0]);e.shift(),i.value=e}const g=(0,n.iH)({chart:{type:"bar"},xaxis:{categories:[],title:{text:"Values"}},yaxis:{title:{text:"Amount of duplicates"}},responsive:[{breakpoint:900,options:{plotOptions:{bar:{horizontal:!0}}}}]}),f=(0,n.iH)([{data:[]}]);return(0,l.YP)(r,(()=>{t.value.updateSeries((f.value[0].data,!0)),t.value.updateOptions({xaxis:{categories:g.value.xaxis.categories}}),u()})),(0,l.bv)((()=>{o()})),(e,a)=>{const n=(0,l.up)("apexchart");return(0,l.wg)(),(0,l.iD)("div",P,[(0,l._)("div",U,[(0,l.Wm)(v)]),(0,l._)("div",N,[(0,l._)("div",q,[(0,l._)("div",M,(0,s.zw)(r.value),1),(0,l.Wm)(n,{class:"graph__chart",ref_key:"realTimeChart",ref:t,options:g.value,series:f.value},null,8,["options","series"])]),(0,l._)("div",X,[ee,(0,l.Wm)(Z,{class:"d-flex flex-column ma-5","selected-class":"bg-primary"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.value,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e},[(0,l.Wm)($,null,{default:(0,l.w5)((({selectedClass:a})=>[(0,l.Wm)(J,{class:(0,s.C_)(["d-flex align-center",a]),onClick:a=>r.value=e},{default:(0,l.w5)((()=>[(0,l._)("div",ae,(0,s.zw)(e),1)])),_:2},1032,["class","onClick"])])),_:2},1024)])))),128))])),_:1})])])])}}};const le=(0,c.Z)(te,[["__scopeId","data-v-909130ca"]]);var se=le;const ne={class:"graph"};var ie={__name:"graphView",setup(e){return(e,a)=>((0,l.wg)(),(0,l.iD)("div",ne,[(0,l.Wm)(se)]))}};const re=(0,c.Z)(ie,[["__scopeId","data-v-74e08615"]]);var de=re}}]);
//# sourceMappingURL=67.bfb35b09.js.map
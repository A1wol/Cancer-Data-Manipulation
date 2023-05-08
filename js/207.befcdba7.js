"use strict";(self["webpackChunkpros_project"]=self["webpackChunkpros_project"]||[]).push([[207],{207:function(e,a,t){t.r(a),t.d(a,{default:function(){return de}});var l=t(6252),s=t(3577),n=t(2262),i=t(3907);const d={class:"header"},r=(0,l._)("div",{class:"header__title text-h4"}," Wisconsin cancer graph ",-1),p=[r];function c(e,a){return(0,l.wg)(),(0,l.iD)("div",d,p)}var o=t(3744);const u={},v=(0,o.Z)(u,[["render",c]]);var m=v,g=t(9e3),f=t(4405),y=t(6719),b=t(3099);const _=(0,y.ev)()({name:"VCardActions",props:(0,g.l)(),setup(e,a){let{slots:t}=a;return(0,f.AF)({VBtn:{variant:"text"}}),(0,b.L)((()=>(0,l.Wm)("div",{class:["v-card-actions",e.class],style:e.style},[t.default?.()]))),{}}});var h=t(2139),x=t(5988);const k=(0,x.J)("v-card-subtitle"),C=(0,x.J)("v-card-title");var W=t(875),I=t(6596),A=t(8942);const S=(0,y.ev)()({name:"VCardItem",props:{appendAvatar:String,appendIcon:I.lE,prependAvatar:String,prependIcon:I.lE,subtitle:String,title:String,...(0,g.l)(),...(0,A.f)()},setup(e,a){let{slots:t}=a;return(0,b.L)((()=>{const a=!(!e.prependAvatar&&!e.prependIcon),s=!(!a&&!t.prepend),n=!(!e.appendAvatar&&!e.appendIcon),i=!(!n&&!t.append),d=!(!e.title&&!t.title),r=!(!e.subtitle&&!t.subtitle);return(0,l.Wm)("div",{class:["v-card-item",e.class],style:e.style},[s&&(0,l.Wm)("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?(0,l.Wm)(W.z,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&(0,l.Wm)(h.V,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),(0,l.Wm)("div",{class:"v-card-item__content"},[d&&(0,l.Wm)(C,{key:"title"},{default:()=>[t.title?.()??e.title]}),r&&(0,l.Wm)(k,{key:"subtitle"},{default:()=>[t.subtitle?.()??e.subtitle]}),t.default?.()]),i&&(0,l.Wm)("div",{key:"append",class:"v-card-item__append"},[t.append?(0,l.Wm)(W.z,{key:"append-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):n&&(0,l.Wm)(h.V,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])})),{}}}),w=(0,x.J)("v-card-text");var V=t(7074),F=t(7284),B=t(9748),D=t(7689),E=t(6454),H=t(4203),z=t(6947),j=t(9680),Y=t(3632),L=t(8247),O=t(3664),Q=t(2716),R=t(2323);const G=(0,y.ev)()({name:"VCard",directives:{Ripple:F.H},props:{appendAvatar:String,appendIcon:I.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:I.lE,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...(0,E.m)(),...(0,g.l)(),...(0,A.f)(),...(0,H.x)(),...(0,z.c)(),...(0,D.fF)(),...(0,j.y)(),...(0,Y.F)(),...(0,L.I)(),...(0,O.GN)(),...(0,Q.Q)(),...(0,R.x$)(),...(0,B.bk)({variant:"elevated"})},setup(e,a){let{attrs:t,slots:s}=a;const{themeClasses:n}=(0,R.ER)(e),{borderClasses:i}=(0,E.P)(e),{colorClasses:d,colorStyles:r,variantClasses:p}=(0,B.c1)(e),{densityClasses:c}=(0,A.t)(e),{dimensionStyles:o}=(0,H.$)(e),{elevationClasses:u}=(0,z.Y)(e),{loaderClasses:v}=(0,D.U2)(e),{locationStyles:m}=(0,j.T)(e),{positionClasses:g}=(0,Y.K)(e),{roundedClasses:f}=(0,L.b)(e),y=(0,O.nB)(e,t),h=(0,l.Fl)((()=>!1!==e.link&&y.isLink.value)),x=(0,l.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||y.isClickable.value)));return(0,b.L)((()=>{const a=h.value?"a":e.tag,t=!(!s.title&&!e.title),b=!(!s.subtitle&&!e.subtitle),k=t||b,C=!!(s.append||e.appendAvatar||e.appendIcon),I=!!(s.prepend||e.prependAvatar||e.prependIcon),A=!(!s.image&&!e.image),F=k||I||C,E=!(!s.text&&!e.text);return(0,l.wy)((0,l.Wm)(a,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":x.value},n.value,i.value,d.value,c.value,u.value,v.value,g.value,f.value,p.value,e.class],style:[r.value,o.value,m.value,e.style],href:y.href.value,onClick:x.value&&y.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[A&&(0,l.Wm)("div",{key:"image",class:"v-card__image"},[s.image?(0,l.Wm)(W.z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},s.image):(0,l.Wm)(V.f,{key:"image-img",cover:!0,src:e.image},null)]),(0,l.Wm)(D.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:s.loader}),F&&(0,l.Wm)(S,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:s.item,prepend:s.prepend,title:s.title,subtitle:s.subtitle,append:s.append}),E&&(0,l.Wm)(w,{key:"text"},{default:()=>[s.text?.()??e.text]}),s.default?.(),s.actions&&(0,l.Wm)(_,null,{default:s.actions}),(0,B.Ux)(x.value,"v-card")]}),[[(0,l.Q2)("ripple"),x.value&&e.ripple]])})),{}}});var J=t(6560);const T=Symbol.for("vuetify:v-item-group"),U=(0,y.ev)()({name:"VItemGroup",props:{...(0,g.l)(),...(0,J.k4)({selectedClass:"v-item--selected"}),...(0,Q.Q)(),...(0,R.x$)()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const{themeClasses:s}=(0,R.ER)(e),{isSelected:n,select:i,next:d,prev:r,selected:p}=(0,J._v)(e,T);return()=>(0,l.Wm)(e.tag,{class:["v-item-group",s.value,e.class],style:e.style},{default:()=>[t.default?.({isSelected:n,select:i,next:d,prev:r,selected:p.value})]})}}),Z=(0,y.ev)()({name:"VItem",props:(0,J.YQ)(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:t}=a;const{isSelected:l,select:s,toggle:n,selectedClass:i,value:d,disabled:r}=(0,J.Yt)(e,T);return()=>t.default?.({isSelected:l.value,selectedClass:i.value,select:s,toggle:n,value:d.value,disabled:r.value})}}),$=e=>((0,l.dD)("data-v-3bdf67a9"),e=e(),(0,l.Cn)(),e),K={class:"graph"},P={class:"graph__header d-none d-md-flex d-lg-flex"},N={class:"graph__content"},q={style:{width:"100%"},class:"text-h4 text-blue justify-center align-center"},M={class:"graph__category-select"},X=$((()=>(0,l._)("div",{class:"text-h5"},"Choose category: ",-1))),ee={class:"text-h5 text-center graph__category"};var ae={__name:"dataGraph",setup(e){const a=(0,n.iH)(),t=(0,i.oR)(),d=(0,n.iH)([]),r=(0,n.iH)(),p=(0,l.Fl)((()=>t.getters.getTableItems)),c=(0,l.Fl)((()=>p.value.map((e=>e[r.value])))),o=(0,l.Fl)((()=>[...new Set(c.value)].map((e=>new Object({value:e,duplicateCount:c.value.filter((a=>a===e)).length})))));function u(){let e=[],a=[];o.value.forEach((t=>{t.duplicateCount>1&&(void 0!==t.value?e.push(t.value):e.push("undefined"),a.push(t.duplicateCount))})),f.value[0].data=a,g.value.xaxis.categories=e}function v(){let e=Object.keys(p.value[0]);e.shift(),d.value=e}const g=(0,n.iH)({chart:{type:"bar"},xaxis:{categories:[],title:{text:"Values"}},yaxis:{title:{text:"Amount of duplicates"}},responsive:[{breakpoint:900,options:{plotOptions:{bar:{horizontal:!0}}}}]}),f=(0,n.iH)([{data:[]}]);return(0,l.YP)(r,(()=>{u(),a.value.updateSeries((f.value[0].data,!0)),a.value.updateOptions({xaxis:{categories:g.value.xaxis.categories}})})),(0,l.bv)((()=>{v()})),(e,t)=>{const n=(0,l.up)("apexchart");return(0,l.wg)(),(0,l.iD)("div",K,[(0,l._)("div",P,[(0,l.Wm)(m)]),(0,l._)("div",N,[(0,l._)("div",q,[(0,l.Uk)((0,s.zw)(r.value)+" ",1),(0,l.Wm)(n,{class:"graph__chart",ref_key:"realTimeChart",ref:a,options:g.value,series:f.value},null,8,["options","series"])]),(0,l._)("div",M,[X,(0,l.Wm)(U,{class:"d-flex flex-column ma-5","selected-class":"bg-primary"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.value,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e},[(0,l.Wm)(Z,null,{default:(0,l.w5)((({selectedClass:a})=>[(0,l.Wm)(G,{class:(0,s.C_)(["d-flex align-center",a]),onClick:a=>r.value=e},{default:(0,l.w5)((()=>[(0,l._)("div",ee,(0,s.zw)(e),1)])),_:2},1032,["class","onClick"])])),_:2},1024)])))),128))])),_:1})])])])}}};const te=(0,o.Z)(ae,[["__scopeId","data-v-3bdf67a9"]]);var le=te;const se={class:"graph"};var ne={__name:"graphView",setup(e){return(e,a)=>((0,l.wg)(),(0,l.iD)("div",se,[(0,l.Wm)(le)]))}};const ie=(0,o.Z)(ne,[["__scopeId","data-v-74e08615"]]);var de=ie}}]);
//# sourceMappingURL=207.befcdba7.js.map
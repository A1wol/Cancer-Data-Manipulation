"use strict";(self["webpackChunkpros_project"]=self["webpackChunkpros_project"]||[]).push([[996],{4996:function(e,t,a){a.r(t),a.d(t,{default:function(){return re}});var l=a(6252),s=a(3577),n=a(2262),i=a(3907);const d={class:"header"},r=(0,l._)("div",{class:"header__title text-h4"}," Wisconsin cancer graph ",-1),p=[r];function c(e,t){return(0,l.wg)(),(0,l.iD)("div",d,p)}var o=a(3744);const u={},v=(0,o.Z)(u,[["render",c]]);var m=v,g=a(9e3),f=a(4405),y=a(6719),_=a(3099);const b=(0,y.ev)()({name:"VCardActions",props:(0,g.l)(),setup(e,t){let{slots:a}=t;return(0,f.AF)({VBtn:{variant:"text"}}),(0,_.L)((()=>(0,l.Wm)("div",{class:["v-card-actions",e.class],style:e.style},[a.default?.()]))),{}}});var h=a(2139),x=a(5988);const k=(0,x.J)("v-card-subtitle"),C=(0,x.J)("v-card-title");var W=a(875),I=a(6596),A=a(8942);const S=(0,y.ev)()({name:"VCardItem",props:{appendAvatar:String,appendIcon:I.lE,prependAvatar:String,prependIcon:I.lE,subtitle:String,title:String,...(0,g.l)(),...(0,A.f)()},setup(e,t){let{slots:a}=t;return(0,_.L)((()=>{const t=!(!e.prependAvatar&&!e.prependIcon),s=!(!t&&!a.prepend),n=!(!e.appendAvatar&&!e.appendIcon),i=!(!n&&!a.append),d=!(!e.title&&!a.title),r=!(!e.subtitle&&!a.subtitle);return(0,l.Wm)("div",{class:["v-card-item",e.class],style:e.style},[s&&(0,l.Wm)("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?(0,l.Wm)(W.z,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},a.prepend):t&&(0,l.Wm)(h.V,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),(0,l.Wm)("div",{class:"v-card-item__content"},[d&&(0,l.Wm)(C,{key:"title"},{default:()=>[a.title?.()??e.title]}),r&&(0,l.Wm)(k,{key:"subtitle"},{default:()=>[a.subtitle?.()??e.subtitle]}),a.default?.()]),i&&(0,l.Wm)("div",{key:"append",class:"v-card-item__append"},[a.append?(0,l.Wm)(W.z,{key:"append-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},a.append):n&&(0,l.Wm)(h.V,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])})),{}}}),w=(0,x.J)("v-card-text");var V=a(7074),H=a(7284),B=a(9748),D=a(7689),E=a(6454),F=a(4203),z=a(6947),j=a(9680),Y=a(3632),L=a(8247),O=a(3664),Q=a(2716),R=a(2323);const G=(0,y.ev)()({name:"VCard",directives:{Ripple:H.H},props:{appendAvatar:String,appendIcon:I.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:I.lE,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...(0,E.m)(),...(0,g.l)(),...(0,A.f)(),...(0,F.x)(),...(0,z.c)(),...(0,D.fF)(),...(0,j.y)(),...(0,Y.F)(),...(0,L.I)(),...(0,O.GN)(),...(0,Q.Q)(),...(0,R.x$)(),...(0,B.bk)({variant:"elevated"})},setup(e,t){let{attrs:a,slots:s}=t;const{themeClasses:n}=(0,R.ER)(e),{borderClasses:i}=(0,E.P)(e),{colorClasses:d,colorStyles:r,variantClasses:p}=(0,B.c1)(e),{densityClasses:c}=(0,A.t)(e),{dimensionStyles:o}=(0,F.$)(e),{elevationClasses:u}=(0,z.Y)(e),{loaderClasses:v}=(0,D.U2)(e),{locationStyles:m}=(0,j.T)(e),{positionClasses:g}=(0,Y.K)(e),{roundedClasses:f}=(0,L.b)(e),y=(0,O.nB)(e,a),h=(0,l.Fl)((()=>!1!==e.link&&y.isLink.value)),x=(0,l.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||y.isClickable.value)));return(0,_.L)((()=>{const t=h.value?"a":e.tag,a=!(!s.title&&!e.title),_=!(!s.subtitle&&!e.subtitle),k=a||_,C=!!(s.append||e.appendAvatar||e.appendIcon),I=!!(s.prepend||e.prependAvatar||e.prependIcon),A=!(!s.image&&!e.image),H=k||I||C,E=!(!s.text&&!e.text);return(0,l.wy)((0,l.Wm)(t,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":x.value},n.value,i.value,d.value,c.value,u.value,v.value,g.value,f.value,p.value,e.class],style:[r.value,o.value,m.value,e.style],href:y.href.value,onClick:x.value&&y.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[A&&(0,l.Wm)("div",{key:"image",class:"v-card__image"},[s.image?(0,l.Wm)(W.z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},s.image):(0,l.Wm)(V.f,{key:"image-img",cover:!0,src:e.image},null)]),(0,l.Wm)(D.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:s.loader}),H&&(0,l.Wm)(S,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:s.item,prepend:s.prepend,title:s.title,subtitle:s.subtitle,append:s.append}),E&&(0,l.Wm)(w,{key:"text"},{default:()=>[s.text?.()??e.text]}),s.default?.(),s.actions&&(0,l.Wm)(b,null,{default:s.actions}),(0,B.Ux)(x.value,"v-card")]}),[[(0,l.Q2)("ripple"),x.value&&e.ripple]])})),{}}});var J=a(6560);const T=Symbol.for("vuetify:v-item-group"),Z=(0,y.ev)()({name:"VItemGroup",props:{...(0,g.l)(),...(0,J.k4)({selectedClass:"v-item--selected"}),...(0,Q.Q)(),...(0,R.x$)()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{themeClasses:s}=(0,R.ER)(e),{isSelected:n,select:i,next:d,prev:r,selected:p}=(0,J._v)(e,T);return()=>(0,l.Wm)(e.tag,{class:["v-item-group",s.value,e.class],style:e.style},{default:()=>[a.default?.({isSelected:n,select:i,next:d,prev:r,selected:p.value})]})}}),$=(0,y.ev)()({name:"VItem",props:(0,J.YQ)(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:l,select:s,toggle:n,selectedClass:i,value:d,disabled:r}=(0,J.Yt)(e,T);return()=>a.default?.({isSelected:l.value,selectedClass:i.value,select:s,toggle:n,value:d.value,disabled:r.value})}}),K=e=>((0,l.dD)("data-v-6ef8e90a"),e=e(),(0,l.Cn)(),e),P={class:"graph"},U={class:"graph__header d-none d-md-flex d-lg-flex"},N={class:"graph__content"},q={style:{width:"100%"},class:"text-h4 text-blue justify-center align-center"},M={style:{"min-height":"50px"}},X={class:"graph__category-select"},ee=K((()=>(0,l._)("div",{class:"text-h5"},"Choose category: ",-1))),te={class:"text-h5 text-center graph__category"};var ae={__name:"dataGraph",setup(e){const t=(0,n.iH)(),a=(0,i.oR)(),d=(0,n.iH)([]),r=(0,n.iH)(),p=(0,n.iH)(a.getters.getTableItems),c=(0,l.Fl)((()=>p.value.map((e=>e[r.value])))),o=(0,l.Fl)((()=>[...new Set(c.value)].map((e=>new Object({value:e,duplicateCount:c.value.filter((t=>t===e)).length})))));function u(){let e=[],t=[];o.value.forEach((a=>{a.duplicateCount>1&&(void 0!==a.value?e.push(a.value):e.push("undefined"),t.push(a.duplicateCount))})),f.value[0].data=t,g.value.xaxis.categories=e}function v(){let e=Object.keys(p.value[0]);e.shift(),d.value=e}const g=(0,n.iH)({chart:{type:"bar"},xaxis:{categories:[],title:{text:"Values"}},yaxis:{title:{text:"Amount of duplicates"}},responsive:[{breakpoint:900,options:{plotOptions:{bar:{horizontal:!0}}}}]}),f=(0,n.iH)([{data:[]}]);return(0,l.YP)(r,(()=>{u(),t.value.updateSeries((f.value[0].data,!0)),t.value.updateOptions({xaxis:{categories:g.value.xaxis.categories}})})),(0,l.bv)((()=>{v()})),(e,a)=>{const n=(0,l.up)("apexchart");return(0,l.wg)(),(0,l.iD)("div",P,[(0,l._)("div",U,[(0,l.Wm)(m)]),(0,l._)("div",N,[(0,l._)("div",q,[(0,l._)("div",M,(0,s.zw)(r.value),1),(0,l.Wm)(n,{class:"graph__chart",ref_key:"realTimeChart",ref:t,options:g.value,series:f.value},null,8,["options","series"])]),(0,l._)("div",X,[ee,(0,l.Wm)(Z,{class:"d-flex flex-column ma-5","selected-class":"bg-primary"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.value,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e},[(0,l.Wm)($,null,{default:(0,l.w5)((({selectedClass:t})=>[(0,l.Wm)(G,{class:(0,s.C_)(["d-flex align-center",t]),onClick:t=>r.value=e},{default:(0,l.w5)((()=>[(0,l._)("div",te,(0,s.zw)(e),1)])),_:2},1032,["class","onClick"])])),_:2},1024)])))),128))])),_:1})])])])}}};const le=(0,o.Z)(ae,[["__scopeId","data-v-6ef8e90a"]]);var se=le;const ne={class:"graph"};var ie={__name:"graphView",setup(e){return(e,t)=>((0,l.wg)(),(0,l.iD)("div",ne,[(0,l.Wm)(se)]))}};const de=(0,o.Z)(ie,[["__scopeId","data-v-74e08615"]]);var re=de}}]);
//# sourceMappingURL=996.83d57d28.js.map
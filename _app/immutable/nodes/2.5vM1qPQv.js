import{t as k,a as E}from"../chunks/C6T5kEZ6.js";import"../chunks/DA9DkqfB.js";import{L as ee,b as te,s as B,h as y,A as ae,a as re,Q as T,a0 as le,c as ie,r as Y,d as L,g as P,D as se,e as z,f as F,p as ne,a1 as V,J as G,y as O,a2 as ve,a3 as fe,a4 as W,a5 as de,a6 as ce,I as oe,a7 as ue,m as _e,a8 as xe,a9 as he,B as me,w as pe,W as b,X as g,Y as D,o as ge,V as H}from"../chunks/Cc_DC3tT.js";import{s as X}from"../chunks/CAmCF7qm.js";import{i as M}from"../chunks/CAayzxyv.js";function q(a,e){return e}function be(a,e,t,i){for(var x=[],d=e.length,c=0;c<d;c++)ce(e[c].e,x,!0);var h=d>0&&x.length===0&&t!==null;if(h){var u=t.parentNode;oe(u),u.append(t),i.clear(),I(a,e[0].prev,e[d-1].next)}ue(x,()=>{for(var m=0;m<d;m++){var r=e[m];h||(i.delete(r.k),I(a,r.prev,r.next)),_e(r.e,!h)}})}function J(a,e,t,i,x,d=null){var c=a,h={flags:e,items:new Map,first:null};{var u=a;c=y?B(ae(u)):u.appendChild(ee())}y&&re();var m=null,r=!1,_=le(()=>{var l=t();return pe(l)?l:l==null?[]:G(l)});te(()=>{var l=T(_),o=l.length;if(r&&o===0)return;r=o===0;let n=!1;if(y){var A=c.data===ie;A!==(o===0)&&(c=Y(),B(c),L(!1),n=!0)}if(y){for(var w=null,v,p=0;p<o;p++){if(P.nodeType===8&&P.data===se){c=P,n=!0,L(!1);break}var N=l[p],s=i(N,p);v=K(P,h,w,null,N,s,p,x,e,t),h.items.set(s,v),w=v}o>0&&B(Y())}y||we(l,h,c,x,e,i,t),d!==null&&(o===0?m?z(m):m=F(()=>d(c)):m!==null&&ne(m,()=>{m=null})),n&&L(!0),T(_)}),y&&(c=P)}function we(a,e,t,i,x,d,c){var h=a.length,u=e.items,m=e.first,r=m,_,l=null,o=[],n=[],A,w,v,p;for(p=0;p<h;p+=1){if(A=a[p],w=d(A,p),v=u.get(w),v===void 0){var N=r?r.e.nodes_start:t;l=K(N,e,l,l===null?e.first:l.next,A,w,p,i,x,c),u.set(w,l),o=[],n=[],r=l.next;continue}if(ye(v,A,p),(v.e.f&V)!==0&&z(v.e),v!==r){if(_!==void 0&&_.has(v)){if(o.length<n.length){var s=n[0],f;l=s.prev;var C=o[0],R=o[o.length-1];for(f=0;f<o.length;f+=1)Q(o[f],s,t);for(f=0;f<n.length;f+=1)_.delete(n[f]);I(e,C.prev,R.next),I(e,l,C),I(e,R,s),r=s,l=R,p-=1,o=[],n=[]}else _.delete(v),Q(v,r,t),I(e,v.prev,v.next),I(e,v,l===null?e.first:l.next),I(e,l,v),l=v;continue}for(o=[],n=[];r!==null&&r.k!==w;)(r.e.f&V)===0&&(_??(_=new Set)).add(r),n.push(r),r=r.next;if(r===null)continue;v=r}o.push(v),l=v,r=v.next}if(r!==null||_!==void 0){for(var S=_===void 0?[]:G(_);r!==null;)(r.e.f&V)===0&&S.push(r),r=r.next;var Z=S.length;if(Z>0){var j=h===0?t:null;be(e,S,j,u)}}O.first=e.first&&e.first.e,O.last=l&&l.e}function ye(a,e,t,i){ve(a.v,e),a.i=t}function K(a,e,t,i,x,d,c,h,u,m){var r=(u&xe)!==0,_=(u&he)===0,l=r?_?fe(x):W(x):x,o=(u&de)===0?c:W(c),n={i:o,v:l,k:d,a:null,e:null,prev:t,next:i};try{return n.e=F(()=>h(a,l,o,m),y),n.e.prev=t&&t.e,n.e.next=i&&i.e,t===null?e.first=n:(t.next=n,t.e.next=n.e),i!==null&&(i.prev=n,i.e.prev=n.e),n}finally{}}function Q(a,e,t){for(var i=a.next?a.next.e.nodes_start:t,x=e?e.e.nodes_start:t,d=a.e.nodes_start;d!==i;){var c=me(d);x.before(d),d=c}}function I(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Ae(a,e,t){var i=a==null?"":""+a;return i===""?null:i}function Ee(a,e){return a==null?null:String(a)}function U(a,e,t,i,x,d){var c=a.__className;if(y||c!==t){var h=Ae(t);(!y||h!==a.getAttribute("class"))&&(h==null?a.removeAttribute("class"):a.className=h),a.__className=t}return d}function $(a,e,t,i){var x=a.__style;if(y||x!==e){var d=Ee(e);(!y||d!==a.getAttribute("style"))&&(d==null?a.removeAttribute("style"):a.style.cssText=d),a.__style=e}return i}var Te=k('<span class="text-white text-center w-full"><i class="fa fa-check w-full fill-current white"></i></span>'),ke=k('<span class="text-black text-center w-full"></span>'),Ne=k('<div class="w-1/6 align-center items-center align-middle content-center flex mx-2"><div class="w-full bg-gray-300 rounded items-center align-middle align-center flex-1"><div class="bg-green-400 text-xs leading-none py-1 text-center text-grey-darkest rounded "></div></div></div>'),Ie=k('<div class="flex-1 relative"><div><!></div> <div class="absolute top-12 left-1/2 -translate-x-1/2 text-center text-sm text-nowrap"> </div></div> <!>',1),Ce=k('<i class="fa fa-check text-white"></i>'),De=k('<span class="text-black"></span>'),Re=k('<div class="w-2 h-16 bg-gray-300 mx-auto rounded relative mb-2"><div class="absolute  w-full bg-green-400 rounded"></div></div>'),Pe=k('<div class="flex flex-col items-center"><div class="flex flex-col items-center"><div><!></div> <div class="text-sm text-center mb-2"> </div></div> <!></div>'),He=k('<div class="max-w-4xl mx-auto pb-4"><div class="hidden md:block"><div class="flex pb-3 mx-auto"></div></div> <div class="md:hidden flex justify-center min-h-screen items-center"><div class="max-w-xs w-full"></div></div></div>');function Me(a){const e=[{completed:!0,title:"Development Started",percentageToNext:50},{completed:!1,title:"Prototype"},{completed:!1,title:"Private Playtest"},{completed:!1,title:"Public Demo"},{completed:!1,title:"Early Access"}];var t=He(),i=b(t),x=b(i);J(x,5,()=>e,q,(h,u,m)=>{var r=Ie(),_=ge(r),l=b(_),o=b(l);{var n=s=>{var f=Te();E(s,f)},A=s=>{var f=ke();f.textContent=m+1,E(s,f)};M(o,s=>{T(u).completed?s(n):s(A,!1)})}g(l);var w=D(l,2),v=b(w,!0);g(w),g(_);var p=D(_,2);{var N=s=>{var f=Ne(),C=b(f),R=b(C);g(C),g(f),H(()=>$(R,`width: ${T(u).percentageToNext||0}%`)),E(s,f)};M(p,s=>{m<e.length-1&&s(N)})}H(()=>{U(l,1,`w-10 h-10 ${T(u).completed?"bg-green-400":"bg-white"} mx-auto rounded-full text-lg text-white flex items-center`),X(v,T(u).title)}),E(h,r)}),g(x),g(i);var d=D(i,2),c=b(d);J(c,5,()=>e,q,(h,u,m)=>{var r=Pe(),_=b(r),l=b(_),o=b(l);{var n=s=>{var f=Ce();E(s,f)},A=s=>{var f=De();f.textContent=m+1,E(s,f)};M(o,s=>{T(u).completed?s(n):s(A,!1)})}g(l);var w=D(l,2),v=b(w,!0);g(w),g(_);var p=D(_,2);{var N=s=>{var f=Re(),C=b(f);g(f),H(()=>$(C,`height: ${T(u).percentageToNext||0}%`)),E(s,f)};M(p,s=>{m<e.length-1&&s(N)})}g(r),H(()=>{U(l,1,`w-10 h-10 ${T(u).completed?"bg-green-400":"bg-white"} 
							   rounded-full flex items-center justify-center mb-1`),X(v,T(u).title)}),E(h,r)}),g(c),g(d),g(t),E(a,t)}var Se=k('<div class="min-h-screen flex flex-col w-full bg-neutral-900 text-white"><div class="mt-4 w-fit mx-auto flex flex-col items-center"><h1 class="text-6xl font-bold">PolyWorld</h1> <p class="text-lg ml-auto">Release date: TBA</p></div> <div class="mt-8 md:mt-32"><!></div></div>');function We(a){var e=Se(),t=D(b(e),2),i=b(t);Me(i),g(t),g(e),E(a,e)}export{We as component};

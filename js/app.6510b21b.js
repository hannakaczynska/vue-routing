(function(){"use strict";var e={6289:function(e,n,t){var r=t(9242),o=t(3396);function u(e,n,t,r,u,a){const s=(0,o.up)("the-navigation"),i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),(0,o._)("main",null,[(0,o.Wm)(i)]),(0,o._)("footer",null,[(0,o.Wm)(i,{name:"footer"})])],64)}function a(e,n){const t=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("nav",null,[(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Wm)(t,{to:"/teams"},{default:(0,o.w5)((()=>[(0,o.Uk)("Teams")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(t,{to:"/users"},{default:(0,o.w5)((()=>[(0,o.Uk)("Users")])),_:1})])])])])}var s=t(89);const i={},l=(0,s.Z)(i,[["render",a],["__scopeId","data-v-26204fb2"]]);var m=l,c={components:{TheNavigation:m},data(){return{teams:[{id:"t1",name:"Frontend Engineers",members:["u1","u2"]},{id:"t2",name:"Backend Engineers",members:["u1","u2","u3"]},{id:"t3",name:"Client Consulting",members:["u4","u5"]}],users:[{id:"u1",fullName:"Max Schwarz",role:"Engineer"},{id:"u2",fullName:"Praveen Kumar",role:"Engineer"},{id:"u3",fullName:"Julie Jones",role:"Engineer"},{id:"u4",fullName:"Alex Blackfield",role:"Consultant"},{id:"u5",fullName:"Marie Smith",role:"Consultant"}]}},provide(){return{teams:this.teams,users:this.users}}};const d=(0,s.Z)(c,[["render",u]]);var f=d,p=t(2483);function h(e,n,t,r,u,a){const s=(0,o.up)("router-view"),i=(0,o.up)("teams-item");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.teams,(e=>((0,o.wg)(),(0,o.j4)(i,{key:e.id,id:e.id,name:e.name,"member-count":e.members.length},null,8,["id","name","member-count"])))),128))])],64)}var v=t(7139);const g={class:"team-members"};function b(e,n,t,r,u,a){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("li",null,[(0,o._)("h3",null,(0,v.zw)(t.name),1),(0,o._)("div",g,(0,v.zw)(t.memberCount)+" Members",1),(0,o.Wm)(s,{to:a.teamMembersLink},{default:(0,o.w5)((()=>[(0,o.Uk)("View Members")])),_:1},8,["to"])])}var w={props:["id","name","memberCount"],computed:{teamMembersLink(){return{name:"team-members",params:{teamId:this.id},query:{}}}}};const _=(0,s.Z)(w,[["render",b],["__scopeId","data-v-214f8830"]]);var k=_,C={components:{TeamsItem:k},inject:["teams"]};const I=(0,s.Z)(C,[["render",h],["__scopeId","data-v-8bf64f42"]]);var y=I;function D(e,n,t,r,u,a){const s=(0,o.up)("user-item");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("button",{onClick:n[0]||(n[0]=(...e)=>a.confirmInput&&a.confirmInput(...e))},"Confirm"),(0,o._)("button",{onClick:n[1]||(n[1]=(...e)=>a.saveChanges&&a.saveChanges(...e))},"Save Changes"),(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.users,(e=>((0,o.wg)(),(0,o.j4)(s,{key:e.id,name:e.fullName,role:e.role},null,8,["name","role"])))),128))])],64)}t(7658);function j(e,n,t,r,u,a){return(0,o.wg)(),(0,o.iD)("li",null,[(0,o._)("h3",null,(0,v.zw)(t.name),1),(0,o._)("div",{class:(0,v.C_)(["role",a.roleClass])},(0,v.zw)(t.role),3)])}var O={props:["name","role"],computed:{roleClass(){return"Engineer"===this.role?"role--engineer":"Consultant"===this.role?"role--consultant":null}}};const U=(0,s.Z)(O,[["render",j],["__scopeId","data-v-8f671500"]]);var E=U,M={components:{UserItem:E},inject:["users"],data(){return{changesSaved:!1}},methods:{confirmInput(){this.$router.push("/teams")},saveChanges(){this.changesSaved=!0}},beforeRouteEnter(e,n,t){t()},beforeRouteLeave(e,n,t){if(this.changesSaved)t();else{const e=confirm("Are you sure? You got unsaved changes!");t(e)}}};const N=(0,s.Z)(M,[["render",D],["__scopeId","data-v-75f81cd3"]]);var T=N;function Z(e,n,t,r,u,a){const s=(0,o.up)("user-item"),i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("section",null,[(0,o._)("h2",null,(0,v.zw)(u.teamName),1),(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.members,(e=>((0,o.wg)(),(0,o.j4)(s,{key:e.id,name:e.fullName,role:e.role},null,8,["name","role"])))),128))]),(0,o.Wm)(i,{to:"/teams/t2"},{default:(0,o.w5)((()=>[(0,o.Uk)("Go to Team 2")])),_:1})])}var W={components:{UserItem:E},inject:["teams","users"],props:["teamId"],data(){return{teamName:"",members:[]}},methods:{loadTeamMembers(e){const n=this.teams.find((n=>n.id===e));if(n){const e=n.members,t=[];for(const n of e){const e=this.users.find((e=>e.id===n));e&&t.push(e)}this.members=t,this.teamName=n.name}}},created(){this.loadTeamMembers(this.teamId)},beforeRouteUpdate(e,n,t){t()},watch:{teamId(e){this.loadTeamMembers(e)}}};const x=(0,s.Z)(W,[["render",Z],["__scopeId","data-v-d5dc8ce2"]]);var Y=x;function z(e,n){const t=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("h2",null,[(0,o.Uk)(" Page not found! Maybe view our "),(0,o.Wm)(t,{to:"/teams"},{default:(0,o.w5)((()=>[(0,o.Uk)("Teams")])),_:1}),(0,o.Uk)("? ")])}const H={},S=(0,s.Z)(H,[["render",z]]);var A=S;function F(e,n){return(0,o.wg)(),(0,o.iD)("h2",null,"Teams Footer")}const P={},K=(0,s.Z)(P,[["render",F]]);var B=K;function L(e,n){return(0,o.wg)(),(0,o.iD)("h2",null,"Users Footer")}const R={},J=(0,s.Z)(R,[["render",L]]);var q=J;const G=(0,p.p7)({history:(0,p.PO)(),routes:[{path:"/",redirect:"/teams"},{name:"teams",path:"/teams",meta:{needsAuth:!0},components:{default:y,footer:B},children:[{name:"team-members",path:":teamId",component:Y,props:!0}]},{path:"/users",components:{default:T,footer:q},beforeEnter(e,n,t){t()}},{path:"/:notFound(.*)",component:A}],linkActiveClass:"active",scrollBehavior(e,n,t){return t||{left:0,top:0}}});G.beforeEach(((e,n,t)=>{e.meta.needsAuth&&t(),t()})),G.afterEach(((e,n)=>{console.log(e,n)}));var V=G;const $=(0,r.ri)(f);$.use(V),$.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={exports:{}};return e[r].call(u.exports,u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,u){if(!r){var a=1/0;for(m=0;m<e.length;m++){r=e[m][0],o=e[m][1],u=e[m][2];for(var s=!0,i=0;i<r.length;i++)(!1&u||a>=u)&&Object.keys(t.O).every((function(e){return t.O[e](r[i])}))?r.splice(i--,1):(s=!1,u<a&&(a=u));if(s){e.splice(m--,1);var l=o();void 0!==l&&(n=l)}}return n}u=u||0;for(var m=e.length;m>0&&e[m-1][2]>u;m--)e[m]=e[m-1];e[m]=[r,o,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,u,a=r[0],s=r[1],i=r[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(i)var m=i(t)}for(n&&n(r);l<a.length;l++)u=a[l],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(m)},r=self["webpackChunkvue_routing"]=self["webpackChunkvue_routing"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6289)}));r=t.O(r)})();
//# sourceMappingURL=app.6510b21b.js.map
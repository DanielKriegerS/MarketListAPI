import{b as d,d as v,e as C}from"./chunk-5B5UNRD7.js";import{Aa as r,Ha as i,eb as s,fb as c,la as o,ya as e,za as a}from"./chunk-FS25H43L.js";var l=class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=o({type:t,selectors:[["app-navbar"]],decls:15,vars:0,consts:[[1,"align-items-center","navbar","navbar-expand-lg","navbar-light"],["id","navbarContent",1,"container-fluid"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarContent","aria-controls","navbarContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarContent",1,"row","collapse","navbar-collapse"],[1,"navbar-nav","mx-auto","mb-2","col-lg-12"],[1,"nav-item","col-6","col-lg-4","mx-auto"],["data-bs-toggle","collapse","data-bs-target","#navbarContent","routerLink","/",1,"nav-link"],["data-bs-toggle","collapse","data-bs-target","#navbarContent","routerLink","/all-lists",1,"nav-link"],["data-bs-toggle","collapse","data-bs-target","#navbarContent","routerLink","/finished-market-list-all",1,"nav-link"]],template:function(n,b){n&1&&(e(0,"nav",0)(1,"div",1)(2,"button",2),r(3,"span",3),a(),e(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),i(8,"Criar Lista"),a()(),e(9,"li",6)(10,"a",8),i(11,"Efetuar Compra"),a()(),e(12,"li",6)(13,"a",9),i(14,"Ver Compras"),a()()()()()())},dependencies:[v],styles:["#navbarContent[_ngcontent-%COMP%]{text-align:center}#navbarContent[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{margin-top:1em;font-weight:700;background-color:#2b2a0880;align-self:center}@media screen and (min-width: 768px){#navbarContent[_ngcontent-%COMP%]{margin:auto;align-items:center;padding:0}#navbarContent[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{margin:0;justify-items:center}#navbarContent[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{background-color:unset}#navbarContent[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{background-color:#2b2a0880}}"]})};var p=class t{title="market-list";static \u0275fac=function(n){return new(n||t)};static \u0275cmp=o({type:t,selectors:[["app-root"]],decls:3,vars:0,consts:[["id","content"]],template:function(n,b){n&1&&(e(0,"div",0),r(1,"app-navbar")(2,"router-outlet"),a())},dependencies:[d,l],encapsulation:2})};var g=[{path:"",loadComponent:()=>import("./chunk-AJC6NT4T.js").then(t=>t.MarketListCreateComponent)},{path:"all-lists",loadComponent:()=>import("./chunk-XFQ53LSW.js").then(t=>t.MarketListAllComponent)},{path:"market-list/:id",loadComponent:()=>import("./chunk-IOZ7SIO5.js").then(t=>t.MarketListComponent)},{path:"finished-market-list-all",loadComponent:()=>import("./chunk-XFQ53LSW.js").then(t=>t.MarketListAllComponent)},{path:"finished-market-list/:id",loadComponent:()=>import("./chunk-5QDXZXBP.js").then(t=>t.FinishedMarketListComponent)},{path:"**",redirectTo:"",pathMatch:"full"}];c(p,{providers:[s(),C(g)]}).catch(t=>console.error(t));

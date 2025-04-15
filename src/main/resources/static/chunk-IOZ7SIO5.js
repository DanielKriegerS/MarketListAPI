import{a as V,b as E,c as N,d as Q}from"./chunk-6ZNCNGEG.js";import{a as O,b as q}from"./chunk-SCMIJDPG.js";import{a as z}from"./chunk-OFUMYXYW.js";import{a as F,c as T}from"./chunk-5B5UNRD7.js";import{$a as L,Da as w,Ea as d,Fa as l,Ga as f,Ha as c,Ia as y,Ja as I,La as k,Ma as M,Na as x,V as u,W as p,_a as S,cb as P,fa as a,ha as g,la as C,qa as b,wa as h,xa as v,ya as s,za as o}from"./chunk-FS25H43L.js";function B(m,t){if(m&1&&(s(0,"h5",22),c(1),o()),m&2){let i=l().$implicit;a(),y(i.name)}}function D(m,t){if(m&1){let i=w();s(0,"input",23),x("ngModelChange",function(n){u(i);let r=l().index,_=l();return M(_.rawNameInput[r],n)||(_.rawNameInput[r]=n),p(n)}),o()}if(m&2){let i=l().index,e=l();k("ngModel",e.rawNameInput[i])}}function A(m,t){if(m&1){let i=w();s(0,"div",9)(1,"div",10)(2,"div"),b(3,B,2,1,"h5",11)(4,D,1,1,"input",12),o(),s(5,"div",13)(6,"button",14),d("click",function(){let n=u(i).index,r=l();return p(r.toggleEdit(n))}),c(7," Editar "),o(),s(8,"button",15),d("click",function(){let n=u(i).index,r=l();return p(r.confirmEdit(n))}),c(9),o(),s(10,"button",16),d("click",function(){let n=u(i).$implicit,r=l();return p(r.toggleItemSelection(n))}),c(11),o()()(),s(12,"div",17)(13,"div",18)(14,"label",19),c(15,"Quantidade:"),o(),s(16,"input",20),d("focus",function(){let n=u(i).index,r=l();return p(r.handleQuantityFocus(n))})("blur",function(){let n=u(i).index,r=l();return p(r.handleQuantityBlur(n))})("input",function(n){let r=u(i).index,_=l();return p(_.updateQuantityInput(r,n))}),o()(),s(17,"div",18)(18,"label",19),c(19,"Valor:"),o(),s(20,"input",21),x("ngModelChange",function(n){let r=u(i).index,_=l();return M(_.priceInputs[r],n)||(_.priceInputs[r]=n),p(n)}),d("focus",function(){let n=u(i).index,r=l();return p(r.handlePriceFocus(n))})("blur",function(){let n=u(i).index,r=l();return p(r.handlePriceBlur(n))})("input",function(n){let r=u(i).index,_=l();return p(_.updatePriceInput(r,n))}),o()()()()}if(m&2){let i=t.$implicit,e=t.index,n=l();a(),v("editing",n.editState[e]),a(2),h("ngIf",!n.editState[e]),a(),h("ngIf",n.editState[e]),a(2),h("disabled",n.editState[e]),a(2),h("disabled",!n.editState[e]),a(),I(" ",n.editState[e]?"Confirmar":"Comprado"," "),a(),v("active",n.selectedItems.has(i)),a(),I(" ",n.selectedItems.has(i)?"Desmarcar":"Selecionar"," "),a(3),f("for","quantity-",i.name,""),a(2),f("id","quantity-",i.name,""),h("value",n.getFormattedQuantity(e)||0)("disabled",!n.editState[e]),a(2),f("for","price-",i.name,""),a(2),f("id","price-",i.name,""),k("ngModel",n.priceInputs[e]),h("disabled",!n.editState[e])}}var R=class m{constructor(t,i,e,n){this.route=t;this.router=i;this.marketListService=e;this.finishedMarketListService=n}lista;itemId;editState={};rawPriceInput={};rawQuantityInput={};rawNameInput={};selectedItems=new Set;totalPrice={};priceInputs={};ngOnInit(){let t=this.route.snapshot.paramMap.get("id");t&&(this.itemId=t,this.marketListService.getMarketListById(t).subscribe(i=>{this.lista=i,this.lista?.items.forEach((e,n)=>{e.price=e.price??0,e.quantity=e.quantity??0,this.rawPriceInput[n]=e.price,this.rawQuantityInput[n]=e.quantity.toString(),this.rawNameInput[n]=e.name,this.priceInputs[n]=this.getFormattedPrice(n)})}))}toggleEdit(t){if(this.editState[t]=!this.editState[t],this.editState[t]||!this.lista)return;let i=this.lista.items[t];if(!i)return;if(!this.rawNameInput[t]?.trim()){alert("O nome deve ser preenchido"),this.rawNameInput[t]=i.name;return}let e=this.rawPriceInput[t]||0,n=parseInt(this.rawQuantityInput[t])||0;i.price=e,i.quantity=n,i.name=this.rawNameInput[t].trim(),this.rawPriceInput[t]=parseFloat(e.toFixed(2)),this.rawQuantityInput[t]=n.toString(),this.updateTotal()}confirmEdit(t){this.toggleEdit(t),this.updateTotal()}updatePriceInput(t,i){let e=i.target.value.replace(/[^0-9,]/g,"").replace(",",".");this.rawPriceInput[t]=parseFloat(e)||0,this.updateTotal()}updateQuantityInput(t,i){let e=i.target.value.replace(/[^0-9]/g,"");this.rawQuantityInput[t]=e,this.updateTotal()}handlePriceFocus(t){this.priceInputs[t]=this.rawPriceInput[t].toString().replace(".",",")}handlePriceBlur(t){let i=this.priceInputs[t].replace(",",".");this.rawPriceInput[t]=parseFloat(i)||0,this.priceInputs[t]=this.getFormattedPrice(t)}handleQuantityFocus(t){this.rawQuantityInput[t]==="0"&&(this.rawQuantityInput[t]="")}handleQuantityBlur(t){this.rawQuantityInput[t]||(this.rawQuantityInput[t]="0")}getFormattedPrice(t){return`R$ ${(this.rawPriceInput[t]??0).toFixed(2).replace(".",",")}`}updateNameInput(t,i){this.rawNameInput[t]=i?.target.value}parseNumber(t){return parseFloat(t)||0}formatNumber(t){return Number(t.toFixed(2))}getFormattedQuantity(t){return this.rawQuantityInput[t]}addItem(){let t={name:"Novo Item",price:0,quantity:0};if(this.lista){this.lista.items.push(t);let i=this.lista.items.length-1;this.rawNameInput[i]=t.name,this.rawPriceInput[i]=0,this.rawQuantityInput[i]=t.quantity.toString()}}toggleItemSelection(t){this.selectedItems.has(t)?this.selectedItems.delete(t):this.selectedItems.add(t)}removeItems(){this.lista&&(this.lista.items=this.lista.items.filter(t=>!this.selectedItems.has(t)),this.selectedItems.clear(),this.rawNameInput={},this.rawPriceInput={},this.rawQuantityInput={},this.priceInputs={},this.lista.items.forEach((t,i)=>{this.rawNameInput[i]=t.name,this.rawPriceInput[i]=parseFloat(t.price.toFixed(2)),this.rawQuantityInput[i]=t.quantity.toString(),this.priceInputs[i]=this.getFormattedPrice(i)}),this.updateTotal())}calculateTotal(){let t=0;return this.lista&&this.lista.items.forEach((i,e)=>{let n=this.rawPriceInput[e],r=parseInt(this.rawQuantityInput[e])||0;r>0&&(t+=n*r)}),this.formatNumber(t)}updateTotal(){if(this.lista){let t=this.calculateTotal();this.lista.totalValue=t}}saveList(){if(!this.lista||this.lista.items.length===0){alert("N\xE3o h\xE1 itens na lista para salvar.");return}this.lista.id?this.marketListService.updateMarketList(this.lista.id,this.lista).subscribe(t=>{alert("Lista salva com sucesso!")},t=>{console.error("Erro ao atualizar a lista:",t),alert("Erro ao atualizar a lista.")}):this.marketListService.createMarketList()}finalizeShopping(){if(!this.lista||this.lista.items.length===0){alert("N\xE3o h\xE1 itens na lista para finalizar a compra.");return}if(this.lista.items.filter(e=>!e.name.trim()||!e.quantity||!e.price).length>0){alert("Todos os itens precisam ter nome, quantidade e pre\xE7o v\xE1lidos.");return}let i={id:this.lista.id,description:this.lista.description,items:this.lista.items,finishDate:new Date().toISOString(),totalValue:this.lista.items.reduce((e,n)=>e+n.quantity*n.price,0)};this.finishedMarketListService.saveFinishedMarketList(i).subscribe({next:()=>{this.itemId&&this.marketListService.finishMarketList(this.itemId).subscribe(()=>{},e=>{console.error("Erro ao remover lista das abertas:",e)}),alert("Compra finalizada com sucesso!"),this.router.navigate(["/"])},error:()=>{alert("Erro ao finalizar a compra. Tente novamente.")}})}static \u0275fac=function(i){return new(i||m)(g(F),g(T),g(q),g(z))};static \u0275cmp=C({type:m,selectors:[["app-market-list"]],decls:17,vars:3,consts:[[1,"container","mt-4","text-center"],[1,"list-group","mt-3"],["id","total-value",1,"w-50","mb-0"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"mt-4","d-grid","gap-3"],[1,"btn","btn-outline-primary","btn-lg",3,"click"],[1,"btn","btn-outline-danger","btn-lg",3,"click"],[1,"btn","btn-primary","btn-lg",3,"click"],[1,"btn","btn-success","btn-lg",3,"click"],[1,"list-group-item"],[1,"d-flex","justify-content-between","align-items-center"],["class","mb-0",4,"ngIf"],["type","text","class","form-control",3,"ngModel","ngModelChange",4,"ngIf"],[1,"btn-group"],[1,"btn","btn-primary","btn-sm",3,"click","disabled"],[1,"btn","btn-success","btn-sm",3,"click","disabled"],[1,"btn","btn-danger","btn-sm",3,"click"],[1,"mt-2","d-flex","flex-column","gap-2"],[1,"d-flex","align-items-center","gap-2"],[1,"form-label","mb-0",2,"width","100px",3,"for"],["type","number",1,"form-control","w-50",3,"focus","blur","input","id","value","disabled"],["type","text",1,"form-control","w-50",3,"ngModelChange","focus","blur","input","id","ngModel","disabled"],[1,"mb-0"],["type","text",1,"form-control",3,"ngModelChange","ngModel"]],template:function(i,e){i&1&&(s(0,"div",0)(1,"h2"),c(2),o(),s(3,"div",1)(4,"div",2)(5,"h6"),c(6),o()(),b(7,A,21,22,"div",3),s(8,"div",4)(9,"button",5),d("click",function(){return e.addItem()}),c(10,"Adicionar Item"),o(),s(11,"button",6),d("click",function(){return e.removeItems()}),c(12,"Remover Itens"),o(),s(13,"button",7),d("click",function(){return e.saveList()}),c(14,"Salvar"),o(),s(15,"button",8),d("click",function(){return e.finalizeShopping()}),c(16,"Finalizar Compras"),o()()()()),i&2&&(a(2),y(e.lista==null?null:e.lista.description),a(4),I("Total: R$",(e.lista==null?null:e.lista.totalValue)||"0.00",""),a(),h("ngForOf",e.lista==null?null:e.lista.items))},dependencies:[P,S,L,Q,V,E,N,O],styles:["#total-value[_ngcontent-%COMP%]{background-color:#e6e6dccc;color:#000}.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{background-color:#05275a4d;color:#7cbdc9ab;font-weight:800}@media screen and (min-width: 768px){.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{background-color:unset}}@media screen and (max-width: 768px){.d-flex.align-items-center[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto;align-items:center;gap:10px}.editing[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:200px}.editing[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:5px;width:100px}.editing[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}}"]})};export{R as MarketListComponent};

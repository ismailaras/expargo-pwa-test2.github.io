(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{AxNX:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var i=n("mrSG"),o=n("Mky/");class r{}var c=n("fXoL"),a=n("TEn/"),s=n("Ymxs"),d=n("e8h1"),b=n("H+bZ");let l=(()=>{class e{constructor(e){this.apiService=e}createPaymentByIyzico(e){return this.apiService.post("/payment/iyzico",e)}}return e.\u0275fac=function(t){return new(t||e)(c.Tb(b.a))},e.\u0275prov=c.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=n("Nm8O"),g=n("qfBg"),h=n("ofXK"),m=n("3Pt+"),p=n("64T9"),f=n("jhN1");let O=(()=>{class e{constructor(e){this.sanitized=e}transform(e){return this.sanitized.bypassSecurityTrustHtml(e)}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(f.b))},e.\u0275pipe=c.Ib({name:"sanitizeHtml",type:e,pure:!0}),e})();function y(e,t){1&e&&c.Kb(0,"ion-icon",31)}function P(e,t){1&e&&c.Kb(0,"ion-icon",32)}function v(e,t){if(1&e){const e=c.Qb();c.Pb(0,"ion-grid"),c.Pb(1,"ion-row"),c.Pb(2,"ion-col",5),c.Pb(3,"ion-item",6),c.Pb(4,"ion-label"),c.Pb(5,"strong"),c.uc(6),c.ac(7,"currency"),c.Ob(),c.Ob(),c.Kb(8,"ion-icon",7),c.Ob(),c.Ob(),c.Pb(9,"ion-col",5),c.Pb(10,"ion-item",6),c.Pb(11,"ion-label"),c.Pb(12,"strong"),c.uc(13),c.ac(14,"currency"),c.Ob(),c.Ob(),c.Kb(15,"ion-icon",8),c.Ob(),c.Ob(),c.Pb(16,"ion-col",9),c.Pb(17,"ion-card",1),c.Pb(18,"ion-card-content"),c.uc(19," Hal-haz\u0131rda balans\u0131n\u0131zdak\u0131 v\u0259saitl\u0259r yuxar\u0131da g\xf6st\u0259rilmi\u015fdir. V\u0259sait art\u0131rmaq \xfc\xe7\xfcn a\u015fa\u011f\u0131da g\xf6st\u0259ril\u0259n xanalar\u0131 doldurub T\u0259sdiql\u0259 d\xfcym\u0259sini s\u0131x\u0131n. "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(20,"ion-card"),c.Pb(21,"ion-card-content"),c.Pb(22,"form",10,11),c.Xb("ngSubmit",(function(){c.oc(e);const t=c.mc(23);return c.Zb(2).checkout(t)})),c.Pb(24,"ion-grid"),c.Pb(25,"ion-row"),c.Pb(26,"ion-col",9),c.Pb(27,"ion-item"),c.Kb(28,"ion-icon",12),c.Pb(29,"ion-input",13,14),c.Xb("ngModelChange",(function(t){return c.oc(e),c.Zb(2).checkoutData.full_name=t})),c.Ob(),c.Ob(),c.Ob(),c.Pb(31,"ion-col",9),c.Pb(32,"ion-item"),c.Kb(33,"ion-icon",12),c.Pb(34,"ion-input",15,16),c.Xb("ngModelChange",(function(t){return c.oc(e),c.Zb(2).checkoutData.card_number=t})),c.Ob(),c.Ob(),c.Ob(),c.Pb(36,"ion-col",5),c.Pb(37,"ion-item"),c.Kb(38,"ion-icon",12),c.Pb(39,"ion-input",17,18),c.Xb("ngModelChange",(function(t){return c.oc(e),c.Zb(2).checkoutData.exp_date=t})),c.Ob(),c.Ob(),c.Ob(),c.Pb(41,"ion-col",5),c.Pb(42,"ion-item"),c.Kb(43,"ion-icon",12),c.Pb(44,"ion-input",19,20),c.Xb("ngModelChange",(function(t){return c.oc(e),c.Zb(2).checkoutData.cvc=t})),c.Ob(),c.Ob(),c.Ob(),c.Pb(46,"ion-col",9),c.Pb(47,"ion-item"),c.Kb(48,"ion-icon",12),c.Pb(49,"ion-input",21,22),c.Xb("ngModelChange",(function(t){return c.oc(e),c.Zb(2).checkoutData.amount=t})),c.Ob(),c.sc(51,y,1,0,"ion-icon",23),c.sc(52,P,1,0,"ion-icon",24),c.Ob(),c.Ob(),c.Pb(53,"ion-radio-group",25),c.Xb("ngModelChange",(function(t){return c.oc(e),c.Zb(2).checkoutData.currency=t})),c.Pb(54,"ion-row"),c.Pb(55,"ion-col"),c.Pb(56,"ion-item",6),c.Kb(57,"ion-icon",26),c.Pb(58,"ion-label"),c.uc(59,"USD"),c.Ob(),c.Kb(60,"ion-radio",27),c.Ob(),c.Ob(),c.Pb(61,"ion-col"),c.Pb(62,"ion-item",6),c.Kb(63,"ion-icon",28),c.Pb(64,"ion-label"),c.uc(65,"TRY"),c.Ob(),c.Kb(66,"ion-radio",29),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(67,"ion-col",9),c.Pb(68,"ion-button",30),c.uc(69," T\u0259sdiql\u0259 "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()}if(2&e){const e=c.mc(23),t=c.Zb(2);c.zb(6),c.vc(c.bc(7,21,t.user.wallet_usd)),c.zb(7),c.vc(c.cc(14,23,t.user.wallet_try,"\u20ba")),c.zb(15),c.gc("ios","person-circle-outline")("md","person-circle-sharp"),c.zb(1),c.gc("ngModel",t.checkoutData.full_name),c.zb(4),c.gc("ios","card-outline")("md","card-sharp"),c.zb(1),c.gc("ngModel",t.checkoutData.card_number),c.zb(4),c.gc("ios","calendar-outline")("md","calendar-sharp"),c.zb(1),c.gc("ngModel",t.checkoutData.exp_date),c.zb(4),c.gc("ios","lock-closed-outline")("md","lock-closed-sharp"),c.zb(1),c.gc("ngModel",t.checkoutData.cvc),c.zb(4),c.gc("ios","cash-outline")("md","cash-sharp"),c.zb(1),c.gc("ngModel",t.checkoutData.amount),c.zb(2),c.gc("ngIf","USD"===t.checkoutData.currency),c.zb(1),c.gc("ngIf","TRY"===t.checkoutData.currency),c.zb(1),c.gc("ngModel",t.checkoutData.currency),c.zb(15),c.gc("disabled",e.invalid)}}function k(e,t){if(1&e&&(c.Pb(0,"ion-card"),c.Kb(1,"iframe",33),c.ac(2,"sanitizeHtml"),c.Ob()),2&e){const e=c.Zb(2);c.zb(1),c.gc("srcdoc",c.bc(2,1,e.decodedHtml),c.pc)}}function z(e,t){if(1&e&&(c.Pb(0,"ion-content"),c.sc(1,v,70,26,"ion-grid",4),c.sc(2,k,3,3,"ion-card",4),c.Ob()),2&e){const e=c.Zb();c.zb(1),c.gc("ngIf",""===e.decodedHtml),c.zb(1),c.gc("ngIf",""!==e.decodedHtml)}}function M(e,t){1&e&&(c.Pb(0,"ion-content"),c.Pb(1,"ion-grid",34),c.Pb(2,"ion-row",35),c.Pb(3,"ion-col",36),c.Kb(4,"ion-spinner",37),c.Ob(),c.Ob(),c.Ob(),c.Ob())}let x=(()=>{class e{constructor(e,t,n,i,c,a,s){this.modalController=e,this.toaster=t,this.alertCtrl=n,this.storage=i,this.paymentService=c,this.helper=a,this.userService=s,this.user=new o.a,this.decodedHtml="",this.checkoutData=new r,this.isLoading=!1,this.isLoadingFor3ds=!1}onMessage(e){this.receiveMessage(e)}ngOnInit(){this.getUser(),this.checkoutData.amount=this.amount,this.checkoutData.currency=this.currency}getUser(){this.isLoading=!0,this.storage.get("access_token").then(e=>{this.userService.getDetail(this.helper.decodeToken(e).identity).subscribe(e=>{this.isLoading=!1,this.user=e},e=>{this.isLoading=!1,this.dismiss(),this.showAlert("Bilinm\u0259y\u0259n bir x\u0259ta ba\u015f verdi. Z\u0259hm\u0259t olmasa, daha sonra t\u0259krar yoxlay\u0131n.")})})}dismiss(){this.modalController.dismiss({dismissed:!0})}showAlert(e){this.alertCtrl.create({header:"X\u0259ta a\u015fkarland\u0131",message:e,buttons:["Tamam"]}).then(e=>e.present())}checkout(e){this.isLoading=!0,this.storage.get("access_token").then(e=>{this.checkoutData.user_id=this.helper.decodeToken(e).identity,this.paymentService.createPaymentByIyzico(this.checkoutData).subscribe(e=>{this.isLoading=!1;try{const t=JSON.parse(e);this.isLoading=!0,this.delay(1e3).then(e=>{this.decodedHtml=window.atob(t.html),this.isLoading=!1})}catch(t){t instanceof SyntaxError&&(this.decodedHtml=e)}},e=>{this.dismiss(),this.showAlert("\xd6d\u0259ni\u015f u\u011furlu olmad\u0131. Z\u0259hm\u0259t olmasa, t\u0259krar yoxlay\u0131n.")})})}delay(e){return Object(i.a)(this,void 0,void 0,(function*(){yield new Promise(t=>setTimeout(()=>t(),e)).then(()=>console.log("added"))}))}receiveMessage(e){console.log(e),"success"===e.data?this.toaster.success("\xd6d\u0259ni\u015f u\u011furlu oldu!"):this.toaster.danger("\xd6d\u0259ni\u015f u\u011fursuz oldu!"),this.delay(5e3).then(e=>{this.dismiss()})}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(a.fb),c.Jb(s.a),c.Jb(a.a),c.Jb(d.b),c.Jb(l),c.Jb(u.b),c.Jb(g.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-checkout"]],hostBindings:function(e,t){1&e&&c.Xb("message",(function(e){return t.onMessage(e)}),!1,c.nc)},inputs:{amount:"amount",currency:"currency"},decls:9,vars:3,consts:[[3,"translucent"],["color","tertiary"],["slot","end"],[3,"click"],[4,"ngIf"],["size","6"],["lines","none"],["slot","start","color","primary","src","../../assets/icon/dollar.svg"],["slot","start","color","primary","src","../../assets/icon/turkish_lira.svg"],["size","12"],[3,"ngSubmit"],["checkoutForm","ngForm"],["slot","start",3,"ios","md"],["inputmode","text","required","","placeholder","Kart \xfcz\u0259rind\u0259ki ad","name","full_name","type","text",3,"ngModel","ngModelChange"],["full_name","ngModel"],["inputmode","text","required","","minlength","19","mask","0000-0000-0000-0000","placeholder","Kart n\xf6mr\u0259si","name","card_number","type","text",3,"ngModel","ngModelChange"],["card_number","ngModel"],["inputmode","text","required","","placeholder","AA / \u0130\u0130","name","exp_date","minlength","7","mask","00 / 00","type","text",3,"ngModel","ngModelChange"],["exp_date","ngModel"],["inputmode","text","required","","placeholder","CVC","name","cvc","minlength","3","mask","000","maxlength","3","type","text",3,"ngModel","ngModelChange"],["cvc","ngModel"],["inputmode","number","required","","placeholder","M\u0259bl\u0259\u011f","pattern","^(0*[1-9][0-9]*(\\.[0-9]+)?|0+\\.[0-9]*[1-9][0-9]*)$","name","amount","type","number",3,"ngModel","ngModelChange"],["amount","ngModel"],["slot","end","style","color: #757575","src","../../assets/icon/dollar.svg",4,"ngIf"],["slot","end","style","color: #757575","src","../../assets/icon/turkish_lira.svg",4,"ngIf"],["name","currency","required","",3,"ngModel","ngModelChange"],["slot","start","src","../../assets/icon/dollar.svg",2,"color","#757575"],["mode","ios","value","USD"],["slot","start","src","../../assets/icon/turkish_lira.svg",2,"color","#757575"],["mode","ios","value","TRY"],["color","tertiary","expand","block","type","submit",1,"ion-margin-top",2,"text-transform","capitalize",3,"disabled"],["slot","end","src","../../assets/icon/dollar.svg",2,"color","#757575"],["slot","end","src","../../assets/icon/turkish_lira.svg",2,"color","#757575"],["width","100%","height","500",2,"border","none",3,"srcdoc"],[2,"height","100%"],[1,"ion-justify-content-center","ion-align-items-center",2,"height","100%"],[1,"ion-text-center"],["color","primary"]],template:function(e,t){1&e&&(c.Pb(0,"ion-header",0),c.Pb(1,"ion-toolbar",1),c.Pb(2,"ion-buttons",2),c.Pb(3,"ion-button",3),c.Xb("click",(function(){return t.dismiss()})),c.uc(4," Ba\u011fla "),c.Ob(),c.Ob(),c.Pb(5,"ion-title"),c.uc(6,"Balans art\u0131r"),c.Ob(),c.Ob(),c.Ob(),c.sc(7,z,3,2,"ion-content",4),c.sc(8,M,5,0,"ion-content",4)),2&e&&(c.gc("translucent",!1),c.zb(7),c.gc("ngIf",!t.isLoading),c.zb(1),c.gc("ngIf",t.isLoading))},directives:[a.t,a.bb,a.h,a.g,a.ab,h.k,a.p,a.s,a.N,a.o,a.x,a.B,a.u,a.i,a.j,m.m,m.g,m.h,a.w,a.nb,m.l,m.f,m.i,m.c,p.a,m.b,a.hb,m.j,a.J,a.mb,a.I,a.kb,a.W],pipes:[h.c,O],styles:[""]}),e})()},GaRv:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("fXoL"),o=n("TEn/"),r=n("ndxW"),c=n("ofXK");function a(e,t){1&e&&i.Kb(0,"div",13)}function s(e,t){if(1&e&&(i.Pb(0,"ion-row"),i.Pb(1,"ion-col",6),i.Pb(2,"div",7),i.Kb(3,"ion-icon",8),i.Ob(),i.sc(4,a,1,0,"div",9),i.Ob(),i.Pb(5,"ion-col",10),i.Pb(6,"div"),i.Pb(7,"ion-item",11),i.Pb(8,"ion-label"),i.Pb(9,"ion-text",12),i.uc(10),i.Ob(),i.Ob(),i.Pb(11,"small"),i.Pb(12,"ion-text",12),i.uc(13),i.ac(14,"date"),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&e){const e=t.$implicit,n=i.Zb();i.zb(4),i.gc("ngIf",n.states.length-1!==n.states.indexOf(e)),i.zb(6),i.wc(" ",n.stateService.getOrderStateInAzerbaijani(e.state.toString())," "),i.zb(3),i.wc(" ",i.dc(14,3,e.created_date,"dd MMMM yyyy","+4","az-Latn")," ")}}let d=(()=>{class e{constructor(e,t){this.modalController=e,this.stateService=t}ngOnInit(){}dismiss(){this.modalController.dismiss({dismissed:!0})}}return e.\u0275fac=function(t){return new(t||e)(i.Jb(o.fb),i.Jb(r.a))},e.\u0275cmp=i.Db({type:e,selectors:[["app-order-tracking"]],inputs:{states:"states"},decls:10,vars:2,consts:[[3,"translucent"],["color","tertiary"],["slot","end"],[3,"click"],[1,"ion-padding"],[4,"ngFor","ngForOf"],["size","2",1,"ion-no-padding","ion-no-margin"],[1,"circle"],["color","light","name","airplane"],["class","stick",4,"ngIf"],["size","10",1,"ion-no-padding","ion-no-margin"],["lines","full",1,"ion-text-wrap"],["color","primary"],[1,"stick"]],template:function(e,t){1&e&&(i.Pb(0,"ion-header",0),i.Pb(1,"ion-toolbar",1),i.Pb(2,"ion-buttons",2),i.Pb(3,"ion-button",3),i.Xb("click",(function(){return t.dismiss()})),i.uc(4," Ba\u011fla "),i.Ob(),i.Ob(),i.Pb(5,"ion-title"),i.uc(6,"Sifari\u015f h\u0259r\u0259k\u0259tl\u0259ri"),i.Ob(),i.Ob(),i.Ob(),i.Pb(7,"ion-content",4),i.Pb(8,"ion-grid"),i.sc(9,s,15,8,"ion-row",5),i.Ob(),i.Ob()),2&e&&(i.gc("translucent",!1),i.zb(9),i.gc("ngForOf",t.states))},directives:[o.t,o.bb,o.h,o.g,o.ab,o.p,o.s,c.j,o.N,o.o,o.u,c.k,o.x,o.B,o.Y],pipes:[c.e],styles:[".circle[_ngcontent-%COMP%]{height:50px;width:50px;background-color:var(--ion-color-primary);border-radius:50%;padding-top:17px}.circle[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{margin-left:18px}.stick[_ngcontent-%COMP%]{height:50px;border-left:2px solid var(--ion-color-primary);margin-left:25px}"]}),e})()},"Mky/":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));class i{}},kVqo:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("fXoL"),o=n("H+bZ");let r=(()=>{class e{constructor(e){this.apiService=e}getOrders(e){return this.apiService.get("/orders/"+e)}getOrder(e){return this.apiService.get("/order/"+e)}addOrders(e){return this.apiService.post("/orders",e)}setOrdersToReadyToOrder(e,t,n){return this.apiService.post("/order/set_ready_to_order",{orders:e,amount:t,user_id:n})}}return e.\u0275fac=function(t){return new(t||e)(i.Tb(o.a))},e.\u0275prov=i.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},ndxW:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("fXoL");let o=(()=>{class e{constructor(){}getPackageStateInAzerbaijani(e){let t="";return"Declarations"===e?t="B\u0259yan edilib":"NotCompleted"===e?t="B\u0259yan edilm\u0259lidir":"ExternalStorage"===e?t="Xarici anbardad\u0131r":"OnWay"===e?t="Yoldad\u0131r":"CustomsClearance"===e?t="G\xf6mr\xfck yoxlan\u0131\u015f\u0131":"InternalStorage"===e?t="Yerli anbardad\u0131r":"Delivered"===e&&(t="T\u0259hvil edilib"),t}getOrderStateInAzerbaijani(e){let t="";return"Created"===e?t="\u018flav\u0259 edilib":"Paid"===e?t="\xd6d\u0259ni\u015f edilib":"Ordered"===e?t="Sifari\u015f edilib":"Updated"===e?t="T\u0259nziml\u0259nib":"NotCompleted"===e?t="D\xfcz\u0259li\u015f g\xf6zl\u0259nilir":"Deleted"===e?t="L\u0259v\u011f edilib":"Incomplete"===e?t="Natamam \xf6d\u0259ni\u015f":"ReadyToOrder"===e&&(t="Sifari\u015f edil\u0259c\u0259k"),t}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},qfBg:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("fXoL"),o=n("H+bZ"),r=n("e8h1"),c=n("TEn/"),a=n("Nm8O");let s=(()=>{class e{constructor(e,t,n,i){this.apiService=e,this.storage=t,this.plt=n,this.helper=i,this.a="",this.currentUserId()}currentUserId(){this.storage.get("access_token").then(e=>{this.userId=this.helper.decodeToken(e).identity})}getDetail(e){return this.apiService.get("/user/"+e)}getDetailWithoutUserId(){return this.currentUserId(),this.apiService.get("/user/"+this.userId)}update(e){}}return e.\u0275fac=function(t){return new(t||e)(i.Tb(o.a),i.Tb(r.b),i.Tb(c.ib),i.Tb(a.b))},e.\u0275prov=i.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"y+FX":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=function(e){return e[e.Created=0]="Created",e[e.NotCompleted=1]="NotCompleted",e[e.Updated=2]="Updated",e[e.Paid=3]="Paid",e[e.Ordered=4]="Ordered",e[e.Deleted=5]="Deleted",e[e.Incomplete=6]="Incomplete",e[e.ReadyToOrder=7]="ReadyToOrder",e}({})}}]);
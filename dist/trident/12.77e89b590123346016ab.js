(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{LVab:function(t,n,e){"use strict";e.r(n),e.d(n,"ReportModule",(function(){return M}));var r=e("ofXK"),o=e("PCNd"),i=e("tyNb"),c=e("3Pt+"),a=e("fXoL"),b=e("B+r4");let s=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Gb({type:t,selectors:[["app-arrow-back"]],decls:4,vars:0,consts:[[1,"icon-back"],["src","../../../../assets/icons/Arrow-left.svg","alt","Arrow-left"]],template:function(t,n){1&t&&(a.Sb(0,"div",0),a.Nb(1,"img",1),a.Sb(2,"strong"),a.Bc(3,"Institutions"),a.Rb(),a.Rb())},styles:["strong[_ngcontent-%COMP%]{font-size:20px;font-weight:700;padding-right:40px}img[_ngcontent-%COMP%]{padding-right:23px}@media (max-width:767px){.icon-back[_ngcontent-%COMP%]{margin-left:-198px;margin-bottom:45px}}"]}),t})();var p=e("OzZK"),l=e("RwU8"),d=e("C2AL"),f=e("ocnv"),u=e("yamu");function h(t,n){if(1&t&&(a.Sb(0,"div",2),a.Sb(1,"div",3),a.Sb(2,"h1"),a.Bc(3),a.Rb(),a.Sb(4,"span"),a.Bc(5),a.Rb(),a.Sb(6,"p"),a.Bc(7),a.Rb(),a.Rb(),a.Rb()),2&t){const t=n.$implicit;a.ic("nzSpan",6),a.zb(3),a.Cc(t.title),a.zb(2),a.Cc(t.subTitle),a.zb(2),a.Cc(t.price)}}function m(t,n){if(1&t&&(a.Sb(0,"div",2),a.Sb(1,"div",3),a.Sb(2,"h1"),a.Bc(3),a.Rb(),a.Sb(4,"h2"),a.Bc(5),a.Rb(),a.Rb(),a.Rb()),2&t){const t=n.$implicit;a.ic("nzSpan",6),a.zb(3),a.Cc(t.title),a.zb(2),a.Cc(t.total)}}let z=(()=>{class t{constructor(){this.summary=[]}ngOnInit(){this.summary=new Array(3).fill(0).map(()=>({title:"Total to date",subTitle:"Monetary Amount Earned",price:"R000",total:"00"}))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Gb({type:t,selectors:[["app-report-summary"]],decls:3,vars:2,consts:[["nz-row","","nzJustify","space-around","nzAlign","middle","nzType","flex"],["nz-col","",3,"nzSpan",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan"],[1,"inner-box"]],template:function(t,n){1&t&&(a.Sb(0,"div",0),a.zc(1,h,8,4,"div",1),a.zc(2,m,6,3,"div",1),a.Rb()),2&t&&(a.zb(1),a.ic("ngForOf",n.summary),a.zb(1),a.ic("ngForOf",n.summary))},directives:[b.c,r.k,b.a],styles:[".inner-box[_ngcontent-%COMP%]{width:235px;height:150px;margin-left:20px;margin-top:20px;background-color:#fff}h1[_ngcontent-%COMP%]{font-size:20px;padding-left:20px;padding-top:13px}h2[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{color:#707070}h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{padding-left:20px}p[_ngcontent-%COMP%]{color:#76c000;font-size:40px}"]}),t})();var g=e("JA5x"),S=e("rMZv");function C(t,n){if(1&t){const t=a.Tb();a.Sb(0,"tr"),a.Sb(1,"td",12),a.Zb("nzCheckedChange",(function(e){a.qc(t);const r=n.$implicit;return a.dc().onItemChecked(r.id,e)})),a.Rb(),a.Sb(2,"td"),a.Bc(3),a.Rb(),a.Sb(4,"td"),a.Bc(5),a.Rb(),a.Sb(6,"td"),a.Bc(7),a.Rb(),a.Sb(8,"td"),a.Bc(9),a.Rb(),a.Sb(10,"td"),a.Bc(11),a.Rb(),a.Sb(12,"td"),a.Bc(13),a.Rb(),a.Sb(14,"td"),a.Sb(15,"button",13),a.Bc(16,"View"),a.Rb(),a.Rb(),a.Rb()}if(2&t){const t=n.$implicit,e=a.dc();a.zb(1),a.ic("nzChecked",e.setOfCheckedId.has(t.id)),a.zb(2),a.Cc(t.nameOfInstitution),a.zb(2),a.Cc(t.regNo),a.zb(2),a.Cc(t.institutionType),a.zb(2),a.Cc(t.noOfLicenses),a.zb(2),a.Cc(t.startDate),a.zb(2),a.Cc(t.endDate),a.zb(2),a.ic("nzType","primary")}}const R=function(){return{x:"920px"}};let O=(()=>{class t{constructor(){this.checked=!1,this.indeterminate=!1,this.listOfCurrentPageData=[],this.listOfData=[],this.setOfCheckedId=new Set,this.listOfSelection=[{text:"Select All Row",onSelect(){this.onAllChecked(!0)}},{text:"Select Odd Row",onSelect(){this.listOfCurrentPageData.forEach((t,n)=>this.updateCheckedSet(t.id,n%2!=0)),this.refreshCheckedStatus()}},{text:"Select Even Row",onSelect(){this.listOfCurrentPageData.forEach((t,n)=>this.updateCheckedSet(t.id,n%2==0)),this.refreshCheckedStatus()}}]}filter(){}ngOnInit(){this.listOfData=new Array(5).fill(0).map((t,n)=>({id:n,nameOfInstitution:"Name of institution",regNo:"#12334",institutionType:"institution Type",noOfLicenses:"500>",startDate:"DD-MM-YYYY",endDate:"DD-MM-YYYY"}))}updateCheckedSet(t,n){n?this.setOfCheckedId.add(t):this.setOfCheckedId.delete(t)}onItemChecked(t,n){this.updateCheckedSet(t,n),this.refreshCheckedStatus()}onAllChecked(t){this.listOfCurrentPageData.forEach(n=>this.updateCheckedSet(n.id,t)),this.refreshCheckedStatus()}onCurrentPageDataChange(t){this.listOfCurrentPageData=t,this.refreshCheckedStatus()}refreshCheckedStatus(){this.checked=this.listOfCurrentPageData.every(t=>this.setOfCheckedId.has(t.id)),this.indeterminate=this.listOfCurrentPageData.some(t=>this.setOfCheckedId.has(t.id))&&!this.checked}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Gb({type:t,selectors:[["app-report-table"]],decls:33,vars:8,consts:[["nz-row","","nzJustify","space-around","nzAlign","middle",1,"table-container"],["nz-col","","nzSpan","24"],["nz-row",""],["nz-col","","nzSpan","16"],["nzErrorTip","Please input your username!"],["type","text","placeholder","Search by"],["nz-col","","nzSpan","8",1,"btn-group-filter"],["nz-button","",3,"nzType","click"],["nzShowSizeChanger","",3,"nzScroll","nzData","nzCurrentPageDataChange"],["rowSelectionTable",""],[3,"nzSelections","nzChecked","nzIndeterminate","nzCheckedChange"],[4,"ngFor","ngForOf"],[3,"nzChecked","nzCheckedChange"],["nz-button","",1,"btn-view",3,"nzType"]],template:function(t,n){if(1&t&&(a.Sb(0,"div",0),a.Sb(1,"nz-card",1),a.Sb(2,"div",2),a.Sb(3,"div",3),a.Sb(4,"nz-form-item"),a.Sb(5,"nz-form-control",4),a.Nb(6,"input",5),a.Rb(),a.Rb(),a.Rb(),a.Sb(7,"div",6),a.Sb(8,"nz-form-item"),a.Sb(9,"nz-form-control"),a.Sb(10,"button",7),a.Zb("click",(function(){return n.filter()})),a.Bc(11,"FILTER BY"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(12,"nz-table",8,9),a.Zb("nzCurrentPageDataChange",(function(t){return n.onCurrentPageDataChange(t)})),a.Sb(14,"thead"),a.Sb(15,"tr"),a.Sb(16,"th",10),a.Zb("nzCheckedChange",(function(t){return n.checked=t}))("nzCheckedChange",(function(t){return n.onAllChecked(t)})),a.Rb(),a.Sb(17,"th"),a.Bc(18,"Name of Institution"),a.Rb(),a.Sb(19,"th"),a.Bc(20,"Reg no"),a.Rb(),a.Sb(21,"th"),a.Bc(22,"Institution Type"),a.Rb(),a.Sb(23,"th"),a.Bc(24,"No of licences"),a.Rb(),a.Sb(25,"th"),a.Bc(26,"Start Date"),a.Rb(),a.Sb(27,"th"),a.Bc(28,"End Date"),a.Rb(),a.Sb(29,"th"),a.Bc(30,"Action"),a.Rb(),a.Rb(),a.Rb(),a.Sb(31,"tbody"),a.zc(32,C,17,8,"tr",11),a.Rb(),a.Rb(),a.Rb(),a.Rb()),2&t){const t=a.pc(13);a.zb(10),a.ic("nzType","primary"),a.zb(2),a.ic("nzScroll",a.kc(7,R))("nzData",n.listOfData),a.zb(4),a.ic("nzSelections",n.listOfSelection)("nzChecked",n.checked)("nzIndeterminate",n.indeterminate),a.zb(16),a.ic("ngForOf",t.data)}},directives:[b.c,g.a,b.a,f.c,f.a,p.a,l.a,d.a,S.b,S.h,S.i,S.a,S.f,S.g,S.d,r.k,S.e],styles:[".btn-view[_ngcontent-%COMP%]{width:100%!important;border:none!important;border:none;font-weight:700;background-color:#fc0!important;color:#1a1a1a;border-radius:22px;height:43px!important}.btn-view[_ngcontent-%COMP%]:hover{background-color:#fff!important;color:#1a1a1a;border:1px solid #fc0!important}.btn-group-filter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none!important;float:right;background-color:#d6d6d6!important;color:#707070}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{color:#707070!important;font-weight:400}nz-card[_ngcontent-%COMP%]{margin-top:20px}@media (max-width:767px){.table-container[_ngcontent-%COMP%]{margin-left:-263px}.btn-group-filter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100px!important}.btn-group-filter[_ngcontent-%COMP%]{margin-left:5px}}"]}),t})();const y=function(){return{xs:20,sm:16,md:24,lg:23}};let k=(()=>{class t{constructor(t,n){this._formBuilder=t,this._router=n}ngOnInit(){this.initializeForm()}filter(){this.saving=!0}initializeForm(){this.form=this._formBuilder.group({filterStartDate:["",[c.s.required]],filterEndDate:["",[c.s.required]],type:["",[c.s.required]],licences:["",[c.s.required]]}),this.saving=!1}}return t.\u0275fac=function(n){return new(n||t)(a.Mb(c.e),a.Mb(i.c))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-reports"]],decls:39,vars:22,consts:[["nz-row",""],["nz-col","",3,"nzSpan"],["nz-col","","nzOffset","6",3,"nzSpan"],["nz-button","",1,"btn-export-report",3,"nzType"],["nz-button","",1,"btn-print-report",3,"nzType"],["nz-row","","nzJustify","space-around","nzAlign","middle","nzType","flex"],[3,"formGroup"],["nz-row","",3,"nzGutter"],["type","text","formControlName","filterStartDate","placeholder","Filter Date",1,"login-input"],["label","Filter Date",3,"control","submitting"],["type","text","formControlName","filterEndDate","placeholder","Filter Date",1,"login-input"],["type","text","formControlName","type","placeholder","Type",1,"login-input"],["label","Type",3,"control","submitting"],["type","text","formControlName","licences","placeholder","licences",1,"login-input"],["label","Licences",3,"control","submitting"],["nz-button","",3,"nzType","click"]],template:function(t,n){1&t&&(a.Sb(0,"div",0),a.Sb(1,"div",1),a.Nb(2,"app-arrow-back"),a.Rb(),a.Sb(3,"div",2),a.Sb(4,"button",3),a.Bc(5,"EXPORT REPORT"),a.Rb(),a.Rb(),a.Sb(6,"div",1),a.Sb(7,"button",4),a.Bc(8,"PRINT REPORT"),a.Rb(),a.Rb(),a.Rb(),a.Sb(9,"div",5),a.Sb(10,"form",6),a.Sb(11,"div",7),a.Sb(12,"div",1),a.Sb(13,"nz-form-item"),a.Sb(14,"nz-form-control"),a.Nb(15,"input",8),a.Nb(16,"app-form-control-error",9),a.Rb(),a.Rb(),a.Rb(),a.Sb(17,"div",1),a.Sb(18,"nz-form-item"),a.Sb(19,"nz-form-control"),a.Nb(20,"input",10),a.Nb(21,"app-form-control-error",9),a.Rb(),a.Rb(),a.Rb(),a.Sb(22,"div",1),a.Sb(23,"nz-form-item"),a.Sb(24,"nz-form-control"),a.Nb(25,"input",11),a.Nb(26,"app-form-control-error",12),a.Rb(),a.Rb(),a.Rb(),a.Sb(27,"div",1),a.Sb(28,"nz-form-item"),a.Sb(29,"nz-form-control"),a.Nb(30,"input",13),a.Nb(31,"app-form-control-error",14),a.Rb(),a.Rb(),a.Rb(),a.Sb(32,"div",1),a.Sb(33,"nz-form-item"),a.Sb(34,"nz-form-control"),a.Sb(35,"button",15),a.Zb("click",(function(){return n.filter()})),a.Bc(36,"APPLY FILTER BY"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Nb(37,"app-report-summary"),a.Nb(38,"app-report-table")),2&t&&(a.zb(1),a.ic("nzSpan",6),a.zb(2),a.ic("nzSpan",6),a.zb(1),a.ic("nzType","primary"),a.zb(2),a.ic("nzSpan",6),a.zb(1),a.ic("nzType","primary"),a.zb(3),a.ic("formGroup",n.form),a.zb(1),a.ic("nzGutter",a.kc(21,y)),a.zb(1),a.ic("nzSpan",6),a.zb(4),a.ic("control",n.form.get("emailAddress"))("submitting",n.saving),a.zb(1),a.ic("nzSpan",6),a.zb(4),a.ic("control",n.form.get("emailAddress"))("submitting",n.saving),a.zb(1),a.ic("nzSpan",6),a.zb(4),a.ic("control",n.form.get("type"))("submitting",n.saving),a.zb(1),a.ic("nzSpan",6),a.zb(4),a.ic("control",n.form.get("licences"))("submitting",n.saving),a.zb(1),a.ic("nzSpan",6),a.zb(3),a.ic("nzType","primary"))},directives:[b.c,b.a,s,p.a,l.a,d.a,c.u,c.m,c.h,f.c,f.a,c.d,c.l,c.g,u.a,z,O],styles:[".btn-print-report[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{border:none;height:43px!important}.btn-print-report[_ngcontent-%COMP%]{margin-left:22px;font-weight:700;background-color:#fc0!important;color:#1a1a1a;border-radius:22px}.btn-print-report[_ngcontent-%COMP%]:hover{background-color:#fff!important;color:#1a1a1a;border:1px solid #fc0!important}"]}),t})();const v=[{path:"",component:e("swpJ").a,children:[{path:"reports",component:k}]}];let x=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(n){return new(n||t)},imports:[[i.g.forChild(v)],i.g]}),t})();var P=e("bE2y"),w=e("TaO5");let M=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(n){return new(n||t)},imports:[[r.c,x,S.c,c.i,c.q,p.c,w.b,P.c,i.g,f.e,g.b,b.b,o.a]]}),t})()}}]);
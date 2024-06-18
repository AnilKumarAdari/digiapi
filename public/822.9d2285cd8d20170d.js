"use strict";(self.webpackChunkangular_15_example=self.webpackChunkangular_15_example||[]).push([[822],{3822:(pe,_,m)=>{m.r(_),m.d(_,{AccountModule:()=>fe});var n=m(433),u=m(6895),s=m(7859),e=m(8256),d=m(4153);let T=(()=>{class t{constructor(r,i){this.router=r,this.accountService=i,this.accountService.accountValue&&this.router.navigate(["/"])}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(s.F0),e.Y36(d.BR))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:11,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-lg-4","mt-lg-5","logo-card"],[1,"text-center","mt-5",2,"font-size","x-large"],["xmlns","http://www.w3.org/2000/svg","width","50","height","50","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-bag-plus-fill"],["fill-rule","evenodd","d","M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z"],[1,"text-center","mt-2","fs-2"],[1,"col-lg-6","mt-5"],[1,"card","m-3"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),e.O4$(),e.TgZ(4,"svg",4),e._UZ(5,"path",5),e.qZA()(),e.kcU(),e.TgZ(6,"p",6),e._uU(7,"Digital Health Card"),e.qZA()(),e.TgZ(8,"div",7)(9,"div",8),e._UZ(10,"router-outlet"),e.qZA()()()())},dependencies:[s.lC],encapsulation:2}),t})();var f=m(590);function w(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function q(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is invalid"),e.qZA())}function C(t,o){if(1&t&&(e.TgZ(0,"div",15),e.YNc(1,w,2,0,"div",16),e.YNc(2,q,2,0,"div",16),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",r.f.email.errors.required),e.xp6(1),e.Q6J("ngIf",r.f.email.errors.email)}}function A(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function x(t,o){if(1&t&&(e.TgZ(0,"div",15),e.YNc(1,A,2,0,"div",16),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",r.f.password.errors.required)}}function U(t,o){1&t&&e._UZ(0,"span",17)}const h=function(t){return{"is-invalid":t}};let I=(()=>{class t{constructor(r,i,a,c,v){this.formBuilder=r,this.route=i,this.router=a,this.accountService=c,this.alertService=v,this.submitting=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({email:["",[n.kI.required,n.kI.email]],password:["",n.kI.required]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.accountService.login(this.f.email.value,this.f.password.value).pipe((0,f.P)()).subscribe({next:()=>{this.router.navigateByUrl(this.route.snapshot.queryParams.returnUrl||"/")},error:r=>{this.alertService.error(r),this.submitting=!1}}))}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(n.qu),e.Y36(s.gz),e.Y36(s.F0),e.Y36(d.BR),e.Y36(d.c9))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:24,vars:11,consts:[[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"form-label"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"row"],[1,"mb-3","col"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","../register",1,"btn","btn-link"],[1,"mb-3","col","text-end"],["routerLink","../forgot-password",1,"btn","btn-link","pe-0"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(r,i){1&r&&(e.TgZ(0,"h3",0),e._uU(1,"Login"),e.qZA(),e.TgZ(2,"div",1)(3,"form",2),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"Email"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,C,3,2,"div",6),e.qZA(),e.TgZ(9,"div",3)(10,"label",4),e._uU(11,"Password"),e.qZA(),e._UZ(12,"input",7),e.YNc(13,x,2,1,"div",6),e.qZA(),e.TgZ(14,"div",8)(15,"div",9)(16,"button",10),e.YNc(17,U,1,0,"span",11),e._uU(18," Login "),e.qZA(),e.TgZ(19,"a",12),e._uU(20,"Register"),e.qZA()(),e.TgZ(21,"div",13)(22,"a",14),e._uU(23,"Forgot Password?"),e.qZA()()()()()),2&r&&(e.xp6(3),e.Q6J("formGroup",i.form),e.xp6(4),e.Q6J("ngClass",e.VKq(7,h,i.submitted&&i.f.email.errors)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.email.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(9,h,i.submitted&&i.f.password.errors)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.password.errors),e.xp6(3),e.Q6J("disabled",i.submitting),e.xp6(1),e.Q6J("ngIf",i.submitting))},dependencies:[u.mk,u.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,s.rH],encapsulation:2}),t})();var Z=m(9026);function J(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Last Name is required"),e.qZA())}function P(t,o){if(1&t&&(e.TgZ(0,"div",23),e.YNc(1,J,2,0,"div",24),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",r.f.name.errors.required)}}function Y(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function y(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Email must be a valid email address "),e.qZA())}function S(t,o){if(1&t&&(e.TgZ(0,"div",23),e.YNc(1,Y,2,0,"div",24),e.YNc(2,y,2,0,"div",24),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",r.f.email.errors.required),e.xp6(1),e.Q6J("ngIf",r.f.email.errors.email)}}function k(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Role is required"),e.qZA())}function R(t,o){if(1&t&&(e.TgZ(0,"div",23),e.YNc(1,k,2,0,"div",24),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",r.f.role.errors.required)}}function Q(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function N(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Password must be at least 6 characters "),e.qZA())}function V(t,o){if(1&t&&(e.TgZ(0,"div",23),e.YNc(1,Q,2,0,"div",24),e.YNc(2,N,2,0,"div",24),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",r.f.password.errors.required),e.xp6(1),e.Q6J("ngIf",r.f.password.errors.minlength)}}function F(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Confirm Password is required "),e.qZA())}function L(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Passwords must match "),e.qZA())}function B(t,o){if(1&t&&(e.TgZ(0,"div",23),e.YNc(1,F,2,0,"div",24),e.YNc(2,L,2,0,"div",24),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",r.f.confirmPassword.errors.required),e.xp6(1),e.Q6J("ngIf",r.f.confirmPassword.errors.mustMatch)}}function E(t,o){1&t&&(e.TgZ(0,"div",23),e._uU(1," Accept Ts & Cs is required "),e.qZA())}function K(t,o){1&t&&e._UZ(0,"span",25)}const p=function(t){return{"is-invalid":t}};let M=(()=>{class t{constructor(r,i,a,c,v){this.formBuilder=r,this.route=i,this.router=a,this.accountService=c,this.alertService=v,this.submitting=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({name:["",n.kI.required],email:["",[n.kI.required,n.kI.email]],password:["",[n.kI.required,n.kI.minLength(6)]],role:["user",n.kI.required],confirmPassword:["",n.kI.required],acceptTerms:[!1,n.kI.requiredTrue]},{validator:(0,Z.Yf)("password","confirmPassword")})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.accountService.register({name:this.form.value.name,email:this.form.value.email,password:this.form.value.password,role:this.form.value.role}).pipe((0,f.P)()).subscribe({next:()=>{this.alertService.success("Registration successful, please check your email for verification instructions",{keepAfterRouteChange:!0}),this.router.navigate(["../login"],{relativeTo:this.route})},error:r=>{this.alertService.error(r),this.submitting=!1}}))}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(n.qu),e.Y36(s.gz),e.Y36(s.F0),e.Y36(d.BR),e.Y36(d.c9))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:49,vars:27,consts:[[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"mb-3","col-5"],[1,"form-label"],["type","text","formControlName","name",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"mb-3","col"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["name","role","formControlName","role","id","role",1,"form-control",3,"ngClass"],["value","user"],["value","manager"],["value","admin"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],[1,"mb-3","form-check"],["type","checkbox","formControlName","acceptTerms","id","acceptTerms",1,"form-check-input",3,"ngClass"],["for","acceptTerms",1,"form-check-label"],[1,"mb-3"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","../login","href","",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(r,i){1&r&&(e.TgZ(0,"h3",0),e._uU(1,"Register"),e.qZA(),e.TgZ(2,"div",1)(3,"form",2),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(4,"div",3)(5,"div",4)(6,"label",5),e._uU(7,"Name"),e.qZA(),e._UZ(8,"input",6),e.YNc(9,P,2,1,"div",7),e.qZA()(),e.TgZ(10,"div",3)(11,"div",8)(12,"label",5),e._uU(13,"Email"),e.qZA(),e._UZ(14,"input",9),e.YNc(15,S,3,2,"div",7),e.qZA(),e.TgZ(16,"div",8)(17,"label",5),e._uU(18,"Role"),e.qZA(),e.TgZ(19,"select",10)(20,"option",11),e._uU(21,"User"),e.qZA(),e.TgZ(22,"option",12),e._uU(23,"Manager"),e.qZA(),e.TgZ(24,"option",13),e._uU(25,"Admin"),e.qZA()(),e.YNc(26,R,2,1,"div",7),e.qZA()(),e.TgZ(27,"div",3)(28,"div",8)(29,"label",5),e._uU(30,"Password"),e.qZA(),e._UZ(31,"input",14),e.YNc(32,V,3,2,"div",7),e.qZA(),e.TgZ(33,"div",8)(34,"label",5),e._uU(35,"Confirm Password"),e.qZA(),e._UZ(36,"input",15),e.YNc(37,B,3,2,"div",7),e.qZA()(),e.TgZ(38,"div",16),e._UZ(39,"input",17),e.TgZ(40,"label",18),e._uU(41,"Accept Terms & Conditions"),e.qZA(),e.YNc(42,E,2,0,"div",7),e.qZA(),e.TgZ(43,"div",19)(44,"button",20),e.YNc(45,K,1,0,"span",21),e._uU(46," Register "),e.qZA(),e.TgZ(47,"a",22),e._uU(48,"Cancel"),e.qZA()()()()),2&r&&(e.xp6(3),e.Q6J("formGroup",i.form),e.xp6(5),e.Q6J("ngClass",e.VKq(15,p,i.submitted&&i.f.name.errors)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.name.errors),e.xp6(5),e.Q6J("ngClass",e.VKq(17,p,i.submitted&&i.f.email.errors)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.email.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(19,p,i.submitted&&i.f.role.errors)),e.xp6(7),e.Q6J("ngIf",i.submitted&&i.f.role.errors),e.xp6(5),e.Q6J("ngClass",e.VKq(21,p,i.submitted&&i.f.password.errors)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.password.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(23,p,i.submitted&&i.f.confirmPassword.errors)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.confirmPassword.errors),e.xp6(2),e.Q6J("ngClass",e.VKq(25,p,i.submitted&&i.f.acceptTerms.errors)),e.xp6(3),e.Q6J("ngIf",i.submitted&&i.f.acceptTerms.errors),e.xp6(2),e.Q6J("disabled",i.submitting),e.xp6(1),e.Q6J("ngIf",i.submitting))},dependencies:[u.mk,u.O5,n._Y,n.YN,n.Kr,n.Fj,n.Wl,n.EJ,n.JJ,n.JL,n.sg,n.u,s.rH],encapsulation:2}),t})();function H(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Verifying... "),e.qZA())}function z(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Verification failed, you can also verify your account using the "),e.TgZ(2,"a",3),e._uU(3,"forgot password"),e.qZA(),e._uU(4," page. "),e.qZA())}var g=(()=>{return(t=g||(g={}))[t.Verifying=0]="Verifying",t[t.Failed=1]="Failed",g;var t})();let O=(()=>{class t{constructor(r,i,a,c){this.route=r,this.router=i,this.accountService=a,this.alertService=c,this.EmailStatus=g,this.emailStatus=g.Verifying}ngOnInit(){const r=this.route.snapshot.queryParams.token;this.router.navigate([],{relativeTo:this.route,replaceUrl:!0}),this.accountService.verifyEmail(r).pipe((0,f.P)()).subscribe({next:()=>{this.alertService.success("Verification successful, you can now login",{keepAfterRouteChange:!0}),this.router.navigate(["../login"],{relativeTo:this.route})},error:()=>{this.emailStatus=g.Failed}})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(s.gz),e.Y36(s.F0),e.Y36(d.BR),e.Y36(d.c9))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:5,vars:2,consts:[[1,"card-header"],[1,"card-body"],[4,"ngIf"],["routerLink","forgot-password"]],template:function(r,i){1&r&&(e.TgZ(0,"h3",0),e._uU(1,"Verify Email"),e.qZA(),e.TgZ(2,"div",1),e.YNc(3,H,2,0,"div",2),e.YNc(4,z,5,0,"div",2),e.qZA()),2&r&&(e.xp6(3),e.Q6J("ngIf",i.emailStatus==i.EmailStatus.Verifying),e.xp6(1),e.Q6J("ngIf",i.emailStatus==i.EmailStatus.Failed))},dependencies:[u.O5,s.rH],encapsulation:2}),t})();var G=m(8746);function X(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function j(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is invalid"),e.qZA())}function D(t,o){if(1&t&&(e.TgZ(0,"div",10),e.YNc(1,X,2,0,"div",11),e.YNc(2,j,2,0,"div",11),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",r.f.email.errors.required),e.xp6(1),e.Q6J("ngIf",r.f.email.errors.email)}}function W(t,o){1&t&&e._UZ(0,"span",12)}const $=function(t){return{"is-invalid":t}};let ee=(()=>{class t{constructor(r,i,a){this.formBuilder=r,this.accountService=i,this.alertService=a,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({email:["",[n.kI.required,n.kI.email]]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.accountService.forgotPassword(this.f.email.value).pipe((0,f.P)()).pipe((0,G.x)(()=>this.loading=!1)).subscribe({next:()=>this.alertService.success("Please check your email for password reset instructions"),error:r=>this.alertService.error(r)}))}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(n.qu),e.Y36(d.BR),e.Y36(d.c9))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:15,vars:7,consts:[[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"form-label"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","../login",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(r,i){1&r&&(e.TgZ(0,"h3",0),e._uU(1,"Forgot Password"),e.qZA(),e.TgZ(2,"div",1)(3,"form",2),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"Email"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,D,3,2,"div",6),e.qZA(),e.TgZ(9,"div",3)(10,"button",7),e.YNc(11,W,1,0,"span",8),e._uU(12," Submit "),e.qZA(),e.TgZ(13,"a",9),e._uU(14,"Cancel"),e.qZA()()()()),2&r&&(e.xp6(3),e.Q6J("formGroup",i.form),e.xp6(4),e.Q6J("ngClass",e.VKq(5,$,i.submitted&&i.f.email.errors)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.email.errors),e.xp6(2),e.Q6J("disabled",i.loading),e.xp6(1),e.Q6J("ngIf",i.loading))},dependencies:[u.mk,u.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,s.rH],encapsulation:2}),t})();function te(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Validating token... "),e.qZA())}function re(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Token validation failed, if the token has expired you can get a new one at the "),e.TgZ(2,"a",4),e._uU(3,"forgot password"),e.qZA(),e._uU(4," page. "),e.qZA())}function ie(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function oe(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password must be at least 6 characters"),e.qZA())}function ne(t,o){if(1&t&&(e.TgZ(0,"div",14),e.YNc(1,ie,2,0,"div",2),e.YNc(2,oe,2,0,"div",2),e.qZA()),2&t){const r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",r.f.password.errors.required),e.xp6(1),e.Q6J("ngIf",r.f.password.errors.minlength)}}function se(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Confirm Password is required"),e.qZA())}function ae(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Passwords must match"),e.qZA())}function de(t,o){if(1&t&&(e.TgZ(0,"div",14),e.YNc(1,se,2,0,"div",2),e.YNc(2,ae,2,0,"div",2),e.qZA()),2&t){const r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",r.f.confirmPassword.errors.required),e.xp6(1),e.Q6J("ngIf",r.f.confirmPassword.errors.mustMatch)}}function me(t,o){1&t&&e._UZ(0,"span",15)}const b=function(t){return{"is-invalid":t}};function ue(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"form",5),e.NdJ("ngSubmit",function(){e.CHM(r);const a=e.oxw();return e.KtG(a.onSubmit())}),e.TgZ(1,"div",6)(2,"label",7),e._uU(3,"Password"),e.qZA(),e._UZ(4,"input",8),e.YNc(5,ne,3,2,"div",9),e.qZA(),e.TgZ(6,"div",6)(7,"label",7),e._uU(8,"Confirm Password"),e.qZA(),e._UZ(9,"input",10),e.YNc(10,de,3,2,"div",9),e.qZA(),e.TgZ(11,"div",6)(12,"button",11),e.YNc(13,me,1,0,"span",12),e._uU(14," Reset Password "),e.qZA(),e.TgZ(15,"a",13),e._uU(16,"Cancel"),e.qZA()()()}if(2&t){const r=e.oxw();e.Q6J("formGroup",r.form),e.xp6(4),e.Q6J("ngClass",e.VKq(7,b,r.submitted&&r.f.password.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.password.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(9,b,r.submitted&&r.f.confirmPassword.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.confirmPassword.errors),e.xp6(2),e.Q6J("disabled",r.loading),e.xp6(1),e.Q6J("ngIf",r.loading)}}var l=(()=>{return(t=l||(l={}))[t.Validating=0]="Validating",t[t.Valid=1]="Valid",t[t.Invalid=2]="Invalid",l;var t})();const le=[{path:"",component:T,children:[{path:"login",component:I},{path:"register",component:M},{path:"verify-email",component:O},{path:"forgot-password",component:ee},{path:"reset-password",component:(()=>{class t{constructor(r,i,a,c,v){this.formBuilder=r,this.route=i,this.router=a,this.accountService=c,this.alertService=v,this.TokenStatus=l,this.tokenStatus=l.Validating,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({password:["",[n.kI.required,n.kI.minLength(6)]],confirmPassword:["",n.kI.required]},{validator:(0,Z.Yf)("password","confirmPassword")});const r=this.route.snapshot.queryParams.token;this.router.navigate([],{relativeTo:this.route,replaceUrl:!0}),this.accountService.validateResetToken(r).pipe((0,f.P)()).subscribe({next:()=>{this.token=r,this.tokenStatus=l.Valid},error:()=>{this.tokenStatus=l.Invalid}})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.accountService.resetPassword(this.token,this.f.password.value,this.f.confirmPassword.value).pipe((0,f.P)()).subscribe({next:()=>{this.alertService.success("Password reset successful, you can now login",{keepAfterRouteChange:!0}),this.router.navigate(["../login"],{relativeTo:this.route})},error:r=>{this.alertService.error(r),this.loading=!1}}))}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(n.qu),e.Y36(s.gz),e.Y36(s.F0),e.Y36(d.BR),e.Y36(d.c9))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:6,vars:3,consts:[[1,"card-header"],[1,"card-body"],[4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],["routerLink","../forgot-password"],[3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"form-label"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","../login",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(r,i){1&r&&(e.TgZ(0,"h3",0),e._uU(1,"Reset Password"),e.qZA(),e.TgZ(2,"div",1),e.YNc(3,te,2,0,"div",2),e.YNc(4,re,5,0,"div",2),e.YNc(5,ue,17,11,"form",3),e.qZA()),2&r&&(e.xp6(3),e.Q6J("ngIf",i.tokenStatus==i.TokenStatus.Validating),e.xp6(1),e.Q6J("ngIf",i.tokenStatus==i.TokenStatus.Invalid),e.xp6(1),e.Q6J("ngIf",i.tokenStatus==i.TokenStatus.Valid))},dependencies:[u.mk,u.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,s.rH],encapsulation:2}),t})()}]}];let ce=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(le),s.Bz]}),t})(),fe=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,n.UX,ce]}),t})()}}]);
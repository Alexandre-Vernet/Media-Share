"use strict";(self.webpackChunkfile_sync=self.webpackChunkfile_sync||[]).push([[4074],{4074:(ct,U,s)=>{s.r(U),s.d(U,{AuthenticationModule:()=>mt});var f=s(8583),l=s(4655),c=s(8239),o=s(3679),t=s(7716),_=s(8243),m=s(8295),h=s(9983),p=s(1095);function C(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email address "),t.qZA())}function T(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Email is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function A(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const r=t.oxw();t.xp6(1),t.hij(" ",null==r.formSignIn.controls.email.errors?null:r.formSignIn.controls.email.errors.auth," ")}}function q(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Password is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function b(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Password must be at least "),t.TgZ(2,"strong"),t._uU(3,"6 characters"),t.qZA(),t.qZA())}let x=(()=>{class n{constructor(r,e){this.auth=r,this.router=e,this.emailLocalStorage=localStorage.getItem("email"),this.formSignIn=new o.cw({email:new o.NI(this.emailLocalStorage,[o.kI.required,o.kI.email]),password:new o.NI("",[o.kI.required,o.kI.minLength(6)])})}signIn(){var r=this;const e=this.formSignIn.value,{email:i,password:g}=e;this.auth.signIn(i,g).then((0,c.Z)(function*(){yield r.router.navigateByUrl("/")})).catch(Z=>{this.auth.customErrorMessage(Z.code).then(d=>{this.formSignIn.controls.email.setErrors({auth:d})}).catch(()=>{this.formSignIn.controls.email.setErrors({auth:Z.message})})})}signInWithPopUp(r){var e=this;this.auth.signInWithPopup(r).then((0,c.Z)(function*(){yield e.router.navigateByUrl("/")})).catch(i=>{console.error(i)})}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(_.$),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sign-in"]],decls:32,vars:7,consts:[[1,"container"],[1,"banner"],[1,"brand"],[1,"card"],[3,"formGroup","ngSubmit"],["src","./assets/icons/user.png","alt","user icon"],["appearance","fill"],["type","email","matInput","","formControlName","email","placeholder","Ex. pat@example.com"],[4,"ngIf"],["type","password","matInput","","formControlName","password","placeholder","Password"],[1,"submit"],["mat-raised-button","","color","primary",3,"disabled"],["routerLink","/authentication/sign-up"],["mat-stroked-button","","color","primary",3,"click"],["mat-stroked-button","","color","accent",3,"click"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h1"),t._uU(4,"File-Sync"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(5,"div",3),t.TgZ(6,"form",4),t.NdJ("ngSubmit",function(){return e.formSignIn.valid&&e.signIn()}),t._UZ(7,"img",5),t.TgZ(8,"mat-form-field",6),t.TgZ(9,"mat-label"),t._uU(10,"Email"),t.qZA(),t._UZ(11,"input",7),t.YNc(12,C,2,0,"mat-error",8),t.YNc(13,T,4,0,"mat-error",8),t.YNc(14,A,2,1,"mat-error",8),t.qZA(),t.TgZ(15,"mat-form-field",6),t.TgZ(16,"mat-label"),t._uU(17,"Password"),t.qZA(),t._UZ(18,"input",9),t.YNc(19,q,4,0,"mat-error",8),t.YNc(20,b,4,0,"mat-error",8),t.qZA(),t.TgZ(21,"div",10),t.TgZ(22,"button",11),t._uU(23,"Sign-in"),t.qZA(),t.TgZ(24,"span"),t._uU(25,"No account ? Sign-up "),t.TgZ(26,"a",12),t._uU(27,"here"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(28,"button",13),t.NdJ("click",function(){return e.signInWithPopUp("google")}),t._uU(29,"Google sign-in"),t.qZA(),t.TgZ(30,"button",14),t.NdJ("click",function(){return e.signInWithPopUp("github")}),t._uU(31,"Github sign-in"),t.qZA(),t.qZA(),t.qZA()),2&r&&(t.xp6(6),t.Q6J("formGroup",e.formSignIn),t.xp6(6),t.Q6J("ngIf",e.formSignIn.controls.email.hasError("email")),t.xp6(1),t.Q6J("ngIf",e.formSignIn.controls.email.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==e.formSignIn.controls.email.errors?null:e.formSignIn.controls.email.errors.auth),t.xp6(5),t.Q6J("ngIf",e.formSignIn.controls.password.hasError("required")),t.xp6(1),t.Q6J("ngIf",e.formSignIn.controls.password.hasError("minlength")),t.xp6(2),t.Q6J("disabled",!e.formSignIn.valid))},directives:[o._Y,o.JL,o.sg,m.KE,m.hX,h.Nt,o.Fj,o.JJ,o.u,f.O5,p.lW,l.yS,m.TO],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;background:#F6F6F6;height:100vh}.container[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]{width:100%;height:50vh;display:flex;justify-content:center;background:#3084FF}.container[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:20px}.container[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:3rem;font-weight:bold}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;justify-content:center;align-content:center;padding:20px;background:#ffffff;border-radius:10px;width:600px;box-shadow:0 0 10px #0000001a}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px;margin-bottom:30px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]{width:100%;display:flex;margin:20px 0;justify-content:space-between;align-items:center}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#3084ff;font-weight:500}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#3084ff;font-weight:600}@media (max-width: 768px){.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:80%}}"]}),n})();var w=s(3137);function I(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Full Name is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function M(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Full Name must be at least "),t.TgZ(2,"strong"),t._uU(3,"5"),t.qZA(),t._uU(4," characters long. "),t.qZA())}function O(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," last Name cannot be more than "),t.TgZ(2,"strong"),t._uU(3,"25"),t.qZA(),t._uU(4," characters long. "),t.qZA())}function y(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email address "),t.qZA())}function N(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Email is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function S(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Password is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function v(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Password must be at least "),t.TgZ(2,"strong"),t._uU(3,"6 characters"),t.qZA(),t.qZA())}function J(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Password cannot be more than "),t.TgZ(2,"strong"),t._uU(3,"25 characters"),t.qZA(),t.qZA())}let k=(()=>{class n{constructor(r,e,i){this.auth=r,this.router=e,this.snackbar=i,this.formSignUp=new o.cw({displayName:new o.NI("",[o.kI.required,o.kI.minLength(5),o.kI.maxLength(25)]),email:new o.NI("",[o.kI.required,o.kI.email]),password:new o.NI("",[o.kI.required,o.kI.minLength(6),o.kI.maxLength(25)])})}signUp(){var r=this;const e=this.formSignUp.value,{displayName:i,email:g,password:Z}=e,d={displayName:i,email:g,password:Z,photoURL:null};this.auth.signUp(d).then((0,c.Z)(function*(){r.auth.signIn(d.email,d.password).then(()=>{r.router.navigateByUrl("/")}).catch(P=>{r.snackbar.displayErrorMessage(P)})})).catch(P=>{this.auth.customErrorMessage(P.code).then(lt=>{this.formSignUp.controls.email.setErrors({auth:lt})}).catch(()=>{this.formSignUp.controls.email.setErrors({auth:P.message})})})}signInWithPopUp(r){var e=this;this.auth.signInWithPopup(r).then((0,c.Z)(function*(){yield e.router.navigateByUrl("/")})).catch(i=>{console.error(i)})}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(_.$),t.Y36(l.F0),t.Y36(w.o))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sign-up"]],decls:39,vars:9,consts:[[1,"container"],[1,"banner"],[1,"brand"],[1,"card"],[3,"formGroup","ngSubmit"],["src","./assets/icons/user.png","alt","user icon"],["appearance","fill"],["type","text","matInput","","formControlName","displayName","placeholder","Ex. Bob Razowski"],[4,"ngIf"],["type","email","matInput","","formControlName","email","placeholder","Ex. bob.razowski@example.com"],["type","password","matInput","","formControlName","password","placeholder","Password"],[1,"submit"],["mat-raised-button","","color","primary"],["routerLink","/authentication/sign-in"],["mat-stroked-button","","color","primary",3,"click"],["mat-stroked-button","","color","accent",3,"click"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h1"),t._uU(4,"File-Sync"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(5,"div",3),t.TgZ(6,"form",4),t.NdJ("ngSubmit",function(){return e.formSignUp.valid&&e.signUp()}),t._UZ(7,"img",5),t.TgZ(8,"mat-form-field",6),t.TgZ(9,"mat-label"),t._uU(10,"Full Name"),t.qZA(),t._UZ(11,"input",7),t.YNc(12,I,4,0,"mat-error",8),t.YNc(13,M,5,0,"mat-error",8),t.YNc(14,O,5,0,"mat-error",8),t.qZA(),t.TgZ(15,"mat-form-field",6),t.TgZ(16,"mat-label"),t._uU(17,"Email"),t.qZA(),t._UZ(18,"input",9),t.YNc(19,y,2,0,"mat-error",8),t.YNc(20,N,4,0,"mat-error",8),t.qZA(),t.TgZ(21,"mat-form-field",6),t.TgZ(22,"mat-label"),t._uU(23,"Password"),t.qZA(),t._UZ(24,"input",10),t.YNc(25,S,4,0,"mat-error",8),t.YNc(26,v,4,0,"mat-error",8),t.YNc(27,J,4,0,"mat-error",8),t.qZA(),t.TgZ(28,"div",11),t.TgZ(29,"button",12),t._uU(30,"Sign-up"),t.qZA(),t.TgZ(31,"span"),t._uU(32,"Already an account ? Sign-in "),t.TgZ(33,"a",13),t._uU(34,"here"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(35,"button",14),t.NdJ("click",function(){return e.signInWithPopUp("google")}),t._uU(36,"Google sign-in"),t.qZA(),t.TgZ(37,"button",15),t.NdJ("click",function(){return e.signInWithPopUp("github")}),t._uU(38,"Github sign-in"),t.qZA(),t.qZA(),t.qZA()),2&r&&(t.xp6(6),t.Q6J("formGroup",e.formSignUp),t.xp6(6),t.Q6J("ngIf",e.formSignUp.controls.displayName.hasError("required")),t.xp6(1),t.Q6J("ngIf",e.formSignUp.controls.displayName.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",e.formSignUp.controls.displayName.hasError("maxlength")),t.xp6(5),t.Q6J("ngIf",e.formSignUp.controls.email.hasError("email")),t.xp6(1),t.Q6J("ngIf",e.formSignUp.controls.email.hasError("required")),t.xp6(5),t.Q6J("ngIf",e.formSignUp.controls.password.hasError("required")),t.xp6(1),t.Q6J("ngIf",e.formSignUp.controls.password.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",e.formSignUp.controls.password.hasError("maxlength")))},directives:[o._Y,o.JL,o.sg,m.KE,m.hX,h.Nt,o.Fj,o.JJ,o.u,f.O5,p.lW,l.yS,m.TO],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;background:#F6F6F6;height:100vh}.container[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]{width:100%;height:50vh;display:flex;justify-content:center;background:#3084FF}.container[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:20px}.container[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:3rem;font-weight:bold}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;justify-content:center;align-content:center;padding:20px;background:#ffffff;border-radius:10px;width:600px;box-shadow:0 0 10px #0000001a}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px;margin-bottom:30px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]{width:100%;display:flex;margin:20px 0;justify-content:space-between;align-items:center}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#3084ff;font-weight:500}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#3084ff;font-weight:600}@media (max-width: 768px){.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:80%}}"]}),n})();var u=s(2238),E=s(6345);function Y(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Full Name is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function Q(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Full Name must be at least "),t.TgZ(2,"strong"),t._uU(3,"5"),t.qZA(),t._uU(4," characters long. "),t.qZA())}function F(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," last Name cannot be more than "),t.TgZ(2,"strong"),t._uU(3,"25"),t.qZA(),t._uU(4," characters long. "),t.qZA())}function L(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email address "),t.qZA())}function j(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Email is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function D(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Current Password is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function W(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Current Password must be at least "),t.TgZ(2,"strong"),t._uU(3,"6 characters"),t.qZA(),t.qZA())}function G(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Current Password cannot be more than "),t.TgZ(2,"strong"),t._uU(3,"25 characters"),t.qZA(),t.qZA())}function B(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const r=t.oxw();t.xp6(1),t.hij(" ",null==r.formUpdatePassword.controls.password.errors?null:r.formUpdatePassword.controls.password.errors.auth," ")}}function R(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," New Password is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function z(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," New Password must be at least "),t.TgZ(2,"strong"),t._uU(3,"6 characters"),t.qZA(),t.qZA())}function X(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," New Password cannot be more than "),t.TgZ(2,"strong"),t._uU(3,"25 characters"),t.qZA(),t.qZA())}function V(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const r=t.oxw();t.xp6(1),t.hij(" ",null==r.formUpdatePassword.controls.newPassword.errors?null:r.formUpdatePassword.controls.newPassword.errors.match," ")}}function $(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Confirm Password is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA(),t.qZA())}function K(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Confirm Password must be at least "),t.TgZ(2,"strong"),t._uU(3,"6 characters"),t.qZA(),t.qZA())}function H(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Confirm Password cannot be more than "),t.TgZ(2,"strong"),t._uU(3,"25 characters"),t.qZA(),t.qZA())}function tt(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const r=t.oxw();t.xp6(1),t.hij(" ",null==r.formUpdatePassword.controls.confirmNewPassword.errors?null:r.formUpdatePassword.controls.confirmNewPassword.errors.match," ")}}let nt=(()=>{class n{constructor(r,e,i){this.auth=r,this.dialog=e,this.snackbar=i,this.formUpdateProfile=new o.cw({displayName:new o.NI("",[o.kI.required,o.kI.minLength(5),o.kI.maxLength(25)]),email:new o.NI("",[o.kI.required,o.kI.email])}),this.formUpdatePassword=new o.cw({password:new o.NI("",[o.kI.required,o.kI.minLength(5),o.kI.maxLength(25)]),newPassword:new o.NI("",[o.kI.required,o.kI.minLength(5),o.kI.maxLength(25)]),confirmNewPassword:new o.NI("",[o.kI.required,o.kI.minLength(5),o.kI.maxLength(25)])})}ngOnInit(){var r=this;return(0,c.Z)(function*(){r.user=yield r.auth.getAuth(),r.formUpdateProfile.setValue({displayName:r.user.displayName,email:r.user.email})})()}updateProfile(){const r=this.formUpdateProfile.value;this.auth.updateUser({uid:this.user.uid,displayName:r.displayName,email:r.email,photoURL:this.user.photoURL}).subscribe(()=>{this.snackbar.displaySuccessMessage("Profile updated")})}updatePassword(){var r=this;return(0,c.Z)(function*(){const{password:e,newPassword:i,confirmNewPassword:g}=r.formUpdatePassword.value;if(i!==g)return r.formUpdatePassword.controls.newPassword.setErrors({match:"Passwords don't match"}),void r.formUpdatePassword.controls.confirmNewPassword.setErrors({match:"Passwords don't match"});e!==i||e!==g?r.auth.updatePassword(e,i).then(()=>{r.formUpdatePassword.reset(),r.snackbar.displaySuccessMessage("Your password has been updated")}).catch(()=>{r.formUpdatePassword.controls.password.setErrors({auth:"Wrong password"})}):r.formUpdatePassword.controls.newPassword.setErrors({match:"New password is the same as old password"})})()}deleteAccount(){this.dialog.open(et)}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(_.$),t.Y36(u.uw),t.Y36(w.o))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-user-profile"]],decls:67,vars:22,consts:[[1,"container"],[1,"element"],[1,"user"],["alt","",3,"src"],[3,"formGroup","ngSubmit"],[1,"card"],["appearance","fill"],["type","text","matInput","","formControlName","displayName","placeholder","Ex. Bob Razowski"],[4,"ngIf"],["mat-raised-button","","color","primary",1,"submit"],["type","email","matInput","","formControlName","email","placeholder","Ex. bob.razowski@example.com"],["type","password","matInput","","formControlName","password","placeholder","Password"],["type","password","matInput","","formControlName","newPassword","placeholder","Password"],["type","password","matInput","","formControlName","confirmNewPassword","placeholder","Password"],[1,"delete-account"],["mat-raised-button","","color","warn",3,"click"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"h3"),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"form",4),t.NdJ("ngSubmit",function(){return e.formUpdateProfile.valid&&e.updateProfile()}),t.TgZ(9,"div",5),t.TgZ(10,"h3"),t._uU(11,"Full Name"),t.qZA(),t.TgZ(12,"mat-form-field",6),t.TgZ(13,"mat-label"),t._uU(14,"Full Name"),t.qZA(),t._UZ(15,"input",7),t.YNc(16,Y,4,0,"mat-error",8),t.YNc(17,Q,5,0,"mat-error",8),t.YNc(18,F,5,0,"mat-error",8),t.qZA(),t.TgZ(19,"button",9),t._uU(20,"Save"),t.qZA(),t.qZA(),t.TgZ(21,"div",5),t.TgZ(22,"h3"),t._uU(23,"Email"),t.qZA(),t.TgZ(24,"mat-form-field",6),t.TgZ(25,"mat-label"),t._uU(26,"Email"),t.qZA(),t._UZ(27,"input",10),t.YNc(28,L,2,0,"mat-error",8),t.YNc(29,j,4,0,"mat-error",8),t.qZA(),t.TgZ(30,"button",9),t._uU(31,"Save"),t.qZA(),t.qZA(),t.qZA(),t._UZ(32,"hr"),t.TgZ(33,"form",4),t.NdJ("ngSubmit",function(){return e.formUpdatePassword.valid&&e.updatePassword()}),t.TgZ(34,"div",5),t.TgZ(35,"h3"),t._uU(36,"Update password"),t.qZA(),t.TgZ(37,"mat-form-field",6),t.TgZ(38,"mat-label"),t._uU(39,"Current password"),t.qZA(),t._UZ(40,"input",11),t.YNc(41,D,4,0,"mat-error",8),t.YNc(42,W,4,0,"mat-error",8),t.YNc(43,G,4,0,"mat-error",8),t.YNc(44,B,2,1,"mat-error",8),t.qZA(),t.TgZ(45,"mat-form-field",6),t.TgZ(46,"mat-label"),t._uU(47,"New Password"),t.qZA(),t._UZ(48,"input",12),t.YNc(49,R,4,0,"mat-error",8),t.YNc(50,z,4,0,"mat-error",8),t.YNc(51,X,4,0,"mat-error",8),t.YNc(52,V,2,1,"mat-error",8),t.qZA(),t.TgZ(53,"mat-form-field",6),t.TgZ(54,"mat-label"),t._uU(55,"Confirm Password"),t.qZA(),t._UZ(56,"input",13),t.YNc(57,$,4,0,"mat-error",8),t.YNc(58,K,4,0,"mat-error",8),t.YNc(59,H,4,0,"mat-error",8),t.YNc(60,tt,2,1,"mat-error",8),t.qZA(),t.TgZ(61,"button",9),t._uU(62,"Save"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(63,"div",14),t.TgZ(64,"button",15),t.NdJ("click",function(){return e.deleteAccount()}),t._uU(65,"Delete my account"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(66,"app-navbar")),2&r&&(t.xp6(3),t.Q6J("src",null!=e.user&&e.user.photoURL?null==e.user?null:e.user.photoURL:"./assets/icons/user.png",t.LSH),t.xp6(2),t.Oqu(null==e.user?null:e.user.displayName),t.xp6(2),t.Oqu(null==e.user?null:e.user.email),t.xp6(1),t.Q6J("formGroup",e.formUpdateProfile),t.xp6(8),t.Q6J("ngIf",e.formUpdateProfile.controls.displayName.hasError("required")),t.xp6(1),t.Q6J("ngIf",e.formUpdateProfile.controls.displayName.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",e.formUpdateProfile.controls.displayName.hasError("maxlength")),t.xp6(10),t.Q6J("ngIf",e.formUpdateProfile.controls.email.hasError("email")),t.xp6(1),t.Q6J("ngIf",e.formUpdateProfile.controls.email.hasError("required")),t.xp6(4),t.Q6J("formGroup",e.formUpdatePassword),t.xp6(8),t.Q6J("ngIf",e.formUpdatePassword.controls.password.hasError("required")),t.xp6(1),t.Q6J("ngIf",e.formUpdatePassword.controls.password.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",e.formUpdatePassword.controls.password.hasError("maxlength")),t.xp6(1),t.Q6J("ngIf",null==e.formUpdatePassword.controls.password.errors?null:e.formUpdatePassword.controls.password.errors.auth),t.xp6(5),t.Q6J("ngIf",e.formUpdatePassword.controls.newPassword.hasError("required")),t.xp6(1),t.Q6J("ngIf",e.formUpdatePassword.controls.newPassword.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",e.formUpdatePassword.controls.newPassword.hasError("maxlength")),t.xp6(1),t.Q6J("ngIf",null==e.formUpdatePassword.controls.newPassword.errors?null:e.formUpdatePassword.controls.newPassword.errors.match),t.xp6(5),t.Q6J("ngIf",e.formUpdatePassword.controls.confirmNewPassword.hasError("required")),t.xp6(1),t.Q6J("ngIf",e.formUpdatePassword.controls.confirmNewPassword.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",e.formUpdatePassword.controls.confirmNewPassword.hasError("maxlength")),t.xp6(1),t.Q6J("ngIf",null==e.formUpdatePassword.controls.confirmNewPassword.errors?null:e.formUpdatePassword.controls.confirmNewPassword.errors.match))},directives:[o._Y,o.JL,o.sg,m.KE,m.hX,h.Nt,o.Fj,o.JJ,o.u,f.O5,p.lW,E.S,m.TO],styles:[".container[_ngcontent-%COMP%]{height:98%;overflow-y:auto;overflow-x:hidden}.container[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%]{margin:50px 20px 0 250px}@media (max-width: 768px){.container[_ngcontent-%COMP%] > .element[_ngcontent-%COMP%]{margin:25px 20px 0 100px}}.user[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:20px}.user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px;margin-bottom:20px;border-radius:50%}form[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;align-items:center;width:100%}form[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:600px;width:100%}form[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]{margin:10px 0 30px}.delete-account[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:20px}.delete-account[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:200px;height:50px;margin-bottom:20px}"]}),n})(),et=(()=>{class n{constructor(r,e){this.auth=r,this.router=e}confirmDelete(){var r=this;this.auth.deleteUser().subscribe(()=>{this.auth.signOut().then((0,c.Z)(function*(){r.auth.user=null,localStorage.clear(),yield r.router.navigateByUrl("/authentication")}))})}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(_.$),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:12,vars:2,consts:[["mat-dialog-title",""],[1,"mat-typography"],[1,"ion-justify-content-end"],["mat-button","",3,"mat-dialog-close"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close","click"]],template:function(r,e){1&r&&(t.TgZ(0,"h2",0),t._uU(1,"Delete account"),t.qZA(),t.TgZ(2,"mat-dialog-content",1),t.TgZ(3,"h3"),t._uU(4,"Do you really want to delete your account ?"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"All your personal data will be deleted within 1 week at the latest"),t.qZA(),t.qZA(),t.TgZ(7,"mat-dialog-actions",2),t.TgZ(8,"button",3),t._uU(9,"Cancel"),t.qZA(),t.TgZ(10,"button",4),t.NdJ("click",function(){return e.confirmDelete()}),t._uU(11,"Delete"),t.qZA(),t.qZA()),2&r&&(t.xp6(8),t.Q6J("mat-dialog-close",!0),t.xp6(2),t.Q6J("mat-dialog-close",!0))},directives:[u.uh,u.xY,u.H8,p.lW,u.ZT],encapsulation:2}),n})();const at=[{path:"",component:(()=>{class n{constructor(){}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-authentication"]],decls:1,vars:0,template:function(r,e){1&r&&t._UZ(0,"router-outlet")},directives:[l.lC],styles:[""]}),n})(),children:[{path:"",component:x},{path:"sign-up",component:k},{path:"profile",component:nt,canActivate:[s(14).Q]},{path:"**",redirectTo:""}]}];let it=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(at)],l.Bz]}),n})();var st=s(6176);let mt=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[f.ez,it,m.lN,h.c,o.UX,p.ot,st.W,u.Is]]}),n})()}}]);
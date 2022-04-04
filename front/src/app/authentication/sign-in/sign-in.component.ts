import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

    formSignIn = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    constructor(
        private auth: AuthenticationService,
        private router: Router
    ) {
    }

    signIn(): void {
        const formValue = this.formSignIn.value;
        const { email, password } = formValue;

        this.auth.signIn(email, password).then(async () => {
            await this.router.navigateByUrl('/');
        }).catch((error) => {
            this.auth.customErrorMessage(error.code).then((message) => {
                this.formSignIn.controls.email.setErrors({
                    'auth': message
                });
            }).catch(() => {
                this.formSignIn.controls.email.setErrors({
                    'auth': error.message
                });
            });
        });
    }

    signInWithPopUp(provider: string) {
        this.auth.signInWithPopup(provider).then(async () => {
            await this.router.navigateByUrl('/');
        }).catch((error) => {
            console.error(error);
        });
    }
}

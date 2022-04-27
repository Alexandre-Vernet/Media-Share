import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { UserWithId } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '../../public/snackbar/snackbar.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    user: UserWithId;

    formUpdateProfile = new FormGroup({
        displayName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
        email: new FormControl('', [Validators.required, Validators.email]),
    });

    formUpdatePassword = new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
        newPassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
        confirmNewPassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
    });

    constructor(
        private auth: AuthenticationService,
        public dialog: MatDialog,
        private snackbar: SnackbarService
    ) {
    }

    async ngOnInit() {
        this.user = await this.auth.getAuth();

        // Update form
        this.formUpdateProfile.setValue({
            displayName: this.user.displayName,
            email: this.user.email,
        });
    }

    async updateProfile() {
        const formValue = this.formUpdateProfile.value;
        const user: UserWithId = {
            uid: this.user.uid,
            displayName: formValue.displayName,
            email: formValue.email,
            photoURL: this.user.photoURL,
        };

        await this.auth.updateUser(user);
    }

    async updatePassword() {
        const { password, newPassword, confirmNewPassword } = this.formUpdatePassword.value;

        // Check if new password and confirm new password are the same
        if (newPassword !== confirmNewPassword) {
            this.formUpdatePassword.controls.newPassword.setErrors({
                'match': 'Passwords don\'t match'
            });
            this.formUpdatePassword.controls.confirmNewPassword.setErrors({
                'match': 'Passwords don\'t match'
            });
            return;
        }

        // Check if new password is valid
        if (password === newPassword && password === confirmNewPassword) {
            this.formUpdatePassword.controls.newPassword.setErrors({
                'match': 'New password is the same as old password'
            });
            return;

        } else {
            this.auth.updatePassword(password, newPassword).then(() => {
                // Update form
                this.formUpdatePassword.reset();

                // Show success message
                this.snackbar.displaySuccessMessage('Your password has been updated');
            }).catch(() => {
                this.formUpdatePassword.controls.password.setErrors({
                    'auth': 'Wrong password'
                });
            });
        }
    }

    deleteAccount() {
        // Open dialog to confirm account deletion
        this.dialog.open(DialogDeleteAccountComponent);
    }
}

@Component({
    template: `
        <h2 mat-dialog-title>Delete account</h2>
        <mat-dialog-content class="mat-typography">
            <h3>Do you really want to delete your account ?</h3>
            <p>All your personal data will be deleted within 1 week at the latest</p>
        </mat-dialog-content>
        <mat-dialog-actions class="ion-justify-content-end">
            <button mat-button [mat-dialog-close]="true">Cancel</button>
            <button mat-button (click)="confirmDelete()" [mat-dialog-close]="true" cdkFocusInitial>Delete</button>
        </mat-dialog-actions>
    `
})
export class DialogDeleteAccountComponent {

    constructor(
        private auth: AuthenticationService,
    ) {
    }

    confirmDelete() {
        this.auth.deleteUser().then(async () => {
            await this.signOut();
        });
    }

    async signOut() {
        await this.auth.signOut();
    }
}
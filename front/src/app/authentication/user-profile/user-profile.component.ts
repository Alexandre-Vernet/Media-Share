import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserWithId } from '../user';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    user: UserWithId;

    constructor(
        private auth: AuthenticationService,
        private router: Router,
        public dialog: MatDialog
    ) {
    }

    async ngOnInit() {
        this.user = await this.auth.getAuth();
    }

    signOut() {
        this.auth.signOut().then(async () => {
            await this.router.navigateByUrl('/');
        });
    }

    deleteAccount() {
        // Open dialog to confirm account deletion
        this.dialog.open(DialogDeleteAccount);
    }
}

@Component({
    template: `
        <h2 mat-dialog-title>Delete account</h2>
        <mat-dialog-content class="mat-typography">
            <h3>Do you really want to delete your account ?</h3>
            <p>All your personal data will be deleted within 1 week at the latest</p>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button [mat-dialog-close]="true">Cancel</button>
            <button mat-button (click)="confirmDelete()" [mat-dialog-close]="true" cdkFocusInitial>Delete</button>
        </mat-dialog-actions>
    `
})
export class DialogDeleteAccount {

    constructor(
        private auth: AuthenticationService,
        private router: Router,
    ) {
    }

    confirmDelete() {
        this.auth.deleteUser().then(() => {
            this.signOut();
        });
    }

    signOut() {
        this.auth.signOut().then(async () => {
            await this.router.navigateByUrl('/');
        });
    }
}
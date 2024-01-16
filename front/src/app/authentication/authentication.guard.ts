import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { SnackbarService } from '../public/snackbar/snackbar.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
    constructor(
        private auth: AuthenticationService,
        private router: Router,
        private snackbar: SnackbarService
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return new Promise(async (resolve, reject) => {
            const accessToken = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');

            if (accessToken) {
                this.auth.signInWithAccessToken(accessToken)
                    .subscribe({
                        next: () => {
                            resolve(true);
                        },
                        error: () => {
                            reject(false);
                            this.router.navigateByUrl('/');
                        }
                    });
            }

            if (refreshToken) {
                this.auth.getAccessTokenFromRefreshToken()
                    .subscribe({
                        next: (accessToken) => {
                            this.auth.signInWithAccessToken(accessToken)
                                .subscribe({
                                    next: () => {
                                        resolve(true);
                                    },
                                    error: () => {
                                        reject(false);
                                        this.router.navigateByUrl('/');
                                    }
                                });
                        },
                        error: () => {
                            reject(false);
                            this.router.navigateByUrl('/');
                        }
                    });
            }

            else {
                reject(false);
                this.snackbar.displayErrorMessage('You must be signed in to access this page');
                await this.router.navigateByUrl('/');
            }
        });
    }
}

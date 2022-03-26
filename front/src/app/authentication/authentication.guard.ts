import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
    constructor(
        private auth: AuthenticationService,
        private router: Router
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return new Promise(async (resolve, reject) => {
            const token = localStorage.getItem('token');
            if (token) {
                this.auth.signInWithToken(token).then(() => {
                    resolve(true);
                }).catch(async () => {
                    localStorage.removeItem('token');
                    await this.router.navigateByUrl('/sign-in');
                    reject(false);
                });
            } else {
                await this.router.navigateByUrl('/sign-in');
                reject(false);
            }
        });
    }
}

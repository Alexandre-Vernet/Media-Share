import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    constructor(
        private router: Router
    ) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const accessToken = localStorage.getItem('accessToken');

        // Add header with the accessToken to the request
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${ accessToken }`
            }
        });

        return next.handle(request).pipe(
            catchError((err) => {
                if (err.status === 401) {
                    this.router.navigate(['/authentication']);
                }
                throw err;
            })
        );
    }
}

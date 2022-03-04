import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../classes/user';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    auth = getAuth();
    user: User;

    constructor(
        private http: HttpClient
    ) {
    }

    async signIn(email: string, password: string) {
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(this.auth, email, password)
                .then((user) => {
                    const uid = user.user.uid;

                    this.http.get(`/api/users/${ uid }`).subscribe(
                        (data) => {
                            resolve(data);
                        },
                        (error) => {
                            reject(error);
                        }
                    );
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    async signUp(email: string, password: string) {
        return new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(this.auth, email, password)
                .then((userCredential) => {
                    const user = {
                        uid: userCredential.user.uid,
                        firstName: 'Ada',
                        lastName: 'Zdravkovic',
                        email: 'azdazdazdazd',
                        photoURL: 'adzadazdad',
                        dateCreation: new Date()
                    };

                    this.http.post('/api/users', { user }).subscribe(
                        (data) => {
                            resolve(data);
                        },
                        (error) => {
                            reject(error);
                        }
                    );
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        });
    }
}


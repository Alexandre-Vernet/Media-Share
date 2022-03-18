import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Media, MediaWithId } from './media';
import { Response } from '../response';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { UserWithId } from '../authentication/user';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class MediaService {
    user: UserWithId;

    storage = getStorage();

    constructor(
        private http: HttpClient,
        private auth: AuthenticationService
    ) {
        setTimeout(() => {
            this.auth.getAuth().then((user) => {
                this.user = user;
            });
        }, 1000);
    }

    async getMedias(uid: string): Promise<MediaWithId[]> {
        return new Promise((resolve, reject) => {
            this.http.get(`/api/medias/${ uid }`).subscribe(
                (medias: MediaWithId[]) => {
                    resolve(medias);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    async uploadMediaFirestore(message: string): Promise<Response> {
        return new Promise((resolve, reject) => {
            const uid = this.user.uid;
            const date = new Date();
            const type = 'text/plain';

            const newMedia: Media = {
                name: message,
                date,
                type
            };

            this.http.post('/api/medias', { media: newMedia, uid }).subscribe(
                (res: Response) => {
                    resolve(res);
                }, (error) => {
                    reject(error);
                });
        });
    }

    async uploadMediaStorage(event): Promise<Response> {
        return new Promise((resolve, reject) => {
            // Get media
            const file = event.target.files[0];

            // Get more info like name, type, url
            const fileName = file.name;
            const url = null;
            const type = file.type;
            const date = new Date();

            const newMedia: Media = {
                name: fileName,
                url,
                type,
                date
            };

            // Set media target in firebase storage
            const fileSource = `medias/${ file.name }`;

            const storageRef = ref(this.storage, fileSource);

            // Upload media to firebase storage
            uploadBytes(storageRef, file).then(() => {
                getDownloadURL(ref(this.storage, fileSource))
                    .then(async (url) => {
                        newMedia.url = url;
                        const uid = this.user.uid;

                        // Store media in firestore
                        this.http.post(`/api/medias`, { media: newMedia, uid }).subscribe(
                            (res: Response) => {
                                resolve(res);
                            }, (error) => {
                                reject(error);
                            }
                        );
                    }).catch((error) => {
                    reject(error);
                });
            });
        });
    }

    async updateMedia(media: MediaWithId): Promise<Response> {
        const uid = this.user.uid;
        return new Promise((resolve, reject) => {
            this.http.put(`/api/medias/${ uid }/${ media.id }`, { media }).subscribe(
                (res: Response) => {
                    resolve(res);
                }, (error) => {
                    reject(error);
                }
            );
        });
    }

    async deleteMedia(media: MediaWithId): Promise<Response> {
        return new Promise((resolve, reject) => {
            const uid = this.user.uid;

            this.http.delete(`/api/medias/${ uid }/${ media.id }`).subscribe(
                (res: Response) => {
                    resolve(res);
                }, (error) => {
                    reject(error);
                }
            );
        });
    }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileService } from '../../../services/authentication/file/file.service';
import { UserWithId } from '../../../classes/user';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
    selector: 'app-upload-file',
    templateUrl: './upload-file.component.html',
    styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
    user: UserWithId;

    formUploadFile = new FormGroup({
        file: new FormControl('', [Validators.required])
    });

    constructor(
        private fileService: FileService,
        private authService: AuthenticationService
    ) {
    }

    ngOnInit(): void {
        this.authService.getAuth().then((user) => {
            this.user = user;
        });
    }

    async uploadFile() {
        const file = this.formUploadFile.get('file').value;

        this.fileService.uploadFile(file, this.user.uid).then((file) => {
            console.log(file);
        }).catch((error) => {
            console.error(error);
        });
    }
}

import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {StorageService} from "../services/storage.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    form: any = {
        name: null,
        lastName: null,
        username: null,
        email: null,
        password: null
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(private authService: AuthService,
                private router: Router,
                private storageService: StorageService) {
    }

    onSubmit(): void {
        const {name, lastName, username, email, password} = this.form;

        this.authService.register(name, lastName, username, email, password).subscribe({
            next: data => {
                console.log("data", data)
                this.isSuccessful = true;
                this.isSignUpFailed = false;
                this.storageService.saveToken(data.jwt);
                this.storageService.saveUser(data);
                this.router.navigate(['/capture']).then(r => this.reloadPage());
            },
            error: err => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
            }
        });
    }

    reloadPage(): void {
        window.location.reload();
    }
}

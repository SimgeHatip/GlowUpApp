import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {StorageService} from "../../services/storage.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: any = {
        username: null,
        password: null
    };
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];
    isSuccessful = false;
    isSignUpFailed = false;

    constructor(private authService: AuthService,
                private storageService: StorageService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.isLoggedIn = this.storageService.isLoggedIn();
        if (this.isLoggedIn) {
            this.roles = this.storageService.getUser().roles;
            this.router.navigate(['/home']);
        }
    }


    onSubmit(): void {
        const {username, password} = this.form;

        this.authService.login(username, password).subscribe({
            next: data => {
                this.storageService.saveToken(data.jwt);
                this.storageService.saveUser(data);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.roles = this.storageService.getUser().roles;
                this.reloadPage();
                this.storageService.logStorage();  // Log storage after login
            },
            error: err => {
                this.errorMessage = err.error.message;
                this.isLoginFailed = true;
            }
        });
    }

    reloadPage(): void {
        window.location.reload();
    }
}

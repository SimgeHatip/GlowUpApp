import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {StorageService} from '../services/storage.service';
import {Router} from "@angular/router";

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

    constructor(private authService: AuthService, private storageService: StorageService, private router: Router) {
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
                this.storageService.saveToken(data.jwt);  // Ensure the token is saved
                this.storageService.saveUser(data);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.roles = this.storageService.getUser().roles;
                console.log('Logged in with token:', data.jwt);
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

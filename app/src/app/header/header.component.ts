import {Component, OnInit} from '@angular/core';
import {StorageService} from "../services/storage.service";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    isLoggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    user: any;

    constructor(private storageService: StorageService,
                private authService: AuthService,
                private userService: UserService) {
    }

    ngOnInit(): void {
        this.isLoggedIn = this.storageService.isLoggedIn();

        if (this.isLoggedIn) {
            this.getUsers();
        }
    }

    getUsers(): void {
        if (this.isLoggedIn) {
            const id = this.storageService.getUser().id;
            this.userService.getUser(id).subscribe(
                (data) => {
                    this.user = data;
                },
                (error) => {
                    console.error('Error fetching user data', error);
                }
            );
        }
    }

    logout(): void {
        this.authService.logout().subscribe({
            next: () => {
                this.authService.logoutClient();
                this.isLoggedIn = false;
                this.reloadPage();
                this.storageService.logStorage();  // Log storage after logout
            },
            error: err => {
                console.log(err);
            }
        });
    }

    reloadPage(): void {
        window.location.reload();
    }
}

import {Component, OnInit} from '@angular/core';
import {StorageService} from '../services/storage.service';
import {UserService} from "../services/user.service";
import {AuthService} from "../services/auth.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    currentUser: any;
    isLoggedIn = false;
    editProfile = false;

    constructor(private storageService: StorageService,
                private userService: UserService,
                private authService: AuthService) {
    }

    ngOnInit(): void {
        let sidebar = document.querySelector('.sidebar');
        let closeBtn = document.querySelector('#btn');
        let searchBtn = document.querySelector('.bx-search');

        closeBtn?.addEventListener('click', () => {
            sidebar?.classList.toggle('open');
            menuBtnChange();
        });

        searchBtn?.addEventListener('click', () => {
            sidebar?.classList.toggle('open');
            menuBtnChange();
        });

        function menuBtnChange() {
            if (sidebar?.classList.contains('open')) {
                closeBtn?.classList.replace('bx-menu', 'bx-menu-alt-right');
            } else {
                closeBtn?.classList.replace('bx-menu-alt-right', 'bx-menu');
            }
        }

        this.isLoggedIn = this.storageService.isLoggedIn();
        this.getUsers();
    }

    getUsers(): void {
        if (this.isLoggedIn) {
            const id = this.storageService.getUser().id;
            this.userService.getUser(id).subscribe(
                (data) => {
                    this.currentUser = data;
                    console.log(this.currentUser);
                },
                (error) => {
                    console.error('Error fetching user data', error);
                }
            );
        }
    }

    updateUser() {
        if (this.isLoggedIn) {
            const id = this.storageService.getUser().id;
            this.userService.updateUser(id, this.currentUser).subscribe(
                (response) => {
                    this.storageService.saveUser(response);
                    this.editProfile = false;
                },
                (error) => {
                    console.error('Error fetching user data', error);
                }
            );
        }
    }

    editToggle() {
        this.editProfile = !this.editProfile
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

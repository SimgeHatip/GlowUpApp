import {Component, OnInit} from '@angular/core';
import {StorageService} from '../services/storage.service';
import {UserService} from "../services/user.service";

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
                private userService: UserService) {
    }

    ngOnInit(): void {
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
            this.userService.updateUser(id,this.currentUser).subscribe(
                (response) => {
                    this.storageService.saveUser(response);
                    this.editProfile=false;
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
}

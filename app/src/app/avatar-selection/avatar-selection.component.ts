import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {UserService} from "../services/user.service";

interface Avatar {
    name: string;
    url: string;
}

@Component({
    selector: 'app-avatar-selection',
    templateUrl: './avatar-selection.component.html',
    styleUrls: ['./avatar-selection.component.css']
})
export class AvatarSelectionComponent implements OnInit {
    avatars: Avatar[] = [
        {name: 'Avatar 1', url: 'https://i.pinimg.com/originals/54/8a/65/548a659c2b06a877516d3c998f5b0939.png'},
        {name: 'Avatar 2', url: 'https://www.svgrepo.com/show/382099/female-avatar-girl-face-woman-user-2.svg'},
        {name: 'Avatar 2', url: 'https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg'},
        {name: 'Avatar 2', url: 'https://www.svgrepo.com/show/382103/male-avatar-boy-face-man-user-2.svg'},
        {name: 'Avatar 2', url: 'https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg'},
        {
            name: 'Avatar 2',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2MIZW1bR2Jmu18vydZFZ6gu6-iBERJoSBVC73jK_27Qu5VkZ3lL1HVoassiDpWFMBnY&usqp=CAU'
        },
    ];
    selectedAvatar: Avatar | null = null;

    constructor(private authService: AuthService, private userService: UserService,) {
    }

    ngOnInit(): void {
    }

    selectAvatar(avatar: Avatar): void {
        if (avatar) {
            const userId = this.authService.getUserId();
            this.userService.saveSelectedAvatar(userId, avatar.url).subscribe(
                () => {
                    console.log('Avatar başarıyla kaydedildi');
                },
                error => {
                    console.error('Avatar kaydedilirken hata oluştu', error);
                }
            );
        }
    }

    // saveSelectedAvatar(): void {
    //     if (this.selectedAvatar) {
    //         const userId = this.authService.getUserId();
    //         console.log(this.selectedAvatar.url)
    //         this.userService.saveSelectedAvatar(userId, this.selectedAvatar.url).subscribe(
    //             response => {
    //                 console.log('Avatar başarıyla kaydedildi');
    //             },
    //             error => {
    //                 console.error('Avatar kaydedilirken hata oluştu', error);
    //             }
    //         );
    //     }
    // }
}

import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {WebcamImage} from 'ngx-webcam';
import {Observable, Subject} from 'rxjs';
import {ImageService} from "../../services/image.service";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-capture',
    templateUrl: './capture.component.html',
    styleUrls: ['./capture.component.css']
})
export class CaptureComponent {
    public webcamImage!: WebcamImage;
    private trigger: Subject<void> = new Subject<void>();

    constructor(private imageService: ImageService,
                private authService: AuthService,
                private router: Router) {
    }

    public getSnapshot(): void {
        this.trigger.next();
    }

    public captureImg(webcamImage: WebcamImage): void {
        this.webcamImage = webcamImage;
        const imageAsBase64 = webcamImage.imageAsDataUrl;
        const userId = this.authService.getUserId();
        console.log(userId)

        if (!userId) {
            console.error('User ID not found');
            return;
        }

        this.imageService.uploadImage(imageAsBase64).subscribe({
            next: data => {
                this.imageService.uploadSkinType(data.skin_type, userId).subscribe({
                    next: () => {
                        this.router.navigate(['/home']);
                    },
                    error: err => {
                        console.error('Error updating user with image:', err);
                    }
                });
                alert("Image sent to proceed")
                this.router.navigate(['/home']);
            },
            error: err => {
                console.error('Error uploading image:', err);
            }

        });
    }

    public get invokeObservable(): Observable<void> {
        return this.trigger.asObservable();
    }
}

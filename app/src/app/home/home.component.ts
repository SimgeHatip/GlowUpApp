import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { WebcamImage } from "ngx-webcam";
import { Observable, Subject } from "rxjs";
import { ImageService } from "../services/image.service";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  private trigger: Subject<void> = new Subject<void>();
  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<void> = new Subject<void>();
  sysImage = '';

  constructor(private userService: UserService,
              private imageService: ImageService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        console.log(err);
        if (err.error && typeof err.error === 'string') {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
  }

  public getSnapshot(): void {
    this.trigger.next();
  }

  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
    // Python backend'e resmi gönderip cilt tipini al
    this.imageService.uploadImage(this.sysImage).subscribe({
      next: data => {
        console.log(data);
        const userId = this.authService.getUserId(); // Fetch the current user's ID
        if (userId) {
          this.imageService.uploadSkinType(data.skin_type, userId).subscribe({
            next: response => {
              console.log('Skin type saved:', response);
            },
            error: err => {
              console.error('Error saving skin type:', err);
            }
          });
        } else {
          console.error('User ID not found');
        }
      },
      error: err => {
        console.error('Error uploading image:', err);
      }
    });
  }

  public get invokeObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<void> {
    return this.nextWebcam.asObservable();
  }
}

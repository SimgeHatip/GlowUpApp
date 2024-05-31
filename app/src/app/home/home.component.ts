import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor() {
    }

    images: string[] = [
        'path_to_image1.jpg',
        'path_to_image2.jpg',
        'path_to_image3.jpg',
        'path_to_image3.jpg',
        'path_to_image3.jpg',
        'path_to_image3.jpg'
    ];

    textArray: string[] = [
        "Welcome to our self-care platform!",
        "Discover personalized routines!",
        "Track your progress daily!",
        "Achieve your self-care goals!",
        "Join our community today!"
    ];

    currentText: string = this.textArray[0];
    currentIndex: number = 0;

    ngOnInit(): void {
        this.changeText();
    }

    changeText() {
        setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
            this.currentText = this.textArray[this.currentIndex];
        }, 3000);
    }

}

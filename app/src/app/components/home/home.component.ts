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
        'https://www.sittingprettyhalohair.com/cdn/shop/articles/how_to_have_a_glow_up_900x.png?v=1695776292',
        'https://www.mzskin.com/wp-content/uploads/2021/01/AI.jpg',
        'https://cdn.shopify.com/s/files/1/0578/8621/2265/files/img_ai_skin_1.png?v=1673543051',
        'https://www.vichyusa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-vichy-US-Library/default/dw8affada9/Content%20Pages/skin-consultation/SkinConsult-AI-LP-Skin-Profile-Mobile-v3-470x440-Vichy.jpg?sw=440&sh=412&sm=cut&q=70'
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

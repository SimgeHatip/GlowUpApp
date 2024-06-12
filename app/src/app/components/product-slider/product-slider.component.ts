import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../services/product-service";
import {SkincareProduct} from "../../models/SkincareProduct";

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css'
})
export class ProductSliderComponent implements OnInit {

    products: SkincareProduct[] = [];
    errorMessage: string | null = null;

    @ViewChild('slider', { read: ElementRef }) slider: ElementRef | undefined;

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getProducts('skincare', 10).subscribe({
            next: (data) => {
                console.log('Received data:', data);
                this.products = data;
            },
            error: (error) => {
                console.error('Error fetching products:', error);
                this.errorMessage = error.message;
            },
            complete: () => {
                console.log('Product fetch complete');
            }
        });
    }

    scrollLeft(): void {
        if (this.slider) {
            this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
        }
    }

    scrollRight(): void {
        if (this.slider) {
            this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
        }
    }

    navigateToUrl(url: string): void {
        window.open(url, '_blank');
    }
}

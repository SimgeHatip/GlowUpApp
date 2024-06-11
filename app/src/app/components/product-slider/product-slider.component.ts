import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css'
})
export class ProductSliderComponent implements OnInit {
  categories: any[] = [];
  products: any[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getCareProducts("3760911");
  }

  getCategories(): void {
    this.categoryService.getAmazonCategoryList('US')
        .subscribe(data => {
          if (Array.isArray(data)) {
            this.categories = data;
            console.log(this.categories);

          } else {
            this.categories = Object.values(data);
            console.log(this.categories[2]);
          }
        });
  }

    getCareProducts(categoryId: string): void {
        this.categoryService.getAmazonProductsByCategory(categoryId)
            .subscribe(data => {
                console.log(data.data.products);
             this.products = data.data.products;
            });
    }
}

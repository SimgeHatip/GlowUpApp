package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.ProductService;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/product-details")
    public String getAmazonProductDetails(@RequestParam String asin) {
        return productService.getAmazonProductDetails(asin);
    }

    @GetMapping("/amazon-category-list")
    public String getAmazonCategoryList(@RequestParam String country) {
        return productService.getAmazonCategoryList(country);
    }

    @GetMapping("/amazon-products-by-category")
    public String getAmazonProductsByCategory(@RequestParam String categoryId) {
        return productService.getAmazonProductsByCategory(categoryId);
    }
}

package service;

import kong.unirest.core.HttpResponse;
import kong.unirest.core.Unirest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Value("${rapidapi.key}")
    private String apiKey;

    @Value("${rapidapi.host}")
    private String apiHost;

    public String getAmazonProductDetails(String asin) {
        HttpResponse<String> response = Unirest.get("https://" + apiHost + "/asin-to-gtin")
                .queryString("asin", asin)
                .queryString("country", "US")
                .header("x-rapidapi-key", apiKey)
                .header("x-rapidapi-host", apiHost)
                .asString();
        return response.getBody();
    }

    public String getAmazonCategoryList(String country) {
        HttpResponse<String> response = Unirest.get("https://" + apiHost + "/product-category-list")
                .queryString("country", country)
                .header("x-rapidapi-key", apiKey)
                .header("x-rapidapi-host", apiHost)
                .asString();
        return response.getBody();
    }

    public String getAmazonProductsByCategory(String categoryId) {
        HttpResponse<String> response = Unirest.get("https://" + apiHost + "/products-by-category")
                .queryString("category_id", categoryId)
                .queryString("page", 1)
                .queryString("country", "US")
                .queryString("sort_by", "RELEVANCE")
                .queryString("product_condition", "ALL")
                .header("x-rapidapi-key", apiKey)
                .header("x-rapidapi-host", apiHost)
                .asString();
        return response.getBody();
    }


}

package service;

import dto.ProductDto;
import kong.unirest.core.HttpResponse;
import kong.unirest.core.Unirest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class ProductService {

    @Value("${api.key}")
    private String apiKey;

    private final String apiUrl = "https://api.app.outscraper.com/amazon/products";

    public ProductDto getProducts(String query, int limit) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-API-KEY", apiKey);

        String url = apiUrl + "?query=" + query + "&limit=" + limit;
        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<ProductDto> response = restTemplate.exchange(url, HttpMethod.GET, entity, ProductDto.class);
        return response.getBody();
    }

}

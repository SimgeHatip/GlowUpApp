package service;
import kong.unirest.core.HttpResponse;
import kong.unirest.core.Unirest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Value("${collectapi.api.key}")
    private String apiKey;

    public String searchProduct(String query, String source) {
        HttpResponse<String> response = Unirest.get("https://api.collectapi.com/shopping/search")
                .queryString("data.query", query)
                .queryString("data.source", source)
                .header("content-type", "application/json")
                .header("authorization", "apikey " + apiKey)
                .asString();

        return response.getBody();
    }
}

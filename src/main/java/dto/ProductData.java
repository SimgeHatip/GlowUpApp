package dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductData {
    @JsonProperty("short_url")
    private String shortUrl;
    private String asin;
    private String name;
    private String rating;
    private String reviews;
    private String answeredQuestions;
    private String fastTrackMessage;
    private String about;
    private String description;
    private List<String> categories;
    private String storeTitle;
    private String storeUrl;
    private String price;
    private String availability;
    private String strikePrice;
    private String priceSaving;
    private String shipping;
    private String merchantInfo;
    private String bage;
    private String currency;
    private String image1;
    private String image2;
    private String image3;
    private String image4;
    private String image5;
    private String overview;
    private Map<String, Object> details;
}

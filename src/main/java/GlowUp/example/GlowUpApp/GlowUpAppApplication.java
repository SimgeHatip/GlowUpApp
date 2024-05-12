package GlowUp.example.GlowUpApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@ComponentScan(basePackages = {"security", "controller", "repository", "service", "domain", "dto", "payload"})
@EnableMongoRepositories(basePackages = "repository")
public class GlowUpAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(GlowUpAppApplication.class, args);
	}

	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}


}

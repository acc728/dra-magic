package com.ual.magic;

import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

/**
 * The MagicApplication class is the entry point for the application.
 */
@SpringBootApplication
public class MagicApplication {

	/**
     * Creates and configures a CorsFilter bean.
     *
     * @return A CorsFilter object with the specified CORS configuration.
     */
	@Bean
	public CorsFilter corsFilter() {
		CorsConfiguration corsConfiguration = new CorsConfiguration();
		corsConfiguration.setAllowCredentials(true);
		corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:4200",
				"http://localhost:8080"));
		corsConfiguration.setAllowedHeaders(Arrays.asList("Origin",
				"Access-Control-Allow-Origin", "Content-Type",
				"Accept", "Authorization", "Origin, Accept", "X-Requested-With",
				"Access-Control-Request-Method", "Access-Control-Request-Headers"));
		corsConfiguration.setExposedHeaders(Arrays.asList("Origin", "Content-Type",
				"Accept", "Authorization",
				"Access-Control-Allow-Origin", "Access-Control-Allow-Origin",
				"Access-Control-Allow-Credentials"));
		corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT",
				"DELETE", "OPTIONS"));

		UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
		urlBasedCorsConfigurationSource.registerCorsConfiguration("/**",
				corsConfiguration);

		return new CorsFilter(urlBasedCorsConfigurationSource);
	}

	/**
     * The main method that starts the application.
     *
     * @param args The command line arguments.
     */
	public static void main(String[] args) {
		SpringApplication.run(MagicApplication.class, args);
	}

}

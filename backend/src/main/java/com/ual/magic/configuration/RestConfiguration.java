package com.ual.magic.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.ual.magic.entity.Card;

/**
 * The RestConfiguration class configures the Repository REST configuration.
 */
@Configuration
public class RestConfiguration implements RepositoryRestConfigurer {

     /**
     * Configures the Repository REST configuration.
     * 
     * @param config The RepositoryRestConfiguration object to configure.
     * @param cors   The CorsRegistry object for configuring Cross-Origin Resource Sharing.
     */
    @Override
    public void configureRepositoryRestConfiguration(
      RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(Card.class);
    }
}
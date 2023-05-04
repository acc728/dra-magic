package com.ual.magic.repository;

import com.ual.magic.entity.Card;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE, RequestMethod.OPTIONS }, exposedHeaders = {
                "Access-Control-Allow-Origin",
                "Access-Control-Allow-Headers",
                "Access-Control-Allow-Methods" })

@RepositoryRestResource
public interface CardRepository extends CrudRepository<Card, Long> {
    public List<Card> findByNameContainingIgnoreCase(@Param("name") String name);
}
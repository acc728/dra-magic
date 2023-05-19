package com.ual.magic.repository;

import com.ual.magic.entity.Card;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CardRepository extends CrudRepository<Card, Long> {
    public List<Card> findByNameContainingIgnoreCase(@Param("name") String name);
}
package com.ual.magic.repository;

import com.ual.magic.entity.Card;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
/**
 * The CardRepository interface provides CRUD operations for the Card entity.
 */
@RepositoryRestResource
public interface CardRepository extends CrudRepository<Card, Long> {
    /**
     * Finds a list of cards by name, ignoring case.
     * 
     * @param name The card's name to search for.
     * @return A list of cards matching the specified name.
     */
    public List<Card> findByNameContainingIgnoreCase(@Param("name") String name);
}
package com.ual.magic.entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/**
 * Class that represents the cards of Magic: The Gathering.
 */
@Entity
@Table(name = "cards")
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @NotBlank(message = "Name is mandatory")
    private String name;

    @NotBlank(message = "imageUrl is mandatory")
    private String imageUrl;
   
    @Size(min=0, max=5, message = "Colors are mandatory (0-5 per card)")
    private String[] colors;

    private String comments;

    /**
     * Empty constructor for the Card class.
     */
    public Card() {
    }

    /**
     * Constructor for the Card class.
     * 
     * @param name     Name of the card.
     * @param imageUrl URL of the card's image.
     * @param colors   Colors associated with the identity of the card.
     */
    public Card(String name, String imageUrl, String[] colors) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.colors = colors;
        this.comments = "";
    }

    /**
     * Gets the ID of the card.
     * 
     * @return The ID of the card.
     */
    public long getId() {
        return id;
    }

    /**
     * Sets the ID of the card.
     * 
     * @param id The ID of the card.
     */
    public void setId(long id) {
        this.id = id;
    }

    /**
     * Gets the name of the card.
     * 
     * @return The name of the card.
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the name of the card.
     * 
     * @param name The name of the card.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Gets the URL of the card's image.
     * 
     * @return The URL of the card's image.
     */
    public String getImageUrl() {
        return imageUrl;
    }

    /**
     * Sets the URL of the card's image.
     * 
     * @param imageUrl The URL of the card's image.
     */
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    /**
     * Gets the colors associated with the card.
     * 
     * @return The colors associated with the card.
     */
    public String[] getColors() {
        return colors;
    }

    /**
     * Sets the colors associated with the card.
     * 
     * @param colors The colors associated with the card.
     */
    public void setColors(String[] colors) {
        this.colors = colors;
    }

    /**
     * Gets the comments stored from the user about the card.
     * 
     * @return The comments related to the card.
     */
    public String getComments() {
        return comments;
    }

    /**
     * Sets the comments stored from the user about the card.
     * 
     * @param comments The comments related to the card.
     */
    public void setComments(String comments) {
        this.comments = comments;
    }

}
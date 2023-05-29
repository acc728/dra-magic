package com.ual.magic.dto;

/**
 * The TrendsDTO class represents a data transfer 
 * object for trends (Cards) in Magic: The Gathering.
 */
public class TrendsDTO {
    private String[] topCards;

    /**
     * Constructor for the TrendsDTO class.
     * 
     * @param topCards The top cards associated with the trends.
     */
    public TrendsDTO(String[] topCards){
        this.topCards = topCards;
    }

    /**
     * Gets the top cards associated with the trending cards.
     * 
     * @return The top cards associated with the trends.
     */
    public String[] getTopCards() {
        return topCards;
    }

    /**
     * Sets the top cards associated with the trends.
     * 
     * @param topCards The top cards associated with the trends.
     */
    public void setTopCards(String[] topCards) {
        this.topCards = topCards;
    }
}
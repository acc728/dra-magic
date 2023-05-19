package com.ual.magic.dto;

public class TrendsDTO {
    private String[] topCards;

    public TrendsDTO(String[] topCards){
        this.topCards = topCards;
    }

    public String[] getTopCards() {
        return topCards;
    }

    public void setTopCards(String[] topCards) {
        this.topCards = topCards;
    }
}
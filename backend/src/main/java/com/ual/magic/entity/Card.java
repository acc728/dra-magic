package com.ual.magic.entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

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

    public Card() {
    }

    public Card(String name, String imageUrl, String[] colors) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.colors = colors;
        this.comments = "";
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String[] getColors() {
        return colors;
    }

    public void setColors(String[] colors) {
        this.colors = colors;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

}
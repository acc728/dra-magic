package com.ual.magic.service;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import com.ual.magic.dto.TrendsDTO;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

@Component("trendsService")
public class TrendsDTOService {
    private Playwright playwrightInstance;

    public TrendsDTOService() {
        super();
        this.playwrightInstance = Playwright.create();
    }

    public TrendsDTO retrieveTrends() {
        Browser browserInstance = this.playwrightInstance.chromium().launch();
        var topCards = retrieveTopCards(browserInstance);
        return new TrendsDTO(topCards);
    }

    private String[] retrieveTopCards(Browser browser) {
        Page page = browser.newPage();
        page.navigate("https://www.cardkingdom.com/");
        page.waitForSelector("#desktopSlider > div > h3");
        
        Document webPage = Jsoup.parse(page.content());

        Elements items = webPage.select("#desktopSlider > div > div > div.product-slider-row > div > a");

        String[] topCards = new String[items.size()];
        
        for (int i = 0; i < items.size(); i++) {
            String cardName =  items.get(i).select("div.slider-item-info.fw-slightly-bold > div.slider-item-title").text();
            if(cardName == null) 
                continue;
            topCards[i] = cardName;
        }
        page.close();

        return topCards;
    }
}

package com.ual.magic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ual.magic.dto.TrendsDTO;
import com.ual.magic.service.TrendsDTOService;

@RestController
@RequestMapping("/trends")
public class TrendsDTOController {
    @Autowired
    private TrendsDTOService trendsService;

    @GetMapping("data")
    public ResponseEntity<TrendsDTO> getTrendsData() {
        return new ResponseEntity<TrendsDTO>(trendsService.retrieveTrends(),
                HttpStatus.OK);
    }
}

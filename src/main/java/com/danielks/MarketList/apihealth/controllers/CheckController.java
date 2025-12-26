package com.danielks.MarketList.apihealth.controllers;

import com.danielks.MarketList.apihealth.dtos.CheckResponse;
import com.danielks.MarketList.apihealth.services.CheckService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/health")
public class CheckController {
    private final CheckService service;

    public CheckController(CheckService service) {
        this.service = service;
    }

    @GetMapping("/ping")
    public CheckResponse checkHealth() {
        return service.checkHealth();
    }
}

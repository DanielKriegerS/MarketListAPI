package com.danielks.MarketList.controllers;

import com.danielks.MarketList.entities.FinishedMarketList;
import com.danielks.MarketList.services.FinishedMarketListService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/finished-market-lists")
public class FinishedMarketListController {

    private final FinishedMarketListService service;

    public FinishedMarketListController(FinishedMarketListService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<FinishedMarketList> saveFinishedMarketList(@RequestBody FinishedMarketList finishedList) {
        FinishedMarketList savedList = service.saveFinishedMarketList(finishedList);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedList);
    }

    @GetMapping
    public ResponseEntity<List<FinishedMarketList>> getAllFinishedLists() {
        return ResponseEntity.ok(service.getAllFinishedLists());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FinishedMarketList> getFinishedListById(@PathVariable UUID id) {
        return service.getFinishedListById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}

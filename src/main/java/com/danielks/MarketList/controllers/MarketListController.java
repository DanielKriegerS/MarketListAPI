package com.danielks.MarketList.controllers;

import com.danielks.MarketList.entities.MarketList;
import com.danielks.MarketList.entities.dtos.ListSummaryDTO;
import com.danielks.MarketList.services.MarketListService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/market-lists")
public class MarketListController {
    private final MarketListService service;

    public MarketListController(MarketListService service) {
        this.service = service;
    }

    @GetMapping("/open-lists")
    public ResponseEntity<List<ListSummaryDTO>> getOpenLists() {
        return ResponseEntity.ok(service.getOpenLists());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MarketList> getById(@PathVariable UUID id) {
        MarketList list = service.getById(id);
        return ResponseEntity.ok(list) ;
    }

    @GetMapping("/finished-lists")
    public ResponseEntity<List<MarketList>> getFinishedMarketLists() {
        return ResponseEntity.ok(service.getFinishedMarketLists());
    }

    @PostMapping
    public ResponseEntity<MarketList> create(@RequestBody MarketList marketList) {
        MarketList saved = service.create(marketList);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MarketList> update(@PathVariable UUID id, @RequestBody MarketList updatedList) {
        MarketList list = service.update(id, updatedList);
        return ResponseEntity.ok(list);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<MarketList> finishList(@PathVariable UUID id) {
        MarketList finishedList = service.finishList(id);
        return ResponseEntity.ok(finishedList);
    }
}

package com.danielks.MarketList.controllers;

import com.danielks.MarketList.entities.MarketList;
import com.danielks.MarketList.services.MarketListService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/market-lists")
public class MarketListController {
    private final MarketListService service;

    public MarketListController(MarketListService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<MarketList>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MarketList> getById(@PathVariable UUID id) {
        MarketList list = service.getById(id);
        return list != null ? ResponseEntity.ok(list) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<MarketList> create(@RequestBody MarketList marketList) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.create(marketList));
    }

    @PutMapping("/{id}")
    public ResponseEntity<MarketList> update(@PathVariable UUID id, @RequestBody MarketList updatedList) {
        MarketList list = service.update(id, updatedList);
        return list != null ? ResponseEntity.ok(list) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}

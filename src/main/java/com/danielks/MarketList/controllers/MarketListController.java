package com.danielks.MarketList.controllers;

import com.danielks.MarketList.entities.MarketList;
import com.danielks.MarketList.entities.dtos.CompleteListDTO;
import com.danielks.MarketList.entities.dtos.FinishedListDTO;
import com.danielks.MarketList.entities.dtos.ListSummaryDTO;
import com.danielks.MarketList.entities.mappers.MarketListMapper;
import com.danielks.MarketList.services.MarketListService;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("/market-lists")
public class MarketListController {
    private final MarketListService service;

    public MarketListController(MarketListService service) {
        this.service = service;
    }

    @GetMapping("/open-lists")
    public ResponseEntity<CollectionModel<EntityModel<ListSummaryDTO>>> getOpenLists() {
        List<ListSummaryDTO> openLists = service.getOpenLists();

        List<EntityModel<ListSummaryDTO>> listModels = openLists.stream()
                .map(EntityModel::of).toList();

        CollectionModel<EntityModel<ListSummaryDTO>> collectionModel = CollectionModel.of(listModels,
                linkTo(methodOn(MarketListController.class).getOpenLists()).withSelfRel());
        collectionModel.add(linkTo(methodOn(MarketListController.class).getFinishedMarketLists()).withRel("Finished Lists"));

        return ResponseEntity.ok(collectionModel);
    }

    @GetMapping("/finished-lists")
    public ResponseEntity<List<ListSummaryDTO>> getFinishedMarketLists() {
        return ResponseEntity.ok(service.getFinishedLists());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CompleteListDTO> getById(@PathVariable UUID id) {
        CompleteListDTO list = service.getById(id);
        return ResponseEntity.ok(list) ;
    }

    @PostMapping
    public ResponseEntity<CompleteListDTO> create(@RequestBody MarketList marketList) {
        CompleteListDTO saved = service.create(marketList);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CompleteListDTO> update(@PathVariable UUID id, @RequestBody MarketList updatedList) {
        CompleteListDTO list = service.update(id, updatedList);
        return ResponseEntity.ok(list);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<FinishedListDTO> finishList(@PathVariable UUID id) {
        FinishedListDTO finishedList = service.finishList(id);
        return ResponseEntity.ok(finishedList);
    }
}

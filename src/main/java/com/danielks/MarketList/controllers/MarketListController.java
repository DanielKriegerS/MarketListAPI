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
                linkTo(methodOn(MarketListController.class).getOpenLists()).withSelfRel(),
                linkTo(methodOn(MarketListController.class).getFinishedLists()).withRel("Finished Lists"));

        return ResponseEntity.ok(collectionModel);
    }

    @GetMapping("/finished-lists")
    public ResponseEntity<CollectionModel<EntityModel<ListSummaryDTO>>> getFinishedLists() {
        List<ListSummaryDTO> finishedLists = service.getFinishedLists();

        List<EntityModel<ListSummaryDTO>> listModels = finishedLists.stream()
                .map(EntityModel::of).toList();

        CollectionModel<EntityModel<ListSummaryDTO>> collectionModel = CollectionModel.of(listModels,
                linkTo(methodOn(MarketListController.class).getFinishedLists()).withSelfRel(),
                linkTo(methodOn(MarketListController.class).getOpenLists()).withRel("Open Lists"));

        return ResponseEntity.ok(collectionModel);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EntityModel<CompleteListDTO>> getById(@PathVariable UUID id) {
        CompleteListDTO list = service.getById(id);

        EntityModel<CompleteListDTO> model = EntityModel.of(list,
                linkTo(methodOn(MarketListController.class).getById(id)).withSelfRel(),
                linkTo(methodOn(MarketListController.class).getOpenLists()).withRel("Open Lists"),
                linkTo(methodOn(MarketListController.class).getFinishedLists()).withRel("Finished Lists")
        );
        return ResponseEntity.ok(model) ;
    }

    @PostMapping
    public ResponseEntity<EntityModel<CompleteListDTO>> create(@RequestBody MarketList marketList) {
        CompleteListDTO saved = service.create(marketList);

        EntityModel<CompleteListDTO> model = EntityModel.of(saved,
                linkTo(methodOn(MarketListController.class).getById(saved.id())).withSelfRel(),
                linkTo(methodOn(MarketListController.class).getOpenLists()).withRel("Open Lists"),
                linkTo(methodOn(MarketListController.class).getFinishedLists()).withRel("Finished Lists")
        );

        return ResponseEntity
                .created(linkTo(methodOn(MarketListController.class)
                        .getById(saved.id()))
                        .toUri())
                .body(model);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EntityModel<CompleteListDTO>> update(@PathVariable UUID id, @RequestBody MarketList updatedList) {
        CompleteListDTO list = service.update(id, updatedList);
        EntityModel<CompleteListDTO> model = EntityModel.of(list,
                linkTo(methodOn(MarketListController.class).getById(id)).withSelfRel(),
                linkTo(methodOn(MarketListController.class).getOpenLists()).withRel("Open Lists"),
                linkTo(methodOn(MarketListController.class).getFinishedLists()).withRel("Finished Lists")
        );

        return ResponseEntity.ok(model);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<EntityModel<FinishedListDTO>> finishList(@PathVariable UUID id) {
        FinishedListDTO finishedList = service.finishList(id);

        EntityModel<FinishedListDTO> model = EntityModel.of(finishedList,
                linkTo(methodOn(MarketListController.class).getById(id)).withSelfRel(),
                linkTo(methodOn(MarketListController.class).getOpenLists()).withRel("Open Lists"),
                linkTo(methodOn(MarketListController.class).getFinishedLists()).withRel("Finished Lists")
        );

        return ResponseEntity.ok(model);
    }
}

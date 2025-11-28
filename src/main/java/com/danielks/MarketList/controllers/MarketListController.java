package com.danielks.MarketList.controllers;

import com.danielks.MarketList.entities.MarketList;
import com.danielks.MarketList.entities.dtos.CompleteListDTO;
import com.danielks.MarketList.entities.dtos.FinishedListDTO;
import com.danielks.MarketList.entities.dtos.ListSummaryDTO;
import com.danielks.MarketList.security.entities.CustomUserDetails;
import com.danielks.MarketList.services.MarketListService;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
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
    public ResponseEntity<CollectionModel<EntityModel<ListSummaryDTO>>> getOpenLists(@AuthenticationPrincipal CustomUserDetails userDetails) {
        List<ListSummaryDTO> openLists = service.getOpenLists(userDetails.getId());

        List<EntityModel<ListSummaryDTO>> listModels = openLists.stream()
                .map(EntityModel::of).toList();

        CollectionModel<EntityModel<ListSummaryDTO>> collectionModel = CollectionModel.of(listModels,
                linkTo(methodOn(MarketListController.class).getOpenLists(userDetails)).withSelfRel(),
                linkTo(methodOn(MarketListController.class).getFinishedLists(userDetails)).withRel("Finished Lists"));

        return ResponseEntity.ok(collectionModel);
    }

    @GetMapping("/finished-lists")
    public ResponseEntity<CollectionModel<EntityModel<ListSummaryDTO>>> getFinishedLists(@AuthenticationPrincipal CustomUserDetails userDetails) {
        List<ListSummaryDTO> finishedLists = service.getFinishedLists(userDetails.getId());

        List<EntityModel<ListSummaryDTO>> listModels = finishedLists.stream()
                .map(EntityModel::of).toList();

        CollectionModel<EntityModel<ListSummaryDTO>> collectionModel = CollectionModel.of(listModels,
                linkTo(methodOn(MarketListController.class).getFinishedLists(userDetails)).withSelfRel(),
                linkTo(methodOn(MarketListController.class).getOpenLists(userDetails)).withRel("Open Lists"));

        return ResponseEntity.ok(collectionModel);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EntityModel<CompleteListDTO>> getById(@PathVariable UUID id, @AuthenticationPrincipal CustomUserDetails userDetails) {
        CompleteListDTO list = service.getById(id, userDetails.getId());

        EntityModel<CompleteListDTO> model = EntityModel.of(list,
                linkTo(methodOn(MarketListController.class).getById(id, userDetails)).withSelfRel(),
                linkTo(methodOn(MarketListController.class).getOpenLists(userDetails)).withRel("Open Lists"),
                linkTo(methodOn(MarketListController.class).getFinishedLists(userDetails)).withRel("Finished Lists")
        );
        return ResponseEntity.ok(model) ;
    }

    @PostMapping
    public ResponseEntity<EntityModel<CompleteListDTO>> create(@RequestBody MarketList marketList, @AuthenticationPrincipal CustomUserDetails userDetails) {
        CompleteListDTO saved = service.create(marketList, userDetails.getId());

        EntityModel<CompleteListDTO> model = EntityModel.of(saved,
                linkTo(methodOn(MarketListController.class).getById(saved.id(), userDetails)).withSelfRel(),
                linkTo(methodOn(MarketListController.class).getOpenLists(userDetails)).withRel("Open Lists"),
                linkTo(methodOn(MarketListController.class).getFinishedLists(userDetails)).withRel("Finished Lists")
        );

        return ResponseEntity
                .created(linkTo(methodOn(MarketListController.class)
                        .getById(saved.id(), userDetails))
                        .toUri())
                .body(model);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EntityModel<CompleteListDTO>> update(@PathVariable UUID id, @RequestBody MarketList updatedList, @AuthenticationPrincipal CustomUserDetails userDetails) {
        CompleteListDTO list = service.update(id, updatedList, userDetails.getId());
        EntityModel<CompleteListDTO> model = EntityModel.of(list,
                linkTo(methodOn(MarketListController.class).getById(id, userDetails)).withSelfRel(),
                linkTo(methodOn(MarketListController.class).getOpenLists(userDetails)).withRel("Open Lists"),
                linkTo(methodOn(MarketListController.class).getFinishedLists(userDetails)).withRel("Finished Lists")
        );

        return ResponseEntity.ok(model);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id, @AuthenticationPrincipal CustomUserDetails userDetails) {
        service.delete(id, userDetails.getId());
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<EntityModel<FinishedListDTO>> finishList(@PathVariable UUID id, @AuthenticationPrincipal CustomUserDetails userDetails) {
        FinishedListDTO finishedList = service.finishList(id, userDetails.getId());

        EntityModel<FinishedListDTO> model = EntityModel.of(finishedList,
                linkTo(methodOn(MarketListController.class).getById(id, userDetails)).withSelfRel(),
                linkTo(methodOn(MarketListController.class).getOpenLists(userDetails)).withRel("Open Lists"),
                linkTo(methodOn(MarketListController.class).getFinishedLists(userDetails)).withRel("Finished Lists")
        );

        return ResponseEntity.ok(model);
    }
}

package com.danielks.MarketList.controllers;

import com.danielks.MarketList.entities.dtos.CompleteListDTO;
import com.danielks.MarketList.services.MarketListImportService;
import com.danielks.MarketList.services.MarketListService;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.UUID;

@RestController
@RequestMapping("/market-lists/download")
public class ProcessMarketListController {
    private final MarketListImportService importerService;
    private final MarketListService marketListService;

    public ProcessMarketListController(MarketListImportService importerService, MarketListService marketListService) {
        this.importerService = importerService;
        this.marketListService = marketListService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ByteArrayResource> downloadMarketList(@PathVariable UUID id) throws IOException {
        CompleteListDTO list = marketListService.getById(id);
        ByteArrayResource resource = importerService.generateExcel(list);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=market_list_" + id + ".xlsx")
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .contentLength(resource.contentLength())
                .body(resource);
    }

}

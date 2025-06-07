package com.danielks.MarketList.entities.dtos;

import java.time.LocalDateTime;
import java.util.UUID;

public record ListSummaryDTO(UUID id,
                             LocalDateTime date,
                             String description,
                             Float totalValue,
                             int totalItems ,
                             boolean isFinished) {
}

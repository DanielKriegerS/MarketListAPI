package com.danielks.MarketList.entities.dtos;

import com.danielks.MarketList.entities.MarketItem;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

public record CompleteListDTO(UUID id,
                              LocalDateTime date,
                              String description,
                              Float totalValue,
                              ArrayList<MarketItem> items ,
                              boolean finished) {}

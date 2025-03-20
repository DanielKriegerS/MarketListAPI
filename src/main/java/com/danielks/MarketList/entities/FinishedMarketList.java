package com.danielks.MarketList.entities;

import com.danielks.MarketList.utils.MarketItemConverter;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
public class FinishedMarketList {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String description;

    @Lob
    @Column(columnDefinition = "TEXT")
    @Convert(converter = MarketItemConverter.class)
    private List<MarketItem> items;

    @Column(nullable = false, updatable = false)
    private LocalDateTime finishDate;

    private Float totalValue;

    public FinishedMarketList() {
    }

    public FinishedMarketList(UUID id, String description, List<MarketItem> items, LocalDateTime finishDate, Float totalValue) {
        this.id = id;
        this.description = description;
        this.items = items;
        this.finishDate = finishDate == null ? LocalDateTime.now() : finishDate;
        this.totalValue = totalValue;
    }

    public UUID getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public List<MarketItem> getItems() {
        return items;
    }

    public LocalDateTime getFinishDate() {
        return finishDate;
    }

    public Float getTotalValue() {
        return totalValue;
    }
}

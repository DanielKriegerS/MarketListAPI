package com.danielks.MarketList.entities;

import com.danielks.MarketList.utils.MarketItemConverter;
import jakarta.persistence.*;
import java.time.LocalDateTime;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "tb_market_list")
public class MarketList {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Lob
    @Column(columnDefinition = "TEXT")
    @Convert(converter = MarketItemConverter.class)
    private List<MarketItem> items;

    private LocalDateTime date;

    private String description;

    @Column(name = "total_value")
    private Float totalValue;

    @Column(name = "is_finished")
    private boolean isFinished;

    public MarketList() {
    }

    public MarketList(UUID id, List<MarketItem> items, LocalDateTime date, String description, Float totalValue, boolean isFinished) {
        this.id = id;
        this.items = items;
        this.date = date == null ? LocalDateTime.now() : date;
        this.description = description;
        this.totalValue = totalValue;
        this.isFinished = false;
    }

    public List<MarketItem> getItems() {
        return items;
    }

    public String getDescription() {
        return description;
    }

    public Float getTotalValue() {
        return totalValue;
    }

    public boolean isFinished() {
        return isFinished;
    }

    public void finish() {
        this.isFinished = true;
    }

}

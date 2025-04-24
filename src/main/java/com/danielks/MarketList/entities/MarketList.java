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

    @Column(name="create_date", nullable = false)
    private LocalDateTime createDate;

    private String description;

    private Float totalValue;

    public MarketList() {
    }

    public MarketList(UUID id, List<MarketItem> items, LocalDateTime createDate, String description, Float totalValue) {
        this.id = id;
        this.items = items;
        this.createDate = createDate == null ? LocalDateTime.now() : createDate;
        this.description = description;
        this.totalValue = totalValue;
    }

    public List<MarketItem> getItems() {
        return items;
    }

    public String getDescription() {
        return description;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public Float getTotalValue() {
        return totalValue;
    }


}

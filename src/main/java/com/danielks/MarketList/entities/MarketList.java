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
    @Basic(fetch = FetchType.EAGER)
    @Column(columnDefinition = "TEXT")
    @Convert(converter = MarketItemConverter.class)
    private List<MarketItem> items;

    private LocalDateTime date;

    private String description;

    @Column(name = "total_value")
    private Float totalValue;

    @Column(name = "is_finished")
    private boolean finished;

    public MarketList() {
    }

    public MarketList(UUID id, List<MarketItem> items, LocalDateTime date, String description, Float totalValue, boolean finished) {
        this.id = id;
        this.items = items;
        this.date = date == null ? LocalDateTime.now() : date;
        this.description = description;
        this.totalValue = totalValue;
        this.finished = finished;
    }

    public UUID getId() {
        return id;
    }

    public List<MarketItem> getItems() {
        return items;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public String getDescription() {
        return description;
    }

    public Float getTotalValue() {
        return totalValue;
    }

    public boolean isFinished() {
        return finished;
    }

    public void finish() {
        this.finished = true;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setTotalValue(Float totalValue) {
        this.totalValue = totalValue;
    }

    public boolean partialValidateList() {
        boolean isEmptyDescription = this.validateDescription();
        boolean validItems = this.validateItems();

        if (isEmptyDescription) {
            return false;
        }

        if (!validItems) {
            return false;
        }

        return true;
    }

    public boolean validateList() {
        boolean partialValidated = this.partialValidateList();

        if (!partialValidated) {
            return false;
        }

        if (this.totalValue < 0) {
            return false;
        }

        return true;
    }

    private boolean validateItems() {
        for (MarketItem item : this.items) {
            if(item.name().isEmpty()) {
                return false;
            }

            if(item.quantity() <= 0) {
                return false;
            }

            if(item.price() <= 0) {
                return false;
            }
        }

        return true;
    }

    public boolean validateDescription() {
        return this.description.trim().isEmpty();
    }

    public void updateList(MarketList listToUpdate) {
        if (!listToUpdate.getDescription().isEmpty()){
            this.description = listToUpdate.getDescription();
        }

        if (!listToUpdate.getItems().isEmpty()) {
            this.items = listToUpdate.getItems();
        }

        if (!listToUpdate.getTotalValue().equals(this.totalValue)) {
            this.totalValue = listToUpdate.getTotalValue();
        }
    }
}

package com.danielks.MarketList.entities;

import com.danielks.MarketList.exceptions.market_list.ListFinishedException;
import com.danielks.MarketList.exceptions.market_list.ListInvalidException;
import com.danielks.MarketList.utils.MarketItemConverter;
import jakarta.persistence.*;
import org.springframework.http.HttpStatus;

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
        char context = 'F';
        validateList(context);
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

    // context 'C' = create; 'U'= update; 'F' finish
    public void verifyToCreate() {
        char context = 'C';
        partialValidateList(context);
    }
    public void partialValidateList(char context) {
        validateDescription();
        validateItems(context);
    }

    private void validateItems(char context) {
        for (MarketItem item : items) {
            if(item.name().isEmpty()) {
                throw new ListInvalidException(HttpStatus.BAD_REQUEST, " item name empty");
            }

            if(item.quantity() < 0) {
                throw new ListInvalidException(HttpStatus.BAD_REQUEST, " negative quantity");
            }

            if(item.price() < 0) {
                throw new ListInvalidException(HttpStatus.BAD_REQUEST, " negative item price");
            }

            if(Character.toUpperCase(context) != 'F') {
                break;
            }

            if(item.quantity() == 0) {
                throw new ListInvalidException(HttpStatus.BAD_REQUEST, " invalid item quantity");
            }

            if(item.price() == 0) {
                throw new ListInvalidException(HttpStatus.BAD_REQUEST, " invalid item price");
            }
        }
    }

    public void validateList(char context) {
        partialValidateList(context);
        verifyFinished();

        if (totalValue < 0) {
            throw new ListInvalidException(HttpStatus.BAD_REQUEST, " negative list total value");
        }
    }

    private void validateDescription() {
        if (description.trim().isEmpty()){
            throw new ListInvalidException(HttpStatus.BAD_REQUEST, " description invalid");
        }
    }

    public void updateList(MarketList listToUpdate) {
        char context = 'U';
        listToUpdate.validateList(context);

        if (!listToUpdate.getDescription().isEmpty()){
            description = listToUpdate.getDescription();
        }

        if (!listToUpdate.getItems().isEmpty()) {
            items = listToUpdate.getItems();
        }

        if (!listToUpdate.getTotalValue().equals(totalValue)) {
            totalValue = listToUpdate.getTotalValue();
        }
    }

    private void verifyFinished() {
        if (finished) {
            throw new ListFinishedException(HttpStatus.BAD_REQUEST,
                                                        "the required list is finished!");
        }
    }
}

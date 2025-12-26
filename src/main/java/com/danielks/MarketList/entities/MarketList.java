package com.danielks.MarketList.entities;

import com.danielks.MarketList.exceptions.market_list.ListFinishedException;
import com.danielks.MarketList.exceptions.market_list.ListInvalidException;
import com.danielks.MarketList.security.entities.User;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id")
    private User owner;

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

    public UUID getOwner() { return owner.getId(); }

    public boolean isFinished() {
        return finished;
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

    public void finish() {
        char context = 'F';
        validateList(context);
        this.finished = true;
    }

    // context 'C' = create; 'U'= update; 'F' finish
    public void verifyToCreate() {
        char context = 'C';
        partialValidateList(context);
        setDate(LocalDateTime.now());
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

            if (Character.toUpperCase(context) == 'C'){
                validateItemToCreate(item);
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

        validateTotalValue(context);
    }

    private void validateItemToCreate(MarketItem item) {
        if (item.quantity() != 0) {
            throw new ListInvalidException(HttpStatus.BAD_REQUEST, " invalid item quantity");
        }

        if (item.price() != 0) {
            throw new ListInvalidException(HttpStatus.BAD_REQUEST, " invalid item price");
        }
    }

    public void validateList(char context) {
        partialValidateList(context);
        verifyFinished();
    }

    private void validateTotalValue(char context) {
        if (totalValue == null && Character.toUpperCase(context) != 'C') {
            throw new ListInvalidException(HttpStatus.BAD_REQUEST, " total value missing");
        }

        if (totalValue == null) {
            setTotalValue(0.0f);
        }

        if (totalValue < 0) {
            throw new ListInvalidException(HttpStatus.BAD_REQUEST, " negative list total value");
        }

        if (totalValue == 0 && Character.toUpperCase(context) == 'F') {
            throw new ListInvalidException(HttpStatus.BAD_REQUEST, " invalid list total value");
        }

        float effectiveTotal = calculateTotalValue();

        if (effectiveTotal != totalValue) {
            throw new ListInvalidException(HttpStatus.BAD_REQUEST, " total value mismatch");
        }
    }

    private float calculateTotalValue() {
        float calculatedTotal = 0.0f;
        for (MarketItem item : items) {
            calculatedTotal += (float) (item.price() * item.quantity());
        }

        return calculatedTotal;
    }

    private void validateDescription() {
        if (description == null) {
            throw new ListInvalidException(HttpStatus.BAD_REQUEST, " description missing");
        }

        if (description.trim().isEmpty() || description.isBlank()){
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

    public void linkToUser(User owner) {
        this.owner = owner;
    }

    @Override
    public String toString() {
        return "MarketList{" +
                "id=" + id +
                ", items=" + items +
                ", ownerId=" + owner.getId() +
                ", date=" + date +
                ", description='" + description + '\'' +
                ", totalValue=" + totalValue +
                ", finished=" + finished +
                '}';
    }
}

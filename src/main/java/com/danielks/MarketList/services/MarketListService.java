package com.danielks.MarketList.services;

import com.danielks.MarketList.entities.MarketList;
import com.danielks.MarketList.repositories.MarketListRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class MarketListService {
    private final MarketListRepository repository;

    public MarketListService(MarketListRepository repository) {
        this.repository = repository;
    }

    public List<MarketList> getAll() {
        return repository.findAll();
    }

    public MarketList getById(UUID id) {
        return repository.findById(id).orElse(null);
    }

    public MarketList create(MarketList marketList) {
        MarketList newList = new MarketList(null, marketList.getItems(), LocalDateTime.now(), marketList.getDescription(), marketList.getTotalValue());
        return repository.save(newList);
    }

    public MarketList update(UUID id, MarketList updatedList) {
        return repository.findById(id).map(existing -> {
            MarketList newList = new MarketList(id, updatedList.getItems(), existing.getCreateDate(), updatedList.getDescription(), updatedList.getTotalValue());
            return repository.save(newList);
        }).orElse(null);
    }

    public void delete(UUID id) {
        repository.deleteById(id);
    }
}
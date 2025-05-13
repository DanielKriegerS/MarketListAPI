package com.danielks.MarketList.services;

import com.danielks.MarketList.entities.MarketList;
import com.danielks.MarketList.repositories.MarketListRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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

    public List<MarketList> getFinishedMarketLists() {
        return repository.findByIsFinishedTrue();
    }
    public MarketList create(MarketList marketList) {
        MarketList newList = new MarketList(null, marketList.getItems(), LocalDateTime.now(), marketList.getDescription(), marketList.getTotalValue(), marketList.isFinished());
        return repository.save(newList);
    }

    public MarketList update(UUID id, MarketList updatedList) {
        return repository.findById(id).map(existing -> {
            MarketList newList = this.create(updatedList);
            return repository.save(newList);
        }).orElse(null);
    }

    public void delete(UUID id) {
        repository.deleteById(id);
    }

    public MarketList finishList(UUID id) {
        MarketList list = repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Lista não encontrada."));
        list.finish();
        repository.save(list);
        return list;
    }
}
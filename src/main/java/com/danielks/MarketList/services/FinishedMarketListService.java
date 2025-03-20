package com.danielks.MarketList.services;

import com.danielks.MarketList.entities.FinishedMarketList;
import com.danielks.MarketList.repositories.FinishedMarketListRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class FinishedMarketListService {

    private final FinishedMarketListRepository repository;

    public FinishedMarketListService(FinishedMarketListRepository repository) {
        this.repository = repository;
    }

    public FinishedMarketList saveFinishedMarketList(FinishedMarketList finishedList) {
        return repository.save(finishedList);
    }

    public List<FinishedMarketList> getAllFinishedLists() {
        return repository.findAll();
    }

    public Optional<FinishedMarketList> getFinishedListById(UUID id) {
        return repository.findById(id);
    }
}

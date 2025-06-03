package com.danielks.MarketList.services;

import com.danielks.MarketList.entities.MarketList;
import com.danielks.MarketList.entities.dtos.ListSummaryDTO;
import com.danielks.MarketList.exceptions.market_list.ListInvalidException;
import com.danielks.MarketList.exceptions.market_list.ListNotFoundException;
import com.danielks.MarketList.repositories.MarketListRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class MarketListService {
    private final MarketListRepository repository;

    public MarketListService(MarketListRepository repository) {
        this.repository = repository;
    }

    public List<ListSummaryDTO> getOpenLists() {
        return repository.findByIsFinishedFalse()
                .stream()
                .map(list -> new ListSummaryDTO(
                        list.getId(),
                        list.getDate(),
                        list.getDescription(),
                        list.getTotalValue(),
                        list.getItems().size(),
                        list.isFinished()
                ))
                .toList();
    }

    public MarketList getById(UUID id)  {
        return repository.findById(id).orElseThrow(() -> new ListNotFoundException(HttpStatus.NOT_FOUND,
                                                                                    "id: " + id + " not found"));
    }

    public List<ListSummaryDTO> getFinishedMarketLists() {
        return repository.findByIsFinishedTrue()
                .stream()
                .map(list -> new ListSummaryDTO(
                        list.getId(),
                        list.getDate(),
                        list.getDescription(),
                        list.getTotalValue(),
                        list.getItems().size(),
                        list.isFinished()
                ))
                .toList();
    }
    public MarketList create(MarketList marketList) {
        MarketList newList = new MarketList(marketList.getId(), marketList.getItems(), marketList.getDate(), marketList.getDescription(), marketList.getTotalValue(), marketList.isFinished());
        return repository.save(newList);
    }

    public MarketList update(UUID id, MarketList updatedList) {
        Optional<MarketList> optionalList = repository.findById(id);

        if(optionalList.isPresent()) {
            MarketList existing = optionalList.get();

            if (existing.validateList()) {
                existing.updateList(updatedList);
                return repository.save(existing);
            } else {
                throw new ListInvalidException(HttpStatus.BAD_REQUEST, " invalid list");
            }
        } else {
            throw new ListNotFoundException(HttpStatus.NOT_FOUND,
                    "id: " + id + " not found");
        }
    }

    public void delete(UUID id) {
        repository.deleteById(id);
    }

    public MarketList finishList(UUID id) {
        MarketList list = repository.findById(id)
                .orElseThrow(() -> new ListNotFoundException(HttpStatus.NOT_FOUND,
                "id: " + id + " not found"));
        list.finish();
        repository.save(list);
        return list;
    }
}
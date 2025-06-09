package com.danielks.MarketList.services;

import com.danielks.MarketList.entities.MarketList;
import com.danielks.MarketList.entities.dtos.CompleteListDTO;
import com.danielks.MarketList.entities.dtos.ListSummaryDTO;
import com.danielks.MarketList.entities.mappers.MarketListMapper;
import com.danielks.MarketList.exceptions.market_list.ListInvalidException;
import com.danielks.MarketList.exceptions.market_list.ListNotFoundException;
import com.danielks.MarketList.repositories.MarketListRepository;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class MarketListService {
    private final MarketListRepository repository;
    private final MarketListMapper mapper;

    public MarketListService(MarketListRepository repository, MarketListMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public CompleteListDTO getById(UUID id)  {
        MarketList list = repository.findById(id).orElseThrow(() -> new ListNotFoundException(HttpStatus.NOT_FOUND,
                "id: " + id + " not found"));
        return mapper.toDTO(list);
    }

    @Transactional
    public List<ListSummaryDTO> getOpenLists() {
        List<MarketList> openLists = repository.findByFinishedFalse();
        return mapper.toSummaryList(openLists);
    }

    @Transactional
    public List<ListSummaryDTO> getFinishedLists() {
        List<MarketList> finishedLists = repository.findByFinishedTrue();
        return mapper.toSummaryList(finishedLists);
    }

    public CompleteListDTO create(MarketList marketList) {
        boolean validToCreate = marketList.partialValidateList();
        if(!validToCreate) {
            throw new ListInvalidException(HttpStatus.BAD_REQUEST, " list invalid to create");
        }
        repository.save(marketList);
        return mapper.toDTO(marketList);
    }

    public CompleteListDTO update(UUID id, MarketList updatedList) {
        Optional<MarketList> optionalList = repository.findById(id);

        if(optionalList.isEmpty()) {
            throw new ListNotFoundException(HttpStatus.NOT_FOUND,
                    "id: " + id + " not found");
        }

        MarketList existing = optionalList.get();
        boolean validToUpdate = existing.validateList();

        if (!validToUpdate) {
            throw new ListInvalidException(HttpStatus.BAD_REQUEST, " list invalid to update");
        }

        existing.updateList(updatedList);
        repository.save(existing);
        return mapper.toDTO(existing);
    }

    public void delete(UUID id) {
         repository.findById(id).orElseThrow(() -> new ListNotFoundException(HttpStatus.NOT_FOUND,
                                                                                "id: " + id + " not found"));
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
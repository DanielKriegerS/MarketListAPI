package com.danielks.MarketList.services;

import com.danielks.MarketList.entities.MarketList;
import com.danielks.MarketList.entities.dtos.CompleteListDTO;
import com.danielks.MarketList.entities.dtos.FinishedListDTO;
import com.danielks.MarketList.entities.dtos.ListSummaryDTO;
import com.danielks.MarketList.entities.dtos.UserResponseDTO;
import com.danielks.MarketList.entities.mappers.MarketListMapper;
import com.danielks.MarketList.entities.mappers.UserResponseMapper;
import com.danielks.MarketList.exceptions.market_list.ListNotFoundException;
import com.danielks.MarketList.repositories.MarketListRepository;
import com.danielks.MarketList.security.entities.User;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class MarketListService {
    private final MarketListRepository repository;
    private final MarketListMapper mapper;
    private final UserService userService;
    private final UserResponseMapper userMapper;

    public MarketListService(MarketListRepository repository, MarketListMapper mapper, UserService userService, UserResponseMapper userMapper) {
        this.repository = repository;
        this.mapper = mapper;
        this.userService = userService;
        this.userMapper = userMapper;
    }

    public CompleteListDTO getById(UUID id)  {
        MarketList list = repository.findById(id)
                    .orElseThrow(() -> new ListNotFoundException(HttpStatus.NOT_FOUND,
                                                                            "id: " + id + " not found"));
        return mapper.toDTO(list);
    }

    @Transactional
    public List<ListSummaryDTO> getOpenLists(UUID ownerId) {
        userService.getUserById(ownerId);
        List<MarketList> openLists = repository.findByOwnerIdAndFinishedFalse(ownerId);
        return mapper.toSummaryList(openLists);
    }

    @Transactional
    public List<ListSummaryDTO> getFinishedLists(UUID ownerId) {
        userService.getUserById(ownerId);
        List<MarketList> finishedLists = repository.findByOwnerIdAndFinishedTrue(ownerId);
        return mapper.toSummaryList(finishedLists);
    }

    public CompleteListDTO create(MarketList marketList, UUID ownerId) {
        UserResponseDTO ownerDTO = userService.getUserById(ownerId);

        User owner = userMapper.toEntity(ownerDTO);
        marketList.verifyToCreate();
        marketList.linkToUser(owner);
        repository.save(marketList);
        return mapper.toDTO(marketList);
    }

    public CompleteListDTO update(UUID id, MarketList updatedList, UUID ownerId) {
        userService.getUserById(ownerId);
        MarketList list = validateListId(id);

        list.updateList(updatedList);
        repository.save(list);
        return mapper.toDTO(list);
    }

    public void delete(UUID id) {
        validateListId(id);
        repository.deleteById(id);
    }

    public FinishedListDTO finishList(UUID id) {
        MarketList list = validateListId(id);

        list.finish();
        repository.save(list);
        return new FinishedListDTO("OK");
    }

    private MarketList validateListId(UUID id) {
        return repository.findById(id)
                .orElseThrow(() -> new ListNotFoundException(HttpStatus.NOT_FOUND,
                        "id: " + id + " not found"));
    }
}
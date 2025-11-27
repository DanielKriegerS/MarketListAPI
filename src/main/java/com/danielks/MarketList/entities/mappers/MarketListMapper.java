package com.danielks.MarketList.entities.mappers;

import com.danielks.MarketList.entities.MarketItem;
import com.danielks.MarketList.entities.MarketList;
import com.danielks.MarketList.entities.dtos.CompleteListDTO;
import com.danielks.MarketList.entities.dtos.ListSummaryDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MarketListMapper {
    @Mapping(source = "id", target = "id")
    @Mapping(source = "items", target = "items")
    @Mapping(source = "date", target = "date")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "totalValue", target = "totalValue")
    @Mapping(source = "owner", target = "ownerId")
    CompleteListDTO toDTO(MarketList list);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "items", target = "items")
    @Mapping(source = "date", target = "date")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "totalValue", target = "totalValue")
    MarketList toEntity(CompleteListDTO listDTO);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "items", target = "totalItems", qualifiedByName = "itemsCount")
    @Mapping(source = "date", target = "date")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "totalValue", target = "totalValue")
    @Mapping(source = "owner", target = "ownerId")
    ListSummaryDTO toSummary(MarketList list);

    @Named("itemsCount")
    default int itemsCount(List<MarketItem> items) {
        return items != null ? items.size() : 0;
    }

    default List<ListSummaryDTO> toSummaryList(List<MarketList> lists) {
        return lists.stream().map(this::toSummary).toList();
    }
}

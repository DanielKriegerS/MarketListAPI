package com.danielks.MarketList.utils;

import com.danielks.MarketList.entities.MarketItem;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import java.util.List;

@Converter
public class MarketItemConverter implements AttributeConverter<List<MarketItem>, String> {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(List<MarketItem> items) {
        try {
            return objectMapper.writeValueAsString(items);
        } catch (Exception e) {
            throw new RuntimeException("Cant convert to JSON", e);
        }
    }

    @Override
    public List<MarketItem> convertToEntityAttribute(String json) {
        try {
            return objectMapper.readValue(json, new TypeReference<List<MarketItem>>() {});
        } catch (Exception e) {
            throw new RuntimeException("Cant convert to MarketItem", e);
        }
    }
}

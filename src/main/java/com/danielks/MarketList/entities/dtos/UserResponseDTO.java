package com.danielks.MarketList.entities.dtos;

import java.util.Set;
import java.util.UUID;

public record UserResponseDTO(
        UUID id,
        String username,
        String password,
        Set<String> roles,
        String refreshToken
) {
}

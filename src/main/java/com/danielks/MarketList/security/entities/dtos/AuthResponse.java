package com.danielks.MarketList.security.entities.dtos;

public record AuthResponse(
        String accessToken,
        String refreshToken
) {
}

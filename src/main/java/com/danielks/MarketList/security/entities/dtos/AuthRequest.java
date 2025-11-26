package com.danielks.MarketList.security.entities.dtos;

public record AuthRequest(
        String username,
        String password
) {
}

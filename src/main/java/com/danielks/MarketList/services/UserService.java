package com.danielks.MarketList.services;

import com.danielks.MarketList.entities.dtos.UserResponseDTO;
import com.danielks.MarketList.entities.mappers.UserResponseMapper;
import com.danielks.MarketList.security.repositories.UserAuthRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {
    private final UserAuthRepository repository;
    private final UserResponseMapper mapper;

    public UserService(UserAuthRepository repository, UserResponseMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public UserResponseDTO getUserById(UUID id) {
        return mapper.toDTO(repository.findById(id)
                .orElseThrow(() -> new RuntimeException("User with ID " + id + " not found")));
    }
}

package com.danielks.MarketList.services;

import com.danielks.MarketList.security.entities.User;
import com.danielks.MarketList.security.repositories.UserAuthRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {
    private final UserAuthRepository repository;

    public UserService(UserAuthRepository repository) {
        this.repository = repository;
    }

    public User getUserById(UUID id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("User with ID " + id + " not found"));
    }
}

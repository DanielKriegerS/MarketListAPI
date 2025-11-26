package com.danielks.MarketList.security.repositories;

import com.danielks.MarketList.security.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserAuthRepository extends JpaRepository<User, UUID> {
    Optional<User> findByUsername(String username);
}
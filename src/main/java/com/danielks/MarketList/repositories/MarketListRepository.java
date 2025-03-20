package com.danielks.MarketList.repositories;

import com.danielks.MarketList.entities.MarketList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MarketListRepository extends JpaRepository<MarketList, UUID> {
}

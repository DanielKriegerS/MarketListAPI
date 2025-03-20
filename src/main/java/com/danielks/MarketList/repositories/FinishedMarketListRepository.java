package com.danielks.MarketList.repositories;

import com.danielks.MarketList.entities.FinishedMarketList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface FinishedMarketListRepository extends JpaRepository<FinishedMarketList, UUID> {
}

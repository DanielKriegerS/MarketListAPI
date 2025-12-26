package com.danielks.MarketList.apihealth.services;

import com.danielks.MarketList.apihealth.dtos.CheckResponse;
import org.springframework.stereotype.Service;

@Service
public class CheckService {
    public CheckResponse checkHealth() {
        return new CheckResponse("pong");
    }
}

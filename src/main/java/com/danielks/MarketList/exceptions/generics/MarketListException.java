package com.danielks.MarketList.exceptions.generics;

import org.springframework.http.HttpStatusCode;
import org.springframework.web.server.ResponseStatusException;

public abstract class MarketListException extends ResponseStatusException {
    public MarketListException(HttpStatusCode status, String cause) {
        super(status, " " + cause);
    }
}

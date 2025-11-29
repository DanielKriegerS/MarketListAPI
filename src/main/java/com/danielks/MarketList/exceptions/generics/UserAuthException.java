package com.danielks.MarketList.exceptions.generics;

import org.springframework.http.HttpStatusCode;
import org.springframework.web.server.ResponseStatusException;

public class UserAuthException extends ResponseStatusException {
    public UserAuthException(HttpStatusCode status, String cause) {
        super(status, " " + cause);
    }
}

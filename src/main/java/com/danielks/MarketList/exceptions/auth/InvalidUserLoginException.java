package com.danielks.MarketList.exceptions.auth;

import com.danielks.MarketList.exceptions.generics.UserAuthException;
import org.springframework.http.HttpStatusCode;

public class InvalidUserLoginException extends UserAuthException {
    public InvalidUserLoginException(HttpStatusCode status, String cause) {
        super(status, cause);
    }
}

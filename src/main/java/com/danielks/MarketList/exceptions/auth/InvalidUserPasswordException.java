package com.danielks.MarketList.exceptions.auth;

import com.danielks.MarketList.exceptions.generics.UserAuthException;
import org.springframework.http.HttpStatus;

public class InvalidUserPasswordException extends UserAuthException {
    public InvalidUserPasswordException(HttpStatus status, String cause) {
        super(status, cause);
    }
}

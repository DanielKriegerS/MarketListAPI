package com.danielks.MarketList.exceptions.auth;

import com.danielks.MarketList.exceptions.generics.UserAuthException;
import org.springframework.http.HttpStatusCode;

public class UserAlreadyExistsException extends UserAuthException {
    public UserAlreadyExistsException(HttpStatusCode status, String cause) { super(status, cause); }
}

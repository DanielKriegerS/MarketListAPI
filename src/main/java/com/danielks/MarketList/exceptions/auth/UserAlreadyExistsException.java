package com.danielks.MarketList.exceptions.auth;

import com.danielks.MarketList.exceptions.generics.UserAuthException;

public class UserAlreadyExistsException extends UserAuthException {
    public UserAlreadyExistsException(String username) {
        super("User with username '" + username + "' already exists.");
    }
}

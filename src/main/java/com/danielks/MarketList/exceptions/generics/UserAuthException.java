package com.danielks.MarketList.exceptions.generics;

public class UserAuthException extends RuntimeException {
    public UserAuthException(String message) {
        super(message);
    }
}

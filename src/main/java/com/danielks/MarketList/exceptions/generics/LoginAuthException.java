package com.danielks.MarketList.exceptions.generics;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class LoginAuthException extends UsernameNotFoundException {
    public LoginAuthException(String message) {
        super(message);
    }
}

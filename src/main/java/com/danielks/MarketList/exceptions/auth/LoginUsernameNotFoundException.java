package com.danielks.MarketList.exceptions.auth;


import com.danielks.MarketList.exceptions.generics.LoginAuthException;

public class LoginUsernameNotFoundException extends LoginAuthException {
    public LoginUsernameNotFoundException(String username) {
        super("User with username " + username + " not found.");
    }
}

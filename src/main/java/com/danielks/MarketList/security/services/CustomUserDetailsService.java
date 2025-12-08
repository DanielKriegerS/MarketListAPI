package com.danielks.MarketList.security.services;

import com.danielks.MarketList.exceptions.auth.LoginUsernameNotFoundException;
import com.danielks.MarketList.exceptions.auth.UserAlreadyExistsException;
import com.danielks.MarketList.security.entities.CustomUserDetails;
import com.danielks.MarketList.security.entities.dtos.AuthRequest;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import com.danielks.MarketList.security.entities.User;
import com.danielks.MarketList.security.repositories.UserAuthRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserAuthRepository userAuthRepository;
    private final PasswordEncoder pw;

    public CustomUserDetailsService(UserAuthRepository userAuthRepository, PasswordEncoder pw) {
        this.userAuthRepository = userAuthRepository;
        this.pw = pw;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User u = userAuthRepository.findByUsername(username)
                .orElseThrow(() -> new LoginUsernameNotFoundException(username));
        return new CustomUserDetails(u);
    }

    public void saveRefreshTokenForUser(String username, String refreshToken) {
        userAuthRepository.findByUsername(username).ifPresent(u -> {
            u.setRefreshToken(refreshToken);
            userAuthRepository.save(u);
        });
    }

    public boolean isRefreshTokenValid(String username, String refreshToken) {
        return userAuthRepository.findByUsername(username)
                .map(u -> refreshToken.equals(u.getRefreshToken()))
                .orElse(false);
    }

    public void createUser(AuthRequest request) {
        if(userAuthRepository.findByUsername(request.username()).isPresent()){
            throw new UserAlreadyExistsException(HttpStatus.CONFLICT,
                    "User with username " + request.username() + " already exists.");
        }

        User u = new User(request, pw.encode(request.password()));
        userAuthRepository.save(u);
    }
}
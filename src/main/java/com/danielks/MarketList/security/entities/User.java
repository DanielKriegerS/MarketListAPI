package com.danielks.MarketList.security.entities;

import com.danielks.MarketList.exceptions.auth.InvalidUserLoginException;
import com.danielks.MarketList.exceptions.auth.InvalidUserPasswordException;
import com.danielks.MarketList.security.entities.dtos.AuthRequest;
import jakarta.persistence.*;
import org.springframework.http.HttpStatus;

import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "tb_users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @Column(unique = true)
    private String username;
    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    private Set<String> roles;

    private String refreshToken;

    public User() {
    }

    public User(AuthRequest request, String encodedPassword) {
        this.validateNewUser(request);
        this.createUser(request, encodedPassword);
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public Set<String> getRoles() { return roles; }
    public void setRoles(Set<String> roles) { this.roles = roles; }
    public String getRefreshToken() { return refreshToken; }
    public void setRefreshToken(String refreshToken) { this.refreshToken = refreshToken; }

    private void validateNewUser(AuthRequest request) {
        validateUsername(request.username());
        validatePassword(request.password());
    }

    private void validateUsername(String username) {
        if (username != null && username.trim().isEmpty()) {
            throw new InvalidUserLoginException(HttpStatus.BAD_REQUEST, "Username cannot be empty or blank.");
        }

        if (username != null && username.length() < 3) {
            throw new InvalidUserLoginException(HttpStatus.BAD_REQUEST, "Username must be between 3 and 50 characters long.");
        }

    }

    private void validatePassword(String password) {
        if (password != null && password.trim().isEmpty()) {
            throw new InvalidUserPasswordException(HttpStatus.BAD_REQUEST, "Password cannot be empty or blank.");
        }

        if (password != null && password.length() < 6) {
            throw new InvalidUserPasswordException(HttpStatus.BAD_REQUEST, "Password must be between 6 and 100 characters long.");
        }

        String passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$";

        if (password != null && !password.matches(passwordPattern)) {
            throw new InvalidUserPasswordException(HttpStatus.BAD_REQUEST,
                    "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
        }
    }

    private void createUser(AuthRequest request, String encode) {
        this.username = request.username();
        this.password = encode;
        this.setRoles(Set.of("ROLE_USER"));
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", roles=" + roles +
                '}';
    }
}
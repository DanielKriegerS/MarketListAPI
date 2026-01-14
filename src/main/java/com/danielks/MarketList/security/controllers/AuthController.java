package com.danielks.MarketList.security.controllers;

import com.danielks.MarketList.security.entities.dtos.AuthRequest;
import com.danielks.MarketList.security.entities.dtos.AuthResponse;
import com.danielks.MarketList.security.services.CustomUserDetailsService;
import com.danielks.MarketList.security.utils.JwtUtils;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseCookie;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletResponse;
import java.util.Map;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    private final CustomUserDetailsService customUserDetailsService;
    private final String cookieName;
    private final long accessTokenMillis;
    private final boolean forceHttps;

    public AuthController(AuthenticationManager authenticationManager, JwtUtils jwtUtils, CustomUserDetailsService customUserDetailsService,
                          @org.springframework.beans.factory.annotation.Value("${app.security.cookie-name:ML-SESSION}") String cookieName,
                          @org.springframework.beans.factory.annotation.Value("${security.jwt.accessTokenExpirationMinutes}") long accessTokenMinutes,
                          @org.springframework.beans.factory.annotation.Value("${app.security.force-https:false}") boolean forceHttps) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
        this.customUserDetailsService = customUserDetailsService;
        this.cookieName = cookieName;
        this.accessTokenMillis = accessTokenMinutes * 60 * 1000;
        this.forceHttps = forceHttps;
    }

    @PostMapping("/register")
    public ResponseEntity<EntityModel<Map<String, String>>> register(@RequestBody AuthRequest body) {
        customUserDetailsService.createUser(body);

        var selfLink = linkTo(methodOn(AuthController.class).register(body)).withSelfRel();
        var loginLink = linkTo(methodOn(AuthController.class).login(body, null)).withRel("login");

        Map<String, String> content = Map.of("status", "created");
        EntityModel<Map<String, String>> model = EntityModel.of(content, selfLink, loginLink);

        return ResponseEntity.created(selfLink.toUri()).body(model);
    }

    @PostMapping("/login")
    public ResponseEntity<EntityModel<AuthResponse>> login(@RequestBody AuthRequest body, HttpServletResponse response) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(body.username(), body.password())
        );

        String access = jwtUtils.generateAccessToken(body.username());
        AuthResponse authResponse = new AuthResponse(access, null);

        ResponseCookie cookie = ResponseCookie.from(cookieName, access)
                .httpOnly(true)
                .secure(forceHttps)
                .path("/")
                .sameSite("Lax")
                .maxAge(accessTokenMillis / 1000)
                .build();

        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());

        var selfLink = linkTo(methodOn(AuthController.class).login(body, null)).withSelfRel();
        var registerLink = linkTo(methodOn(AuthController.class).register(body)).withRel("register");

        EntityModel<AuthResponse> model = EntityModel.of(authResponse, selfLink, registerLink);

        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString()).body(model);
    }

    @DeleteMapping("/logout")
    public ResponseEntity<Void> logout(HttpServletResponse response) {
        ResponseCookie cookie = ResponseCookie.from(cookieName, "")
                .httpOnly(true)
                .secure(forceHttps)
                .path("/")
                .sameSite("Lax")
                .maxAge(0)
                .build();

        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/me")
    public ResponseEntity<Map<String, String>> me() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !auth.isAuthenticated() || (auth.getPrincipal() instanceof String && "anonymousUser".equals(auth.getPrincipal()))) {
            return ResponseEntity.status(401).body(Map.of("status", "unauthenticated"));
        }

        return ResponseEntity.ok(Map.of("status", "ok"));
    }
}
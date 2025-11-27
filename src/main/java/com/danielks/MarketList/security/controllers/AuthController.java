package com.danielks.MarketList.security.controllers;

import com.danielks.MarketList.security.entities.dtos.AuthRequest;
import com.danielks.MarketList.security.entities.dtos.AuthResponse;
import com.danielks.MarketList.security.services.CustomUserDetailsService;
import com.danielks.MarketList.security.utils.JwtUtils;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    private final CustomUserDetailsService customUserDetailsService;

    public AuthController(AuthenticationManager authenticationManager, JwtUtils jwtUtils, CustomUserDetailsService customUserDetailsService) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
        this.customUserDetailsService = customUserDetailsService;
    }

    @PostMapping("/register")
    public ResponseEntity<EntityModel<Map<String, String>>> register(@RequestBody AuthRequest body) {
        customUserDetailsService.createUser(body.username(), body.password());

        var selfLink = linkTo(methodOn(AuthController.class).register(body)).withSelfRel();
        var loginLink = linkTo(methodOn(AuthController.class).login(body)).withRel("login");

        Map<String, String> content = Map.of("status", "created");
        EntityModel<Map<String, String>> model = EntityModel.of(content, selfLink, loginLink);

        return ResponseEntity.created(selfLink.toUri()).body(model);
    }

    @PostMapping("/login")
    public ResponseEntity<EntityModel<AuthResponse>> login(@RequestBody AuthRequest body) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(body.username(), body.password())
        );

        String access = jwtUtils.generateAccessToken(body.username());
        AuthResponse authResponse = new AuthResponse(access, null);

        var selfLink = linkTo(methodOn(AuthController.class).login(body)).withSelfRel();
        var registerLink = linkTo(methodOn(AuthController.class).register(body)).withRel("register");

        EntityModel<AuthResponse> model = EntityModel.of(authResponse, selfLink, registerLink);

        return ResponseEntity.ok(model);
    }
}
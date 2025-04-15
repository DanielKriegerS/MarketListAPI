package com.danielks.MarketList.controllers;

import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ping-db")
public class DbTestController {

    @Autowired
    private EntityManager entityManager;

    @GetMapping("/ping-db")
    public ResponseEntity<String> pingDatabase() {
        try {
            entityManager.createNativeQuery("SELECT 1").getSingleResult();
            return ResponseEntity.ok("✅ Conexão com o banco funcionando!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("❌ Erro ao conectar com o banco: " + e.getMessage());
        }
    }
}

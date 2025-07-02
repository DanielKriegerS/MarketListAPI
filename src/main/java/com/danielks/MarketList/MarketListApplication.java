package com.danielks.MarketList;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MarketListApplication {

	public static void main(String[] args) {
		Runtime.getRuntime().addShutdownHook(new Thread(() -> {
			System.out.println("SUTHDOWN CALLED");
		}));
		SpringApplication.run(MarketListApplication.class, args);
	}

}

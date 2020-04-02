package com.imtatlantique.uesecuweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class UesecuwebApplication {

	public static void main(String[] args) {
		SpringApplication.run(UesecuwebApplication.class, args);
	}

	@Bean
	BCryptPasswordEncoder getPasswordEncoder(){
		return new BCryptPasswordEncoder();
	}

}

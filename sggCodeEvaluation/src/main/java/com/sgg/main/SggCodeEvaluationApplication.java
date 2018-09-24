package com.sgg.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("com.sgg")
@EnableJpaRepositories( "com.sgg.repository") 
@EntityScan("com.sgg.model")
public class SggCodeEvaluationApplication {

	public static void main(String[] args) {
		SpringApplication.run(SggCodeEvaluationApplication.class, args);
	}
}

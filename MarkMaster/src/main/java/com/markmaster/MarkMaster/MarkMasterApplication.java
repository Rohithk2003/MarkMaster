package com.markmaster.MarkMaster;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MarkMasterApplication {

	public static void main(String[] args) {
		SpringApplication.run(MarkMasterApplication.class, args);
	}  @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
      return String.format("Hello %s!", name);
    }

}

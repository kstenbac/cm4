package com.hackathon.service;

import org.springframework.stereotype.Component;

@Component
public class WelcomeService {

	public String retrieveWelcomeMessage() {
		return "Welcome Suomi 100!";
	}
}
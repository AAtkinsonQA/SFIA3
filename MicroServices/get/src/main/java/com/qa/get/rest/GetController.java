package com.qa.get.rest;

import java.util.List;


import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.qa.get.service.TicketService;
import com.qa.get.persistence.domain.Ticket;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.client.RestTemplate;
@CrossOrigin
@RestController
public class GetController {
	
	@Autowired
	private TicketService service;
	RestTemplate rest;

	public GetController(RestTemplateBuilder builder) {
		super();
		this.rest = builder.build();
	}

	@GetMapping("/ticket/readTickets")
	public ResponseEntity<List<Ticket>> getTicket() {
		return ResponseEntity.ok(this.service.getTicket());
	}
}


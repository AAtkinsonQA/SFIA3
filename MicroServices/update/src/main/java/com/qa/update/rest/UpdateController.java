package com.qa.update.rest;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qa.update.persistence.domain.Ticket;
import com.qa.update.service.UpdateService;

@CrossOrigin
@RestController
public class UpdateController {

	private UpdateService service;

	public UpdateController(UpdateService service) {
		super();
		this.service = service;
	}

	@PutMapping("/ticket/updateTicket/{id}")
	public ResponseEntity<Ticket> updateTicket(@RequestBody Ticket ticket, @PathVariable Long id) {
		return new ResponseEntity<Ticket>(this.service.updateTicket(ticket, id), HttpStatus.ACCEPTED);
	}
}

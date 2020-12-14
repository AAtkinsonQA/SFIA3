package com.qa.get.service;

import java.util.List;


import org.springframework.stereotype.Service;

import com.qa.get.persistence.repo.TicketRepo;
import com.qa.get.persistence.domain.Ticket;

@Service
public class TicketService {
	private TicketRepo repo;

	public TicketService(TicketRepo repo) {
		super();
		this.repo = repo;
	}

	public Ticket createTicket(Ticket ticket) {
		return this.repo.save(ticket);
	}

	public List<Ticket> getTicket() {
		return this.repo.findAll();
	}

	public boolean deleteTicket(long id) {
		this.repo.deleteById(id);
		return !this.repo.existsById(id);
	}

}
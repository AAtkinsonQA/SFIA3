package com.qa.getSingle.service;

import org.springframework.stereotype.Service;

import com.qa.getSingle.persistence.repo.TicketRepo;
import com.qa.getSingle.persistence.domain.Ticket;

@Service
public class TicketService {
	private TicketRepo repo;

	public TicketService(TicketRepo repo) {
		super();
		this.repo = repo;
	}

//	public List<Ticket> getTicket() {
//		return this.repo.findAll();
//	}
	
	public Ticket getSingleTicket(Long id) {
		return this.repo.findById(id).get();
	}

	
}
package com.qa.TicketBackend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.qa.TicketBackend.persistence.domain.Ticket;
import com.qa.TicketBackend.persistence.repo.TicketRepo;

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

	public Ticket updateTicket(Ticket ticket, long id) {
		Ticket oldTicket = this.repo.findById(id).get();
		oldTicket.setTitle(ticket.getTitle());
		oldTicket.setAuthor(ticket.getAuthor());
		oldTicket.setDescription(ticket.getDescription());
		oldTicket.setDate(ticket.getTimeCreated());
		oldTicket.setUrgency(ticket.getUrgency());
		oldTicket.setSolution(ticket.getSolution());
		return this.repo.save(oldTicket);
	}

}
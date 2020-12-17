package com.qa.TicketBackend.service;

import java.util.List;



import org.springframework.stereotype.Service;

import com.qa.TicketBackend.persistence.domain.Ticket;
import com.qa.TicketBackend.persistence.repo.TicketRepo;
import com.qa.TicketBackend.utils.MyBeanUtils;

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
	
	public Ticket getSingleTicket(Long id) {
		return this.repo.findById(id).get();
	}

	public boolean deleteTicket(long id) {
		this.repo.deleteById(id);
		return !this.repo.existsById(id);
	}

	public Ticket updateTicket(Ticket ticket, long id) {
		Ticket oldTicket = this.repo.findById(id).get();
		MyBeanUtils.mergeNotNull(ticket, oldTicket);
		return this.repo.save(oldTicket);
	}

}
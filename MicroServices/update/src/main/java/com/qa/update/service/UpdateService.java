package com.qa.update.service;

import org.springframework.stereotype.Service;


import com.qa.update.persistence.domain.Ticket;

import com.qa.update.persistence.repo.TicketRepo;
import com.qa.update.utils.MyBeanUtils;

@Service
public class UpdateService {

	private TicketRepo repo;

	public UpdateService(TicketRepo repo) {
		super();
		this.repo = repo;
	}

	public Ticket updateTicket(Ticket ticket, long id) {
		Ticket oldTicket = this.repo.findById(id).get();
		MyBeanUtils.mergeNotNull(ticket, oldTicket);
		return this.repo.save(oldTicket);
	}
}

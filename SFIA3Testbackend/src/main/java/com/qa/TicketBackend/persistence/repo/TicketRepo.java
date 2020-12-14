package com.qa.TicketBackend.persistence.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qa.TicketBackend.persistence.domain.Ticket;

@Repository
public interface TicketRepo extends JpaRepository<Ticket, Long> {

}

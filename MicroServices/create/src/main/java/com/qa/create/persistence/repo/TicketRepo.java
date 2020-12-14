package com.qa.create.persistence.repo;

import org.springframework.data.jpa.repository.JpaRepository;



import org.springframework.stereotype.Repository;

import com.qa.create.persistence.domain.Ticket;

@Repository
public interface TicketRepo extends JpaRepository<Ticket, Long> {

}

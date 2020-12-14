package com.qa.getSingle.persistence.repo;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.stereotype.Repository;

import com.qa.getSingle.persistence.domain.Ticket;

@Repository
public interface TicketRepo extends JpaRepository<Ticket, Long> {

}

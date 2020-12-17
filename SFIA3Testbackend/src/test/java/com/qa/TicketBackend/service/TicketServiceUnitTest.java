package com.qa.TicketBackend.service;

import static org.assertj.core.api.Assertions.assertThat;


import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

import com.qa.TicketBackend.persistence.domain.Ticket;
import com.qa.TicketBackend.persistence.repo.TicketRepo;

@SpringBootTest
@ActiveProfiles(profiles = "test")
public class TicketServiceUnitTest {

//	Timestamp timestamp = new Timestamp(System.currentTimeMillis());
	private LocalDateTime timestamp = LocalDateTime.now();

	@Autowired
	private TicketService service;

	@MockBean
	private TicketRepo repo;

	@Test
	void testCreate() {

		Long id = 1L;
		Ticket newTicket = new Ticket(1L, "Syntax", "Jon", "syntax", timestamp, "not urgent", "solution1", true, "example@qa.com", "java");
		Ticket savedTicket = new Ticket(1L, "Syntax", "Jon", "syntax", timestamp, "not urgent", "solution1", true, "example@qa.com", "java");
		savedTicket.setId(id);

		Mockito.when(this.repo.save(newTicket)).thenReturn(savedTicket);
		assertThat(this.service.createTicket(newTicket)).isEqualTo(savedTicket);

	}

	@Test
	void testUpdate() {

		Long id = 1L;
		Ticket newTicket = new Ticket(1L, "Syntax", "Jon", "syntax", timestamp, "not urgent", "solution1", true, "example@qa.com", "java");
		Ticket oldTicket = new Ticket(2L, "nested exception", "Bertie", "springboot nested exception error", timestamp,
				"not urgent", "solution2", false, "example2@qa.com", "python");
		oldTicket.setId(id);
		Ticket updatedTicket = new Ticket(1L, "Syntax", "Jon", "syntax", timestamp, "not urgent", "solution1", true, "example@qa.com", "java");
		updatedTicket.setId(id);

		Mockito.when(this.repo.findById(id)).thenReturn(Optional.of(oldTicket));
		Mockito.when(this.repo.save(oldTicket)).thenReturn(updatedTicket);

		assertThat(this.service.updateTicket(newTicket, id)).isEqualTo(updatedTicket);

	}

	@Test
	void testGet() {

		List<Ticket> tickets = new ArrayList<>();
		Long id = 1L;
		Ticket newTicket = new Ticket(1L, "Syntax", "Jon", "syntax", timestamp, "not urgent", "solution1", true, "example@qa.com", "java");
		newTicket.setId(id);
		tickets.add(newTicket);

		Mockito.when(this.repo.findAll()).thenReturn(tickets);

		assertThat(this.service.getTicket()).isEqualTo(tickets);
	}

	@Test
	void testDelete() {

		Long id = 1L;
		Ticket ticketToRemove = new Ticket(1L, "Syntax", "Jon", "syntax", timestamp, "not urgent", "solution1", true, "example@qa.com", "java");
		ticketToRemove.setId(id);

		Mockito.when(this.repo.existsById(id)).thenReturn(false);

		assertThat(this.service.deleteTicket(id)).isEqualTo(true);

	}

}
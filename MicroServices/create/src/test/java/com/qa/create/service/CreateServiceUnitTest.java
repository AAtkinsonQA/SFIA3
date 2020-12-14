package com.qa.create.service;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDateTime;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

import com.qa.create.persistence.domain.Ticket;
import com.qa.create.persistence.repo.TicketRepo;

@SpringBootTest
@ActiveProfiles(profiles = "test")
public class CreateServiceUnitTest {

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
}
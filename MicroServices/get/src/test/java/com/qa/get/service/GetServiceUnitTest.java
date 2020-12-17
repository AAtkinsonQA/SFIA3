package com.qa.get.service;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

import com.qa.get.persistence.domain.Ticket;
import com.qa.get.persistence.repo.TicketRepo;

@SpringBootTest
@ActiveProfiles(profiles = "test")
public class GetServiceUnitTest {

	private LocalDateTime timestamp = LocalDateTime.now();

	@Autowired
	private TicketService service;

	@MockBean
	private TicketRepo repo;
	
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
}

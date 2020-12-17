package com.qa.delete.service;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDateTime;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

import com.qa.delete.persistence.domain.Ticket;
import com.qa.delete.persistence.repo.TicketRepo;

@SpringBootTest
@ActiveProfiles(profiles = "test")
public class DeleteServiceUnitTest {

	private LocalDateTime timestamp = LocalDateTime.now();

	@Autowired
	private TicketService service;

	@MockBean
	private TicketRepo repo;
	
	@Test
	void testDelete() {

		Long id = 1L;
		Ticket ticketToRemove = new Ticket(1L, "Syntax", "Jon", "syntax", timestamp, "not urgent", "solution1", true, "example@qa.com", "java");
		ticketToRemove.setId(id);

		Mockito.when(this.repo.existsById(id)).thenReturn(false);

		assertThat(this.service.deleteTicket(id)).isEqualTo(true);

	}

}

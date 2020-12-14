package com.qa.update.service;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDateTime;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

import com.qa.update.persistence.domain.Ticket;
import com.qa.update.persistence.repo.TicketRepo;

@SpringBootTest
@ActiveProfiles(profiles = "test")
public class UpdateServiceUnitTest {

	private LocalDateTime timestamp = LocalDateTime.now();

	@Autowired
	private UpdateService service;

	@MockBean
	private TicketRepo repo;
	
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
}


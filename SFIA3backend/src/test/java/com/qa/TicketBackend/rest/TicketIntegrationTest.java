package com.qa.TicketBackend.rest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.request;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.qa.TicketBackend.persistence.domain.Ticket;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
//@Sql(scripts = { "classpath:exercise-schema.sql",
//		"classpath:exercise-data.sql" }, executionPhase = ExecutionPhase.BEFORE_TEST_METHOD)
@ActiveProfiles(profiles = "test")
public class TicketIntegrationTest {

//	Timestamp timestamp = new Timestamp(System.currentTimeMillis());
	private LocalDateTime timestamp = LocalDateTime.now();

	@Autowired
	private MockMvc mockMVC;

	@Autowired
	private ObjectMapper mapper;

	@Test
	void testCreate() throws Exception {
		Ticket newTicket = new Ticket(1L, "Syntax", "Jon", "syntax", timestamp, "not urgent", "solution1", true,
				"example@qa.com", "java");
		String requestBody = this.mapper.writeValueAsString(newTicket);
		RequestBuilder req = post("/ticket/createTicket").contentType(MediaType.APPLICATION_JSON).content(requestBody);

		ResultMatcher checkStatus = status().isCreated();

		Ticket savedTicket = new Ticket(1L, "Syntax", "Jon", "syntax", timestamp, "not urgent", "solution1", true,
				"example@qa.com", "java");

		String resultBody = this.mapper.writeValueAsString(savedTicket);
		ResultMatcher checkBody = content().json(resultBody);

		this.mockMVC.perform(req).andExpect(checkStatus).andExpect(checkBody);

		MvcResult result = this.mockMVC.perform(req).andExpect(checkStatus).andReturn();

		String reqBody = result.getResponse().getContentAsString();

		Ticket ticketResult = this.mapper.readValue(reqBody, Ticket.class);

	}

	@Test
	void testUpdate() throws Exception {
		/*
		 * Ticket newTicket = new Ticket(2L, "nested exception", "Bertie",
		 * "springboot nested exception error", timestamp, "not urgent", "solution2",
		 * false); String requestBody = this.mapper.writeValueAsString(newTicket);
		 * RequestBuilder request =
		 * put("/updateTicket/1").contentType(MediaType.APPLICATION_JSON).content(
		 * requestBody);
		 * 
		 * ResultMatcher checkStatus = status().isAccepted();
		 * 
		 * Ticket savedTicket = new Ticket(2L, "nested exception", "Bertie",
		 * "springboot nested exception error", timestamp, "not urgent", "solution2",
		 * false);
		 * 
		 * String resultBody = this.mapper.writeValueAsString(savedTicket);
		 * ResultMatcher checkBody = content().json(resultBody);
		 * 
		 * 
		 * this.mockMVC.perform(request).andExpect(checkStatus).andExpect(checkBody);
		 */

		Ticket newTicket = new Ticket(2L, "Syntax", "Jon", "syntax", timestamp, "not urgent", "solution1", true,
				"example@qa.com", "java");
		String requestBody = this.mapper.writeValueAsString(newTicket);
		RequestBuilder req = post("/ticket/createTicket").contentType(MediaType.APPLICATION_JSON).content(requestBody);
		this.mockMVC.perform(req);

		Ticket ticket1 = new Ticket(2L, "Syntax", "Jon", "syntax", timestamp, "not urgent", "solution1", true,
				"example@qa.com", "java");
		String body = this.mapper.writeValueAsString(ticket1);
		ResultMatcher checkStatus = status().isAccepted();
		RequestBuilder req1 = put("/ticket/updateTicket/2").contentType(MediaType.APPLICATION_JSON).content(body);
		MvcResult result = this.mockMVC.perform(req1).andExpect(checkStatus).andReturn();
	}

	@Test
	void testDelete() throws Exception {
		RequestBuilder request = delete("/ticket/deleteTicket/1");

		ResultMatcher checkStatus = status().is(200);

		this.mockMVC.perform(request).andExpect(checkStatus);

//		RequestBuilder request2 = delete("/remove/4");
//
//		ResultMatcher checkStatus2 = status().is(500);
//
//		this.mockMVC.perform(request2).andExpect(checkStatus2);
	}

	@Test
	void testRead() throws Exception {
		/*
		 * Ticket ticket = new Ticket(2L, "nested exception", "Bertie",
		 * "springboot nested exception error", timestamp, "not urgent", "solution2",
		 * false); ticket.setId(1L); String requestBody =
		 * this.mapper.writeValueAsString(ticket); RequestBuilder req =
		 * post("/ticket/createTicket").contentType(MediaType.APPLICATION_JSON).content(
		 * requestBody); MvcResult result = this.mockMVC.perform(req).andReturn();
		 * String reqBody = result.getResponse().getContentAsString(); List<MvcResult>
		 * tickets = new ArrayList<>(); tickets.add(result); String responseBody =
		 * this.mapper.writeValueAsString(tickets);
		 * 
		 * this.mockMVC.perform(get("/ticket/readTickets")).andExpect(status().isOk())
		 * .andExpect(content().json(responseBody));
		 */
		Ticket ticket = new Ticket(1L, "Syntax", "Jon", "syntax", timestamp, "not urgent", "solution1", true,
				"example@qa.com", "java");
		List<Ticket> tickets = new ArrayList<>();
		String content = this.mockMVC
				.perform(request(HttpMethod.GET, "/ticket/readTickets").accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();

		assertEquals(this.mapper.writeValueAsString(tickets), content);

	}

}

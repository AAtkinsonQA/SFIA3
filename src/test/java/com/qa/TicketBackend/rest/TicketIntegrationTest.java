package com.qa.TicketBackend.rest;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.Sql.ExecutionPhase;
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
	
	Timestamp timestamp = new Timestamp(System.currentTimeMillis());

	@Autowired
	private MockMvc mockMVC;

	@Autowired
	private ObjectMapper mapper;

	@Test
	void testCreate() throws Exception {
		Ticket newTicket = new Ticket(1L, "Syntax", "Jon", "syntax", timestamp, "not urgent",
				"solution1", true);
		String requestBody = this.mapper.writeValueAsString(newTicket);
		RequestBuilder req = post("/create").contentType(MediaType.APPLICATION_JSON).content(requestBody);

		ResultMatcher checkStatus = status().isCreated();

		Ticket savedTicket = new Ticket(1L, "Syntax", "Jon", "syntax", timestamp, "not urgent",
				"solution1", true);
		
		String resultBody = this.mapper.writeValueAsString(savedTicket);
		ResultMatcher checkBody = content().json(resultBody);

		this.mockMVC.perform(req).andExpect(checkStatus).andExpect(checkBody);

		MvcResult result = this.mockMVC.perform(req).andExpect(checkStatus).andReturn();

		String reqBody = result.getResponse().getContentAsString();

		Ticket ticketResult = this.mapper.readValue(reqBody, Ticket.class);

	}

	@Test
	void testUpdate() throws Exception {
		Ticket newTicket = new Ticket(2L, "nested exception", "Bertie", "springboot nested exception error", timestamp, "not urgent",
				"solution2", false);
		String requestBody = this.mapper.writeValueAsString(newTicket);
		RequestBuilder request = put("/update?id=1").contentType(MediaType.APPLICATION_JSON).content(requestBody);

		ResultMatcher checkStatus = status().isAccepted();

		Ticket savedTicket = new Ticket(2L, "nested exception", "Bertie", "springboot nested exception error", timestamp, "not urgent",
				"solution2", false);
		savedTicket.setId(1L);

		String resultBody = this.mapper.writeValueAsString(savedTicket);
		ResultMatcher checkBody = content().json(resultBody);

		this.mockMVC.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}

	@Test
	void testDelete() throws Exception {
		RequestBuilder request = delete("/remove/1");

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
		Ticket ticket = new Ticket(2L, "nested exception", "Bertie", "springboot nested exception error", timestamp, "not urgent",
				"solution2", false);
		ticket.setId(1L);
		List<Ticket> tickets = new ArrayList<>();
		tickets.add(ticket);
		String responseBody = this.mapper.writeValueAsString(tickets);

		this.mockMVC.perform(get("/get")).andExpect(status().isOk()).andExpect(content().json(responseBody));
	}

}

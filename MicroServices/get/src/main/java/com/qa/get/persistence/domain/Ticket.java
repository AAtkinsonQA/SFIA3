package com.qa.get.persistence.domain;

import java.time.LocalDateTime;

import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

@Entity
public class Ticket {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	@Column(name = "title")
	private String title;

	@NotNull
	@Column(name = "author")
	private String author;

	@NotNull
	@Column(name = "description")
	private String description;

	@Column(name = "timeCreated")
	private LocalDateTime timeCreated = LocalDateTime.now();

	@NotNull
	@Column(name = "urgency")
	private String urgency;

	@Column(name = "solution")
	private String solution;

	@Column(name = "status")
	private boolean status;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "topic")
	private String topic;

	public Ticket(Long id, @NotNull String title, @NotNull String author, @NotNull String description,
			LocalDateTime timeCreated, @NotNull String urgency, String solution, boolean status, String email,
			String topic) {
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.description = description;
		this.timeCreated = timeCreated;
		this.urgency = urgency;
		this.solution = solution;
		this.status = status;
		this.email = email;
		this.topic = topic;
	}

	public Ticket() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDateTime getTimeCreated() {
		return timeCreated;
	}

	public void setTimeCreated(LocalDateTime timeCreated) {
		this.timeCreated = timeCreated;
	}

	public String getUrgency() {
		return urgency;
	}

	public void setUrgency(String urgency) {
		this.urgency = urgency;
	}

	public String getSolution() {
		return solution;
	}

	public void setSolution(String solution) {
		this.solution = solution;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

}

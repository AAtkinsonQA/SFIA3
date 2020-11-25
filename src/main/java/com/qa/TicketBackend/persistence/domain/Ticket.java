package com.qa.TicketBackend.persistence.domain;

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

	@NotNull
	@Basic
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "timeCreated")
	private Date timeCreated;

	@NotNull
	@Column(name = "urgency")
	private Integer urgency;

	@NotNull
	@Column(name = "solution")
	private String solution;

	public Ticket(Long id, String title, String author, String description, Date timeCreated, Integer urgency,
			String solution) {
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.description = description;
		this.timeCreated = timeCreated;
		this.urgency = urgency;
		this.solution = solution;
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

	public Date getTimeCreated() {
		return timeCreated;
	}

	public void setDate(Date timeCreated) {
		this.timeCreated = timeCreated;
	}

	public Integer getUrgency() {
		return urgency;
	}

	public void setUrgency(Integer urgency) {
		this.urgency = urgency;
	}

	public String getSolution() {
		return solution;
	}

	public void setSolution(String solution) {
		this.solution = solution;
	}

}

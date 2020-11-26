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
	private String urgency;

	@Column(name = "solution")
	private String solution;

	@Column(name = "status")
	private boolean status;

	public Ticket(Long id, @NotNull String title, @NotNull String author, @NotNull String description,
			@NotNull Date timeCreated, @NotNull String urgency, String solution, boolean status) {
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.description = description;
		this.timeCreated = timeCreated;
		this.urgency = urgency;
		this.solution = solution;
		this.status = status;
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

	public Date getTimeCreated() {
		return timeCreated;
	}

	public void setTimeCreated(Date timeCreated) {
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

	/*
	 * @Override public int hashCode() { final int prime = 31; int result = 1;
	 * result = prime * result + ((author == null) ? 0 : author.hashCode()); result
	 * = prime * result + ((description == null) ? 0 : description.hashCode());
	 * result = prime * result + ((id == null) ? 0 : id.hashCode()); result = prime
	 * * result + ((solution == null) ? 0 : solution.hashCode()); result = prime *
	 * result + (status ? 1231 : 1237); result = prime * result + ((timeCreated ==
	 * null) ? 0 : timeCreated.hashCode()); result = prime * result + ((title ==
	 * null) ? 0 : title.hashCode()); result = prime * result + ((urgency == null) ?
	 * 0 : urgency.hashCode()); return result; }
	 * 
	 * @Override public boolean equals(Object obj) { if (this == obj) return true;
	 * if (obj == null) return false; if (getClass() != obj.getClass()) return
	 * false; Ticket other = (Ticket) obj; if (author == null) { if (other.author !=
	 * null) return false; } else if (!author.equals(other.author)) return false; if
	 * (description == null) { if (other.description != null) return false; } else
	 * if (!description.equals(other.description)) return false; if (id == null) {
	 * if (other.id != null) return false; } else if (!id.equals(other.id)) return
	 * false; if (solution == null) { if (other.solution != null) return false; }
	 * else if (!solution.equals(other.solution)) return false; if (status !=
	 * other.status) return false; if (timeCreated == null) { if (other.timeCreated
	 * != null) return false; } else if (!timeCreated.equals(other.timeCreated))
	 * return false; if (title == null) { if (other.title != null) return false; }
	 * else if (!title.equals(other.title)) return false; if (urgency == null) { if
	 * (other.urgency != null) return false; } else if
	 * (!urgency.equals(other.urgency)) return false; return true; }
	 * 
	 * @Override public String toString() { return "Ticket [id=" + id + ", title=" +
	 * title + ", author=" + author + ", description=" + description +
	 * ", timeCreated=" + timeCreated + ", urgency=" + urgency + ", solution=" +
	 * solution + ", status=" + status + "]"; }
	 */

}

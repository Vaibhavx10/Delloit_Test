package com.interview.todoapp.entity;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
	@Id
	@GeneratedValue
	private int id;
	
	@Column(unique=true)
	private String uname;
	
	private String upass;
	private String fname;
	private String lname; 
	
	@Column(unique=true)
	private String email;
	
	@OneToMany(targetEntity = Task.class, cascade = CascadeType.ALL)
	@JoinColumn(name="task_fk",referencedColumnName="id")
	private List<Task> tasks;
	
}


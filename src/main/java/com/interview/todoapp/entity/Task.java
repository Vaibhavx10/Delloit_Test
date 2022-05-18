package com.interview.todoapp.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Task {
	
	@Id
	@GeneratedValue
	private int id;
	private String useremailid;
	private String description;
	private String detaildescription;
	private String orginaldatetime;
	private String updateddatetime;
	private String refrencelinks;
	private String status; 
	private String flag; /* we can give colours so that we know which are emergency task */
	private String alarm;
	public Task(int id, String useremailid, String description, String detaildescription, String orginaldatetime,
			String updateddatetime, String refrencelinks, String status, String flag, String alarm) {
		this.id = id;
		this.useremailid = useremailid;
		this.description = description;
		this.detaildescription = detaildescription;
		this.orginaldatetime = orginaldatetime;
		this.updateddatetime = updateddatetime;
		this.refrencelinks = refrencelinks;
		this.status = status;
		this.flag = flag;
		this.alarm = alarm;
	}
	
	

}

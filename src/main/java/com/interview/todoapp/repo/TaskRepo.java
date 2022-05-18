package com.interview.todoapp.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.interview.todoapp.entity.Task;

public interface TaskRepo extends JpaRepository<Task, Integer>{

	/* public List<Task> findByseremailid(String emailID); */
	
	List<Task> findByUseremailid(String emaildID);
	

}

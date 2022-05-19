package com.interview.todoapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.interview.todoapp.entity.Task;
import com.interview.todoapp.repo.TaskRepo;

@Service
public class TaskService {
	
	@Autowired
	private TaskRepo taskrepo;
	
	public List<Task> getDataOnEmailID(String EmailID) {
		System.out.println("getDataOnEmailID | EmailID : "+EmailID);
		List<Task> task = taskrepo.findByUseremailid(EmailID.trim());
		return task;
	}
	
	public Task addNewTask(Task task) {
		return taskrepo.save(task);
	}
}

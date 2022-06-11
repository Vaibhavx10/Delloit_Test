package com.interview.todoapp.controller;

import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.interview.todoapp.entity.Task;
import com.interview.todoapp.repo.TaskRepo;
import com.interview.todoapp.service.TaskService;

@RestController
public class DashboardController {
	
	@Autowired
	private TaskRepo taskrepo;
	
	@Autowired
	private TaskService taskservice;
	
	@PostMapping("/getDataOnEmailID")
	public List<Task> getDataOnEmailID(@RequestBody String emailID) throws JSONException {
		System.out.println("emailID :: "+emailID);
		JSONObject obj = new JSONObject(emailID);
		String email = obj.getString("emailID");
		System.out.println(email);	
		List<Task> tasklist = taskservice.getDataOnEmailID(email);
		return tasklist;
		
	}

}

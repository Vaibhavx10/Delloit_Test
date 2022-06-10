package com.interview.todoapp;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.interview.todoapp.entity.Task;
import com.interview.todoapp.entity.User;
import com.interview.todoapp.repo.UserRepo;

//This is load data on startup 
@Component
public class DataLoaderOnStart implements ApplicationRunner {

	@Autowired
	private UserRepo userRepo;

	@Override
	public void run(ApplicationArguments args) throws Exception {
		List<Task> tasklist = new ArrayList<Task>();

		//Check if email is present or not and only then fire the query
		if((userRepo.findByEmail("test@gmail.com").size() < 1)) {
			tasklist.add(new Task(100, "test@gmail.com", "Delliot Test",
					"This applicatio is created to  demonstrate skills for easy interview process", (new Date()).toString(),
					(new Date()).toString(), "Yes", "Ongoing", "Red", "NO"));
			User user = new User(100, "test", "pwd123", "testingAccount", "mhatre", "test@gmail.com", tasklist);
			userRepo.save(user);
		}

	}

}
